"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3870],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||k[d]||l;return a?n.createElement(h,i(i({ref:e},c),{},{components:a})):n.createElement(h,i({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7663:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],s={id:"sdk-services-blockchain",title:"Blockchain",sidebar_label:"Blockchain"},o=void 0,p={unversionedId:"sdk-services-blockchain",id:"sdk-services-blockchain",title:"Blockchain",description:"Service to manage all Bridge Passport blockchain interaction with supported blockchains",source:"@site/docs/sdk-services-blockchain.md",sourceDirName:".",slug:"/sdk-services-blockchain",permalink:"/docs/sdk-services-blockchain",tags:[],version:"current",frontMatter:{id:"sdk-services-blockchain",title:"Blockchain",sidebar_label:"Blockchain"},sidebar:"gettingStarted",previous:{title:"Application",permalink:"/docs/sdk-services-application"},next:{title:"Bridge",permalink:"/docs/sdk-services-bridge"}},c=[{value:"Functions",id:"functions",children:[{value:"publishPassport()",id:"publishpassport",children:[],level:3},{value:"getAddressForPassport()",id:"getaddressforpassport",children:[],level:3},{value:"getPassportForAddress()",id:"getpassportforaddress",children:[],level:3},{value:"unpublishPassport()",id:"unpublishpassport",children:[],level:3},{value:"getBalances()",id:"getbalances",children:[],level:3},{value:"getRecentTransactions()",id:"getrecenttransactions",children:[],level:3},{value:"sendPayment()",id:"sendpayment",children:[],level:3},{value:"verifyPayment()",id:"verifypayment",children:[],level:3},{value:"getOracleGasPrice()",id:"getoraclegasprice",children:[],level:3},{value:"transferGas()",id:"transfergas",children:[],level:3},{value:"verifyGasTransfer()",id:"verifygastransfer",children:[],level:3},{value:"getTransactionStatus()",id:"gettransactionstatus",children:[],level:3},{value:"pollTransactionComplete()",id:"polltransactioncomplete",children:[],level:3},{value:"removeClaim()",id:"removeclaim",children:[],level:3},{value:"getClaim()",id:"getclaim",children:[],level:3},{value:"sendApplicationRequest()",id:"sendapplicationrequest",children:[],level:3},{value:"sendTokenSwapRequest()",id:"sendtokenswaprequest",children:[],level:3},{value:"sendPassportPublishRequest()",id:"sendpassportpublishrequest",children:[],level:3},{value:"sendClaimPublishRequest()",id:"sendclaimpublishrequest",children:[],level:3},{value:"publishClaimTransaction()",id:"publishclaimtransaction",children:[],level:3},{value:"getUniswapTransactionCost()",id:"getuniswaptransactioncost",children:[],level:3},{value:"getUniswapInfo()",id:"getuniswapinfo",children:[],level:3},{value:"getUniswapPrice()",id:"getuniswapprice",children:[],level:3},{value:"createUniswapSwap()",id:"createuniswapswap",children:[],level:3},{value:"sendUniswapTradeTransaction()",id:"senduniswaptradetransaction",children:[],level:3}],level:2}],k={toc:c};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Service to manage all Bridge Passport blockchain interaction with supported blockchains"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"publishpassport"},"publishPassport()"),(0,l.kt)("p",null,"Publish the passport and wallet address combination to the blockhain using the Bridge Keyserver contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async publishPassport(wallet, passport, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for publishing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passport")," (",(0,l.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport to publish"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wait")," (bool) - wait for the transaction to complete"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getaddressforpassport"},"getAddressForPassport()"),(0,l.kt)("p",null,"Retrieve the published blockchain address for the specified passport from the Bridge Keyserver contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getAddressForPassport(network, passportId)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the address from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passportId")," (string) - the passport id of the passport to retrieve the address for")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getpassportforaddress"},"getPassportForAddress()"),(0,l.kt)("p",null,"Retrieve the published passport id for the wallet blockchain address from the Bridge Keyserver contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getPassportForAddress(network, address)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the passport id from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the passport id for")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unpublishpassport"},"unpublishPassport()"),(0,l.kt)("p",null,"Unpublish the passport and wallet address combination from the blockchain using the Bridge Keyserver contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async unpublishPassport(passport, wallet, wait, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passport")," (",(0,l.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport to publish"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for publishing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wait")," (bool) - wait for the transaction to complete"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getbalances"},"getBalances()"),(0,l.kt)("p",null,"Retrieve BRDG token and related blockchain gas balances"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getBalances(network, address)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve balances from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the balances for")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getrecenttransactions"},"getRecentTransactions()"),(0,l.kt)("p",null,"Retrieve recent BRDG token blockchain transactions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getRecentTransactions(network, address) \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the transactions from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the transactions for")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendpayment"},"sendPayment()"),(0,l.kt)("p",null,"Send a BRDG token payment transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async sendPayment(wallet, amount, recipient, paymentIdentifier, wait, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to send payment from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG to send"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"recipient")," (string) - the blockchain address to send payment to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wait")," (bool) - whether or not to poll and wait for completion or immediately return the transmitted blockchain transaction id without waiting for completion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"verifypayment"},"verifyPayment()"),(0,l.kt)("p",null,"Verify a BRDG token payment transaction info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async verifyPayment(network, hash, from, to, amount, paymentIdentifier)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to verify the payment from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hash")," (string) - the unique blockchain hash / transaction identifier"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"from")," (string) - the address the payment was sent from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"to")," (string) - the address the payment was sent to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG that was sent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getoraclegasprice"},"getOracleGasPrice()"),(0,l.kt)("p",null,"Retrieves the current oracle recommended gas price for the blockchain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getOracleGasPrice(network)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to get the price for")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"transfergas"},"transferGas()"),(0,l.kt)("p",null,"Send a blockchain gas transfer transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async transferGas(wallet, amount, recipient, paymentIdentifier, wait, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to send payment from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG to send"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"recipient")," (string) - the blockchain address to send payment to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wait")," (bool) - whether or not to poll and wait for completion or immediately return the transmitted blockchain transaction id without waiting for completion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"verifygastransfer"},"verifyGasTransfer()"),(0,l.kt)("p",null,"Verify a blockchain gas transfer transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async verifyGasTransfer(network, hash, from, to, amount, paymentIdentifier)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to verify the payment from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hash")," (string) - the unique blockchain hash / transaction identifier"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"from")," (string) - the address the payment was sent from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"to")," (string) - the address the payment was sent to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG that was sent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gettransactionstatus"},"getTransactionStatus()"),(0,l.kt)("p",null,"Retrieves the completion and success status of a blockchain transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getTransactionStatus(network, hash)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to verify the payment from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hash")," (string) - the unique blockchain hash / transaction identifier")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"polltransactioncomplete"},"pollTransactionComplete()"),(0,l.kt)("p",null,"Polls for the status for a blockchain transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async pollTransactionComplete(network, txid)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the transaction"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"txid")," (string) - the blockchain transaction id to poll")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removeclaim"},"removeClaim()"),(0,l.kt)("p",null,"Unpublish a Bridge Verified claim to the blockhain using the Bridge Keyserver contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async removeClaim(wallet, claimTypeId, wait, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to remove the claim from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"claimtypeId")," (string) - the claim type to remove"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wait")," (bool) - wait for the transaction to complete"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getclaim"},"getClaim()"),(0,l.kt)("p",null,"Retrieve a published Bridge Verified claim from the blockhain using the Bridge Keyserver contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getClaim(network, claimTypeId, address) \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the claim from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"claimtypeId")," (string) - the claim type to retrieve"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the claim for")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendapplicationrequest"},"sendApplicationRequest()"),(0,l.kt)("p",null,"Sends the required network fees and creates a verification request for the specified partner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async sendApplicationRequest(passport, password, wallet, partnerId, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passport")," (",(0,l.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet that the tokens will be swapped from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"partnerId")," string - the Bridge Marketplace partner to create the request with"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendtokenswaprequest"},"sendTokenSwapRequest()"),(0,l.kt)("p",null,"Sends the required fees and the token swap request transaction to swap tokens across NEO and Ethereum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async sendTokenSwapRequest(passport, password, wallet, receivingWallet, amount, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passport")," (",(0,l.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet that the tokens will be swapped from"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"receivingWallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet that will receive the swapped tokens"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount")," (decimal) - the number of tokens to be swapped"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendpassportpublishrequest"},"sendPassportPublishRequest()"),(0,l.kt)("p",null,"Sends the request to publish a passport on the specified blockchain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async sendPassportPublishRequest(passport, password, wallet, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passport")," (",(0,l.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendclaimpublishrequest"},"sendClaimPublishRequest()"),(0,l.kt)("p",null,"Sends the required publish and fee transactions and notifies the Bridge Network of the claim publish request to be verified and published.  For Ethereum, once verified, the claim transaction is sent by Bridge and published."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async sendClaimPublishRequest(passport, wallet, claim, hashOnly, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passport")," (",(0,l.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"claim")," (",(0,l.kt)("a",{href:"sdk-models-claim"},"Claim"),") - the claim to publish"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hashOnly")," (bool) - publish the hash of the value of the claim only"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"publishclaimtransaction"},"publishClaimTransaction()"),(0,l.kt)("p",null,"Publishes the claim transaction to the blockchain (NEO Only).  This will retrieve the Bridge signed transaction that will need to be dual signed by the owner and then relayed to the node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async publishClaimTransaction(passport, password, wallet, claim, hashOnly, claimPublishId, wait, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"passport")," (",(0,l.kt)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for adding the claim"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"claim")," (",(0,l.kt)("a",{href:"sdk-models-claim"},"Claim"),") - the claim to publish"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hashOnly")," (bool) - publish the hash of the value of the claim only"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"claimPublishId")," (string) - the claim publish identifier of the request received from the Bridge network"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wait")," (bool) - if true, wait for the transaction to complete on the blockchain, otherwise return the hash"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getuniswaptransactioncost"},"getUniswapTransactionCost()"),(0,l.kt)("p",null,"Extimate the current ETH transaction cost for purchasing BRDG on Uniswap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getUniswapTransactionCost()\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getuniswapinfo"},"getUniswapInfo()"),(0,l.kt)("p",null,"Retrieve information about BRDG/ETH pair on Uniswap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getUniswapInfo()\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getuniswapprice"},"getUniswapPrice()"),(0,l.kt)("p",null,"Estimate the current ETH cost for purchasing a specific amount BRDG on Uniswap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async getUniswapPrice(amount)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount")," (int) - the amount to retrieve the current price for")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"createuniswapswap"},"createUniswapSwap()"),(0,l.kt)("p",null,"Create a swap to purchase BRDG with ETH on Uniswap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async createUniswapSwap(address, amount, slippagePercent)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"address")," (string) - the Ethereum address context to use for the purchase"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount")," (int) - the amount to purchase"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"slippagePercent")," (int) - the allowable slippage percent (optional, default is 50)")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"senduniswaptradetransaction"},"sendUniswapTradeTransaction()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async sendUniswapTradeTransaction(wallet, trade, costOnly)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wallet")," (",(0,l.kt)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for sending the transaction"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"trade")," (",(0,l.kt)("a",{href:"#"},"Trade"),") - the Uniswap trade to transmit retrieved from createUniswapSwap()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"costOnly")," (bool) - Calculate the cost only, does not transmit.")))}u.isMDXComponent=!0}}]);