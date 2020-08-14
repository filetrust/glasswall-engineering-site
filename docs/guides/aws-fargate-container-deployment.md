---
title: AWS Fargate Container Deployment

sidebar_label: AWS Fargate Deployment

keywords:
  - AWS
  - Fargate
  - ECR
  - ECS
  - ICAP
  - Docker
  - DevOps
  
description: How to deploy a docker container into AWS Fargate
---


# Creating a Cluster with Fargate Task Using the AWS CLI

This guide will walk through the steps necessary to deploy a Docker Container using the AWS Platform services. 

The example project being demonstrated is the [Glasswall ICAP Service](https://github.com/filetrust/c-icap). This service requires a single public port to be made available, 1344.

Once the Glasswall ICAP Service Docker image has been built it is pushed to an [Amazon Elastic Container Registry (ECR)](https://aws.amazon.com/ecr/). This is a fully managed Docker container registry service provided by AWS making it easy to store, manage and deploy container images.

Once the Docker container is available from the registry we can make use of the [Amazon Elastic Container Service (ECS)](https://aws.amazon.com/ecs/) to deploy the container using [AWS Fargate](https://aws.amazon.com/fargate/). AWS Fargate provides a serverless compute engine for containers. When setting up the ECS cluster we need a security group to be created that opens up port 1344, using [AWS Identity and Access Management (IAM)](https://aws.amazon.com/iam).

## Prerequisities
Access credentials to an [AWS Account](https://aws.amazon.com/)
[AWS Command Line Interface](https://aws.amazon.com/cli/)
Docker runtime

## Steps
- Create the container image
- Push the image to Amazon ECR
- Create an ECS Cluster
- Register a Task Definition
- Setup networking
- Create a Service

# Create the container image
Navigate to the folder containing the Dockerfile to be used. Create the image  using `docker build` (be sure to include the trailing '.')
```
docker build -t gw-icap:latest .
```

More detailed instructions are available in the [ICAP documentation](https://github.com/filetrust/c-icap/blob/master/Documentation/building_icap_docker_image.md).

# Push to Amazon ECR

The Elastic Container Registry (ECR) is a Docker container registry that is integrated with Amazon Elastic Container Service (ECS).

## Create the Image Registry

Using the AWS CLI we create a repository into which we will push the image.
```
aws ecr create-repository --repository-name icap-pilot --region eu-west-1

```

On successful creation of the registry the details are reported in JSON format.
```
{
    "repository": {
        "repositoryArn": "arn:aws:ecr:eu-west-1:123456789123:repository/icap-pilot",
        "registryId": "123456789123",
        "repositoryName": "icap-pilot",
        "repositoryUri": "123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot",
        "createdAt": "2020-07-08T11:39:59+01:00",
        "imageTagMutability": "MUTABLE",
        "imageScanningConfiguration": {
            "scanOnPush": false
        }
    }
}
```

## Push the Image

Using the `repositoryUri` in the JSON details, tag the local image
```
docker tag gw-icap:latest  123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot:latest
```

Authenticate Docker to the ECR registry with `get-login-password`. When passing the authentication token to the `docker login` command, use the value `AWS` for the username and specify the ECR URI.
```
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot
```

Now push the local image to the ECR repository
```
docker push 123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot:latest
```
Once the `push` is complete the image is available in the ECR

# Deploy to Fargate
## Create an ECS Cluster

To create a cluster, the only requirement is a unique name.
```
aws ecs create-cluster --cluster-name icap-pilot-cluster
```

## Register a Task Definition

The task definition requires that a role is provided for the `executionRoleArn`. The `ecsTaskExecutionRole` can be used here, it's ARN can be retrieved using the command
```
aws iam get-role --role-name ecsTaskExecutionRole
```

An excerpt from the returned JSON is shown here, with the required ARN
```
{
    "Role": {
        ...
        "RoleName": "ecsTaskExecutionRole",
        "RoleId": "AROAWCI7S4UZJICM7DVTZ",
        "Arn": "arn:aws:iam::10123456789:role/ecsTaskExecutionRole",
        ...
        }
    }
}
```

Create a file called `icap-pilot-task.json` and populate it with the following configuration. The value of the `executionRoleArn` uses the Role ARN identified in the previous step.
```
{
    "family": "icap-pilot", 
    "networkMode": "awsvpc", 
    "executionRoleArn": "arn:aws:iam::123456789123:role/ecsTaskExecutionRole",
    "containerDefinitions": [
        {
            "name": "icap-pilot", 
            "image": "123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot:latest", 
            "portMappings": [
                {
                    "containerPort": 1344, 
                    "hostPort": 1344, 
                    "protocol": "tcp"
                }
            ],            
            "essential": true
        }
    ], 
    "requiresCompatibilities": [
        "FARGATE"
    ], 
    "cpu": "256", 
    "memory": "2048"
}
```
Register the task with the following command
```
aws ecs register-task-definition --region eu-west-1 --cli-input-json file://icap-pilot-task.json
```

## Setup networking
The service creation requires network configuration to be specified. The networking is defined within Amazon Virtual Private Cloud (VPC),  a virtual network dedicated to your AWS account. 

The Default VPC can be used. The subnets should be within it. If one does not already exist, a new security group can be added that opens any necessary ports (for ICAP port 1344 is required). An example ICAP Security Group configuration is shown below.
```
{
            "Description": "Allow port 1344 input",
            "GroupName": "icap-pilot-security-group",
            "IpPermissions": [
                {
                    "FromPort": 1344,
                    "IpProtocol": "tcp",
                    "IpRanges": [
                        {
                            "CidrIp": "0.0.0.0/0"
                        }
                    ],
                    "Ipv6Ranges": [
                        {
                            "CidrIpv6": "::/0"
                        }
                    ],
                    "PrefixListIds": [],
                    "ToPort": 1344,
                    "UserIdGroupPairs": []
                }
            ],
            "OwnerId": "123456789123",
            "GroupId": "sg-0f07a8bc71b2cc92c",
            "IpPermissionsEgress": [
                {
                    "IpProtocol": "-1",
                    "IpRanges": [
                        {
                            "CidrIp": "0.0.0.0/0"
                        }
                    ],
                    "Ipv6Ranges": [],
                    "PrefixListIds": [],
                    "UserIdGroupPairs": []
                }
            ],
            "VpcId": "vpc-3adf3d43"
        }
```


## Create a Service

The service is created using the network configuration captured in the previous step. The `assignPublicIp=ENABLED` configuration is required to make service publically available.
```
aws ecs create-service --cluster icap-pilot-cluster  \
                        --service-name icap-pilot-service \
                        --task-definition icap-pilot:2  \
                        --desired-count 1 --launch-type "FARGATE" \
                        --network-configuration "awsvpcConfiguration={
                                subnets=[subnet-3da98675,subnet-e660f9bc], \
                                securityGroups=[sg-0f07a8bc71b2cc92c], \
                                assignPublicIp=ENABLED}"
```
The command output provides a JSON description of the new service.
```
{
    "service": {
        "serviceArn": "arn:aws:ecs:eu-west-1:123456789123:service/icap-pilot-service",
        "serviceName": "icap-pilot-service",
        "clusterArn": "arn:aws:ecs:eu-west-1:123456789123:cluster/icap-pilot-cluster",
        "loadBalancers": [],
        "serviceRegistries": [],
        "status": "ACTIVE",
        "desiredCount": 1,
        "runningCount": 0,
        "pendingCount": 0,
        "launchType": "FARGATE",
        "platformVersion": "LATEST",
        "taskDefinition": "arn:aws:ecs:eu-west-1:123456789123:task-definition/icap-pilot:2",
        "deploymentConfiguration": {
            "maximumPercent": 200,
            "minimumHealthyPercent": 100
        },
            {
                "id": "ecs-svc/1424237771430292179",
                "status": "PRIMARY",
                "taskDefinition": "arn:aws:ecs:eu-west-1:123456789123:task-definition/icap-pilot:2",                "desiredCount": 1,
                "pendingCount": 0,
                "runningCount": 0,
                "createdAt": "2020-07-08T19:33:11.508000+01:00",
                "updatedAt": "2020-07-08T19:33:11.508000+01:00",
                "launchType": "FARGATE",
                "platformVersion": "1.3.0",
                "networkConfiguration": {
                    "awsvpcConfiguration": {
                        "subnets": [
                            "subnet-3da98675",
                            "subnet-e660f9bc"
                        ],
                        "securityGroups": [
                            "sg-0f07a8bc71b2cc92c"
                        ],
                        "assignPublicIp": "ENABLED"
                    }
                }
            }
        ],
        "roleArn": "arn:aws:iam::123456789123:role/aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS",
        "events": [],
        "createdAt": "2020-07-08T19:33:11.508000+01:00",
        "placementConstraints": [],
        "placementStrategy": [],
        "networkConfiguration": {
            "awsvpcConfiguration": {
                "subnets": [
                    "subnet-3da98675",
                    "subnet-e660f9bc"
                ],
                "securityGroups": [
                    "sg-0f07a8bc71b2cc92c"
                ],
                "assignPublicIp": "ENABLED"
            }
        },
        "schedulingStrategy": "REPLICA",
        "enableECSManagedTags": false,
        "propagateTags": "NONE"
    }
}
```

The service will now be available to handle traffic.

# References
[Tutorial: Creating a Cluster with a Fargate Task Using the AWS CLI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_AWSCLI_Fargate.html)
[Environment variables to configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html?icmpid=docs_sso_user_portal)
[Configuring the AWS CLI to use AWS Single Sign-On](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)
[Securing credentials using AWS Secrets Manager with AWS Fargate](https://aws.amazon.com/blogs/compute/securing-credentials-using-aws-secrets-manager-with-aws-fargate/)
[Amazon ECR Registries : Registry Authentication](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html)