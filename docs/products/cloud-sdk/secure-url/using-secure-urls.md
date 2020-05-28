---
title: Secure URL Access
id: using-secure-urls
sidebar_label: Secured URLs
---

One of the pathways of getting a files to be processed is by providing our endpoints with a URL with which the serverless function can get read only access to the file in question.


The benefit of providing files in these URLs is that you can own the storage locations, the files are streamed into the serverless function and processed in memory, any writing of the file is then only done to the destination provided by the output URL.


The minimum requirement for the input URL is that a GET request can be performed that points to a file, this could be an image on Google images for example. A more usable solution would be to utilise the storage solutions offered by some of the cloud providers.

:::info Getting the best processing time performance
With the Rebuild API components being hosted in AWS there is a clear advantage for using S3 buckets with this service. In addition to that, for the absolute peak processing performance it is advisable to have the bucket in the same AWS region as the endpoint you are using to process.

e.g. https://<span></span>8oiyjy8w63.execute-api.**us-west-2**.amazonaws.com/Prod/api/rebuild 

This endpoint is in the us-west-2 region.

By matching the region the API is able to download & upload the target & rebuilt files much quicker than buckets not in the same region.
:::info

### AWS

AWS S3 offers the ability to create presigned URLs - A presigned URL is a URL that provides temporary access to a specific S3 object. Using the URL, a user can be permitted to READ or WRITE an object from / to the S3 bucket. 

Further information on S3 presigned URLs can be found [here](https://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html).


### Azure

Azure Storage offers a similar set of functionality with its "Shared Access Signature" tokens where all the credentials required to access the private object are contained in the URL.

Further information on Azure Blob Storage SAS tokens can be found [here](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).