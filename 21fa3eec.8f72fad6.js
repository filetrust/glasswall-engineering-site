(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(210)),c={title:"AWS Fargate Container Deployment",sidebar_label:"AWS Fargate Deployment",keywords:["AWS","Fargate","ECR","ECS","ICAP","Docker","DevOps"],description:"How to deploy a docker container into AWS Fargate"},o={id:"guides/aws-fargate-container-deployment",isDocsHomePage:!1,title:"AWS Fargate Container Deployment",description:"How to deploy a docker container into AWS Fargate",source:"@site/docs/guides/aws-fargate-container-deployment.md",permalink:"/docs/guides/aws-fargate-container-deployment",sidebar_label:"AWS Fargate Deployment",sidebar:"someSidebar",previous:{title:"Set-up of CI/CD for GitHub Repository",permalink:"/docs/guides/ci-cd-pipeline"},next:{title:"Rules of Engagement",permalink:"/docs/careers/rules-of-engagement"}},s=[{value:"Prerequisities",id:"prerequisities",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Create the Image Registry",id:"create-the-image-registry",children:[]},{value:"Push the Image",id:"push-the-image",children:[]},{value:"Create an ECS Cluster",id:"create-an-ecs-cluster",children:[]},{value:"Register a Task Definition",id:"register-a-task-definition",children:[]},{value:"Setup networking",id:"setup-networking",children:[]},{value:"Create a Service",id:"create-a-service",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"creating-a-cluster-with-fargate-task-using-the-aws-cli"},"Creating a Cluster with Fargate Task Using the AWS CLI"),Object(i.b)("p",null,"This guide will walk through the steps necessary to deploy a Docker Container using the AWS Platform services. "),Object(i.b)("p",null,"The example project being demonstrated is the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/filetrust/c-icap"}),"Glasswall ICAP Service"),". This service requires a single public port to be made available, 1344."),Object(i.b)("p",null,"Once the Glasswall ICAP Service Docker image has be built it is pushed to an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/ecr/"}),"Amazon Elastic Container Registry (ECR)"),". This is a fully managed Docker container registry service provided by AWS making it easy to store, manage and deploy container images."),Object(i.b)("p",null,"Once the Docker container is available from the registry we can make use of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/ecs/"}),"Amazon Elastic Container Service (ECS)")," to deploy the container using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/fargate/"}),"AWS Fargate"),". AWS Fargate provides a serverless compute engine for containers. When setting up the ECS cluster we need a security group to be created that opens up port 1344, using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/iam"}),"AWS Identity and Access Management (IAM)"),"."),Object(i.b)("h2",{id:"prerequisities"},"Prerequisities"),Object(i.b)("p",null,"Access credentials to an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/"}),"AWS Account"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/cli/"}),"AWS Command Line Interface"),"\nDocker runtime"),Object(i.b)("h2",{id:"steps"},"Steps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create the container image"),Object(i.b)("li",{parentName:"ul"},"Push the image to Amazon ECR"),Object(i.b)("li",{parentName:"ul"},"Create an ECS Cluster"),Object(i.b)("li",{parentName:"ul"},"Register a Task Definition"),Object(i.b)("li",{parentName:"ul"},"Setup networking"),Object(i.b)("li",{parentName:"ul"},"Create a Service")),Object(i.b)("h1",{id:"create-the-container-image"},"Create the container image"),Object(i.b)("p",null,"Navigate to the folder containing the Dockerfile to be used. Create the image  using ",Object(i.b)("inlineCode",{parentName:"p"},"docker build")," (be sure to include the trailing '.')"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker build -t gw-icap:latest .\n")),Object(i.b)("p",null,"More detailed instructions are available in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/filetrust/c-icap/blob/master/Documentation/building_icap_docker_image.md"}),"ICAP documentation"),"."),Object(i.b)("h1",{id:"push-to-amazon-ecr"},"Push to Amazon ECR"),Object(i.b)("p",null,"The Elastic Container Registry (ECR) is a Docker container registry that is integrated with Amazon Elastic Container Service (ECS)."),Object(i.b)("h2",{id:"create-the-image-registry"},"Create the Image Registry"),Object(i.b)("p",null,"Using the AWS CLI we create a repository into which we will push the image."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"aws ecr create-repository --repository-name icap-pilot --region eu-west-1\n\n")),Object(i.b)("p",null,"On successful creation of the registry the details are reported in JSON format."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "repository": {\n        "repositoryArn": "arn:aws:ecr:eu-west-1:123456789123:repository/icap-pilot",\n        "registryId": "123456789123",\n        "repositoryName": "icap-pilot",\n        "repositoryUri": "123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot",\n        "createdAt": "2020-07-08T11:39:59+01:00",\n        "imageTagMutability": "MUTABLE",\n        "imageScanningConfiguration": {\n            "scanOnPush": false\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"push-the-image"},"Push the Image"),Object(i.b)("p",null,"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"repositoryUri")," in the JSON details, tag the local image"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker tag gw-icap:latest  123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot:latest\n")),Object(i.b)("p",null,"Authenticate Docker to the ECR registry with ",Object(i.b)("inlineCode",{parentName:"p"},"get-login-password"),". When passing the authentication toke to the ",Object(i.b)("inlineCode",{parentName:"p"},"docker login")," command, use the value ",Object(i.b)("inlineCode",{parentName:"p"},"AWS")," for the username and specify the ECR URI."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot\n")),Object(i.b)("p",null,"Now push the local image to the ECR repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker push 123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot:latest\n")),Object(i.b)("p",null,"Once the ",Object(i.b)("inlineCode",{parentName:"p"},"push")," is complete the image is available in the ECR"),Object(i.b)("h1",{id:"deploy-to-fargate"},"Deploy to Fargate"),Object(i.b)("h2",{id:"create-an-ecs-cluster"},"Create an ECS Cluster"),Object(i.b)("p",null,"To create a cluster, the only requirement is a unique name."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"aws ecs create-cluster --cluster-name icap-pilot-cluster\n")),Object(i.b)("h2",{id:"register-a-task-definition"},"Register a Task Definition"),Object(i.b)("p",null,"The task definition requires that a role is provided for the ",Object(i.b)("inlineCode",{parentName:"p"},"executionRoleArn"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"ecsTaskExecutionRole")," can be used here, it's ARN can be retrieved using the command"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"aws iam get-role --role-name ecsTaskExecutionRole\n")),Object(i.b)("p",null,"An excerpt from the returned JSON is shown here, with the required ARN"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "Role": {\n        ...\n        "RoleName": "ecsTaskExecutionRole",\n        "RoleId": "AROAWCI7S4UZJICM7DVTZ",\n        "Arn": "arn:aws:iam::10123456789:role/ecsTaskExecutionRole",\n        ...\n        }\n    }\n}\n')),Object(i.b)("p",null,"Create a file called ",Object(i.b)("inlineCode",{parentName:"p"},"icap-pilot-task.json")," and populate it with the following configuration. The value of the ",Object(i.b)("inlineCode",{parentName:"p"},"executionRoleArn")," uses the Role ARN identified in the previous step."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "family": "icap-pilot", \n    "networkMode": "awsvpc", \n    "executionRoleArn": "arn:aws:iam::123456789123:role/ecsTaskExecutionRole",\n    "containerDefinitions": [\n        {\n            "name": "icap-pilot", \n            "image": "123456789123.dkr.ecr.eu-west-1.amazonaws.com/icap-pilot:latest", \n            "portMappings": [\n                {\n                    "containerPort": 1344, \n                    "hostPort": 1344, \n                    "protocol": "tcp"\n                }\n            ],            \n            "essential": true\n        }\n    ], \n    "requiresCompatibilities": [\n        "FARGATE"\n    ], \n    "cpu": "256", \n    "memory": "2048"\n}\n')),Object(i.b)("p",null,"Register the task with the following command"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"aws ecs register-task-definition --region eu-west-1 --cli-input-json file://icap-pilot-task.json\n")),Object(i.b)("h2",{id:"setup-networking"},"Setup networking"),Object(i.b)("p",null,"The service creation requires network configuration to be specified. The networkgin is defined within Amazon Virtual Private Cloud (VPC),  a virtual network dedicated to your AWS account.."),Object(i.b)("p",null,"The Default VPC can be used. The subnets should be within it. If one does not already exist, a new security group can be added that opens any necessary ports (for ICAP port 1344 is required). An example ICAP Security Group configuration is shown below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n            "Description": "Allow port 1344 input",\n            "GroupName": "icap-pilot-security-group",\n            "IpPermissions": [\n                {\n                    "FromPort": 1344,\n                    "IpProtocol": "tcp",\n                    "IpRanges": [\n                        {\n                            "CidrIp": "0.0.0.0/0"\n                        }\n                    ],\n                    "Ipv6Ranges": [\n                        {\n                            "CidrIpv6": "::/0"\n                        }\n                    ],\n                    "PrefixListIds": [],\n                    "ToPort": 1344,\n                    "UserIdGroupPairs": []\n                }\n            ],\n            "OwnerId": "123456789123",\n            "GroupId": "sg-0f07a8bc71b2cc92c",\n            "IpPermissionsEgress": [\n                {\n                    "IpProtocol": "-1",\n                    "IpRanges": [\n                        {\n                            "CidrIp": "0.0.0.0/0"\n                        }\n                    ],\n                    "Ipv6Ranges": [],\n                    "PrefixListIds": [],\n                    "UserIdGroupPairs": []\n                }\n            ],\n            "VpcId": "vpc-3adf3d43"\n        }\n')),Object(i.b)("h2",{id:"create-a-service"},"Create a Service"),Object(i.b)("p",null,"The service is created using the network configuration captured in the previous step. The ",Object(i.b)("inlineCode",{parentName:"p"},"assignPublicIp=ENABLED")," configuration is required to make service publically available."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'aws ecs create-service --cluster icap-pilot-cluster  \\\n                        --service-name icap-pilot-service \\\n                        --task-definition icap-pilot:2  \\\n                        --desired-count 1 --launch-type "FARGATE" \\\n                        --network-configuration "awsvpcConfiguration={\n                                subnets=[subnet-3da98675,subnet-e660f9bc], \\\n                                securityGroups=[sg-0f07a8bc71b2cc92c], \\\n                                assignPublicIp=ENABLED}"\n')),Object(i.b)("p",null,"The command output provides a JSON description of the new service."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "service": {\n        "serviceArn": "arn:aws:ecs:eu-west-1:123456789123:service/icap-pilot-service",\n        "serviceName": "icap-pilot-service",\n        "clusterArn": "arn:aws:ecs:eu-west-1:123456789123:cluster/icap-pilot-cluster",\n        "loadBalancers": [],\n        "serviceRegistries": [],\n        "status": "ACTIVE",\n        "desiredCount": 1,\n        "runningCount": 0,\n        "pendingCount": 0,\n        "launchType": "FARGATE",\n        "platformVersion": "LATEST",\n        "taskDefinition": "arn:aws:ecs:eu-west-1:123456789123:task-definition/icap-pilot:2",\n        "deploymentConfiguration": {\n            "maximumPercent": 200,\n            "minimumHealthyPercent": 100\n        },\n            {\n                "id": "ecs-svc/1424237771430292179",\n                "status": "PRIMARY",\n                "taskDefinition": "arn:aws:ecs:eu-west-1:123456789123:task-definition/icap-pilot:2",                "desiredCount": 1,\n                "pendingCount": 0,\n                "runningCount": 0,\n                "createdAt": "2020-07-08T19:33:11.508000+01:00",\n                "updatedAt": "2020-07-08T19:33:11.508000+01:00",\n                "launchType": "FARGATE",\n                "platformVersion": "1.3.0",\n                "networkConfiguration": {\n                    "awsvpcConfiguration": {\n                        "subnets": [\n                            "subnet-3da98675",\n                            "subnet-e660f9bc"\n                        ],\n                        "securityGroups": [\n                            "sg-0f07a8bc71b2cc92c"\n                        ],\n                        "assignPublicIp": "ENABLED"\n                    }\n                }\n            }\n        ],\n        "roleArn": "arn:aws:iam::123456789123:role/aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS",\n        "events": [],\n        "createdAt": "2020-07-08T19:33:11.508000+01:00",\n        "placementConstraints": [],\n        "placementStrategy": [],\n        "networkConfiguration": {\n            "awsvpcConfiguration": {\n                "subnets": [\n                    "subnet-3da98675",\n                    "subnet-e660f9bc"\n                ],\n                "securityGroups": [\n                    "sg-0f07a8bc71b2cc92c"\n                ],\n                "assignPublicIp": "ENABLED"\n            }\n        },\n        "schedulingStrategy": "REPLICA",\n        "enableECSManagedTags": false,\n        "propagateTags": "NONE"\n    }\n}\n')),Object(i.b)("p",null,"The service will now be available to handle traffic."),Object(i.b)("h1",{id:"references"},"References"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_AWSCLI_Fargate.html"}),"Tutorial: Creating a Cluster with a Fargate Task Using the AWS CLI"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html?icmpid=docs_sso_user_portal"}),"Environment variables to configure the AWS CLI"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html"}),"Configuring the AWS CLI to use AWS Single Sign-On"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/blogs/compute/securing-credentials-using-aws-secrets-manager-with-aws-fargate/"}),"Securing credentials using AWS Secrets Manager with AWS Fargate"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html"}),"Amazon ECR Registries : Registry Authentication")))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);