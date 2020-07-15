---
title: Rebuild API
id: rebuild-api
sidebar_label: API
---

## Rebuild File Endpoint

### The Endpoint

<div class="api-details">
    <div class="api-details-left api-details-column">
        <p>This Endpoint takes a file in its request and rebuilds it with the Glasswall Engine. The binary content of the rebuilt file is returned. The Accept Header controls the format of the body.</p>
        <p>You can also specify a Glasswall Content Management Policy to change the individual content handling the engine takes for supported file types. </p>
        <p>When the file conforms to specification, the rebuilt file will be returned in the response.</p>
    </div>
    <div class="api-details-right  api-details-column">
        <div class="api-details-example">
            <div class="api-details-example-top">
            Endpoint
            </div>

```javascript
   POST /api/rebuild/file
```

</div>
    </div>
</div>

### Request Body

<div class="api-details">
    <div class="api-details-left api-details-column">
        <p>The request Content-Type is multipart/form-data.</p>
        <p>Two arguments are specified in the form, 'file' and a fully optional 'contentManagementPolicyJson'. </p>
        <p>The 'file' argument contains the raw content and the file name.</p>
        <p>The 'contentManagementPolicyJSON' argument is a JSON representation of the content management policy model (See section).</p>
    </div>
    <div class="api-details-right  api-details-column">
        <div class="api-details-example">
            <div class="api-details-example-top">
            Multipart Body Example:
            </div>
            

```javascript
-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="contentManagementFlagJson"

{
		"PdfContentManagement": {
			"Metadata": 0
		}
}
-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="file"; filename="test.doc"
Content-Type: application/octet-stream

Some data found inside the doc.

-----------------------------9051914041544843365972754266--
```

</div>
</div>
</div>

### Request Headers

<div class="api-details">
        <p>This endpoint has the following headers that can be set. </p>
        <ul>
            <li>Accept - This can be set to 'application/octet-stream'. If not set, a base64 representation of the rebuilt file will be returned instead of the binary content of the rebuilt file.</li>
            <li>Authorization - This is the JWT Token that you purchased. This must be sent in the request.</li>
            <li>Content-Type - This should be set to 'multipart/form-data', most languages will provide mechanisms to automatically populate this.</li>
        </ul>
</div>

## Rebuild Base64 Endpoint

### The Endpoint

<div class="api-details">
    <div class="api-details-left api-details-column">
        <p>This Endpoint takes the base64 representation of a file. It then rebuilds it with the Glasswall Engine. A base64 encoded version of the rebuilt file is returned. </p>
        <p>You can also specify a Glasswall Content Management Policy to change the individual content handling the engine takes for supported file types. </p>
        <p>When the file conforms to specification, the rebuilt file will be returned in the response base64 encoded.</p>
    </div>
    <div class="api-details-right  api-details-column">
        <div class="api-details-example">
            <div class="api-details-example-top">
            Endpoint
            </div>

```javascript
   POST /api/rebuild/base64
```

</div>
    </div>
</div>

### Request Body

<div class="api-details">
    <div class="api-details-left api-details-column">
        <p>The request Content-Type is application/json.</p>
        <p>Two arguments are specified in the JSON, 'Base64' and a fully optional 'ContentManagementFlags'. </p>
        <p>The 'Base64' argument contains the Base64 encoded contents of the input file.</p>
        <p>The 'ContentManagementFlags' field in the JSON is the content management policy model (See section).</p>
    </div>
    <div class="api-details-right  api-details-column">
        <div class="api-details-example">
            <div class="api-details-example-top">
            Multipart Body Example:
            </div>
            

```javascript

{
    "Base64": "The base 64 encoded representation of the file",
    "ContentManagementFlags": {
		"PdfContentManagement": {
            "Metadata": 0
        }
    }
}

```

</div>
</div>
</div>

### Request Headers

<div class="api-details">
        <p>This endpoint has the following headers that can be set. </p>
        <ul>
            <li>Authorization - This is the JWT Token that you purchased. This must be sent in the request.</li>
            <li>Content-Type - This should be set to 'application/json', most languages will provide mechanisms to automatically populate this.</li>
        </ul>
</div>

## Rebuild Url to Url Endpoint

### The Endpoint

<div class="api-details">
    <div class="api-details-left api-details-column">
        <p>This endpoint downloads a file located in the InputGetUrl parameter. It then rebuilds it with the Glasswall Engine. The rebuilt file is uploaded to a location specified by the OutputPutUrl parameter. </p>
        <p>You can also specify a Glasswall Content Management Policy to change the individual content handling the engine takes for supported file types. </p>
        <p>When the file conforms to specification, the rebuilt file will be returned in the response base64 encoded.</p>
    </div>
    <div class="api-details-right  api-details-column">
        <div class="api-details-example">
            <div class="api-details-example-top">
            Endpoint
            </div>

```javascript
   POST /api/rebuild
```

</div>
</div>
</div>


### Request Body

<div class="api-details">
    <div class="api-details-left api-details-column">
        <p>The request Content-Type is application/json </p>
        <p>Three arguments are specified in the JSON, 'InputGetUrl', 'OutputPutUrl' and a fully optional 'contentManagementPolicyJson'. </p>
        <p>The 'file' argument contains the raw content and the file name.</p>
        <p>The 'ContentManagementFlags' field in the JSON is the Content Management Policy model (See section).</p>
    </div>
    <div class="api-details-right  api-details-column">
        <div class="api-details-example">
            <div class="api-details-example-top">
            JSON Body Example:
            </div>
            

```javascript

{
    "InputGetUrl": "A link to the file to rebuild",
    "OutputPutUrl": "A link to the place to put the rebuilt file",
    "ContentManagementFlags": {
		"PdfContentManagement": {
            "Metadata": 0
        }
    }
}

```

</div>
</div>
</div>


### Request Headers

<div class="api-details">
        <p>This endpoint has the following headers that can be set. </p>
        <ul>
            <li>Authorization - This is the JWT Token that you purchased. This must be sent in the request.</li>
            <li>Content-Type - This should be set to 'application/json', most languages will provide mechanisms to automatically populate this.</li>
        </ul>
</div>

## API Resources

- Multipart/Form-Content - File in Http Payload
- Secure Url (S3)
