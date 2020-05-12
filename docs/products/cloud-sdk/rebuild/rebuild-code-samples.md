---
title: Code Samples - Rebuild
id: rebuild-code-samples
sidebar_label: Code Samples
---

Code samples in multiple languages for all rebuild API resources

```c#
var client = new RestClient("https://j9ahrd7mog.execute-api.us-west-2.amazonaws.com/Prod/api/rebuild/file");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("x-api-key", "YOUR-API-KEY-HERE");
request.AddHeader("Accept", "application/octet-stream");
request.AddFile("file", "CalcTest.xls");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```python
import requests

url = "https://j9ahrd7mog.execute-api.us-west-2.amazonaws.com/Prod/api/rebuild/file"

payload = {}
files = [
  ('file', open('CalcTest.xls','rb'))
]
headers = {
  'x-api-key': 'YOUR-API-KEY-HERE',
  'Accept': 'application/octet-stream'
}

response = requests.request("POST", url, headers=headers, data = payload, files = files)
```