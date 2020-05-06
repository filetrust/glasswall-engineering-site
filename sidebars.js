module.exports = {
  someSidebar: {
	Products:
	[
	"product-descriptions/product-overview",
		{
			"Rebuild": [
				"product-descriptions/description-rebuild",
				"guides/file-rebuild-how-it-works"
			],
			"File Type Detection": [
			
				"product-descriptions/description-file-type-detection",
				"guides/file-type-detection-how-it-works"
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
    Features: ["mdx"],
  },
};
