---
title: C# .Net Core
sidebar_label: C#
---

The following code snippets are examples of calling the Rebuild API using C#. The System libraries are used to execute calls to the API. Newtonsoft JSON nuget is used for the serialisation and deserialisation of models.

## api/rebuild/base64
​
In this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags.

The rebuilt file is returned as Base64, decoded by the client and written to disk.

```csharp
using System;
using System.Globalization;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace RebuildAPI.Example
{
    public class Program
    {
        private const string jwtToken = "YOUR JWT TOKEN";
        private const string inputFilePath = "PATH TO FILE TO BE REBUILT";
        private const string outputFilePath = "PATH TO WRITE REBUILT FILE";
        
        public static void Main(string[] args)
        {
            RebuildAsync().GetAwaiter().GetResult();
        }

        private static async Task RebuildAsync()
        {
            using (var client = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Post, "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/base64");
                request.Headers.Add("Authorization", jwtToken);

                var inputFile = File.ReadAllBytes(inputFilePath);
                var base64File = Convert.ToBase64String(inputFile);
                var body = JsonConvert.SerializeObject(new
                {
                    Base64 = base64File,
                    ContentManagementFlags = new
                    {
                        PdfContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            Javascript = 0,
                            Acroform = 0,
                            ActionsAll = 0
                        },
                        ExcelContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            DynamicDataExchange = 0,
                            Macros = 0,
                            ReviewComments = 0
                        },
                        PowerPointContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            Macros = 0,
                            ReviewComments = 0
                        },
                        WordContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            DynamicDataExchange = 0,
                            Macros = 0,
                            ReviewComments = 0
                        }
                    }
                });

                using (var content = new StringContent(body, Encoding.UTF8, "application/json"))
                {
                    request.Content = content;

                    using (var message = await client.SendAsync(request, CancellationToken.None))
                    {
                        var rebuiltFileBase64 = await message.Content.ReadAsStringAsync();
                        var rebuiltFile = Convert.FromBase64String(rebuiltFileBase64);
                        File.WriteAllBytes(outputFilePath, rebuiltFile);
                    }
                }
            }
        }
    }
}
```

## api/rebuild

In this example a file is downloaded from an input URL with a GET operation and its contents are rebuilt. The rebuilt file is then uploaded to the specified output URL using a PUT operation.

```csharp

using System;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace RebuildAPI.Example
{
    public class Program
    {
        private const string jwtToken = "YOUR JWT TOKEN";
        private const string inputGetUrl = "A Url to the file you want to rebuild";
        private const string ouputPutUrl = "A url you want the rebuilt file to be written to using a HTTP PUT operation";
    
        public static void Main()
        {
            RebuildAsync().GetAwaiter().GetResult();
        }

        private static async Task RebuildAsync()
        {
            using (var client = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Post, "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild");
                request.Headers.Add("Authorization", jwtToken);

                var body = JsonConvert.SerializeObject(new
                {
                    InputGetUrl = inputGetUrl,
                    OutputPutUrl = ouputPutUrl,
                    ContentManagementFlags = new
                    {
                        PdfContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            Javascript = 0,
                            Acroform = 0,
                            ActionsAll = 0
                        },
                        ExcelContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            DynamicDataExchange = 0,
                            Macros = 0,
                            ReviewComments = 0
                        },
                        PowerPointContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            Macros = 0,
                            ReviewComments = 0
                        },
                        WordContentManagement = new
                        {
                            Metadata = 0,
                            InternalHyperlinks = 0,
                            ExternalHyperlinks = 0,
                            EmbeddedFiles = 0,
                            EmbeddedImages = 0,
                            DynamicDataExchange = 0,
                            Macros = 0,
                            ReviewComments = 0
                        }
                    }
                });

                using (var content = new StringContent(body, Encoding.UTF8, "application/json"))
                {
                    request.Content = content;

                    using (var message = await client.SendAsync(request, CancellationToken.None))
                    {
                        Console.WriteLine(message.StatusCode);
                        Thread.Sleep(3000);
                    }
                }
            }
        }
    }
}

```


## api/rebuild/file

In this example the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'. The content management flags are serialised and sent as part of the form.

The rebuilt file contents are returned to the client and written to disk.

```c#

using System;
using System.Globalization;
using System.IO;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace RebuildAPI.Example
{
	public class Program
    {
        private const string jwtToken = "YOUR JWT TOKEN";
        private const string inputFilePath = "PATH TO FILE TO BE REBUILT";
        private const string outputFilePath = "PATH TO WRITE REBUILT FILE";

        private const string contentManagementPolicy = @"{
		""PdfContentManagement"": {
			""Metadata"": 0,
			""InternalHyperlinks"": 0,
			""ExternalHyperlinks"": 0,
			""EmbeddedFiles"": 0,
			""EmbeddedImages"": 0,
			""Javascript"": 0,
			""Acroform"": 0,
			""ActionsAll"": 0
		},
		""ExcelContentManagement"": {
			""Metadata"": 0,
			""InternalHyperlinks"": 0,
			""ExternalHyperlinks"": 0,
			""EmbeddedFiles"": 0,
			""EmbeddedImages"": 0,
			""DynamicDataExchange"": 0,
			""Macros"": 0,
			""ReviewComments"": 0
		},
		""PowerPointContentManagement"": {
			""Metadata"": 0,
			""InternalHyperlinks"": 0,
			""ExternalHyperlinks"": 0,
			""EmbeddedFiles"": 0,
			""EmbeddedImages"": 0,
			""Macros"": 0,
			""ReviewComments"": 0
			
		},
		""WordContentManagement"": {
			""Metadata"": 0,
			""InternalHyperlinks"": 0,
			""ExternalHyperlinks"": 0,
			""EmbeddedFiles"": 0,
			""EmbeddedImages"": 0,
			""DynamicDataExchange"": 0,
			""Macros"": 0,
			""ReviewComments"": 0
		}
	    }";

        public static void Main(string[] args)
        {
            RebuildAsync().GetAwaiter().GetResult();
        }

        private static async Task RebuildAsync()
        {
            using (var client = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Post, "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file");
                request.Headers.Add("Accept", "application/octet-stream");
                request.Headers.Add("Authorization", jwtToken);
				
                using (var content = new MultipartFormDataContent("Boundary----" + DateTime.Now.ToString(CultureInfo.InvariantCulture)))
                {
                    content.Add(new ByteArrayContent(File.ReadAllBytes(inputFilePath)), "file", "/" + inputFilePath);
                    content.Add(new StringContent(contentManagementPolicy), "contentManagementFlagJson");
                    request.Content = content;

                    using (var message = await client.SendAsync(request, CancellationToken.None))
                    {
                        var rebuiltFile = await message.Content.ReadAsByteArrayAsync();
						File.WriteAllBytes(outputFilePath, rebuiltFile);
                    }
                }
            }
        }
    }
}

```