---
title: Content Management Policy
id: rebuild-content-management
sidebar_label: Content Management
---

## What is it?

The Glasswall Content Management Policy is used to define how files get processed by the Glasswall Engine. 

Each option in the Content Management Policy dictates how extensible content will get processed in a supported document.

## How it works

The Glasswall Content Management Policy is composed of flags for each supported file type of the Glasswall Engine.

Each Content Management Flag maps to extensible content found in a certain file type. For example Metadata in Word documents, or Acroforms in PDF.

A Content Management Flag has three options: Allow, Disallow and Sanitise. These are represented by an number.

Content Management Flags set to Allow will tell the Glasswall Engine not to process the content of that type when found while processing.

Sanitise will specify the behaviour of the Engine to remove the content when processing the file.

Disallow will result in the file not being rebuilt if the content is found.

The Rebuild APIs will accept partial configuration as the Content Management Flags are fully optional. Sanitise is used as the default option.

## Example Usage

<div class="api-details">
    <div class="api-details-left api-details-column">
        <p>Our Rebuild API endpoints take the content management policy in the form of a JSON string.</p>
        <p>Here are a list of permitted values for each of the content management flags:</p>
        <p>
            <p>0: Allow the content</p>
            <p>1: Sanitise (Default) the content</p>
            <p>2: Disallow the content</p>
        </p>
    </div>
        <div class="api-details-right  api-details-column">
        <div class="api-details-example">
            <div class="api-details-example-top">
            Allow all example:
            </div>

```javascript
{
		"PdfContentManagement": {
			"Metadata": 0,
			"InternalHyperlinks": 0,
			"ExternalHyperlinks": 0,
			"EmbeddedFiles": 0,
			"EmbeddedImages": 0,
			"Javascript": 0,
			"Acroform": 0,
			"ActionsAll": 0
		},
		"ExcelContentManagement": {
			"Metadata": 0,
			"InternalHyperlinks": 0,
			"ExternalHyperlinks": 0,
			"EmbeddedFiles": 0,
			"EmbeddedImages": 0,
			"DynamicDataExchange": 0,
			"Macros": 0,
			"ReviewComments": 0
		},
		"PowerPointContentManagement": {
			"Metadata": 0,
			"InternalHyperlinks": 0,
			"ExternalHyperlinks": 0,
			"EmbeddedFiles": 0,
			"EmbeddedImages": 0,
			"Macros": 0,
			"ReviewComments": 0
			
		},
		"WordContentManagement": {
			"Metadata": 0,
			"InternalHyperlinks": 0,
			"ExternalHyperlinks": 0,
			"EmbeddedFiles": 0,
			"EmbeddedImages": 0,
			"DynamicDataExchange": 0,
			"Macros": 0,
			"ReviewComments": 0
		}
}
```

</div>
</div>
</div>