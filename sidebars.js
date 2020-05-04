module.exports = {
  someSidebar: {
	Products:[
		"product-descriptions/description-rebuild", "product-descriptions/description-file-type-detection"],
	Guides:[
	"documentation-and-guides",
		{
			"Rebuild" :[
				"guides/file-rebuild-api-using-aws-sam",			
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
