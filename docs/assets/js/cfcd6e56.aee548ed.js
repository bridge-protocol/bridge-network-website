"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6239],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2836:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"passport-wallet",title:"Blockchain Wallets",sidebar_label:"Blockchain Wallets"},c=void 0,s={unversionedId:"passport-wallet",id:"passport-wallet",title:"Blockchain Wallets",description:"A Bridge Passport will contain one or more blockchain wallets to handle on-chain transactions (payments, publishing, etc).  The current supported blockchain wallets are Ethereum and NEO.",source:"@site/docs/passport-wallet.md",sourceDirName:".",slug:"/passport-wallet",permalink:"/docs/passport-wallet",tags:[],version:"current",frontMatter:{id:"passport-wallet",title:"Blockchain Wallets",sidebar_label:"Blockchain Wallets"},sidebar:"gettingStarted",previous:{title:"Verified Claims",permalink:"/docs/passport-claim"},next:{title:"Overview",permalink:"/docs/messaging"}},p=[],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Bridge Passport will contain one or more blockchain wallets to handle on-chain transactions (payments, publishing, etc).  The current supported blockchain wallets are Ethereum and NEO."),(0,o.kt)("img",{class:"centered",src:"/img/bridgepassport-wallet.png"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network")," - The blockchain network the wallet, current supported networks are Ethereum and NEO"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Address")," - The blockchain address of the wallet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Key")," - The private key for the wallet")))}f.isMDXComponent=!0}}]);