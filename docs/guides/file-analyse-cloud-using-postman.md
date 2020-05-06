---
title: File Analysis - Using Postman

sidebar_label: Using Postman
---

Glasswall regenerates clean, safe and visually identical files in milliseconds, securing your organisation without compromise.

Glasswall's award winning d-FIRST SDK is now available as a cloud API File Analyse. If you are looking for an easy way to make your first request to the API, you are in luck as, this guide walks through making a request using Postman.

## API Key

Before we begin, we will need a valid Glasswall Cloud API key. If you are reading this you may already have one. If not, trial keys are free so please get in touch: <https://glasswallsolutions.com/contact/> or visit <https://glasswall-store.com/> to make a purchase.

## Postman --- API Development

In this guide we will be using Postman to make requests. Not to worry if you haven't used it before, it's free and easy to use. Let's download the Postman App and get on to writing our first request: <https://www.postman.com/>

## Analyse a File

With Postman open, let's start by clicking 'New' then 'Request'.

![](/img/docs/guides/postman-analysis/Analysis_Postman_2.png)

This will open a new request for us to populate.

![](/img/docs/guides/postman-analysis/Analysis_Postman_3.png)

Using the drop down on the left, change from a GET request to a POST request. And then input the Analyse Cloud API Direct Endpoint: <https://24dyhnzh5h.execute-api.eu-west-2.amazonaws.com/Beta/az/fileanalysis/analyse>

![](/img/docs/guides/postman-analysis/Analysis_Postman_4.png)

Now it's time to input the headers. Select 'Headers' in the ribbon and enter the following key/value pairs:

```
 Accept : */*
 Content-Type : Multipart/form-data
 x-api-key : Your Glasswall Cloud API Key
```

![](/img/docs/guides/postman-analysis/Analysis_Postman_5.png)

The final part of the request is to select the file to process. Click 'Body' and enter the key 'file'. Hover over the right-hand side of the field and wait for the drop down to appear. Select 'File'.

![](/img/docs/guides/postman-analysis/Analysis_Postman_6.png)

We're getting there... Let's find our test files. The API currently supports a maximum file size of 10MB. The supported file types are: Binary Office, Office XML, PDF, PNG, JPG and GIF.

![](/img/docs/guides/postman-analysis/Analysis_Postman_7.png)

Back to Postman, click the 'VALUE' field and then use file explorer to locate your test file.

![](/img/docs/guides/postman-analysis/Analysis_Postman_8.png)

Nice! We have setup our first request. Let's hit 'Send' and look at the response.

![](/img/docs/guides/postman-analysis/Analysis_Postman_9.png)

Congratulations! You have made your first request to the Glasswall API.

What does the response tell us? The Analyse Cloud API processes a file and returns an analysis report detailing:

-   Content items: Structures within the file.
-   Remedy items: Structures that deviated from the file types specification that Glasswall will repair.
-   Sanitisation Items: Active Content within the file that Glasswall will remove.
-   It also includes Issue Items, deviations from the file type specification that cannot be repaired, or content that does not apply to the specified content management policy.

![](/img/docs/guides/postman-analysis/Analysis_Postman_10.png)


For more information, please see our Swagger documentation below:

Swagger for Glasswall's Analyse API: [https://filetrust.github.io/product-saas-analyse/](https://filetrust.github.io/product-saas-analyse/#/)

If you like what you see and would like to learn more. Please get in touch.