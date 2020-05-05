---
title: File Rebuild using Postman
---

![Malicious to Benign](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_1.png)

Glasswall regenerates clean, safe and visually identical files in milliseconds, securing your organisation without compromise.

Glasswall's award winning d-FIRST SDK is now available as a cloud API with two flavours: Analyse and Rebuild. If you are looking for an easy way to make your first request to the API, you are in luck as, this guide walks through making a request using Postman.

## API Key

Before we begin, we will need a valid Glasswall Cloud API key. If you are reading this you may already have one. If not, trial keys are free so please get in touch: <https://glasswallsolutions.com/contact/> or visit <https://glasswall-store.com/> to make a purchase.

## Postman - API Development

In this guide we will be using Postman to make requests. Not to worry if you haven't used it before, it's free and easy to use. Let's download the Postman App and get on to writing our first request: <https://www.postman.com/>

## Analyse a File

With Postman open, let's start by clicking 'New' then 'Request'.

![Postman Request](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_2.png)

This will open a new request for us to populate.

![Postman Request to Populate](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_3.png)

Using the drop down on the left, change from a GET request to a POST request. And then input the Analyse Cloud API Direct Endpoint: <https://24dyhnzh5h.execute-api.eu-west-2.amazonaws.com/Beta/az/fileanalysis/analyse>

![Post with Endpoint](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_4.png)

Now it's time to input the headers. Select 'Headers' in the ribbon and enter the following key/value pairs:
```
Accept : */*
Content-Type : Multipart/form-data
x-api-key : <Your Glasswall Cloud API Key>
```

![Postman Request Header](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_5.png)

The final part of the request is to select the file to process. Click 'Body' and enter the key 'file'. Hover over the right-hand side of the field and wait for the drop down to appear. Select 'File'.

![Postman add Text Body](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_6.png)

We're getting there... Let's find our test files. The API currently supports a maximum file size of 10MB. The supported file types are: Binary Office, Office XML, PDF, PNG, JPG and GIF.

![Test File](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_7.png)

Back to Postman, click the 'VALUE' field and then use the file explorer to locate your test file.

![Postman Body](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_8.png)

Nice! We have setup our first request. Let's hit 'Send' and look at the response.

![Postman Send](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_9.png)

Congratulations! You have made your first request to the Glasswall API.

What does the response tell us? The Analyse Cloud API processes a file and returns an analysis report detailing:

-   Content items: Structures within the file.
-   Remedy items: Structures that deviated from the file types specification that Glasswall will repair.
-   Sanitisation Items: Active Content within the file that Glasswall will remove.

![](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_10.png)

Now let's regenerate our file by making a call to the Rebuild cloud API.

## Rebuild a File

Not much needs to be changed from above. Let's start by using the Rebuild API Direct Endpoint: <https://24dyhnzh5h.execute-api.eu-west-2.amazonaws.com/Beta/az/filerebuild/rebuild>

![](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_11.png)

This bit is nice and easy... The Body and Header configuration stay the same as the Analyse request.

Let's click 'Send' and take a look at the response.

The Rebuild Cloud API takes in a file and returns a protected file that has:

-   All structural deviations from the file types specifications remediated (fixed/repaired).
-   All Active Content within the file sanitised (removed).

![](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_12.png)

The details of all remediation and sanitisation actions can be found using the Analyse API detailed in the section above.

Let's turn this response into a usable file. Find the 'Save Response' drop down and click 'Save to a file'.

![](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_13.png)

There we have it! One Glasswall protected file, hot off the press.

## API Integration

While this is a nice way to test and get familiar with the Glasswall Cloud API, we want to create programs that do the heavy lifting. By clicking 'Code' in Postman after making a request...


![](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_14.png)

We can view a generated snippet that performs the request and there is a whole range of supported languages. Here we can see our Analyse request in curl.


![](/static/img/docs/guides/postman-rebuild/img/Rebuild_Postman_15.png)

For more information, please see our Swagger documentation below:

Swagger for Glasswall's Analyse API: [https://filetrust.github.io/product-saas-analyse/](https://filetrust.github.io/product-saas-analyse/#/)

Swagger for Glasswall's Rebuild API: [https://filetrust.github.io/product-saas-rebuild/](https://filetrust.github.io/product-saas-rebuild/#/)

If you like what you see and would like to learn more. Please get in touch.