package main

import (
	"encoding/json"
	"io"
	"io/ioutil"
	"log"
	"os"

	"golang.org/x/net/context"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/drive/v3"
	"google.golang.org/api/option"
)

const (
	tokenFile      = "token.json"
	driveBackupDir = "autobackup"
)

func saveBackupToGoogleDrive(log *log.Logger, fileName string) {

	b, err := ioutil.ReadFile("credentials.json")
	if err != nil {
		log.Printf("Unable to read client secret file: %v", err)
		return
	}

	config, err := google.ConfigFromJSON(b, drive.DriveFileScope)
	if err != nil {
		log.Printf("Unable to parse client secret file to config: %v", err)
		return
	}
	token, err := tokenFromFile(tokenFile)
	if err != nil {
		log.Printf("Fail to read token file: %v", err)
		return
	}
	client := config.Client(context.Background(), token)

	service, err := drive.NewService(context.Background(), option.WithHTTPClient(client))
	if err != nil {
		log.Printf("Unable to retrieve Drive client: %v", err)
		return
	}

	dir, err := getBackupDir(service)
	if err != nil {
		log.Printf("Unable to create dir: %v", err)
		return
	}

	backup, err := os.Open(fileName)
	if err != nil {
		log.Printf("Fail to open backup file: %v", err)
		return
	}
	defer backup.Close()

	file, err := createFile(service, "backup.bak", "application/data", backup, dir.Id)
	if err != nil {
		log.Printf("Fail to write backup in drive: %v", err)
		return
	}
	log.Printf("Successfully uploaded %s to drive", file.Name)
}

func tokenFromFile(file string) (*oauth2.Token, error) {
	f, err := os.Open(file)
	if err != nil {
		return nil, err
	}
	defer f.Close()
	tok := &oauth2.Token{}
	err = json.NewDecoder(f).Decode(tok)
	return tok, err
}

func getBackupDir(service *drive.Service) (*drive.File, error) {

	fileList, _ := service.Files.List().Do()
	for _, dir := range fileList.Files {
		if dir.Name == driveBackupDir {
			return dir, nil
		}
	}

	d := &drive.File{
		Name:     driveBackupDir,
		MimeType: "application/vnd.google-apps.folder",
		Parents:  []string{"root"},
	}
	return service.Files.Create(d).Do()
}

func createFile(service *drive.Service, name string, mimeType string, content io.Reader, parentID string) (*drive.File, error) {

	fileList, _ := service.Files.List().Do()
	for _, f := range fileList.Files {
		if f.Name == name {
			service.Files.Delete(f.Id).Do()
		}
	}

	f := &drive.File{
		MimeType: mimeType,
		Name:     name,
		Parents:  []string{parentID},
	}
	return service.Files.Create(f).Media(content).Do()
}