module.exports = {
  someSidebar: {
	Products:
	[
		{
			"Cloud SDK": [
				"product-descriptions/product-overview",
				"guides/file-rebuild-how-it-works",
				"products/cloud-sdk/authentication/authentication-base",
				"products/cloud-sdk/cloud-sdk-supported-types",
				{
					"Rebuild": [
						"products/cloud-sdk/rebuild/rebuild-quickstart",
						"products/cloud-sdk/rebuild/rebuild-api",
						"products/cloud-sdk/rebuild/rebuild-content-management",
						"products/cloud-sdk/rebuild/rebuild-errors",
						"products/cloud-sdk/rebuild/rebuild-code-samples"
					]
				},
				"products/cloud-sdk/security/cloud-sdk-security",
				"products/cloud-sdk/cloud-sdk-faq"
			]
		}
	],
	Guides:
	[
	"documentation-and-guides",
		{
			"Rebuild" :[
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
			]
		}
	],
	"Use Cases":
	[
	]
  },
};
