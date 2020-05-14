---
title: Architecture of Rebuild

sidebar_label: Architecture
---

### File in Http Request multipart/form-data

This pathway allows for files up to 6mb to be posted to the API within the request body. As you can see, the moving parts are minimal - the file is rebuilt by a single lambda function that calls the Rebuild SDK natively.

![Figure1](/img/Rebuild-File-Architecture.png)

This sequence diagram shows what is occuring within the Rebuild lambda function, we first make sure it is a supported type. Then, we run an analysis of the file - anlysis reports allow us to see information on the structure of the file and of interest to us here are issues. If there are no issues then a Rebuild of the file is possible, the rebuild file is returned in memory and passed back to the requestor in a binary response body.

![Figure2](/img/Rebuild-File-Sequence.png)

This is a great way to quickly get file-in, file-out but because we can't have a payload to the lambda function larger than **6mb** we need a second pathway.

### File in via authenticated URLs

This second pathway allows a much larger size of file to be processed, by taking two urls:
- one for input which needs to point to a file and have permission to make a GET request.
- one for output which needs to be able to accept a POST request to store the file.


![Figure3](/img/Rebuild-S3-Architecture.png)

An example use case would be having the file in an S3 bucket and utilising the Pre-Signed URL's to provide just enough permissions to get the file, and a Pre-Signed URL with enough permissions to put the file into a bucket in S3.

![Figure4](/img/Rebuild-URL-Sequence.png)

This pathway has advantages in that the caller retains control of the security of the file, the API simply has the file in memory to do the processing and writes it back to the callers domain. Future use cases will start to require us to start writing file to our storage but for these calls - its cleaner this way.