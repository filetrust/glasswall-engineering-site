---
title: File Rebuild - Using Postman

sidebar_label: Using Postman
---


![](/img/docs/guides/postman-rebuild/Rebuild_Postman_1.png)

Glasswall regenerates clean, safe and visually identical files in milliseconds, securing your organisation without compromise.

Glasswall's award winning d-FIRST SDK is now available as a cloud API File Rebuild. If you are looking for an easy way to make your first request to the API, you are in luck as, this guide walks through making a request using Postman.

## API Key

Before we begin, we will need a valid Glasswall Cloud API key. If you are reading this you may already have one. If not, trial keys are free so please get in touch: <https://glasswallsolutions.com/contact/> or visit <https://glasswall-store.com/> to make a purchase.


## Postman --- API Development

In this guide we will be using Postman to make requests. Not to worry if you haven't used it before, it's free and easy to use. Let's download the Postman App and get on to writing our first request: <https://www.postman.com/>

## Rebuild a File

With Postman open, let's start by clicking 'New' then 'Request'.

![Postman Request](/img/docs/guides/postman-rebuild/Rebuild_Postman_2.png)

This will open a new request for us to populate.

![Postman Request to Populate](/img/docs/guides/postman-rebuild/Rebuild_Postman_3.png)

Using the drop down on the left, change from a GET request to a POST request. And then input the Rebuild API Direct Endpoint: <https://24dyhnzh5h.execute-api.eu-west-2.amazonaws.com/Beta/az/filerebuild/rebuild>


Now it's time to input the headers. Select 'Headers' in the ribbon and enter the following key/value pairs:

```
Accept : */*
Content-Type : Multipart/form-data
x-api-key : Your Glasswall Cloud API Key

```

![Postman Request Header](/img/docs/guides/postman-rebuild/Rebuild_Postman_5.png)

The final part of the request is to select the file to process. Click 'Body' and enter the key 'file'. Hover over the right-hand side of the field and wait for the drop down to appear. Select 'File'.

![Postman add Text Body](/img/docs/guides/postman-rebuild/Rebuild_Postman_6.png)

We're getting there... Let's find our test files. The API currently supports a maximum file size of 10MB. The supported file types are: Binary Office, Office XML, PDF, PNG, JPG and GIF.

![Test File](/img/docs/guides/postman-rebuild/Rebuild_Postman_7.png)

Back to Postman, click the 'VALUE' field and then use file explorer to locate your test file.

![Postman Body](/img/docs/guides/postman-rebuild/Rebuild_Postman_8.png)

Nice! We have setup our first request. Let's hit 'Send' and look at the response.

![Postman Send](/img/docs/guides/postman-rebuild/Rebuild_Postman_11.png)

The Rebuild Cloud API takes in a file and returns a protected file that has:

-   All structural deviations from the file types specifications remediated (fixed/repaired).
-   All Active Content within the file sanitised (removed).

![](/img/docs/guides/postman-rebuild/Rebuild_Postman_12.png)

The details of all remediation and sanitisation actions can be found using the Analyse API detailed in Analysis Using Postman.

Let's turn this response into a usable file. Find the 'Save Response' drop down and click 'Save to a file'.

![Save File](/img/docs/guides/postman-rebuild/Rebuild_Postman_13.png)

There we have it! One Glasswall protected file, hot off the press.

## API Integration

While this is a nice way to test and get familiar with the Glasswall Cloud API, we want to create programs that do the heavy lifting. By clicking 'Code' in Postman after making a request...


![Snippet Code](/img/docs/guides/postman-rebuild/Rebuild_Postman_14.png)

We can view a generated snippet that performs the request and there is a whole range of supported languages. Here we can see our Analyse request in curl.


![Generate Code using CURL](/img/docs/guides/postman-rebuild/Rebuild_Postman_15.png)

For more information, please see our Swagger documentation below:

Swagger for Glasswall's Rebuild API: [https://filetrust.github.io/product-saas-rebuild/](https://filetrust.github.io/product-saas-rebuild/#/)

If you like what you see and would like to learn more. Please get in touch.