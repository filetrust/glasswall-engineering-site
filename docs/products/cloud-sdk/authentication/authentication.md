---
title: Authentication
id: authentication-base
sidebar_label: Authentication
---

The Rebuild API currently authenticates via the built in API Keys associated to the usage plans we have set in AWS API Gateway. 

Every incoming request to the API must contain an API key. API Gateway reads the key and compares it against the keys in the usage plan. If there is a match, API Gateway throttles the requests according to the plan's request limit and quota. Otherwise, it throws an InvalidKeyParameter exception. As a result, the caller receives a 403 Forbidden response.

The API key is passed in as the **X-API-Key** header of each request to the Rebuild API methods.

Soon after launch this is scheme will be replaced by a Lambda Authoriser which will provide a bearer token authentication strategy.