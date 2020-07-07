---
title: Authentication
id: authentication-base
sidebar_label: Authentication
---

The Rebuild API currently authenticates via a Lambda Authorizer. 

Every incoming request to the API must contain a JWT token. API Gateway then verifies via the authorizer that it is a valid token.. If there is a match, API Gateway throttles the requests according to the plan's request limit and quota. Otherwise, it throws an InvalidKeyParameter exception. As a result, the caller receives a 401 Unauthorized response.

The JWT Token is passed in as the **Authorization** header of each request to the Rebuild API methods.