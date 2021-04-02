var templates=[{config:'[{"key":1},{"key":2}]',query:"db.collection.find()",mode:"bson"},{config:'db={"orders":[{"_id":1,"item":"almonds","price":12,"quantity":2},{"_id":2,"item":"pecans","price":20,"quantity":1},{"_id":3}],"inventory":[{"_id":1,"sku":"almonds","description":"product 1","instock":120},{"_id":2,"sku":"bread","description":"product 2","instock":80},{"_id":3,"sku":"cashews","description":"product 3","instock":60},{"_id":4,"sku":"pecans","description":"product 4","instock":70},{"_id":5,"sku":null,"description":"Incomplete"},{"_id":6}]}',query:'db.orders.aggregate([{"$lookup":{"from":"inventory","localField":"item","foreignField":"sku","as":"inventory_docs"}}])',mode:"bson"},{config:'[{"collection":"collection","count":10,"content":{"key":{"type":"int","minInt":0,"maxInt":10}}}]',query:"db.collection.find()",mode:"mgodatagen"},{config:'[{"key":1},{"key":2}]',query:'db.collection.update({"key":2},{"$set":{"updated":true}},{"multi":false,"upsert":false})',mode:"bson"},{config:'[{"collection":"collection","count":5,"content":{"description":{"type":"fromArray","in":["Coffee and cakes","Gourmet hamburgers","Just coffee","Discount clothing","Indonesian goods"]}},"indexes":[{"name":"description_text_idx","key":{"description":"text"}}]}]',query:'db.collection.find({"$text":{"$search":"coffee"}})',mode:"mgodatagen"},{config:'[{"_id":1,"item":"ABC","price":80,"sizes":["S","M","L"]},{"_id":2,"item":"EFG","price":120,"sizes":[]},{"_id":3,"item":"IJK","price":160,"sizes":"M"},{"_id":4,"item":"LMN","price":10},{"_id":5,"item":"XYZ","price":5.75,"sizes":null}]',query:'db.collection.aggregate([{"$unwind":{"path":"$sizes","preserveNullAndEmptyArrays":true}},{"$group":{"_id":"$sizes","averagePrice":{"$avg":"$price"}}},{"$sort":{"averagePrice":-1}}]).explain("executionStats")',mode:"bson"}],methodSnippet=[{caption:"find()",value:"find()",meta:"method"},{caption:"aggregate()",value:"aggregate()",meta:"method"},{caption:"update()",value:"update()",meta:"method"},{caption:"explain()",value:"explain()",meta:"method"}],availableCollections=[{caption:"collection",value:"collection",meta:"collection name"}],basicBsonSnippet=[{caption:"true",value:"true",meta:"bson keyword"},{caption:"false",value:"false",meta:"bson keyword"},{caption:"null",value:"null",meta:"bson keyword"},{caption:"$numberDecimal",value:"$numberDecimal: ",meta:"bson keyword"},{caption:"$numberDouble",value:"$numberDouble: ",meta:"bson keyword"},{caption:"$numberLong",value:"$numberLong: ",meta:"bson keyword"},{caption:"$numberInt",value:"$numberLong: ",meta:"bson keyword"},{caption:"$oid",value:"$oid: ",meta:"bson keyword"},{caption:"$regularExpression",value:`$regularExpression: {
 "pattern": "pattern",
 "options": "options"
}`,meta:"bson keyword"},{caption:"$timestamp",value:'$timestamp: {"t": 0, "i": 1}',meta:"bson keyword"},{caption:"$date",value:"$date: ",meta:"bson keyword"}],querySnippet=[{caption:"$eq",value:'$eq: "value"',meta:"comparison operator"},{caption:"$gt",value:'$gt: "value"',meta:"comparison operator"},{caption:"$gte",value:'$gte: "value"',meta:"comparison operator"},{caption:"$in",value:'$in: ["value1", "value2"]',meta:"comparison operator"},{caption:"$let",value:`$let: {
 "vars": { "var": "expression" },
 "in": "expression"
}`,meta:"variable operator"},{caption:"$lt",value:'$lt: "value"',meta:"comparison operator"},{caption:"$lte",value:'$lte: "value"',meta:"comparison operator"},{caption:"$ne",value:'$ne: "value"',meta:"comparison operator"},{caption:"$nin",value:'$nin: ["value1", "value2"',meta:"comparison operator"},{caption:"$not",value:"$not: { }",meta:"logical operator"},{caption:"$nor",value:'$nor: [ { "expression1" }, { "expression2" } ]',meta:"logical operator"},{caption:"$and",value:'$and: [ { "expression1" }, { "expression2" } ]',meta:"logical operator"},{caption:"$or",value:'$or: [ { "expression1" }, { "expression2" } ]',meta:"logical operator"},{caption:"$exists",value:'$exists: "value"',meta:"element operator"},{caption:"$type",value:'$type: "bson type"',meta:"element operator"},{caption:"$expr",value:'$expr: { "expression" }',meta:"evaluation operator"},{caption:"$jsonSchema",value:'$jsonSchema: { "schema" }',meta:"evaluation operator"},{caption:"$mod",value:'$mod: [ "divisor", "remainder" ]',meta:"evaluation operator"},{caption:"$regex",value:'$regex: "pattern"',meta:"evaluation operator"},{caption:"$where",value:'$where: "code"',meta:"evaluation operator"},{caption:"$geoIntersects",value:`$geoIntersects: {
 "$geometry": {
  "type": "GeoJSON type",
  "coordinates": [  ]
 }
}`,meta:"geospatial operator"},{caption:"$geoWithin",value:`$geoWithin: {
 "$geometry": {
  "type": "Polygon",
  "coordinates": [  ]
 }
}`,meta:"geospatial operator"},{caption:"$near",value:`$near: {
 "$geometry": {
  "type": "Point",
  "coordinates": [ "long", "lat" ]
 }, "$maxDistance": 10, "$minDistance": 1
}`,meta:"geospatial operator"},{caption:"$nearSphere",value:`$nearSphere: {
 "$geometry": {
  "type": "Point",
  "coordinates": [ "long", "lat" ]
 }, "$maxDistance": 10, "$minDistance": 1
}`,meta:"geospatial operator"},{caption:"$box",value:"$box:  [ [ 0, 0 ], [ 100, 100 ] ]",meta:"geospatial operator"},{caption:"$center",value:'$center: [ [ "x", "y" ] , "radius" ]',meta:"geospatial operator"},{caption:"$centerSphere",value:'$centerSphere: [ [ "x", "y" ] , "radius" ]',meta:"geospatial operator"},{caption:"$geometry",value:`$geometry: {
 "type": "Polygon",
 "coordinates": [ ]
}`,meta:"geospatial operator"},{caption:"$maxDistance",value:"$maxDistance: 10",meta:"geospatial operator"},{caption:"$minDistance",value:"$minDistance: 10",meta:"geospatial operator"},{caption:"$polygon",value:"$polygon: [ [ 0 , 0 ], [ 3 , 6 ], [ 6 , 0 ] ]",meta:"geospatial operator"},{caption:"$all",value:'$all: [ "value1" , "value2" ]',meta:"array operator"},{caption:"$elemMatch",value:'$elemMatch: { "query1", "query2" }',meta:"array operator"},{caption:"$size",value:"$size: 1",meta:"array operator"},{caption:"$bitsAllClear",value:'$bitsAllClear: [ "pos1", "pos2" ]',meta:"bitwise operator"},{caption:"$bitsAllSet",value:'$bitsAllSet: [ "pos1", "pos2" ]',meta:"bitwise operator"},{caption:"$bitsAnyClear",value:'$bitsAnyClear: [ "pos1", "pos2" ]',meta:"bitwise operator"},{caption:"$bitsAnySet",value:'$bitsAnySet: [ "pos1", "pos2" ]',meta:"bitwise operator"},{caption:"$slice",value:"$slice: 2",meta:"projection operator"}],aggregationSnippet=[{caption:"$abs",value:"$abs: -1",meta:"arithmetic operator"},{caption:"$accumulator",value:`$accumulator: {
 "init": "code",
 "initArgs": "array expression",
 "accumulate": "code",
 "accumulateArgs": "array expression",
 "merge": "code",
 "finalize": "code",
 "lang": "string"
}`,meta:"accumulation operator"},{caption:"$acos",value:'$acos: "expression"',meta:"trigonometry operator"},{caption:"$acosh",value:'$acosh: "expression"',meta:"trigonometry operator"},{caption:"$add",value:'$add: [ "expression1", "expression2" ]',meta:"arithmetic operator"},{caption:"$addFields",value:'$addFields: { "newField": "expression" }',meta:"aggregation stage"},{caption:"$addToSet",value:'$addToSet: "expression"',meta:"accumulation operator"},{caption:"$allElementsTrue",value:'$allElementsTrue: [ "expression" ]',meta:"set operator"},{caption:"$and",value:'$and: [ "expression1", "expression2" ]',meta:"boolean operator"},{caption:"$anyElementTrue",value:'$anyElementTrue: [ "expression" ]',meta:"set operator"},{caption:"$arrayElemAt",value:'$arrayElemAt: [ "array", "idx" ]',meta:"array operator"},{caption:"$arrayToObject",value:'$arrayToObject: "expression"',meta:"array operator"},{caption:"$asin",value:'$asin: "expression"',meta:"trigonometry operator"},{caption:"$asinh",value:'$asinh: "expression"',meta:"trigonometry operator"},{caption:"$atan",value:'$atan: "expression"',meta:"trigonometry operator"},{caption:"$atan2",value:'$atan2: [ "expression 1", "expression 2" ]',meta:"trigonometry operator"},{caption:"$atanh",value:'$atanh: "expression"',meta:"trigonometry operator"},{caption:"$avg",value:'$avg: "expression"',meta:"accumulation operator"},{caption:"$binarySize",value:'$binarySize: "string or binData"',meta:"size operator"},{caption:"$bsonSize",value:'$bsonSize: "object"',meta:"size operator"},{caption:"$bucket",value:`$bucket: {
 "groupBy": "expression",
 "boundaries": [ "lowerbound1", "lowerbound2" ],
 "default": "literal",
 "output": {
  "output1": "$accumulator expression",
  "outputN": "$accumulator expression"
 }
}`,meta:"aggregation stage"},{caption:"$bucketAuto",value:`$bucketAuto: {
 "groupBy": "expression",
 "buckets": 2,
 "output": {
 "output1": "$accumulator expression"},
 "granularity": "string"
}`,meta:"aggregation stage"},{caption:"$ceil",value:"$ceil: 3.3",meta:"arithmetic operator"},{caption:"$cmp",value:'$cmp: [ "expression1", "expression2" ]',meta:"comparison operator"},{caption:"$concat",value:'$concat: [ "expression1", "expression2" ]',meta:"string operator"},{caption:"$concatArrays",value:'$concatArrays: [ "array1", "array2" ]',meta:"array operator"},{caption:"$cond",value:`$cond: {
 "if": "boolean-expression",
 "then": "true-case",
 "else": "false-case" }`,meta:"conditional operator"},{caption:"$convert",value:`$convert: {
 "input": "expression",
 "to": "type expression",
 "onError": "expression",
 "onNull": "expression"
}`,meta:"type operator"},{caption:"$cos",value:'$cos: "expression"',meta:"trigonometry operator"},{caption:"$count",value:'$count: "string"',meta:"aggregation stage"},{caption:"$dateFromParts",value:`$dateFromParts : {
 "year": "year", "month": "month", "day": "day",
 "hour": "hour", "minute": "minute", "second": "second",
 "millisecond": "ms", "timezone": "tzExpression"
}`,meta:"date operator"},{caption:"$dateFromString",value:`$dateFromString: {
 "dateString": "dateStringExpression",
 "format": "formatStringExpression",
 "timezone": "tzExpression",
 "onError": "onErrorExpression",
 "onNull": "onNullExpression"
}`,meta:"string operator"},{caption:"$dateToParts",value:`$dateToParts: {
 "date" : "dateExpression",
 "timezone" : "timezone",
 "iso8601" : "boolean"
}`,meta:"date operator"},{caption:"$dateToString",value:`$dateToString: {
 "date": "dateExpression",
 "format": "formatString",
 "timezone": "tzExpression",
 "onNull": "expression"
}`,meta:"string operator"},{caption:"$dayOfMonth",value:'$dayOfMonth: "dateExpression"',meta:"date operator"},{caption:"$dayOfWeek",value:'$dayOfWeek: "dateExpression"',meta:"date operator"},{caption:"$dayOfYear",value:'$dayOfYear: "dateExpression"',meta:"date operator"},{caption:"$degreesToRadians",value:'$degreesToRadians: "expression"',meta:"trigonometry operator"},{caption:"$divide",value:'$divide: [ "expression1", "expression2" ]',meta:"arithmetic operator"},{caption:"$eq",value:'$eq: [ "expression1", "expression2" ]',meta:"comparison operator"},{caption:"$exists",value:"$exists: true",meta:"aggregation operator"},{caption:"$exp",value:'$exp: "exponent"',meta:"arithmetic operator"},{caption:"$facet",value:`$facet:
{
 "outputField1": [ "stage1", "stage2" ]
}`,meta:"aggregation stage"},{caption:"$filter",value:'$filter: { "input": "array", "as": "string", "cond": "expression" }',meta:"array operator"},{caption:"$first",value:'$first: "expression"',meta:"array operator"},{caption:"$floor",value:"$floor: 1",meta:"arithmetic operator"},{caption:"$function",value:`$function: {
 "body": "code",
 "args": "array expression",
 "lang": "js"
}`,meta:"aggregation operator"},{caption:"$geoNear",value:'$geoNear: { "TODO" }',meta:"aggregation stage"},{caption:"$graphLookup",value:`$graphLookup: {
 "from": "collection",
 "startWith": "expression",
 "connectFromField": "string",
 "connectToField": "string",
 "as": "string",
 "maxDepth": 2,
 "depthField": "string",
 "restrictSearchWithMatch": "document"
}`,meta:"aggregation stage"},{caption:"$group",value:`$group: {
 "_id": "group by expression",
 "field": { "accumulator" : "expression" }
}`,meta:"aggregation stage"},{caption:"$gt",value:'$gt: [ "expression1", "expression2" ]',meta:"comparison operator"},{caption:"$gte",value:'$gte: [ "expression1", "expression2" ]',meta:"comparison operator"},{caption:"$hour",value:'$hour: "dateExpression"',meta:"date operator"},{caption:"$ifNull",value:'$ifNull: [ "expression", "replacement-expression-if-null" ]',meta:"conditional operator"},{caption:"$in",value:'$in: [ "expression", "array expression" ]',meta:"array operator"},{caption:"$indexOfArray",value:'$indexOfArray: [ "array expression", "search expression", "start", "end" ]',meta:"array operator"},{caption:"$indexOfBytes",value:'$indexOfBytes: [ "string expression", "substring expression", "start", "end" ]',meta:"string operator"},{caption:"$indexOfCP",value:'$indexOfCP: [ "string expression", "substring expression", "start", "end" ]',meta:"string operator"},{caption:"$isArray",value:'$isArray: [ "expression" ]',meta:"array operator"},{caption:"$isNumber",value:'$isNumber: "expression"',meta:"type operator"},{caption:"$isoDayOfWeek",value:'$isoDayOfWeek: "dateExpression"',meta:"date operator"},{caption:"$isoWeek",value:'$isoWeek: "dateExpression"',meta:"date operator"},{caption:"$isoWeekYear",value:'$isoWeekYear: "dateExpression"',meta:"date operator"},{caption:"$last",value:'$last: "expression"',meta:"array operator"},{caption:"$limit",value:'$limit: "positive integer"',meta:"aggregation stage"},{caption:"$ln",value:"$ln: 10",meta:"arithmetic operator"},{caption:"$log",value:"$log: [ 100, 10 ]",meta:"arithmetic operator"},{caption:"$log10",value:"$log10: 4",meta:"arithmetic operator"},{caption:"$lookup",value:`$lookup: {
 "from": "collection to join",
 "localField": "field from the input documents",
 "foreignField": "field from the documents of the from collection",
 "as": "output array field"
}`,meta:"aggregation stage"},{caption:"$lt",value:'$lt: [ "expression1", "expression2" ]',meta:"comparison operator"},{caption:"$lte",value:'$lte: [ "expression1", "expression2" ]',meta:"comparison operator"},{caption:"$ltrim",value:'$ltrim: { "input": "string",  "chars": "string" }',meta:"string operator"},{caption:"$map",value:'$map: { "input": "expression", "as": "string", "in": "expression" }',meta:"array operator"},{caption:"$match",value:"$match: { }",meta:"aggregation stage"},{caption:"$max",value:'$max: "expression"',meta:"accumulation operator"},{caption:"$merge",value:`$merge: {
 "into": "collection",
 "on": "identifier field",
 "let": "variables",
 "whenMatched": "replace|keepExisting|merge|fail|pipeline",
 "whenNotMatched": "insert|discard|fail"
}`,meta:"aggregation stage"},{caption:"$mergeObjects",value:'$mergeObjects: "document"',meta:"object operator"},{caption:"$millisecond",value:'$millisecond: "dateExpression"',meta:"date operator"},{caption:"$min",value:'$min: "expression"',meta:"accumulation operator"},{caption:"$minute",value:'$minute: "dateExpression"',meta:"date operator"},{caption:"$mod",value:'$mod: [ "expression1", "expression2" ]',meta:"arithmetic operator"},{caption:"$month",value:'$month: "dateExpression"',meta:"date operator"},{caption:"$multiply",value:'$multiply: [ "expression1", "expression2" ]',meta:"arithmetic operator"},{caption:"$ne",value:'$ne: [ "expression1", "expression2" ]',meta:"comparison operator"},{caption:"$not",value:'$not: [ "expression" ]',meta:"boolean operator"},{caption:"$objectToArray",value:'$objectToArray: "object"',meta:"object operator"},{caption:"$or",value:'$or: [ "expression1", "expression2" ]',meta:"boolean operator"},{caption:"$out",value:'$out: { "db": "output-db", "coll": "output-collection" }',meta:"aggregation stage"},{caption:"$pow",value:'$pow: [ "number", "exponent" ]',meta:"arithmetic operator"},{caption:"$project",value:"$project: { }",meta:"aggregation stage"},{caption:"$push",value:'$push: "expression"',meta:"accumulation operator"},{caption:"$radiansToDegrees",value:'$radiansToDegrees: "expression"',meta:"trigonometry operator"},{caption:"$range",value:'$range: [ "start", "end", "non-zero step" ]',meta:"array operator"},{caption:"$redact",value:'$redact: "expression"',meta:"aggregation stage"},{caption:"$reduce",value:'$reduce: { "input": "array", "initialValue": "expression", "in": "expression" }',meta:"array operator"},{caption:"$regexFind",value:'$regexFind: { "input": "expression", "regex": "expression", "options": "expression" }',meta:"string operator"},{caption:"$regexFindAll",value:'$regexFindAll: { "input": "expression", "regex": "expression", "options": "expression" }',meta:"string operator"},{caption:"$regexMatch",value:'$regexMatch: { "input": "expression" , "regex": "expression", "options": "expression" }',meta:"string operator"},{caption:"$replaceAll",value:'$replaceAll: { "input": "expression", "find": "expression", "replacement": "expression" }',meta:"string operator"},{caption:"$replaceOne",value:'$replaceOne: { "input": "expression", "find": "expression", "replacement": "expression" }',meta:"string operator"},{caption:"$replaceRoot",value:'$replaceRoot: { "newRoot": "replacementDocument" }',meta:"aggregation stage"},{caption:"$replaceWith",value:'$replaceWith: "replacementDocument"',meta:"aggregation stage"},{caption:"$reverseArray",value:'$reverseArray: "array expression"',meta:"array operator"},{caption:"$round",value:'$round : [ "number", "place" ]',meta:"arithmetic operator"},{caption:"$rtrim",value:'$rtrim: { "input": "string", chars: "string" }',meta:"string operator"},{caption:"$sample",value:'$sample: { "size": "positive integer" }',meta:"aggregation stage"},{caption:"$second",value:'$second: "dateExpression"',meta:"date operator"},{caption:"$set",value:'$set: { "newField": "expression" }',meta:"aggregation stage"},{caption:"$setDifference",value:'$setDifference: [ "expression1", "expression2" ]',meta:"set operator"},{caption:"$setEquals",value:'$setEquals: [ "expression1", "expression2" ]',meta:"set operator"},{caption:"$setIntersection",value:'$setIntersection: [ "array1", "array2" ]',meta:"set operator"},{caption:"$setIsSubset",value:'$setIsSubset: [ "expression1", "expression2" ]',meta:"set operator"},{caption:"$setUnion",value:'$setUnion: [ "expression1", "expression2" ]',meta:"set operator"},{caption:"$sin",value:'$sin: "expression"',meta:"trigonometry operator"},{caption:"$size",value:'$size: "expression"',meta:"array operator"},{caption:"$skip",value:"$skip",meta:"aggregation stage"},{caption:"$slice",value:'$slice: [ "array", "n" ]',meta:"array operator"},{caption:"$sort:",value:"$sort: { }",meta:"aggregation stage"},{caption:"$sortByCount",value:'$sortByCount:  "expression"',meta:"aggregation stage"},{caption:"$split",value:'$split: [ "string expression", "delimiter" ]',meta:"string operator"},{caption:"$sqrt",value:"$sqrt: 12",meta:"arithmetic operator"},{caption:"$stdDevPop",value:'$stdDevPop: "expression"',meta:"accumulation operator"},{caption:"$stdDevSamp",value:'$stdDevSamp: "expression"',meta:"accumulation operator"},{caption:"$strLenBytes",value:'$strLenBytes: "string expression"',meta:"string operator"},{caption:"$strLenCP",value:'$strLenCP: "string expression"',meta:"string operator"},{caption:"$strcasecmp",value:'$strcasecmp: [ "expression1", "expression2" ]',meta:"string operator"},{caption:"$substr",value:'$substr: [ "string", "start", "length" ]',meta:"string operator"},{caption:"$substrBytes",value:'$substrBytes: [ "string expression", "byte index", "byte count" ]',meta:"string operator"},{caption:"$substrCP",value:'$substrCP: [ "string expression", "code point index", "code point count" ]',meta:"string operator"},{caption:"$subtract",value:'$subtract: [ "expression1", "expression2" ]',meta:"arithmetic operator"},{caption:"$sum",value:'$sum: "expression"',meta:"accumulation operator"},{caption:"$switch",value:`$switch: {
 "branches": [
 { "case": "expression", "then": "expression" } 
]
}`,meta:"conditional operator"},{caption:"$tan",value:'$tan: "expression"',meta:"trigonometry operator"},{caption:"$toBool",value:'$toBool: "expression"',meta:"type operator"},{caption:"$toDate",value:'$toDate: "expression"',meta:"type operator"},{caption:"$toDecimal",value:'$toDecimal: "expression"',meta:"type operator"},{caption:"$toDouble",value:'$toDouble: "expression"',meta:"type operator"},{caption:"$toInt",value:'$toInt: "expression"',meta:"type operator"},{caption:"$toLong",value:'$toLong: "expression"',meta:"type operator"},{caption:"$toLower",value:'$toLower: "expression"',meta:"string operator"},{caption:"$toObjectId",value:'$toObjectId: "expression"',meta:"type operator"},{caption:"$toString",value:'$toString: "expression"',meta:"type operator"},{caption:"$toUpper",value:'$toUpper: "expression"',meta:"string operator"},{caption:"$trim",value:'$trim: { "input": "string",  "chars": "string" }',meta:"string operator"},{caption:"$trunc",value:'$trunc : [ "number", "place" ]',meta:"arithmetic operator"},{caption:"$type",value:'$type: "expression"',meta:"type operator"},{caption:"$unionWith",value:'$unionWith: { "coll": "collection", "pipeline": [ "stage1" ] }',meta:"aggregation stage"},{caption:"$unset",value:'$unset: "field"',meta:"aggregation stage"},{caption:"$unwind",value:'$unwind: "field path"',meta:"aggregation stage"},{caption:"$week",value:'$week: "dateExpression"',meta:"date operator"},{caption:"$where",value:'$where: "code"',meta:"aggregation operator"},{caption:"$year",value:'$year: "dateExpression"',meta:"date operator"},{caption:"$zip",value:`$zip: {
 "inputs": [ "array expression1" ],
 "useLongestLength": "boolean",
 "defaults":  "array expression"
}`,meta:"array operator"}],updateSnippet=[{caption:"$currentDate",value:'$currentDate: "expression"',meta:"update operator"},{caption:"$inc",value:'$inc: { "field": 1 }',meta:"update operator"},{caption:"$min",value:'$min: "expression"',meta:"update operator"},{caption:"$max",value:'$max: "expression"',meta:"update operator"},{caption:"$mul",value:'$mul: { "field": 2 }',meta:"update operator"},{caption:"$rename",value:'$rename: { "field": "newName" }',meta:"update operator"},{caption:"$set",value:'$set: { "field": "value" }',meta:"update operator"},{caption:"$setOnInsert",value:'$setOnInsert: { "field": "value" }',meta:"update operator"},{caption:"$unset",value:'$unset: { "field": "" }',meta:"update operator"},{caption:"$addToSet",value:'$addToSet: "expression"',meta:"update operator"},{caption:"$pop",value:'$pop: "expression"',meta:"update operator"},{caption:"$pull",value:'$pull: "expression"',meta:"update operator"},{caption:"$push",value:'$push: "expression"',meta:"update operator"},{caption:"$pullAll",value:'$pullAll: { "field": ["value1", "value2"] }',meta:"update operator"},{caption:"$each",value:'$each: ["value1", "value2"]',meta:"update operator"},{caption:"$position",value:"$position: 0",meta:"update operator"},{caption:"$slice",value:"$slice: 2",meta:"update operator"},{caption:"$sort",value:'$sort: "expression"',meta:"update operator"},{caption:"$bit",value:'$bit: { "field": { "and|or|xor": 4} }',meta:"update operator"}],configWordCompleter={getCompletions:function(s,t,m,f,y){var u=t.getTokenAt(m.row,m.column);y(null,basicBsonSnippet.map(function(p){return{caption:p.caption,value:p.value,meta:p.meta,completer:{insertMatch:function(c,l){c.removeWordLeft();var n="";u.value.startsWith('"')||(n='"'),u.value.endsWith('"')&&c.removeWordRight(),c.insert(n+l.value.replace(":",'":'))}}}}))}},queryWordCompleter={getCompletions:function(s,t,m,f,y){var u=t.getTokenAt(m.row,m.column),p=t.getTokens(m.row);if(p.length>3&&p[0].value==="db"&&p[u.index-1].value==="."){y(null,methodSnippet);return}else if(p.length===3&&p[0].value==="db"&&p[u.index-1].value==="."){y(null,availableCollections);return}var c=basicBsonSnippet;s.getSession().getLine(0).includes(".find(")?c=c.concat(querySnippet):s.getSession().getLine(0).includes(".aggregate(")?c=c.concat(aggregationSnippet):c=c.concat(updateSnippet),y(null,c.map(function(l){return{caption:l.caption,value:l.value,meta:l.meta,completer:{insertMatch:function(n,x){n.removeWordLeft();var h="";u.value.startsWith('"')||(h='"'),u.value.endsWith('"')&&n.removeWordRight(),n.insert(h+x.value.replace(":",'":'))}}}}))}};function addCollectionSnippet(s){availableCollections.push({caption:s,value:s,meta:"collection name"})}var CustomSelect=function(s){var t=document.getElementById(s.elem),m="js-Dropdown",f="js-Dropdown-title",y="js-Dropdown-list",u="is-selected",p="is-open",c=t.options,l=c.length,n=0,x=document.createElement("div");x.className=m,x.id="custom-"+t.id;var h=document.createElement("button");h.className=f,h.textContent=c[0].textContent;var b=document.createElement("ul");b.className=y,D(c),x.appendChild(h),x.appendChild(b),x.addEventListener("click",e),t.parentNode.insertBefore(x,t),t.style.display="none";function D(d){for(var $=0;$<d.length;$++){var g=document.createElement("li");g.innerText=d[$].textContent,g.setAttribute("data-value",d[$].value),g.setAttribute("data-index",n++),c[t.selectedIndex].textContent===d[$].textContent&&(g.classList.add(u),h.textContent=d[$].textContent),b.appendChild(g)}}document.addEventListener("click",function(d){x.contains(d.target)||a()});function e(d){d.preventDefault();var $=d.target;if($.className===f&&E(),$.tagName==="LI"){x.querySelector("."+f).innerText=$.innerText,t.options.selectedIndex=$.getAttribute("data-index"),t.dispatchEvent(new CustomEvent("change"));for(var g=b.querySelectorAll("li"),A=0;A<l;A++)g[A].classList.remove(u);$.classList.add(u),a()}}function E(){b.classList.toggle(p)}function S(){b.classList.add(p)}function a(){b.classList.remove(p)}function L(){return x.querySelector("."+f).innerText}function O(d){for(var $=b.querySelectorAll("li"),g=0;g<l;g++)$[g].classList.remove(u),$[g].innerText==d&&$[g].classList.add(u);x.querySelector("."+f).innerText=d}return{toggle:E,close:a,open:S,getValue:L,setValue:O}},Parser=function(){var s,t,m=!1,f=!0,y,u=!1,p,c,l,n;function x(o,i,v){return m=!0,f=!0,D(o,i,v),n}function h(o,i,v){return m=!1,f=!0,D(o,i,v),n}function b(o,i,v){return m=!1,f=!1,D(o,i,v),n}function D(o,i,v){l=o,n="",s=0,t=" ",y=0,p=!1,c=!1,u=!1;try{switch(i){case"config":$(v);break;case"query":A();break;default:a(),N()}if(a(),t){if(t===";")return n=n.slice(0,-1),a(),null;r("Unexpected remaining char after end of "+i)}}catch(T){for(;t;)e();return T}return null}function e(o){if(o&&o!==t&&r("Expected '"+o+"' instead of '"+t+"'"),E(),c){n+=t;return}if(t>" ")switch(u&&t!=="]"&&t!=="}"&&(u=!1,y++,m&&(n+=S())),t){case"{":case"[":u=!0,n+=t;break;case",":n+=t,m&&(p?n+=" ":n+=S());break;case":":n+=t,m&&(n+=" ");break;case"}":case"]":u?u=!1:(y--,m&&(n+=S())),n+=t;break;default:n+=t}}function E(){t=l.charAt(s),s+=1}function S(){return y<0?`
`:`
`+"  ".repeat(y)}function a(){for(;t&&t<=" ";)e();if(t==="/"){switch(e(),t!=="/"&&t!=="*"&&r('Javascript regex are not supported. Use "$regex" instead'),t){case"/":L();break;case"*":O();break}a()}}function L(){n=n.slice(0,-2);var o=l.indexOf(`
`,s);o===-1&&(o=l.length);var i=l.substring(s,o).trimRight();f&&(m?n+="//"+i+S():n.slice(-2)==="*/"?(n=n.slice(0,-2),n+="*"+i+"*/"):n+="/**"+i+"*/"),t=l.charAt(o+1),s=o+2,t>" "&&(n+=t)}function O(){n=n.slice(0,-2);var o=l.indexOf("*/",s);o===-1&&r("Unfinished multiligne comment"),E(),t==="*"&&E();var i=l.substring(s-1,o);f&&i!==""&&(m?(i=i.replace(/\*/gm,S()+"//"),n+="//"+i+S()):n+="/**"+i+"*/"),t=l.charAt(o+2),s=o+3,t>" "&&(n+=t)}function d(){if(t==='"'||t==="'")return w();for(var o=s-1;t&&(t>="0"&&t<="9"||t>="a"&&t<="z"||t>="A"&&t<="Z"||t==="$"||t==="_");)e();return l.substring(o,s-1)}function $(o){if(availableCollections=[],a(),o==="mgodatagen"&&t!=="["&&r("mgodatagen config has to be an array"),t==="["){if(o==="bson")return addCollectionSnippet("collection"),C();for(e(),a();t;){if(I(!0),a(),t==="]")return e();if(t===","){e(),a();continue}r("Invalid configuration")}}if(e("d"),e("b"),a(),e("="),a(),t==="{"){for(e();t;)if(g(),a(),t==="}"||(t!==","&&r("Invalid configuration"),e(),a(),t==="}"))return e()}r(`Invalid configuration:

must be an array of documents like '[ {_id: 1}, {_id: 2} ]'

or

must match 'db = { collection: [ {_id: 1}, {_id: 2} ] }'`)}function g(){a();var o=d();a(),e(":"),a(),C(),addCollectionSnippet(o)}function A(){if(a(),e("d"),e("b"),e("."),d(),q(),t===".")return q()}function k(){var o="";for(t==="-"&&(o+=t,e());t>="0"&&t<="9";)o+=t,e();if(t===".")for(o+=t,e();t>="0"&&t<="9";)o+=t,e();if(t==="e"||t==="E")for(o+=t,e(),(t==="-"||t==="+")&&(o+=t,e());t>="0"&&t<="9";)o+=t,e();isNaN(+o)&&r("Invalid number")}function w(){t!=='"'&&t!=="'"&&r("Expected a string"),n=n.slice(0,-1);var o="",i=t;E();for(var v=t;t&&!(t===i&&v!=="\\");)o+=t,v=t,(t===`
`||t==="\r")&&r("Invalid string: missing terminating quote"),E();return t||(n+='"'+o,r("Invalid string: missing terminating quote")),n+='"'+o+'"',e(),o}function z(){var o=s-1;switch(t){case"t":return e(),e("r"),e("u"),e("e");case"f":return e(),e("a"),e("l"),e("s"),e("e");case"n":switch(e(),t){case"u":return e(),e("l"),e("l");case"e":return W()}break;case"u":return e(),e("n"),e("d"),e("e"),e("f"),e("i"),e("n"),e("e"),e("d");case"O":return P();case"I":return _();case"T":return F();case"B":return B();case"N":switch(e(),e("u"),e("m"),e("b"),e("e"),e("r"),t){case"D":return M();case"L":return U();case"I":return R()}r("Expecting NumberInt, NumberLong or NumberDecimal")}var i=l.indexOf(`
`,o);r("Unknown type: '"+l.substring(o,i)+"'")}function W(){switch(c=!0,e("e"),e("w"),e(" "),e("D"),e("a"),e("t"),e("e"),c=!1,e("("),a(),t){case")":return e();case'"':case"'":w();break;default:k()}a(),e(")")}function P(){e("O"),e("b"),e("j"),e("e"),e("c"),e("t"),e("I"),e("d"),e("("),a();var o=w();o.length!==24&&r("Invalid ObjectId: hash has to be 24 char long"),a(),e(")")}function _(){e("I"),e("S"),e("O"),e("D"),e("a"),e("t"),e("e"),e("("),a(),w(),a(),e(")")}function F(){e("T"),e("i"),e("m"),e("e"),e("s"),e("t"),e("a"),e("m"),e("p"),e("("),p=!0,a(),(t===")"||t===",")&&r("Invalid timestamp: missing second since unix epoch (number)"),k(),a(),e(","),a(),t===")"&&r("Invalid timestamp: Missing incremental ordinal (number)"),k(),a(),p=!1,e(")")}function B(){e("B"),e("i"),e("n"),e("D"),e("a"),e("t"),e("a"),e("("),p=!0,a(),(t===")"||t===",")&&r("Missing binary type (number)"),k(),a(),e(","),a(),w(),a(),p=!1,e(")")}function M(){e("D"),e("e"),e("c"),e("i"),e("m"),e("a"),e("l"),e("("),a(),t==='"'||t==="'"?w():k(),a(),e(")")}function R(){e("I"),e("n"),e("t"),e("("),a(),t===")"&&r("NumberInt can't be empty"),k(),a(),e(")")}function U(){switch(e("L"),e("o"),e("n"),e("g"),e("("),a(),t){case'"':case"'":w();break;default:t>="0"&&t<="9"?k():r("NumberLong() can't be empty")}a(),e(")")}function C(){if(t!=="["&&r("Expected an array"),e(),a(),t==="]")return e();for(;t;)if(N(),a(),t==="]"||(t!==","&&r("Invalid array: missing closing bracket"),e(),a(),t==="]"))return e();r("Invalid array: missing closing bracket")}function I(o){t!=="{"&&r("Expected an object"),e(),a();var i=[];if(t==="}")return e();for(;t;){var v=d();a(),e(":"),i.includes(v)&&r("Duplicate key '"+v+"'"),i.push(v);var T=N();if(o&&v==="collection"&&addCollectionSnippet(T),a(),t==="}"||(t!==","&&r("Invalid object: missing closing bracket"),e(),a(),t==="}"))return e()}r("Invalid object: missing closing bracket")}function N(){switch(a(),t){case"{":return I();case"[":return C();case'"':case"'":return w();case"-":return k();default:t>="0"&&t<="9"?k():z()}}function V(){if(e("e"),e("x"),e("p"),e("l"),e("a"),e("i"),e("n"),e("("),a(),t===")")return e();var o=w();["executionStats","queryPlanner","allPlansExecution"].includes(o)||r("Invalid explain mode :"+o+', expected one of ["executionStats", "queryPlanner", "allPlansExecution"] '),a(),e(")")}function Y(){e("f"),e("i"),e("n"),e("d"),e("("),a(),j(2),a(),e(")")}function J(){switch(e("a"),e("g"),e("g"),e("r"),e("e"),e("g"),e("a"),e("t"),e("e"),e("("),a(),t){case"[":C();break;case"{":j(-1);break}a(),e(")")}function j(o){for(var i=0;t&&t==="{";)i++,o!==-1&&i>o&&r("too many object, expected up to "+o),I(),a(),t===","&&(e(),a())}function G(){if(e("u"),e("p"),e("d"),e("a"),e("t"),e("e"),e("("),a(),I(),a(),e(","),a(),t==="["?C():I(),a(),t===","){if(e(),t===")")return e();a(),I(),a()}t===","&&(e(),a()),e(")")}function q(){switch(e("."),t){case"f":return Y();case"a":return J();case"u":return G();case"e":return V();default:r("Unsupported method: only find(), aggregate(), update() and explain() are supported")}}function r(o){throw{message:o,at:s}}return{indent:x,compact:h,compactAndRemoveComment:b,parse:D}};