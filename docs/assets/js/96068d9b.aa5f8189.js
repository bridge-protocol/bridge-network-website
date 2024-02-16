"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3468],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),h=s,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8481:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),s=r(3366),a=(r(7294),r(3905)),i=["components"],o={id:"messaging-auth",title:"Authentication",sidebar_label:"Authentication"},l=void 0,p={unversionedId:"messaging-auth",id:"messaging-auth",title:"Authentication",description:"The authentication protocol is used by a passport that wishes to challenge another passport to securely transmit information such as verified claims or blockchain addresses.",source:"@site/docs/messaging-auth.md",sourceDirName:".",slug:"/messaging-auth",permalink:"/docs/messaging-auth",tags:[],version:"current",frontMatter:{id:"messaging-auth",title:"Authentication",sidebar_label:"Authentication"},sidebar:"gettingStarted",previous:{title:"Overview",permalink:"/docs/messaging"},next:{title:"Claims Import",permalink:"/docs/messaging-claimsimport"}},u=[{value:"Creating a Passport Challenge Request",id:"creating-a-passport-challenge-request",children:[],level:2},{value:"Receiving the Passport Challenge Request",id:"receiving-the-passport-challenge-request",children:[],level:2},{value:"Sending the Passport Challenge Response",id:"sending-the-passport-challenge-response",children:[],level:2},{value:"Receiving the Passport Challenge Response",id:"receiving-the-passport-challenge-response",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The authentication protocol is used by a passport that wishes to challenge another passport to securely transmit information such as verified claims or blockchain addresses."),(0,a.kt)("img",{class:"centered",src:"/img/message-authchallenge.png"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"creating-a-passport-challenge-request"},"Creating a Passport Challenge Request"),(0,a.kt)("p",null,"A Bridge Passport can challenge another passport for information including the passport identifier, specific claim types, and blockchain addresses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'let randomAuthToken = "randomtoken";\nlet requiredClaimTypes = [3];\nlet requiredBlockchainAddresses = ["neo","eth"];\nlet authRequest = await Bridge.Messaging.Auth.createPassportChallengeRequest(passport, password, randomAuthToken, requiredClaimTypes, requiredBlockchainAddresses);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"randomAuthToken")," - A randomly generated token that will be passed back in the response to assist in verifying the integrity of the response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiredClaimTypes")," - The claim types being requested of the target passport"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiredBlockchainAddresses")," - The blockchain network addresses being requested of the target passport"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"authRequest")," - The message payload of the generated challenge request to be sent to the target passport")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"receiving-the-passport-challenge-request"},"Receiving the Passport Challenge Request"),(0,a.kt)("p",null,"When a passport challenge request message is received, the message and sender passport information need to be verified"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let verifiedAuthRequest = await Bridge.Messaging.Auth.verifyPassportChallengeRequest(authRequest);\nlet passportInfo = await Bridge.Services.Passport.getDetails(passport, password, verifiedAuthRequest.passportId);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"authRequest")," - the challenge request message received from the sender"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"verifiedAuthRequest")," - the verified challenge request message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"passportInfo")," - the information received from the Bridge Network about the passport that sent the request message")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sending-the-passport-challenge-response"},"Sending the Passport Challenge Response"),(0,a.kt)("p",null,"Once the sender is verified, the passport can retrieve the claim and blockchain address data requested and send generate an encrypted response message with the requested information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let claims = await passport.getDecryptedClaims(verifiedAuthRequest.payload.claimTypes, password);\nlet addresses = passport.getWalletAddresses(verifiedAuthRequest.payload.networks);\nlet authResponse = await Bridge.Messaging.Auth.createPassportChallengeResponse(passport, password, verifiedAuthRequest.publicKey, verifiedAuthRequest.payload.token, claims, addresses); \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"claims")," - the passport claims to be included in the challenge response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"addresses")," - the passport blockchain addresses to be included in the challenge response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"authResponse")," - the challenge response message to be sent back to the requesting passport")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"receiving-the-passport-challenge-response"},"Receiving the Passport Challenge Response"),(0,a.kt)("p",null,"When the challenge response is received, the message integrity needs to be verified, the message is decrypted, the sender is verified, and the provided claim integrity is verified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let verifiedAuthResponse =  await Bridge.Messaging.Auth.verifyPassportChallengeResponse(passport, password, authResponse, randomAuthToken, requiredClaimTypes, requiredBlockchainAddresses);\nlet passportInfo = await Bridge.Services.Passport.getDetails(passport, password, authResponse.passportId);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"authResponse")," - the challenge response message received"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"verifiedAuthResponse")," - the validatated information from the received challenge response message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"passportInfo")," - the information received from the Bridge Network about the passport that sent the response message")))}d.isMDXComponent=!0}}]);