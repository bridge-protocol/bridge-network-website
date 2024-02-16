"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7807],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||s;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9300:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={id:"sdk-messaging-payment",title:"Payment",sidebar_label:"Payment"},p=void 0,l={unversionedId:"sdk-messaging-payment",id:"sdk-messaging-payment",title:"Payment",description:"Implements the payment request / response protocol to facilitate blockchain BRDG payments between passports.",source:"@site/docs/sdk-messaging-payment.md",sourceDirName:".",slug:"/sdk-messaging-payment",permalink:"/docs/sdk-messaging-payment",tags:[],version:"current",frontMatter:{id:"sdk-messaging-payment",title:"Payment",sidebar_label:"Payment"},sidebar:"gettingStarted",previous:{title:"Claim",permalink:"/docs/sdk-messaging-claim"},next:{title:"Application",permalink:"/docs/sdk-services-application"}},m=[{value:"Functions",id:"functions",children:[{value:"createPaymentRequest()",id:"createpaymentrequest",children:[],level:3},{value:"createPaymentResponse()",id:"createpaymentresponse",children:[],level:3},{value:"verifyPaymentRequest()",id:"verifypaymentrequest",children:[],level:3},{value:"verifyPaymentResponse()",id:"verifypaymentresponse",children:[],level:3}],level:2}],u={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Implements the payment request / response protocol to facilitate blockchain BRDG payments between passports."),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"createpaymentrequest"},"createPaymentRequest()"),(0,s.kt)("p",null,"Create a signed payment request to be sent to the target passport"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"async createPaymentRequest(passport, password, network, amount, address, identifier)\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"passport")," (",(0,s.kt)("a",{href:"sdk-models-passport"},"Passport"),"[]) - the passport being used to create and sign the payment request"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"password")," (string) - the password used to unlock the private key of the creating passport"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain to request BRDG payment on"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"amount")," (int) - the amount in BRDG to request"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"address")," (string) - the address to send payment to"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"identifier")," (string) - a unique identifier of the payment to asynchronously verify the payment once it has been committed to the blockchain")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"createpaymentresponse"},"createPaymentResponse()"),(0,s.kt)("p",null,"Create an encrypted payment response to be sent back to the sending passport"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"async createPaymentResponse(passport, password, network, from, amount, address, identifier, transactionId, targetPublicKey)\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"passport")," ((",(0,s.kt)("a",{href:"sdk-models-passport"},"Passport"),"[])) - the passport used to send the payment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"password")," (string) - the password used to unlock the private key of the sending passport"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain payment was sent on"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"from")," (string) - the address payment was sent from"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"amount")," (int) - the amount of BRDG sent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"address")," (string) - the address payment was sent to"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"identifier")," (string) - a unique identifier of the payment to asynchronously verify the payment once it has been committed to the blockchain"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"transactionId")," (string) - the resulting blockchain transaction id of the payment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"targetPublicKey")," (string) - the public key of the passport that sent the payment request")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"verifypaymentrequest"},"verifyPaymentRequest()"),(0,s.kt)("p",null,"Verify a signed payment request received by a sending passport"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"async verifyPaymentRequest(message)\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"message")," (string) - the received signed payment request message")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"verifypaymentresponse"},"verifyPaymentResponse()"),(0,s.kt)("p",null,"Verify the encrypted payment response received from the target passport"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"async verifyPaymentResponse(passport, password, message)\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"passport")," (",(0,s.kt)("a",{href:"sdk-models-passport"},"Passport"),"[]) - the passport that sent the payment request"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"password")," (string) - the password to unlock the passport that sent the payment request"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"message")," (string) - the received encrypted payment response message")))}c.isMDXComponent=!0}}]);