(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{TransProvider:()=>l,useTransContext:()=>u,useTranslate:()=>c,withTranslate:()=>s});const t=require("react");var n=e.n(t),a=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,o=t.call(e),u=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return u},o=(0,t.createContext)(null),u=function(){return(0,t.useContext)(o)},l=function(e){var r=e.children,n=e.trans,u=e.translations,l=e.initLocale,i=e.pluralRecord,c=a((0,t.useState)(!1),2),s=c[0],d=c[1],f=a((0,t.useReducer)((function(e){return!e}),!1),2),v=f[0],p=f[1],y=(0,t.useCallback)((function(){return d(!0)}),[]),g=(0,t.useCallback)((function(){return d(!1)}),[]);(0,t.useEffect)((function(){return n.addEventListener("loadstart",y),n.addEventListener("loadend",g),n.addEventListener("change-locale",p),n.addEventListener("init",p),function(){n.removeEventListener("loadstart",y),n.removeEventListener("loadend",g),n.removeEventListener("change-locale",p),n.removeEventListener("init",p)}}),[g,y,n]),(0,t.useEffect)((function(){n.init({translations:u,locale:l,pluralRecord:i})}),[i,l,n,u]);var m=(0,t.useMemo)((function(){return{loading:s,trans:n,updatedTrigger:v}}),[v,n,s]);return t.createElement(o.Provider,{value:m},r)},i=function(){return(i=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},c=function(e){var r=u(),n=r.trans,a=r.updatedTrigger,o=(0,t.useMemo)((function(){return function(e){var r={};return function(t,n){var a=null==t?void 0:t.toString();if(a in r)return r[a];var o=e(t,n);return r[a]=o,o}}(n.createTranslate(e))}),[e,n,a]);return(0,t.useMemo)((function(){return{locale:n.locale,changeLocale:n.changeLocale,translate:o}}),[o,n])},s=function(e,r){return function(t){var a=c(r);return n().createElement(e,i({},t,a))}};module.exports=r})();
//# sourceMappingURL=bundle.js.map