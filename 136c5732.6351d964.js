(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),i=(n(0),n(208)),c={title:"C-ICAP Project",id:"c-icap-project-overview"},o={id:"products/icap-resource/c-icap/c-icap-project-overview",isDocsHomePage:!1,title:"C-ICAP Project",description:"C-ICAP Project Overview",source:"@site/docs/products/icap-resource/c-icap/overview.md",permalink:"/docs/products/icap-resource/c-icap/c-icap-project-overview"},l=[{value:"C-ICAP Project Overview",id:"c-icap-project-overview",children:[]},{value:"Build and Installation",id:"build-and-installation",children:[]},{value:"Structure",id:"structure",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Integration",id:"integration",children:[]},{value:"Local Testing",id:"local-testing",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"c-icap-project-overview"},"C-ICAP Project Overview"),Object(i.b)("p",null,"C-ICAP is an implementation of an ICAP Server. It is an open-sourced project written in C, available in Source Forge. The source code has been copied at version ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://sourceforge.net/p/c-icap/code/1392/"}),"r1392")," and submitted into ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/filetrust/c-icap"}),"GitHub"),"."),Object(i.b)("h2",{id:"build-and-installation"},"Build and Installation"),Object(i.b)("p",null,"The project build mechanism uses the GNU Autotool tools: autoconf and automake.All the necessary instructions to build and install the product from the source code are detailed in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/filetrust/c-icap/blob/master/README.md"}),"README.md file"),"."),Object(i.b)("h2",{id:"structure"},"Structure"),Object(i.b)("p",null,"The C-ICAP project provides a plug-in interface that supports the implementation of ICAP Resources. Each ICAP Resouce is implemented as a library that the C-ICAP Server is configured to load."),Object(i.b)("p",null,"The framework requires that each ICAP Resouce implements a ",Object(i.b)("inlineCode",{parentName:"p"},"ci_service_module_t")," object that defines a set of function pointers that handle event generated by the ICAP Server when processing ICAP Requests. These functions will be called by c-icap as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When a new request arrives for this service then the ",Object(i.b)("inlineCode",{parentName:"li"},"ci_service_module::mod_init_request_data")," is called."),Object(i.b)("li",{parentName:"ul"},"When the icap client sends preview data then the ",Object(i.b)("inlineCode",{parentName:"li"},"ci_service_module::mod_check_preview_handler")," is called.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If this function return CI_MOD_ALLOW204 the ICAP transaction stops here and the corresponding HTTP is forwarded unchanged."),Object(i.b)("li",{parentName:"ul"},"If this function return CI_MOD_CONTINUE the ICAP client will send the rest body data, if any exists."))),Object(i.b)("li",{parentName:"ul"},"When he client starts sends more data then the ",Object(i.b)("inlineCode",{parentName:"li"},"ci_service_module::mod_service_io")," is called multiple times until the client has send all the body data. The service can start to send data using this function to the client before all incoming data has been received."),Object(i.b)("li",{parentName:"ul"},"When the client finishes sending body data the ",Object(i.b)("inlineCode",{parentName:"li"},"ci_service_module::mod_end_of_data_handler")," is called")),Object(i.b)("p",null,"In addition to these event handlers the service is defined with"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A service name"),Object(i.b)("li",{parentName:"ul"},"A short description"),Object(i.b)("li",{parentName:"ul"},"Specification of service type (Request modification, Response modification, or both)"),Object(i.b)("li",{parentName:"ul"},"An array which contains the definitions of configuration parameters used by the service, loaded from disk at startup.")),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"The deployment location is defined in the build phase, the path is passed in as an argument when calling the ",Object(i.b)("inlineCode",{parentName:"p"},"./configure")," script. The standard location used in the ",Object(i.b)("inlineCode",{parentName:"p"},"Readme.md")," file is ",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local/c-icap"),"."),Object(i.b)("p",null,"During installation, the specified deployment folder is populated with a set of sub-folders."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Path"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"./bin")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All executables, including test applications")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"./etc")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Configuration files (.conf) for ICAP Server and ICAP Resources")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"./include/c_icap")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Header files for C-ICAP libraries")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"./lib")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Shared libraries for ICAP Server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"./lib/c_icap")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Shared libraries for ICAP Resources")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"./share/c_icap/templates")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ICAP Resouce Templates files")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"./var/log")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Debug log files")))),Object(i.b)("h2",{id:"integration"},"Integration"),Object(i.b)("p",null,"Each ICAP Resource has an associated .conf file. This is used to inform the ICAP Server about the ICAP Resource, and define its configuration."),Object(i.b)("p",null,"Within the ICAP Resource's .conf file, the ",Object(i.b)("inlineCode",{parentName:"p"},"Service")," configuration item is used to specify the resource's service name, and the name of the library file in which the functionality is provided."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The service name used in the .conf file should match that used in the ",Object(i.b)("inlineCode",{parentName:"p"},"ci_service_module_t"),".")),Object(i.b)("p",null,"For a resource to be loaded by the ICAP Server, the resource's .conf file must be included into the ICAP Service .conf file, ",Object(i.b)("inlineCode",{parentName:"p"},"icap.conf"),". Multiple ICAP Resources may be included byt the ICAP SErver configuration."),Object(i.b)("h2",{id:"local-testing"},"Local Testing"),Object(i.b)("p",null,"The C-ICAP project provides a test client application that can be used to carry out validation of the ICAP Server configuration, and that of its ICAP Resources."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"./c-icap-client -h\nUsage :\n./c-icap-client [-V ] [-VV ] [-i icap_servername] [-p port] [-s service] [-f filename] [-o filename] [-method method] [-req url] [-resp url] [-d level] [-noreshdr ] [-nopreview ] [-no204 ] [-206 ] [-x xheader] [-hx xheader] [-rhx xheader] [-w preview] [-v ]\n\n-V                      : Print version and exits\n-VV                     : Print version and build informations and exits\n-i icap_servername      : The icap server name\n-p port                 : The server port\n-s service              : The service name\n-f filename             : Send this file to the icap server. Default is to send an options request\n-o filename             : Save output to this file. Default is to send to stdout\n-method method          : Use 'method' as method of the request modification\n-req url                : Send a request modification instead of response modification\n-resp url               : Send a responce modification request with request url the 'url'\n-d level                : debug level info to stdout\n-noreshdr               : Do not send reshdr headers\n-nopreview              : Do not send preview data\n-no204                  : Do not allow204 outside preview\n-206                    : Support allow206\n-x xheader              : Include xheader in icap request headers\n-hx xheader             : Include xheader in http request headers\n-rhx xheader            : Include xheader in http response headers\n-w preview              : Sets the maximum preview data size\n-v                      : Print response headers\n")))}d.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=r,h=b["".concat(c,".").concat(u)]||b[u]||p[u]||i;return n?a.a.createElement(h,o(o({ref:t},s),{},{components:n})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);