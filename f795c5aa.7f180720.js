(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(145)),i={title:"ICAP Overview",id:"icap-overview"},c={unversionedId:"products/icap-resource/icap/icap-overview",id:"products/icap-resource/icap/icap-overview",isDocsHomePage:!1,title:"ICAP Overview",description:"ICAP Introduction",source:"@site/docs/products/icap-resource/icap/overview.md",slug:"/products/icap-resource/icap/icap-overview",permalink:"/docs/products/icap-resource/icap/icap-overview",version:"current"},s=[{value:"ICAP Introduction",id:"icap-introduction",children:[]},{value:"Terminology",id:"terminology",children:[]},{value:"Request Modification",id:"request-modification",children:[]},{value:"Service Location",id:"service-location",children:[]},{value:"References",id:"references",children:[]}],l={toc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"icap-introduction"},"ICAP Introduction"),Object(a.b)("p",null,"The Internet Content Adaptation Protocol (ICAP) is defined in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3507"}),"RFC 3507"),". "),Object(a.b)("p",null,'The protocol is aimed at providing simple object-based content vectoring for HTTP services. ICAP is, in essence, a lightweight protocol for executing a "remote procedure call" on HTTP messages. It allows ICAP clients to pass HTTP messages to ICAP servers for some sort of transformation or other processing ("adaptation"). The server executes its transformation service on messages and sends back responses to the client, usually with modified messages. Typically, the adapted messages are either HTTP requests or HTTP responses. '),Object(a.b)("h2",{id:"terminology"},"Terminology"),Object(a.b)("p",null,"The following definitions are a sub-set of the terminlogy used in the RFC. They are provided here as a convienience to the reader.\n",Object(a.b)("em",{parentName:"p"},"client"),": A program that establishes connections for the purpose of sending requests."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"origin server"),": The server on which a given resource resides or is to be created."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"surrogate"),": A gateway co-located with an origin server, or at a different point in the network, delegated the authority to operate on behalf of, and typically working in close co-operation with, one or more origin servers. "),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ICAP Resource"),": Similar to an HTTP resource, but the URI refers to an ICAP service that performs adaptations of HTTP messages."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ICAP Server"),": Similar to an HTTP server, except that the application services ICAP requests."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ICAP Client"),": A program that establishes connections to ICAP servers for the purpose of sending requests. An ICAP client is often, but not always, a surrogate acting on behalf of a user."),Object(a.b)("h2",{id:"request-modification"},"Request Modification"),Object(a.b)("p",null,'In a "request modification" the ICAP Client sends an HTTP Request to an ICAP Server. '),Object(a.b)("p",null,Object(a.b)("img",{alt:"Basic Request Modification Sequence",src:r(228).default})),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The request is sent from the client to the surrogate, for an object on the origin server."),Object(a.b)("li",{parentName:"ol"},"The ICAP Client in the surrogate sends a REQMOD messages the ICAP Server."),Object(a.b)("li",{parentName:"ol"},"The ICAP Server uses the service specified in the URI to process incoming request.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The ICAP Resource will leave the Request body unchanged OR"),Object(a.b)("li",{parentName:"ul"},"The ICAP Resource will modify the Request body OR"),Object(a.b)("li",{parentName:"ul"},"The ICAP Resource will return an error."))),Object(a.b)("li",{parentName:"ol"},"The ICAP Client submits the request to the Origin Server."),Object(a.b)("li",{parentName:"ol"},"The origin server processes the request and returns a response."),Object(a.b)("li",{parentName:"ol"},"The ICAP Client passes the response back to the client.")),Object(a.b)("p",null,"More detail is available in the RFC."),Object(a.b)("h2",{id:"service-location"},"Service Location"),Object(a.b)("p",null,"The ICAP URLs follow a similiar structure as HTTP resouce locators."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'ICAP_URI = Scheme ":" Net_Path [ "?" Query ]\nScheme = "icap"\nNet_Path = "//" Authority [ Abs_Path ]\nAuthority = [ userinfo "@" ] host [ ":" port ]\n')),Object(a.b)("p",null,"As an example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"icap://icap.net/service?mode=translate&lang=french\n")),Object(a.b)("p",null,"In this example the ",Object(a.b)("inlineCode",{parentName:"p"},"host")," is ",Object(a.b)("inlineCode",{parentName:"p"},"icap.net")," and the ICAP Resource being located is call ",Object(a.b)("inlineCode",{parentName:"p"},"service"),". The URL also includes two query arguments, defining values for ",Object(a.b)("inlineCode",{parentName:"p"},"mode")," and ",Object(a.b)("inlineCode",{parentName:"p"},"lang"),"."),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("p",null,"Hypertext Transfer Protocol (HTTP/1.1) ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc2616"}),"RFC 2616")," "),Object(a.b)("p",null,"Internet Content Adaptation Protocol (ICAP) ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3507"}),"RFC 3507")))}p.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},228:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/icap_reqmod_sequence-57f2ec6cba691a970fe696de9c650167.png"}}]);