---
title: FAQ
id: cloud-sdk-faq
sidebar_label: FAQ
---


### What if I send a file you do not support?

As part of the rebuild process the Rebuild SDK is used to detect the file type of the file, this is achieved by a structural analysis of the file and not through magic number or file extension. If this analysis determines the file to be an unsuported type the Rebuild API will return a status code of **422 Unprocessable Entity** with a response body indicating the file being unsupported. It is then up to the business logic of the application to decide how to proceed with this file.

### Are there files which you cannot rebuild?

Yes, the internal term for these files are "Humpty Dumpty" files, so broken they will never go back together again. Before the rebuild process takes place, the Rebuild SDK is used to generate an analysis report of the file. This analysis report will list (amongst other things) issues that cannot be remediated, if a file contains these issues then the Rebuild API will return a status code of **422 Unprocessable Entity** with a response body indicating the file had structural issues. It is then up to the business logic of the application to decide how to proceed with this file.

### Do you store the original files I send?
No files are stored in the rebuild proces beyond the regenerated file being persisted to an output folder. Files may be stored as part of future calls but that would only be when there was a clear benefit or use case to do so. All of the Rebuild API code is available on our [GitHub](https://github.com/filetrust).