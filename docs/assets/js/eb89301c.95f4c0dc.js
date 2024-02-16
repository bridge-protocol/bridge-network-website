"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9947],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=s,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var o=2;o<n;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7905:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var a=r(7462),s=r(3366),n=(r(7294),r(3905)),l=["components"],i={id:"sdk-services-claim",title:"Claim",sidebar_label:"Claim"},p=void 0,o={unversionedId:"sdk-services-claim",id:"sdk-services-claim",title:"Claim",description:"Service used to retrieve the Bridge Network known claim types",source:"@site/docs/sdk-services-claim.md",sourceDirName:".",slug:"/sdk-services-claim",permalink:"/docs/sdk-services-claim",tags:[],version:"current",frontMatter:{id:"sdk-services-claim",title:"Claim",sidebar_label:"Claim"},sidebar:"gettingStarted",previous:{title:"Bridge",permalink:"/docs/sdk-services-bridge"},next:{title:"Partner",permalink:"/docs/sdk-services-partner"}},u=[{value:"Functions",id:"functions",children:[{value:"getAllTypes()",id:"getalltypes",children:[],level:3},{value:"getType()",id:"gettype",children:[],level:3},{value:"getClaimPublishList()",id:"getclaimpublishlist",children:[],level:3},{value:"getPendingClaimPublishList()",id:"getpendingclaimpublishlist",children:[],level:3},{value:"getClaimPublish()",id:"getclaimpublish",children:[],level:3},{value:"createClaimPublish()",id:"createclaimpublish",children:[],level:3},{value:"updateClaimPaymentTransaction()",id:"updateclaimpaymenttransaction",children:[],level:3},{value:"getClaimPublishTransaction()",id:"getclaimpublishtransaction",children:[],level:3},{value:"retry()",id:"retry",children:[],level:3},{value:"completed()",id:"completed",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Service used to retrieve the Bridge Network known claim types"),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"getalltypes"},"getAllTypes()"),(0,n.kt)("p",null,"Retrieve all the known defined claim types for the Bridge Network"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async getAllTypes(useApi, passport, passphrase)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gettype"},"getType()"),(0,n.kt)("p",null,"Retrieve the specified known claim type definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async getType(claimTypeId, useApi, passport, passphrase)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"claimTypeId")," (string) - the claim type definition to retrieve"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getclaimpublishlist"},"getClaimPublishList()"),(0,n.kt)("p",null,"Gets a list of all claim publishing requests for the passport"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async getClaimPublishList(passport, passphrase)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getpendingclaimpublishlist"},"getPendingClaimPublishList()"),(0,n.kt)("p",null,"Gets a list of all pending claim publishing requests for the passport"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async getPendingClaimPublishList(passport, passphrase)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getclaimpublish"},"getClaimPublish()"),(0,n.kt)("p",null,"Gets the details of a specific claim publish request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async getClaimPublish(passport, passphrase, id)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id")," (string) - the identifier of the claim publish request to retrieve the details for")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createclaimpublish"},"createClaimPublish()"),(0,n.kt)("p",null,"Create a new claim publish request for the passport"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async createClaimPublish(passport, passphrase, network, address, claim, hashOnly)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network the claim will be published on"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"address")," (string) - the bloockchain address the claim will be published for"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"claim")," (",(0,n.kt)("a",{href:"sdk-models-claim"},"Claim"),") - the claim to be published"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hashOnly")," (bool) - whether or not to just publish the hash of the value to the blockchain")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"updateclaimpaymenttransaction"},"updateClaimPaymentTransaction()"),(0,n.kt)("p",null,"Create a new claim publish request for the passport"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async updateClaimPaymentTransaction(passport, passphrase, id, transactionId, gasTransactionId)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id")," (string) - the identifier of the claim publish request to update"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transactionId")," (string) - the bloockchain transaction of the BRDG payment transaction"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"gasTransactionId")," (string) - the blockchain transaction of the gas prepayment transaction (Ethereum only)")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getclaimpublishtransaction"},"getClaimPublishTransaction()"),(0,n.kt)("p",null,"Retrieves the signed transaction of the verified claim to be signed and relayed by the end user for publish (NEO only)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async getClaimPublishTransaction(passport, passphrase, id)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id")," (string) - the identifier of the claim publish request to update")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"retry"},"retry()"),(0,n.kt)("p",null,"Attempt to (re)process a claim publish request that is waiting for a transaction"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async retry(passport, passphrase, id)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id")," (string) - the identifier of the claim publish request to update")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"completed"},"completed()"),(0,n.kt)("p",null,"Sets the claim publish status to complete after the transaction has been successfully relayed and verified (NEO only)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"async completed(passport, passphrase, id)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passport")," (",(0,n.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id")," (string) - the identifier of the claim publish request to update")),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);