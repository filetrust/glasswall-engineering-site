---
title: Error Glossary
id: rebuild-errors
sidebar_label: Errors
---

The Rebuild API uses conventional HTTP response codes to report the success or failure of the API request.

Codes in the 4xx range indicate that there is an issue with the request being made to our service. 

Errors in the 5xx range are rare, but they indicate an issue with the service itself.

The error codes we issue are detailed below:

### 400 Bad Request
Something is wrong with the request being sent, the response body should indicate what is missing or malformed. If you are unsure of the correct request then our quickstarts and [swagger](https://filetrust.github.io/cloudsdk-aws-rebuild-api/#/) documentation should provide the answer.

### 403 Forbidden
No / invalid JWT Token has been provided in the request. All the resources in the RebuildAPI require your JWT Token in the header of the request. If you do not have an JWT Token then visit our [store](https://glasswall-store.com/) to obtain one.

### 403 Missing Authentication Token
This error can be returned when the URL being used is incorrect. Please make sure that the url and case matches exactly for the API.

### 413 Payload Too Large
The file you are sending via HTTP request body is over 6MB. Due to the limitations of AWS Lambda, 6MB is the largest payload a Lambda function can receive. If your files are above this size then it is suggested that the alternate method of processing files through secured URL's is used.

### 422 Unprocessable Entity
Some files we just cannot make better, sometimes it is because we don't currently support the file type that has been sent to us. Other times the files are so broken we just cannot put them back together safely. If this happens then you will get this 422 response, the response body will indicate whether it was an unsupported (unknown) file type or the file simply had issues we couldn't resolve.

### 429 Too Many Requests
This is primarily for the shared platform where the API is rate limited for fair usage, if you are getting this error it is an indication that you may need to move to the dedicated cloud where you can have a higher concurrency limit.

### 500 Internal Server Error
This error should rarely happen, if it does, that's our bad. Report it to us by raising an issue on our [GitHub](https://github.com/filetrust) pages and we will endevour to fix the issue.