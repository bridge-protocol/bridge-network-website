"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7065],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=s,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),a=["components"],i={id:"sdk-services-passport",title:"Passport",sidebar_label:"Passport"},p=void 0,l={unversionedId:"sdk-services-passport",id:"sdk-services-passport",title:"Passport",description:"Service used to retrieve information about a passport from the Bridge Network",source:"@site/docs/sdk-services-passport.md",sourceDirName:".",slug:"/sdk-services-passport",permalink:"/docs/sdk-services-passport",tags:[],version:"current",frontMatter:{id:"sdk-services-passport",title:"Passport",sidebar_label:"Passport"},sidebar:"gettingStarted",previous:{title:"Partner",permalink:"/docs/sdk-services-partner"},next:{title:"Profile",permalink:"/docs/sdk-services-profile"}},c=[{value:"Functions",id:"functions",children:[{value:"getDetails()",id:"getdetails",children:[],level:3},{value:"handoff()",id:"handoff",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Service used to retrieve information about a passport from the Bridge Network"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"getdetails"},"getDetails()"),(0,o.kt)("p",null,"Retrieve the details about a specified passport"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"async getDetails(passport, passphrase, passportId)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"passport")," (",(0,o.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"passportId")," (string) - the passport id to request information about")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"handoff"},"handoff()"),(0,o.kt)("p",null,"Send the current passport context for handoff using the request relay API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"async handoff(passport, passphrase)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"passport")," (",(0,o.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key")))}d.isMDXComponent=!0}}]);