"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[3583],{3583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(7294),l=r(6201),o=r(2898),a=r(1719),u=r(3171),c=r(5695),i=r.n(c);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,u=[],c=!0,i=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){i=!0,l=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(i)throw l}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const h=function(){var e=p((0,n.useState)(null),2),t=e[0],r=e[1],c=p((0,n.useState)(""),2),s=c[0],f=c[1],y=p((0,n.useState)({length:12,uppercase:!0,lowercase:!0,numbers:!0,symbols:!0}),2),b=y[0],h=y[1],d=function(){for(var e="",t="abcdefghijklmnopqrstuvwxyz".split(""),r="!@#$%^&*(){}".split(""),n=0;n<b.length;++n){if(b.uppercase)e+=i().array.random(t).toUpperCase();if(b.lowercase)e+=i().array.random(t);b.numbers&&(e+=i().number.getRandomIntInclusive(0,10)),b.symbols&&(e+=i().array.random(r))}var l=i().array.shuffle(e.split("")).join("");f(l.slice(0,b.length))};return(0,n.useEffect)(d,[b]),n.createElement(u.u,null,n.createElement(u.t,null,n.createElement(u.s,{mode:"horizontal"},n.createElement(u.r,{top:"Length"},n.createElement(u.A,{type:"number",name:"length",value:b.length,min:"0",onChange:function(e){h(m(m({},b),{},{length:Number(e.target.value)}))}})),n.createElement(u.r,null,n.createElement(u.l,{checked:b.uppercase},"Uppercase")),n.createElement(u.r,null,n.createElement(u.l,{checked:b.lowercase},"Lowercase")),n.createElement(u.r,null,n.createElement(u.l,{checked:b.numbers},"Numbers")),n.createElement(u.r,null,n.createElement(u.l,{checked:b.symbols},"Symbols"))),n.createElement(u.r,null,n.createElement(u.A,{value:s,type:"text",after:n.createElement(u.e,{mode:"horizontal",gap:"s",stretched:!0},n.createElement(u.y,{onClick:function(){(0,a.a)(s).then((function(){r(n.createElement(u.W,{onClose:function(){return r(null)}},"Password copied to clipboard"))}))}},n.createElement(l.a,null)),n.createElement(u.y,{onClick:d},n.createElement(o.a,null)))}))),null!==t&&t)}}}]);