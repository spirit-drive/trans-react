(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{TransProvider:()=>i,useTransContext:()=>u,useTranslate:()=>s,withTranslate:()=>d});const r=require("react");var n=e.n(r),a=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)l.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return l},o=(0,r.createContext)(null),l=(0,r.createContext)(null),u=function(){return(0,r.useContext)(o)},i=function(e){var t=e.children,n=e.trans,u=e.translations,i=e.initLocale,c=e.pluralRecord,s=a((0,r.useState)(!1),2),d=s[0],f=s[1],v=a((0,r.useReducer)((function(e){return!e}),!1),2),y=v[0],p=v[1];(0,r.useEffect)((function(){var e=function(){return f(!0)},t=function(){return f(!1)};return n.addEventListener("loadstart",e),n.addEventListener("loadend",t),n.addEventListener("change-locale",p),n.addEventListener("init",p),function(){n.removeEventListener("loadstart",e),n.removeEventListener("loadend",t),n.removeEventListener("change-locale",p),n.removeEventListener("init",p)}}),[n]),(0,r.useEffect)((function(){n.init({translations:u,locale:i,pluralRecord:c})}),[c,i,n,u]);var m={loading:d,locale:i,trans:n};return r.createElement(o.Provider,{value:m},r.createElement(l.Provider,{value:y},t))},c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e){var t=u(),n=t.trans,a=t.locale,o=(0,r.useContext)(l),i=(0,r.useMemo)((function(){return n.createTranslate(e)}),[e,n,o]);return{locale:n.locale||a,changeLocale:n.changeLocale,translate:i}},d=function(e,t){return function(r){var a=s(t);return n().createElement(e,c({},r,a))}};module.exports=t})();
//# sourceMappingURL=bundle.js.map