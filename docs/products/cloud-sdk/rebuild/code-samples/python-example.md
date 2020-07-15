---
title: Python
sidebar_label: Python
---

The following code snippets are examples of calling the Rebuild API using Python. The requests library is used to execute calls to the API. 

## api/rebuild/base64
​
In this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags.

The rebuilt file is returned as Base64, decoded by the client and written to disk.

```python

import base64
import requests
​
​
jwt_token = "YOUR_JWT_TOKEN"
url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/base64"
​
""" rebuild a single file using the base64 endpoint.
allow (0) review comments in microsoft word files """
​
# open a local file
with open("data/doc/embedded_images_12kb.docx", "rb") as f:
    # convert from bytes to str of base64 string
    base64_string_input = base64.b64encode(f.read()).decode()
​
# send post request to /base64 endpoint, returns base64 encoded bytes
response = requests.post(
    url=url,
    json={
        "Base64": base64_string_input,
        "ContentManagementFlags": {
            "WordContentManagement": {
                "ReviewComments": 0,
            }
        }
    },
    headers={
        "Authorization": jwt_token
    }
)
​
# convert base64 encoded bytes to string
base64_string_output = response.content.decode()
​
# metadata has been removed, base64 strings differ
assert base64_string_input != base64_string_output
​
# decode base64 string to bytes
sanitised_file_bytes = base64.b64decode(base64_string_output)
​
# write file locally
with open("data/doc/embedded_images_12kb_gwsanitised.docx", "wb") as f:
```

## api/rebuild/file

In this example the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'. The content management flags are serialised and sent as part of the form.

The rebuilt file contents are returned to the client and written to disk.

```python

import json
import os
import requests
​
jwt_token = "YOUR_JWT_TOKEN"
url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file"
​
""" rebuild all files in the "data" directory, writing to a new "data_gwsanitised" directory with the same folder structure.
disallow (2) excel files that contain macros and don't write them to the new directory.
allow (0) internal and external hyperlinks found in word documents, but sanitise other content
sanitise (1, default) and write all other files. """
directory = "data"
for root, dirs, files in os.walk(directory):
    for file_ in files:
        # create input and out file file paths
        input_file = os.path.join(root, file_)
        output_file = os.path.join(f"{directory}_gwsanitised", os.path.relpath(input_file, directory))
        with open(input_file, "rb") as f:
            # send post request
            response = requests.post(
                url=url,
                files=[("file", f)],
                headers={
                    "Authorization": jwt_token,
                    "accept": "application/octet-stream"
                },
                data={
                    "contentManagementFlagJson": json.dumps({
                        "ExcelContentManagement": {
                            "Macros": 2,
                        },
                        "WordContentManagement": {
                            "InternalHyperlinks": 0,
                            "ExternalHyperlinks": 0,
                            "EmbeddedFiles": 1,
                            "EmbeddedImages": 1,
                        }
                    })
                }
            )
        if response.status_code == 200 and response.content:
            # glasswall successfully sanitised this file, write it to the new directory
            os.makedirs(os.path.dirname(output_file), exist_ok=True)
            with open(output_file, "wb") as f:
                f.write(response.content)
```