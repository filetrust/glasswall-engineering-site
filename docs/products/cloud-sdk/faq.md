---
title: FAQ
id: cloud-sdk-faq
sidebar_label: FAQ
---


### What if I send a file you do not support?

This is fine, in fact we would reccomend it! As part of the rebuild process the Rebuild SDK is used to detect the file type of the file, this is achieved by a structural analysis of the file and not through magic number or file extension. If this analysis determines the file to be an unsuported type the Rebuild API will return a status code of **422 Unprocessable Entity** with a response body indicating the file being unsupported. It is then up to the business logic of the application to decide how to proceed with this file.

By removing the burden from your application of deciding which files to send means that your business logic can remain the same even when we add an additional supported file type. It more importantly protects you from masquerading files where the extension states a type but the file structure is actually another.

### Are there files which you cannot rebuild?

Yes, the internal term for these files are "Humpty Dumpty" files, so broken they will never go back together again. Before the rebuild process takes place, the Rebuild SDK is used to generate an analysis report of the file. This analysis report will list (amongst other things) issues that cannot be remediated, if a file contains these issues then the Rebuild API will return a status code of **422 Unprocessable Entity** with a response body indicating the file had structural issues. It is then up to the business logic of the application to decide how to proceed with this file.

### Do you store the original files I send?
No files are stored in the rebuild proces beyond the regenerated file being persisted to an output folder. Files may be stored as part of future calls but that would only be when there was a clear benefit or use case to do so. All of the Rebuild API code is available on our [GitHub](https://github.com/filetrust).

### I am receiving 429 responses, what does this mean?
On the shared platform the amount and rate of calling our API is controlled by a usage plan. By default accounts on our shared platform are limited to 50 requests per second. Exceeding these rates results in throttling and the appearance of the 429 HTTP code response. If this is an issue, you might want to consider moving to our dedicated model where the full rate can be assigned.

### What is the maximum size of file you support?
We have two pathways into the Rebuild functionality - file in the HTTP request supports files up to 6mb, files via input URL can go up to 30mb. The URL pathway does not formally limit the file size, whether the file is processed larger than the limit is purely down to the memory consuption of rebuilding the file + the 29 second max timeout of the API Gateway.