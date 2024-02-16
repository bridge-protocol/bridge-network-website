"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[442],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8489:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={id:"integration",title:"Bridge REST Integration Microservice",sidebar_label:"Overview"},l=void 0,c={unversionedId:"integration",id:"integration",title:"Bridge REST Integration Microservice",description:"The Bridge Integration Microservices allows for easy integration with the Bridge SDK when the target platform does not support JavaScript.  The microservice is implemented as a standalone REST interface that can be easily run in a container in any hosting environment to enable that environment to take full advantage of Bridge SDK functionality.",source:"@site/docs/integration.md",sourceDirName:".",slug:"/integration",permalink:"/docs/integration",tags:[],version:"current",frontMatter:{id:"integration",title:"Bridge REST Integration Microservice",sidebar_label:"Overview"},sidebar:"gettingStarted",previous:{title:"Claim",permalink:"/docs/sdk-utils-claim"},next:{title:"Passport",permalink:"/docs/integration-passport"}},p=[{value:"Installation and Configuration",id:"installation-and-configuration",children:[{value:"Clone the code from the github repository",id:"clone-the-code-from-the-github-repository",children:[],level:3},{value:"Copy your passport file into the directory and update configuration",id:"copy-your-passport-file-into-the-directory-and-update-configuration",children:[],level:3},{value:"Run the Service",id:"run-the-service",children:[],level:3}],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"Responses",id:"responses",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Bridge Integration Microservices allows for easy integration with the Bridge SDK when the target platform does not support JavaScript.  The microservice is implemented as a standalone REST interface that can be easily run in a container in any hosting environment to enable that environment to take full advantage of Bridge SDK functionality."),(0,o.kt)("p",null,"Source code for the integration microservice can be found in the ",(0,o.kt)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-integration-service/"},"GitHub Repository")),(0,o.kt)("h2",{id:"installation-and-configuration"},"Installation and Configuration"),(0,o.kt)("p",null,"Installing and configuring the microservice requires a few simple steps to configure the passport context and enable security for the service."),(0,o.kt)("h3",{id:"clone-the-code-from-the-github-repository"},"Clone the code from the github repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/bridge-protocol/bridge-protocol-integration-service.git\n")),(0,o.kt)("h3",{id:"copy-your-passport-file-into-the-directory-and-update-configuration"},"Copy your passport file into the directory and update configuration"),(0,o.kt)("p",null,"The integration service uses the context of a loaded passport to provide all Bridge functionality on behalf of the service.  Edit the config.json file in the /src directory to configure the passport and header security settings for the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "version": "2.5",\n    "serviceName": "Bridge Protocol Integration Service",\n    "passportFile": "./your-passport-file.json",\n    "passportPassphrase": "yourpassportpassphrase",\n    "securityHeaderValue": "securityheadervalue",\n    "bridgeApiBaseUrl": "https://bridgeprotocol.azurewebsites.net/api/"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"passportFile (string) - The path to the passport file to load as the service context passport"),(0,o.kt)("li",{parentName:"ul"},"passportPassphrase (string) - The password to unlock the passport that was provided at the time of creation"),(0,o.kt)("li",{parentName:"ul"},"securityHeaderValue (string) - The value to be provided in the header for all REST calls to provide security")),(0,o.kt)("h3",{id:"run-the-service"},"Run the Service"),(0,o.kt)("p",null,"To run the service, navigate to the /src folder, install all dependencies via npm and start the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i && npm start\n")),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"All requests to the REST service are secured by a security header.  Each request to the service will verify that the header with the security header value configured is provided in the request.  All requests should include the following headers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Content-Type: application/json\nsecurityheader: securityheadervalue\n")),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)("p",null,"All responses from an endpoint will contain an object that contains a result and error property.  If errors occured during the request the error property will contain the error message, otherwise the response property will contain the response content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ \n    response, \n    error \n}\n")))}d.isMDXComponent=!0}}]);