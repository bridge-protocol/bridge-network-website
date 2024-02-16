"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9001],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=i(r),h=s,m=g["".concat(p,".").concat(h)]||g[h]||u[h]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1733:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return g}});var n=r(7462),s=r(3366),a=(r(7294),r(3905)),l=["components"],o={id:"sdk-messaging-auth",title:"Auth",sidebar_label:"Auth"},p=void 0,i={unversionedId:"sdk-messaging-auth",id:"sdk-messaging-auth",title:"Auth",description:"Implements the challenge / response authentication protocol to allow passport, claims, and blockchain information to be securely communicated between passports.",source:"@site/docs/sdk-messaging-auth.md",sourceDirName:".",slug:"/sdk-messaging-auth",permalink:"/docs/sdk-messaging-auth",tags:[],version:"current",frontMatter:{id:"sdk-messaging-auth",title:"Auth",sidebar_label:"Auth"},sidebar:"gettingStarted",previous:{title:"Wallet",permalink:"/docs/sdk-models-wallet"},next:{title:"Claim",permalink:"/docs/sdk-messaging-claim"}},c=[{value:"Functions",id:"functions",children:[{value:"createPassportChallengeRequest()",id:"createpassportchallengerequest",children:[],level:3},{value:"createPassportChallengeResponse()",id:"createpassportchallengeresponse",children:[],level:3},{value:"verifyPassportChallengeRequest()",id:"verifypassportchallengerequest",children:[],level:3},{value:"verifyPassportChallengeResponse()",id:"verifypassportchallengeresponse",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,r=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Implements the challenge / response authentication protocol to allow passport, claims, and blockchain information to be securely communicated between passports."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createpassportchallengerequest"},"createPassportChallengeRequest()"),(0,a.kt)("p",null,"Create a passport challenge request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"async createPassportChallengeRequest(passport, password, token, claimTypes, networks)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"passport")," (",(0,a.kt)("a",{href:"sdk-models-passport"},"Passport"),") - the passport creating the signed challenge request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"password")," (string) - password to unlock the private key of the passport creating the signed challenge request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"token")," (string) - unique token used to verify challenge responses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"claimTypes")," (string[]) - the claim types to be requested from the target passport"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"networks")," (string[]) - the blockchain networks to request addresses for from the target passport")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createpassportchallengeresponse"},"createPassportChallengeResponse()"),(0,a.kt)("p",null,"Create a passport challenge response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"async createPassportChallengeResponse(passport, password, targetPublicKey, token, claims, networks)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"passport")," - (",(0,a.kt)("a",{href:"sdk-models-passport"},"Passport"),") - the passport creating the encrypted challenge response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"password")," (string) - password to unlock the private key of the passport creating the encrypted challenge response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"token")," (string) - unique token sent with the challenge request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"claims")," (",(0,a.kt)("a",{href:"sdk-models-claim"},"Claim"),"[]) - the claims to send in response to the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"networks")," (string[]) - the networks to provide blockchain addresses for in response to the request")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verifypassportchallengerequest"},"verifyPassportChallengeRequest()"),(0,a.kt)("p",null,"Verify a received passport challenge request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"async verifyPassportChallengeRequest(message) \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"message")," (string) - the received signed passport challenge request")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verifypassportchallengeresponse"},"verifyPassportChallengeResponse()"),(0,a.kt)("p",null,"Verify a received passport challenge response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"async verifyPassportChallengeResponse(passport, password, message, t)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"passport")," - (",(0,a.kt)("a",{href:"sdk-models-passport"},"Passport"),") - the passport verifying the encrypted challenge response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"password")," (string) - password to unlock the private key of the passport verifying the encrypted challenge response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"token")," (string) - unique token to verify the challenge response")))}g.isMDXComponent=!0}}]);