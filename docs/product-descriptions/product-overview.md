---
title: Rebuild API
sidebar_label: Overview
---

The Rebuild API provides developers the pathway to obtaining safe and secure files. It combines the battle hardened capabilities of our Rebuild SDK with the scalability and performance of a cloud solution.

The simplest way to start using is to purchase credentials from our [store](https://glasswall-store.com/) and go to one of our quickstarts ([Rebuild](https://engineering.glasswallsolutions.com/docs/products/cloud-sdk/rebuild/rebuild-quickstart)).

:::caution
Before you integrate Rebuild into your solution, be aware that file in the HTTP body only supports files up to 6MB due to a limitation in the request payload to AWS Lambda. If your use case deals with larger files, please use the input URL based pathway which currently supports files up to 30MB
:::caution

The Rebuild API resources come in 2 general pathways: Direct File & Secured URL.

For direct file, the binary data of the file is posted in the body of the http request where it is processed by and the result returned.

The limitation of this pathway is from the serverless computing platform we are using - AWS Lambda has a maximum payload of 6mb, if your use case deals with files within this limit then this is a great way to quickly get files rebuilt to known good.

If you know that this limit is too restrictive then the pathway for you is to pass a secured URL which supports files up to 30MB. An example of this is a signed S3 url, this provides time limited access to a file (see our FAQ section for the permissions required).

The rebuilt files are placed in an output storage location accessed by a secured URL. 




