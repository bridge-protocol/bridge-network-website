"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[819],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||n;return r?i.createElement(d,s(s({ref:t},m),{},{components:r})):i.createElement(d,s({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<n;p++)s[p]=r[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4135:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var i=r(7462),a=r(3366),n=(r(7294),r(3905)),s=["components"],o={id:"messaging-claimsimport",title:"Claims Import",sidebar_label:"Claims Import"},l=void 0,p={unversionedId:"messaging-claimsimport",id:"messaging-claimsimport",title:"Claims Import",description:"The claims import protocol is used by a passport that wishes to sign and provide an encrypted claim package to be imported to another passport.  This is the protocol used by all Bridge Marketplace providers to issue and transmit secure claims.",source:"@site/docs/messaging-claimsimport.md",sourceDirName:".",slug:"/messaging-claimsimport",permalink:"/docs/messaging-claimsimport",tags:[],version:"current",frontMatter:{id:"messaging-claimsimport",title:"Claims Import",sidebar_label:"Claims Import"},sidebar:"gettingStarted",previous:{title:"Authentication",permalink:"/docs/messaging-auth"},next:{title:"Payment",permalink:"/docs/messaging-payment"}},m=[{value:"Creating a Claims Import Request",id:"creating-a-claims-import-request",children:[],level:2},{value:"Verifying the Claims Import Request",id:"verifying-the-claims-import-request",children:[],level:2}],c={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The claims import protocol is used by a passport that wishes to sign and provide an encrypted claim package to be imported to another passport.  This is the protocol used by all Bridge Marketplace providers to issue and transmit secure claims."),(0,n.kt)("img",{class:"centered",src:"/img/message-claimsimport.png"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"creating-a-claims-import-request"},"Creating a Claims Import Request"),(0,n.kt)("p",null,"The verification provdier will create the import request to allow the recipient passport to accept and import the claims"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"let claimsImportRequest = await Bridge.Messaging.Claim.createClaimsImportRequest(passport, password, claimPackages);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"claimPackages")," - the signed and encrypted claim packages to be sent to the target passport"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"claimsImportRequest")," - the claims import request message")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"verifying-the-claims-import-request"},"Verifying the Claims Import Request"),(0,n.kt)("p",null,"The recieving passport will verify the integrity of the import request by ensuring the message was signed by the verified passport that transmitted the import request.  The claim packages will be verified for integrity and available to import to the receiving passport."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"let verifiedImportRequest = await Bridge.Messaging.Claim.verifyClaimsImportRequest(claimsImportRequest);\nlet passportDetails = await Bridge.Services.Passport.getDetails(passport, password, verifiedImportRequest.passportId);\nlet verifiedClaimPackages = await Bridge.Utils.Claim.verifyClaimPackagesForImport(passport, password, verifiedImportRequest.payload.claimsImportRequest.claimPackages);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"claimsImportRequest")," - the received claims import request message"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"verifiedImportRequest")," - the integrity verified data transmitted via the claims import request message"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"passportDetails")," - the information received from the Bridge Network about the passport that sent the request message"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"verifiedClaimPackages")," - the claim packages that have been verified for integrity that are ready for import to the receiving passport.")))}u.isMDXComponent=!0}}]);