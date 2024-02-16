"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3093],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5885:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={id:"sdk-messaging-claim",title:"Claim",sidebar_label:"Claim"},l=void 0,c={unversionedId:"sdk-messaging-claim",id:"sdk-messaging-claim",title:"Claim",description:"Implements the claims import protocol to allow verified claims to be securely communicated between verifier and user passports.",source:"@site/docs/sdk-messaging-claim.md",sourceDirName:".",slug:"/sdk-messaging-claim",permalink:"/docs/sdk-messaging-claim",tags:[],version:"current",frontMatter:{id:"sdk-messaging-claim",title:"Claim",sidebar_label:"Claim"},sidebar:"gettingStarted",previous:{title:"Auth",permalink:"/docs/sdk-messaging-auth"},next:{title:"Payment",permalink:"/docs/sdk-messaging-payment"}},m=[{value:"Functions",id:"functions",children:[{value:"createClaimsImportRequest()",id:"createclaimsimportrequest",children:[],level:3},{value:"verifyClaimsImportRequest()",id:"verifyclaimsimportrequest",children:[],level:3}],level:2}],p={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Implements the claims import protocol to allow verified claims to be securely communicated between verifier and user passports."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createclaimsimportrequest"},"createClaimsImportRequest()"),(0,i.kt)("p",null,"Create a claims import request to send claims to a target passport"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"async createClaimsImportRequest(passport, password, claimPackages)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"passport")," (string) - the passport receiving the claims import request that the claim packages were signed and encrypted for"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"password")," (string) - the password to unlock the passport receiving the claims import request"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"claimPackages")," (",(0,i.kt)("a",{href:"sdk-models-claimpackage"},"ClaimPackage"),"[]) - the claim packages signed and encrypted for the receiving passport")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verifyclaimsimportrequest"},"verifyClaimsImportRequest()"),(0,i.kt)("p",null,"Verify a received claims import request from a passport"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"async verifyClaimsImportRequest(message)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"message")," (string) - the received claims import message")))}u.isMDXComponent=!0}}]);