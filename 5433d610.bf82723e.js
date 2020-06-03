(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(200)),i={title:"Secure URL Access",id:"using-secure-urls",sidebar_label:"Secured URLs"},s={id:"products/cloud-sdk/secure-url/using-secure-urls",title:"Secure URL Access",description:"One of the pathways of getting a files to be processed is by providing our endpoints with a URL with which the serverless function can get read only access to the file in question.",source:"@site/docs/products/cloud-sdk/secure-url/using-secure-urls.md",permalink:"/docs/products/cloud-sdk/secure-url/using-secure-urls",sidebar_label:"Secured URLs",sidebar:"someSidebar",previous:{title:"Authentication",permalink:"/docs/products/cloud-sdk/authentication/authentication-base"},next:{title:"Supported File Types",permalink:"/docs/products/cloud-sdk/cloud-sdk-supported-types"}},c=[{value:"AWS",id:"aws",children:[]},{value:"Azure",id:"azure",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of the pathways of getting a files to be processed is by providing our endpoints with a URL with which the serverless function can get read only access to the file in question."),Object(a.b)("p",null,"The benefit of providing files in these URLs is that you can own the storage locations, the files are streamed into the serverless function and processed in memory, any writing of the file is then only done to the destination provided by the output URL."),Object(a.b)("p",null,"The minimum requirement for the input URL is that a GET request can be performed that points to a file, this could be an image on Google images for example. A more usable solution would be to utilise the storage solutions offered by some of the cloud providers."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Getting the best processing time performance")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"With the Rebuild API components being hosted in AWS there is a clear advantage for using S3 buckets with this service. In addition to that, for the absolute peak processing performance it is advisable to have the bucket in the same AWS region as the endpoint you are using to process."),Object(a.b)("p",{parentName:"div"},"e.g. https://",Object(a.b)("span",null),"8oiyjy8w63.execute-api.",Object(a.b)("strong",{parentName:"p"},"us-west-2"),".amazonaws.com/Prod/api/rebuild "),Object(a.b)("p",{parentName:"div"},"This endpoint is in the us-west-2 region."),Object(a.b)("p",{parentName:"div"},"By matching the region the API is able to download & upload the target & rebuilt files much quicker than buckets not in the same region."))),Object(a.b)("h3",{id:"aws"},"AWS"),Object(a.b)("p",null,"AWS S3 offers the ability to create presigned URLs - A presigned URL is a URL that provides temporary access to a specific S3 object. Using the URL, a user can be permitted to READ or WRITE an object from / to the S3 bucket. "),Object(a.b)("p",null,"Further information on S3 presigned URLs can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html"}),"here"),"."),Object(a.b)("h3",{id:"azure"},"Azure"),Object(a.b)("p",null,'Azure Storage offers a similar set of functionality with its "Shared Access Signature" tokens where all the credentials required to access the private object are contained in the URL.'),Object(a.b)("p",null,"Further information on Azure Blob Storage SAS tokens can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview"}),"here"),"."))}l.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(h,s(s({ref:t},u),{},{components:n})):o.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);