---
title: AWS Custom Authorizer - API Authorization and Access Proposal – 2 Step solution (recommended)
---

# Background and Problem

Currently, we are using AWS API Gateway usage plans for gaining access to a hosted amazon resource we offer. This approach has negative implications which is why I have produced this solution which is the more secure and recommended way of authenticating a user to gain access to an API.

Some of the main disadvantages to the current way which we are authenticating users to access our APIs and invoke our products are:

- It is not the recommended approach by AWS. &quot;Don&#39;t rely on API keys as your only means of authentication and authorization for your APIs&quot; (AWS).
- If a single user gets access to a valid API key which is used across multiple APIs then the user can have access to multiple APIs.
- We are currently relying on usage plans which allows for a throttle and quota to be set, but this is not a viable and long-lasting solution as the quota will auto renew. The problem here is if a user purchases 50 credits and gets an API key, then they will have 50 credits for life and not one off!

# Solution Overview

This document will provide a solution which can be used across all products for customers accessing our products which are hosted on AWS in a safe and secure way.

After carrying out extensive research, I have learnt about a very common and effective approach that will enable us to be able to maintain user access in a centralised location (DB) and will eliminate the blockers we face with usage plans, the main being the lack of capability to have a one of API key. As the quota works on a monthly basis.

The AWS services this solution will make use of are as follows:

- S3
- Lambda
- API Gateway 
  - Lambda Authorizer
- SES
- DynamoDB (can be Amazon ElastiCache or DynamoDB, Google Cloud Datastore, etc.)

## Useful resources

Here are some of the resources which I extracted and found very useful from my research:

- [https://www.youtube.com/watch?v=-0EG17oVxV0&amp;feature=youtu.be](https://www.youtube.com/watch?v=-0EG17oVxV0&amp;feature=youtu.be) – A brief video from AWS showing a way of authorizing with JWT. Similar to my suggestion below, but my suggestion is custom to our needs.
- [https://serverless.com/blog/strategies-implementing-user-authentication-serverless-applications/](https://serverless.com/blog/strategies-implementing-user-authentication-serverless-applications/) - Very good article from an architect at serverless which talks about the pros and cons of DB and JSON Web Tokens.
- [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) - This is on the AWS documentation which talks about usage plans and states how it is not recommended as an only means of authorisation

# User Flows

Below are 3 flows which present how this new form of authorisation works:


![custom-authorizer-flow1](https://github.com/filetrust/glasswall-engineering-site/blob/master/docs/guides/img/custom-authorizer-flow1-purchase-from-store.png)

## User Purchases a product from store:

1. User purchases a product from Shopify.
2. An event gets triggered from Zapier which gets the username/email/product/quantity(credits) invokes an API with these details.
3. The Lambda adds or updates an entry with the information retrieved from the users purchase. The table will include details such as user access credentials (identifiers that we generate), products (each product listed), products credits (credits for each product to keep track of how many the user purchased).
4. Amazon SES is invoked with access credentials which the user will need to generate a temporary JWT.
5. User receives an email.




![custom-authorizer-flow2](https://github.com/filetrust/glasswall-engineering-site/blob/master/docs/guides/img/custom-authorizer-flow2-generate-token-from-access-credentials.png)

## User generates JWT using the access credentials emails to them

1. The user invokes the API the generate the JWT providing the access credentials as query string parameters.
2. The Lambda query&#39;s the database to get the user information based on the credentials provided.
3. The Lambda creates the JWT.
4. The JWT is returned to the user as a JSON response.




![custom-authorizer-flow3](https://github.com/filetrust/glasswall-engineering-site/blob/master/docs/guides/img/custom-authorizer-flow3-lambda-authoriser.png)

## User invokes the product API endpoint

1. The user invokes the product API endpoint sending through the JWT as a header (the same way x-api-key is provided).
2. The Lambda will then validate the token:
  1. Decode JWT
  2. Query DB to see if the user has permission and credits to access the API endpoint.
3. If the token is valid, a policy is created which is set to execute::allow, otherwise execute::deny.
4. Then, the flow will either continue to execute the product Lambda, or deny the user access and not execute the product Lambda.

# Advantages of this approach:

- Centralized authentication solution to be used across all application
  - If our authentication approach changes, it will require a change only in a single location
  - We can make use of JWT tokens with a short expiry time to ensure better security
  - We will maintain a database with all data relevant to us (e.g. credits available)
    - This also accommodates for scenarios where the user invoked an API in error or one of our APIs returning an error (caused by code). We will be able to quickly modify the available credits for the customer