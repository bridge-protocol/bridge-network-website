"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5049],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),d=a,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return k}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"integration-blockchain",title:"Blockchain",sidebar_label:"Blockchain"},c=void 0,s={unversionedId:"integration-blockchain",id:"integration-blockchain",title:"Blockchain",description:"The blockchain endpoints exposes blockchain functionality to verify payments and blockchain transactions",source:"@site/docs/integration-blockchain.md",sourceDirName:".",slug:"/integration-blockchain",permalink:"/docs/integration-blockchain",tags:[],version:"current",frontMatter:{id:"integration-blockchain",title:"Blockchain",sidebar_label:"Blockchain"},sidebar:"gettingStarted",previous:{title:"Profile",permalink:"/docs/integration-profile"},next:{title:"Open Source License(s)",permalink:"/docs/license"}},p=[{value:"POST /blockchain/walletaddress",id:"post-blockchainwalletaddress",children:[{value:"Example Request:",id:"example-request",children:[],level:5}],level:3},{value:"POST /blockchain/sendpayment",id:"post-blockchainsendpayment",children:[{value:"Example Request:",id:"example-request-1",children:[],level:5}],level:3},{value:"POST /blockchain/verifypayment",id:"post-blockchainverifypayment",children:[{value:"Example Request:",id:"example-request-2",children:[],level:5},{value:"Example Response:",id:"example-response",children:[],level:5}],level:3},{value:"POST /blockchain/createpublishtx",id:"post-blockchaincreatepublishtx",children:[{value:"Example Request:",id:"example-request-3",children:[],level:5}],level:3}],u={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The blockchain endpoints exposes blockchain functionality to verify payments and blockchain transactions"),(0,i.kt)("h3",{id:"post-blockchainwalletaddress"},"POST /blockchain/walletaddress"),(0,i.kt)("p",null,"Get the blockchain address for the specified network that the service context is running under"),(0,i.kt)("h5",{id:"example-request"},"Example Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "network":"NEO",\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the wallet")),(0,i.kt)("h3",{id:"post-blockchainsendpayment"},"POST /blockchain/sendpayment"),(0,i.kt)("p",null,"Send a BRDG token payment transaction on the blockchain"),(0,i.kt)("h5",{id:"example-request-1"},"Example Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "network":"NEO",\n    "to":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "amount":1,\n    "identifier":"12345"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the payment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"to")," (string) - the blockchain address the payment is to be sent to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"amount")," (int) - the payment amount"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"identifier")," (string) - the unique identifier of the transaction")),(0,i.kt)("h3",{id:"post-blockchainverifypayment"},"POST /blockchain/verifypayment"),(0,i.kt)("p",null,"Verify a BRDG token payment transaction on the blockchain"),(0,i.kt)("h5",{id:"example-request-2"},"Example Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "network":"NEO",\n    "txid":"12345",\n    "from":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "to":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "amount":1,\n    "identifier":"12345"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the payment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"txid")," (string) - the blockchain unique transaction id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"from")," (string) - the blockchain address the payment was sent from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"to")," (string) - the blockchain address the payment was sent to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"amount")," (int) - the payment amount"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"identifier")," (string) - the unique identifier of the transaction")),(0,i.kt)("h5",{id:"example-response"},"Example Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "complete":false,\n    "success":false\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"complete")," (bool) - whether or not the transaction is finalized on the blockchain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"success")," (bool) - whether or not the transaction was completed and all provided information was verified")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"post-blockchaincreatepublishtx"},"POST /blockchain/createpublishtx"),(0,i.kt)("p",null,"Create a dual-sign verified claim publish transaction to allow publish a claim in the Bridge Keyserver Contract on NEO.  (internal only)"),(0,i.kt)("h5",{id:"example-request-3"},"Example Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "network":"NEO",\n    "address":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "claim":{\n        "claimTypeId":3,\n        "claimValue":"someuser@bridgeprotocol.io",\n        "createdOn":1551180491,\n        "expiresOn":0,\n        "signedByKey":"2d2d2d2d2d424547494e20504750205055424...",\n        "signature":"2d2d2d2d2d424547494e20504750204d4553534..."\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the payment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"address")," (string) - the blockchain unique transaction id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"claim")," (string) - the blockchain address the payment was sent from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hashOnly")," (bool) - (optional) publish the value of the hash only")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: Only Bridge admin blockchain addresses can sign this transaction or the smart contract execution will fail")))}k.isMDXComponent=!0}}]);