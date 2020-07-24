module.exports = {
	someSidebar: {
		Products:
			[
				{
					"Rebuild API": [
						"product-descriptions/product-overview",
						"guides/file-rebuild-how-it-works",
						"products/cloud-sdk/authentication/authentication-base",
						"products/cloud-sdk/secure-url/using-secure-urls",
						"products/cloud-sdk/cloud-sdk-supported-types",
						{
							"Rebuild": [
								{
									"AWS": [
										"products/cloud-sdk/rebuild/rebuild-quickstart",
										"products/cloud-sdk/architecture/rebuild-architecture",
										"products/cloud-sdk/rebuild/rebuild-api",
										"products/cloud-sdk/rebuild/rebuild-content-management",
										"products/cloud-sdk/rebuild/rebuild-errors",
										"products/cloud-sdk/security/cloud-sdk-security",
										{
											"Code Samples": [
												"products/cloud-sdk/rebuild/code-samples/python-example",
												"products/cloud-sdk/rebuild/code-samples/nodejs-example",
												"products/cloud-sdk/rebuild/code-samples/csharp-example",
											]
										}
									],
								},
								{
									"Azure (Coming Soon)": [
									]
								}
							]
						},
						"products/cloud-sdk/sample-files",
						"products/cloud-sdk/cloud-sdk-faq"
					]
				}
			],
		Security: 
			["GW_Security/Security_Main"],
		"How-To's":
			[
				{
					"CI/CD": [
						"guides/ci-cd-pipeline"
					],
                    "ICAP": [
                        "guides/aws-fargate-container-deployment"
                    ],
					/* "Rebuild" :[
						"guides/file-rebuild-api-using-aws-sam",	
						"guides/file-rebuild-cloud-using-postman",				
					],
					"Analysis" :[
						"guides/file-analyse-using-aws-sam",			
					],
					"File Type Detection" :[
						"guides/file-type-detection-using-aws-sam",
					],
					"Security" :[
						"guides/aws-customer-authoriser-api-authorisation-and-access"
					] */
				},
				/* {
					"Use Cases": [
						"use-cases/Overview",
						{
							"File Drop": [
								"use-cases/file-drop/Overview"
							],

							"AWS S3 To S3 Trigger": [
								"use-cases/s3-to-s3-rebuild/Overview"
							]
						}
					]
				} */
			],
		"Careers":
		[
			"careers/rules-of-engagement",
			{
				type: 'link',
				label: "Work for Glasswall",
				href: "http://careers.glasswallsolutions.com/"
			}
		]
	},
};
