---
title: NodeJs
sidebar_label: NodeJs
---

The following code snippets are examples of calling the Rebuild API using NodeJS. The request library is used to execute calls to the API. 

## api/rebuild/base64
​
In this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags.

The rebuilt file is returned as Base64, decoded by the client and written to disk.

```javascript

const request = require("request");
const fs = require("fs");

const jwt_token = "YOUR JWT TOKEN";
const inputFilePath = "Path to the file that needs rebuilding";
const outputFilePath = "Path of the file that will be written containing the rebuilt file contents";

const getBase64 = (filePath) => {
    var file = fs.readFileSync(filePath);
    return new Buffer(file).toString('base64');
}

const writeDecodedBase64File = (filePath, baseBase64String) => {
    var file = new Buffer(baseBase64String, "base64");
    fs.writeFileSync(filePath, file);
}

const options = {
    "method": "POST",
    "url": "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/base64",
    "headers": {
        "Authorization": jwt_token,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(
        {
            "Base64": getBase64(inputFilePath),
            "ContentManagementFlags": {
                "PdfContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "Javascript": 0,
                    "Acroform": 0,
                    "ActionsAll": 0
                },
                "ExcelContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "DynamicDataExchange": 0,
                    "Macros": 0,
                    "ReviewComments": 0
                },
                "PowerPointContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "Macros": 0,
                    "ReviewComments": 0

                },
                "WordContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "DynamicDataExchange": 0,
                    "Macros": 0,
                    "ReviewComments": 0
                }
            }
        })
    }

request(options, function (error, response) {
            if (error) throw new Error(error);
            writeDecodedBase64File(outputFilePath, response.body)
        });

```

## api/rebuild

In this example a file is downloaded from an input URL with a GET operation and its contents are rebuilt. The rebuilt file is then uploaded to the specified output URL using a PUT operation.

```javascript

const request = require("request");
const fs = require("fs");

const jwt_token = "YOUR JWT TOKEN";
const inputGetUrl = "The input URL to the file to be downloaded using HTTP GET. This is the file that will be rebuilt.";
const outputPutUrl = "The output URL the rebuilt file will be uploaded to using HTTP PUT.";

const options = {
    "method": "POST",
    "url": "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild",
    "headers": {
        "Authorization": jwt_token,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(
        {
            "InputGetUrl": inputGetUrl,
            "OutputPutUrl": outputPutUrl,
            "ContentManagementFlags": {
                "PdfContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "Javascript": 0,
                    "Acroform": 0,
                    "ActionsAll": 0
                },
                "ExcelContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "DynamicDataExchange": 0,
                    "Macros": 0,
                    "ReviewComments": 0
                },
                "PowerPointContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "Macros": 0,
                    "ReviewComments": 0

                },
                "WordContentManagement": {
                    "Metadata": 0,
                    "InternalHyperlinks": 0,
                    "ExternalHyperlinks": 0,
                    "EmbeddedFiles": 0,
                    "EmbeddedImages": 0,
                    "DynamicDataExchange": 0,
                    "Macros": 0,
                    "ReviewComments": 0
                }
            }
        })
    }

request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.statusCode);
        });

```


## api/rebuild/file

In this example the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'. The content management flags are serialised and sent as part of the form.

The rebuilt file contents are returned to the client and written to disk.

```javascript

const request = require("request");
const fs = require("fs");

const jwt_token = "YOUR JWT TOKEN";
const inputFilePath = "Path to the file that needs rebuilding";
const outputFilePath = "Path of the file that will be written containing the rebuilt file contents";

const options = {
    "encoding": null,
    "method": "POST",
    "url": "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file",
    "headers": {
        "Authorization": jwt_token,
        'Accept': 'application/octet-stream'
    },
    formData: {
        "file": {
            "value": fs.createReadStream(inputFilePath),
            "options": {
                "filename": "/" + inputFilePath,
                "contentType": null
            }
        },
        "contentManagementFlagJson": JSON.stringify({
            "PdfContentManagement": {
                "Metadata": 0,
                "InternalHyperlinks": 0,
                "ExternalHyperlinks": 0,
                "EmbeddedFiles": 0,
                "EmbeddedImages": 0,
                "Javascript": 0,
                "Acroform": 0,
                "ActionsAll": 0
            },
            "ExcelContentManagement": {
                "Metadata": 0,
                "InternalHyperlinks": 0,
                "ExternalHyperlinks": 0,
                "EmbeddedFiles": 0,
                "EmbeddedImages": 0,
                "DynamicDataExchange": 0,
                "Macros": 0,
                "ReviewComments": 0
            },
            "PowerPointContentManagement": {
                "Metadata": 0,
                "InternalHyperlinks": 0,
                "ExternalHyperlinks": 0,
                "EmbeddedFiles": 0,
                "EmbeddedImages": 0,
                "Macros": 0,
                "ReviewComments": 0

            },
            "WordContentManagement": {
                "Metadata": 0,
                "InternalHyperlinks": 0,
                "ExternalHyperlinks": 0,
                "EmbeddedFiles": 0,
                "EmbeddedImages": 0,
                "DynamicDataExchange": 0,
                "Macros": 0,
                "ReviewComments": 0
            }
        })
    }
}

request(options, function (error, res) {
    if (error) throw new Error(error);
    let data = res.body // res is the response coming from the API
    let buf = Buffer.from(data);
    file = fs.createWriteStream(outputFilePath);
    file.write(buf);
    file.end();
});

```