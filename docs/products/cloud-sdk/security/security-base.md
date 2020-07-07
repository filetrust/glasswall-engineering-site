---
title: Security
id: cloud-sdk-security
sidebar_label: Security
---

## Security Standards - AWS Benchmark

The Glaswall Information Security team has ensured that our AWS premises are compliant with the CIS Amazon Web Services Foundations Benchmark. This is a document provided by CIS (Centre for Internet Security). CIS is a non-profit organisation that harnesses the power of a global IT community to safeguard public and private organizations against cyber threats. They are responsible for the CIS Controls® and CIS Benchmarks™, globally recognized best practices for securing IT systems and data. You can find more about CIS on this [link](https://www.cisecurity.org/about-us/). The AWS Benchmark document is a guidance for configuring security options for a subset of Amazon Web Services. 

The services included are:
- AWS Identity and Access Management (IAM)
- AWS Config
- AWS CloudTrail
- AWS CloudWatch
- AWS Simple Notification Service (SNS)
- AWS Simple Storage Service (S3)
- AWS VPC (Default)

We are frequently using AWS Services such as AWS GuardDuty and SecurityHub to monitor our AWS resources. 

All our logs and metrics get analysed by DataDog which we use as a SOC (Security Operations Centre) and we get notifications of any suspicious activity. 

## Vulnerability Testing

We are currently planning to organise penetration and vulnerability testing for our Rebuild Product. 

## API Security

Rebuild API utilises AWS Lambda functions, Lambda is responsible for keeping software in the runtime and execution environment up to date, releasing new runtimes for new languages and frameworks, and deprecating runtimes when the underlying software is no longer supported.

The Lambda functions themselves are only able to be triggered via API Gateway which requires a JWT Token.

Files are processed in isolation as part of the serverless architecture, in that multiple files are not simultaneously processed by the same function.

The process of rebuilding a file does not requre it to be written to storage or leave the Lambda function other than the rebuilt file being returned in the response or posted to an output destination URL (which should follow the principal of least priviledge). For this reason the security footprint of the Rebuild API is small and inherits the security of the platform it resides on - AWS.



