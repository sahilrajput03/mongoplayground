package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"sync"
	"time"

	"github.com/dgraph-io/badger"
	"github.com/globalsign/mgo"
)

var (
	templates = template.Must(template.ParseFiles("playground.html"))
)

const (
	staticDir = "static/"
	badgerDir = "storage"
	backupDir = "backups"
	// interval between two database cleanup
	cleanupInterval = 120 * time.Minute
	// if a database is not used within the last
	// expireInterval, it is removed in the next cleanup
	expireInterval = 60 * time.Minute
	// interval between two database backup
	backupInterval = 24 * time.Hour
)

type server struct {
	mux              *http.ServeMux
	session          *mgo.Session
	storage          *badger.DB
	logger           *log.Logger
	activeDB         sync.Map
	mongodbVersion   []byte
	staticContentMap map[string]int
	staticContent    [][]byte
}

func newServer(logger *log.Logger) (*server, error) {

	session, err := mgo.Dial("mongodb://")
	if err != nil {
		return nil, fmt.Errorf("fail to connect to mongodb: %v", err)
	}
	info, _ := session.BuildInfo()
	version := []byte(info.Version)

	opts := badger.DefaultOptions
	opts.Dir = badgerDir
	opts.ValueDir = badgerDir
	db, err := badger.Open(opts)
	if err != nil {
		return nil, err
	}

	s := &server{
		mux:            http.DefaultServeMux,
		session:        session,
		storage:        db,
		activeDB:       sync.Map{},
		logger:         logger,
		mongodbVersion: version,
	}

	err = s.precompile()
	if err != nil {
		return nil, err
	}

	if _, err := os.Stat(backupDir); os.IsNotExist(err) {
		os.Mkdir(backupDir, os.ModePerm)
	}

	go func(s *server) {
		for range time.Tick(cleanupInterval) {
			s.removeExpiredDB()
		}
	}(s)

	go func(s *server) {
		for range time.Tick(backupInterval) {
			s.backup()
		}
	}(s)

	s.mux.HandleFunc("/", s.newPageHandler)
	s.mux.HandleFunc("/p/", s.viewHandler)
	s.mux.HandleFunc("/run", s.runHandler)
	s.mux.HandleFunc("/save", s.saveHandler)
	s.mux.HandleFunc("/static/", s.staticHandler)
	s.mux.HandleFunc("/_status/healthcheck", s.healthcheckHandler)

	return s, nil
}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.mux.ServeHTTP(w, r)
}

// return a playground with the default configuration
func (s *server) newPageHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Content-Encoding", "gzip")
	w.Write(s.staticContent[0])
}

// remove db not used within the last expireInterval
func (s *server) removeExpiredDB() {

	session := s.session.Copy()
	defer session.Close()

	now := time.Now()
	s.activeDB.Range(func(k, v interface{}) bool {

		if now.Sub(time.Unix(v.(int64), 0)) > expireInterval {

			err := session.DB(k.(string)).DropDatabase()
			if err != nil {
				s.logger.Printf("fail to drop database %v: %v", k, err)
				return true
			}
			s.activeDB.Delete(k)
		}
		return true
	})
}

// create a backup from the badger db, and store it in backupDir.
// keep a backup of last seven days only. Older backups are
// overwritten
func (s *server) backup() {

	fileName := fmt.Sprintf("%s/badger_%d.bak", backupDir, time.Now().Weekday())
	f, err := os.Create(fileName)
	if err != nil {
		s.logger.Printf("fail to create file %s: %v", fileName, err)
	}
	defer f.Close()

	_, err = s.storage.Backup(f, 1)
	if err != nil {
		s.logger.Printf("backup failed: %v", err)
	}
}
