(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),o=(r(0),r(201)),c={title:"Code Samples - Rebuild",id:"rebuild-code-samples",sidebar_label:"Code Samples"},l={id:"products/cloud-sdk/rebuild/rebuild-code-samples",title:"Code Samples - Rebuild",description:"Code samples in multiple languages for all rebuild API resources",source:"@site/docs/products/cloud-sdk/rebuild/rebuild-code-samples.md",permalink:"/docs/products/cloud-sdk/rebuild/rebuild-code-samples",sidebar_label:"Code Samples"},i=[],s={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Code samples in multiple languages for all rebuild API resources"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c#"}),'var client = new RestClient("https://j9ahrd7mog.execute-api.us-west-2.amazonaws.com/Prod/api/rebuild/file");\nclient.Timeout = -1;\nvar request = new RestRequest(Method.POST);\nrequest.AddHeader("x-api-key", "YOUR-API-KEY-HERE");\nrequest.AddHeader("Accept", "application/octet-stream");\nrequest.AddFile("file", "CalcTest.xls");\nIRestResponse response = client.Execute(request);\nConsole.WriteLine(response.Content);\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import requests\n\nurl = \"https://j9ahrd7mog.execute-api.us-west-2.amazonaws.com/Prod/api/rebuild/file\"\n\npayload = {}\nfiles = [\n  ('file', open('CalcTest.xls','rb'))\n]\nheaders = {\n  'x-api-key': 'YOUR-API-KEY-HERE',\n  'Accept': 'application/octet-stream'\n}\n\nresponse = requests.request(\"POST\", url, headers=headers, data = payload, files = files)\n")))}u.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);