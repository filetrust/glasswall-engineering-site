(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(143)),o={title:"Security",id:"cloud-sdk-security",sidebar_label:"Security"},c={unversionedId:"products/cloud-sdk/security/cloud-sdk-security",id:"products/cloud-sdk/security/cloud-sdk-security",isDocsHomePage:!1,title:"Security",description:"Security Standards - AWS Benchmark",source:"@site/docs/products/cloud-sdk/security/security-base.md",slug:"/products/cloud-sdk/security/cloud-sdk-security",permalink:"/docs/products/cloud-sdk/security/cloud-sdk-security",version:"current",sidebar_label:"Security",sidebar:"someSidebar",previous:{title:"Error Glossary",permalink:"/docs/products/cloud-sdk/rebuild/rebuild-errors"},next:{title:"Python",permalink:"/docs/products/cloud-sdk/rebuild/code-samples/python-example"}},s=[{value:"Security Standards - AWS Benchmark",id:"security-standards---aws-benchmark",children:[]},{value:"Vulnerability Testing",id:"vulnerability-testing",children:[]},{value:"API Security",id:"api-security",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"security-standards---aws-benchmark"},"Security Standards - AWS Benchmark"),Object(a.b)("p",null,"The Glaswall Information Security team has ensured that our AWS premises are compliant with the CIS Amazon Web Services Foundations Benchmark. This is a document provided by CIS (Centre for Internet Security). CIS is a non-profit organisation that harnesses the power of a global IT community to safeguard public and private organizations against cyber threats. They are responsible for the CIS Controls\xae and CIS Benchmarks\u2122, globally recognized best practices for securing IT systems and data. You can find more about CIS on this ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cisecurity.org/about-us/"}),"link"),". The AWS Benchmark document is a guidance for configuring security options for a subset of Amazon Web Services. "),Object(a.b)("p",null,"The services included are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AWS Identity and Access Management (IAM)"),Object(a.b)("li",{parentName:"ul"},"AWS Config"),Object(a.b)("li",{parentName:"ul"},"AWS CloudTrail"),Object(a.b)("li",{parentName:"ul"},"AWS CloudWatch"),Object(a.b)("li",{parentName:"ul"},"AWS Simple Notification Service (SNS)"),Object(a.b)("li",{parentName:"ul"},"AWS Simple Storage Service (S3)"),Object(a.b)("li",{parentName:"ul"},"AWS VPC (Default)")),Object(a.b)("p",null,"We are frequently using AWS Services such as AWS GuardDuty and SecurityHub to monitor our AWS resources. "),Object(a.b)("p",null,"All our logs and metrics get analysed by DataDog which we use as a SOC (Security Operations Centre) and we get notifications of any suspicious activity. "),Object(a.b)("h2",{id:"vulnerability-testing"},"Vulnerability Testing"),Object(a.b)("p",null,"We are currently planning to organise penetration and vulnerability testing for our Rebuild Product. "),Object(a.b)("h2",{id:"api-security"},"API Security"),Object(a.b)("p",null,"Rebuild API utilises AWS Lambda functions, Lambda is responsible for keeping software in the runtime and execution environment up to date, releasing new runtimes for new languages and frameworks, and deprecating runtimes when the underlying software is no longer supported."),Object(a.b)("p",null,"The Lambda functions themselves are only able to be triggered via API Gateway which requires a JWT Token."),Object(a.b)("p",null,"Files are processed in isolation as part of the serverless architecture, in that multiple files are not simultaneously processed by the same function."),Object(a.b)("p",null,"The process of rebuilding a file does not requre it to be written to storage or leave the Lambda function other than the rebuilt file being returned in the response or posted to an output destination URL (which should follow the principal of least priviledge). For this reason the security footprint of the Rebuild API is small and inherits the security of the platform it resides on - AWS."))}l.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return y}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,y=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return r?i.a.createElement(y,c(c({ref:t},u),{},{components:r})):i.a.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);