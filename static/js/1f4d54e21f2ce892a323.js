"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[5053],{5053:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(6540),l=r(6373),o=r(4315),a=r(2199),c=r(5077),u=r(6079),i=r.n(u);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,c=[],u=!0,i=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){i=!0,l=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(i)throw l}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const h=function(){var e=b((0,n.useState)(null),2),t=e[0],r=e[1],u=b((0,n.useState)(""),2),s=u[0],f=u[1],y=b((0,n.useState)({length:12,uppercase:!0,lowercase:!0,numbers:!0,symbols:!0}),2),p=y[0],h=y[1],d=function(){for(var e="",t="abcdefghijklmnopqrstuvwxyz".split(""),r="!@#$%^&*(){}".split(""),n=0;n<p.length;++n){if(p.uppercase)e+=i().array.random(t).toUpperCase();if(p.lowercase)e+=i().array.random(t);p.numbers&&(e+=i().number.getRandomIntInclusive(0,10)),p.symbols&&(e+=i().array.random(r))}var l=i().array.shuffle(e.split("")).join("");f(l.slice(0,p.length))};return(0,n.useEffect)(d,[p]),n.createElement(c.u,null,n.createElement(c.t,null,n.createElement(c.s,{mode:"horizontal"},n.createElement(c.r,{top:"Length"},n.createElement(c.A,{type:"number",name:"length",value:p.length,min:"0",onChange:function(e){h(m(m({},p),{},{length:Number(e.target.value)}))}})),n.createElement(c.r,null,n.createElement(c.l,{checked:p.uppercase},"Uppercase")),n.createElement(c.r,null,n.createElement(c.l,{checked:p.lowercase},"Lowercase")),n.createElement(c.r,null,n.createElement(c.l,{checked:p.numbers},"Numbers")),n.createElement(c.r,null,n.createElement(c.l,{checked:p.symbols},"Symbols"))),n.createElement(c.r,null,n.createElement(c.A,{value:s,type:"text",after:n.createElement(c.e,{mode:"horizontal",gap:"s",stretched:!0},n.createElement(c.y,{onClick:function(){(0,a.a)(s).then((function(){r(n.createElement(c.W,{onClose:function(){return r(null)}},"Password copied to clipboard"))}))}},n.createElement(l.a,null)),n.createElement(c.y,{onClick:d},n.createElement(o.a,null)))}))),null!==t&&t)}}}]);