---
title: Rebuild API - Under the Hood

sidebar_label: Under the Hood
---

## Background

The Rebuild API leverages serverless functions to provide the battle hardened capablities of the Rebuild SDK at scale, available through HTTP API calls. With a range of consumption options available from pay-per-request to private cloud deployments, all the code is open sourced in [GitHub](https://github.com/filetrust). The first generation of code is focused on providing the capability using AWS components with Azure components surfacing shortly after first launch.

For our hosted solution we will assemble the components that give us the best levels of performance and resillience which could mean we are operating within multiple cloud providers. For managed and self deployed solutions then it really becomes a pick and choose for which is your cloud provider of choice, the aim here being that Glasswall's engineering team provide the components that fit all the major cloud providers that suit as many use cases as possible.

Glasswall's Rebuild SDK can process a file in-memory with no need to write the file, this means that for most of the resources we offer the file never leaves the serverless function other than the response to the request.

:::caution
Before you integrate Rebuild into your solution, be aware that file in the HTTP body only supports files up to 6MB due to a limitation in the request payload to AWS Lambda. If your use case deals with larger files, please use the input URL based pathway which currently supports files up to 30MB
:::caution

## Solution Overview

The serverless functionality offered by the cloud providers have clear similarities but also differences that shape the functionality that we offer. 

### AWS

AWS Lambda provides multiple triggers but the one most appropriate for providing these API resources is the HTTP trigger. This gives a very clean usage pattern of file-in file-out where the body of the HTTP request is the binary of the file within a multipart/form-data content type. Where this usage patten ends is when we exceed the maximum HTTP payload for a Lambda function - currently 6MB. 

 ![Figure1](/img/Rebuild-File-Architecture.png)

To bypass this limitation we have a second usage pattern which is to utilise pre-signed URL's to give the Lambda function authorised access to larger files (at launch files up to 30mb). In this pattern the file is placed in one of AWS's S3 buckets and a URL is generated that contains the authorisation required to access the file, this URL is then passed into the function which can then perform the required processing on the file. If (as is the case with Rebuild) the processing results in a new file, this file is placed in another S3 bucket which can be accessed via another signed URL.

The functionality is then accessed via API Gateway (in itself having a max request size of 10MB) which is secured via a Lambda Authoriser.

### Azure

When it comes to Azure the patterns are the same, it is the platform limits that change. Swapping Lambda for an Azure Function we still have access to an HTTP trigger but where the limit was 6MB - it is now 100MB. This means that the direct HTTP file-in file-out pattern becomes much more usable.

For larger payloads again a route using a pre-signed approach is available with Azure Blob Storage which allows files over 100MB to be processed.


 