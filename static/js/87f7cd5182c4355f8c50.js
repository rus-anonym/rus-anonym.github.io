"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[934],{934:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(6540),a=r(5077),o=r(4678),l=r(2343),i=r(3716),u=r(2319),c=r(6521),s=r(1370),m=r(7504),f=r(3710),p=r(5093),d=r.n(p),y=r(4204);function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function w(e){var t=function(e,t){if("object"!=E(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==E(t)?t:t+""}var S={light:{current:{backgroundColor:"green",color:"white",padding:"3px",borderRadius:"3px"},invalid:{backgroundColor:"red",color:"white",padding:"3px",borderRadius:"3px"},valid:{color:"green"},default:{color:"black"}},dark:{current:{backgroundColor:"green",color:"white",padding:"3px",borderRadius:"3px"},invalid:{backgroundColor:"red",color:"white",padding:"3px",borderRadius:"3px"},valid:{color:"green"},default:{color:"white"}}},k=function(e){var t=e.value,r=e.status;return n.createElement("span",{style:S[c.a.theme][r]},t)},C=function(e){var t=e.split("").map((function(e){return{value:e,status:"default"}}));return t[0].status="current",t},A={ru:/^[ЁёА-я\s]/,en:/^[a-zA-Z\s]/},j=function(e,t){return e.date<t.date?1:-1},I=function(e,t){var r=e.cpm/e.errors,n=t.cpm/t.errors;return r>n?-1:r<n?1:e.cpm>t.cpm?-1:e.cpm<t.cpm?1:0},R=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},r=[{key:"load",value:function(){return y.a.utils.storage.speedtype.history.slice()}},{key:"save",value:function(e){e.length>100&&(e.sort(j),e=e.slice(0,100)),y.a.utils.storage.speedtype.history=e}}],(t=null)&&x(e.prototype,t),r&&x(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}();const O=(0,s.a)((function(){var e=h((0,n.useState)(),2),t=e[0],r=e[1],s=h((0,n.useState)(0),2),p=s[0],y=s[1],b=h((0,n.useState)(0),2),g=b[0],E=b[1],x=h((0,n.useState)(0),2),w=x[0],S=x[1],O=h((0,n.useState)(!1),2),D=O[0],H=O[1],P=h((0,n.useState)(R.load()),2),T=P[0],z=P[1],L=(0,f.b)("translation",{keyPrefix:"pages.utils.list.speedtype"}),M=L.t,W=L.i18n,Y=M("text"),N=h((0,n.useState)(C(Y)),2),X=N[0],U=N[1],_=function(e){return n.createElement(a.i,{mode:"outline",style:{textAlign:"center"}},n.createElement(a.Q,{hasActive:!1,hasHover:!1,text:W.t("languages.".concat(e.lang)),caption:d()(e.date).format("DD.MM.YYYY, HH:mm:ss")},n.createElement(a.C,{before:e.cpm<200?n.createElement(o.a,null):e.cpm<400?n.createElement(l.a,null):n.createElement(i.a,null),textWrap:"short"},M("cpm"),": ",e.cpm),n.createElement(a.C,{before:n.createElement(u.a,{fill:"rgb(".concat(150+e.errors,", ").concat(162-8.1*e.errors,", ").concat(173-8.65*e.errors,")")}),textWrap:"short"},M("errors"),": ",e.errors)))},B=function(){y(0),E(0),S(0),U(C(Y))},Q=function(e){e.preventDefault(),(D||e.key===Y[0])&&(H(!0),function(e){if(A[c.a.language].test(e)){var o=X.findIndex((function(e){return"current"===e.status||"invalid"===e.status})),l=X[o];0===o&&"current"===l.status&&r(Date.now());var i=function(){var e=Math.floor(60/((Date.now()-t)/1e3/o));return isNaN(e)&&(e=0),e};if(e===l.value){if(l.status="valid",o+1===X.length){U([]),S(o/(X.length/100));var u=i();y(u);var s=[].concat(v(T),[{lang:c.a.language,cpm:u,errors:g,date:t}]);return z(s),R.save(s),void H(!1)}X[o+1].status="current"}else l.status="invalid",E(g+1);S(o/(X.length/100)),y(i()),U(v(X))}else m.a.popout=n.createElement(a.b,{actions:[{title:M("continue"),autoClose:!0,mode:"default"}],text:M("switchLayout"),onClose:function(){m.a.popout=null}})}(e.key))};return(0,n.useEffect)((function(){return document.addEventListener("keypress",Q),function(){document.removeEventListener("keypress",Q)}}),[p,t,g,T,w,D]),n.createElement(a.u,null,X.length>0&&n.createElement(a.o,{onClick:function(){var e;null===(e=document.getElementById("input"))||void 0===e||e.focus()}},n.createElement(a.O,{value:w}),n.createElement(a.X,{size:28}),n.createElement("div",{style:{textAlign:"center"}},X.map(k))),n.createElement(a.u,{mode:"plain",header:n.createElement(a.v,null,M("results"))},n.createElement(a.C,{before:p<200?n.createElement(o.a,null):p<400?n.createElement(l.a,null):n.createElement(i.a,null),textWrap:"short"},M("cpm"),": ",p),n.createElement(a.C,{before:n.createElement(u.a,{fill:"rgb(".concat(150+g,", ").concat(162-8.1*g,", ").concat(173-8.65*g,")")}),textWrap:"short"},M("errors"),": ",g),0===X.length&&n.createElement(a.o,{style:{display:"flex",justifyContent:"center"}},n.createElement(a.f,{appearance:"positive",stretched:!0,size:"l",onClick:B},M("restart")))),T.length>0&&n.createElement(a.u,{mode:"plain"},n.createElement(a.u,{separator:"hide",mode:"plain",style:{textAlign:"center"},description:"".concat(M("formula"),": ").concat(M("cpm")," / ").concat(M("errors"))},n.createElement("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"center"}},n.createElement(a.u,{style:{marginRight:T.length>1?"5px":void 0},separator:"hide",mode:"plain"},n.createElement(a.v,null,M("bestResult")),_(T.sort(I)[0])),T.length>1&&n.createElement(a.u,{style:{marginLeft:"5px"},separator:"hide",mode:"plain"},n.createElement(a.v,null,M("worstResult")),_(T.sort(I)[T.length-1])))),n.createElement(a.X,null),n.createElement(a.u,{mode:"plain",header:n.createElement(a.v,{aside:"".concat(M("total"),": ").concat(T.length)},M("history"))},n.createElement(a.h,null,T.sort(j).map(_))),n.createElement(a.X,null),n.createElement(a.T,null),n.createElement(a.U,{hasActive:!1,hasHover:!1},n.createElement(a.f,{size:"m",mode:"primary",appearance:"negative",onClick:function(){z([]),R.save([]),B()}},M("clearHistory")))))}))}}]);