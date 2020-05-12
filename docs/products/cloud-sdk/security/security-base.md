---
title: Security
id: cloud-sdk-security
sidebar_label: Security
---

Rebuild API utilises AWS Lambda functions, Lambda is responsible for keeping software in the runtime and execution environment up to date, releasing new runtimes for new languages and frameworks, and deprecating runtimes when the underlying software is no longer supported.

The Lambda functions themselves are only able to be triggered via API Gateway which in itelf requires API Keys as part of a usage plan.

Files are processed in isolation as part of the serverless architecture, in that multiple files are not simultaneously processed by the same function.

The process of rebuilding a file does not requre it to be written to storage or leave the Lambda function other than the rebuilt file being returned in the response or posted to an output destination URL (which should follow the principal of least priviledge). For this reason the security footprint of the Rebuild API is small and inherits the security of the platform it resides on - AWS.