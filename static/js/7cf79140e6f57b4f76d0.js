"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[7180],{7180:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var n=r(7294),o=r(9669),a=r.n(o),i=r(672),c=r(9151),u=r(9534),l=r(657),s=r(5734);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function m(){}function p(){}function d(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&r.call(g,o)&&(v=g);var E=d.prototype=m.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==f(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,c(E,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(E),c(E,i,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function m(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var v=function(t){var e=t.pack,r=(0,i.fb)().viewWidth>=i.ab.TABLET,o=(0,n.useMemo)((function(){for(var t=[],r=0;r<e.stickers.length;r+=8)t.push(e.stickers.slice(r,r+8));return t}),[]);return n.createElement(i.m,null,o.map((function(t){return n.createElement(i.w,null,n.createElement("div",{style:{display:"flex"}},t.map((function(t){return n.createElement(u.a,{action:r?"hover":"click",content:n.createElement(i.m,{style:{width:"20vw"}},n.createElement(i.e,{mode:"vertical",stretched:!0},n.createElement("img",{width:"100%",src:"https://rus-anonym.github.io/vk-stickers-storage/".concat(e.id,"/stickers/").concat(t.id,"/").concat(t.images[t.images.length-1],".png")}),t.images.map((function(r){return n.createElement(i.B,{target:"_blank",href:"https://rus-anonym.github.io/vk-stickers-storage/".concat(e.id,"/stickers/").concat(t.id,"/").concat(r,".png")},r,".png")}))))},n.createElement("img",{width:56,src:"https://rus-anonym.github.io/vk-stickers-storage/".concat(e.id,"/stickers/").concat(t.id,"/").concat(t.images[0],".png")}))}))))})))},y=function(){return n.createElement(i.s,{mode:"plain",separator:"hide"},n.createElement(i.K,null,"Анимированные паки в разработке"))},g=function(t){var e=t.pack,r=t.exit,o=p((0,n.useState)(null),2),a=o[0],c=o[1],u=(0,i.fb)().viewWidth>=i.ab.TABLET;return(0,n.useEffect)((function(){l.a.addQueryParam("id",e.id.toString())}),[]),n.createElement(i.s,null,n.createElement("div",{style:u?{display:"flex",flexDirection:"row"}:void 0},n.createElement("img",{style:{display:"block",float:u?"left":void 0,maxWidth:u?"20vw":"90%",width:"auto",height:"auto",borderRadius:"10px",marginLeft:"auto",marginRight:"auto"},src:"https://rus-anonym.github.io/vk-stickers-storage/".concat(e.id,"/previews/").concat(e.previews[e.previews.length-1],".jpeg")}),n.createElement(i.m,null,n.createElement(i.N,{subhead:"simple"===e.type?"Обычный":"Анимированный",text:e.description,caption:e.author,after:"Pack ID",afterCaption:e.id,multiline:!0,disabled:!0,actions:n.createElement(i.e,{mode:"vertical",stretched:!0},n.createElement(i.f,{size:"m",onClick:function(){var t="".concat(l.a.url,"?id=").concat(e.id);(0,s.b)(t).then((function(){c(n.createElement(i.S,{onClose:function(){return c(null)}},"Ссылка скопирована в буфер обмен"))}))},stretched:!0,appearance:"accent"},"Скопировать ссылку на страницу"),n.createElement(i.f,{size:"m",onClick:function(){var t=document.createElement("a");t.href=e.url,t.target="_blank",t.click()},stretched:!0,appearance:"neutral"},"Открыть пак в ВКонтакте"))},e.title))),"simple"===e.type?n.createElement(v,{pack:e}):n.createElement(y,null),n.createElement(i.T,null),n.createElement(i.s,{mode:"plain"},n.createElement(i.e,{mode:"vertical",stretched:!0},n.createElement(i.f,{size:"m",onClick:function(){l.a.clearQueryParams(),r()},stretched:!0,appearance:"neutral"},"Назад"))),null!==a&&a)},E=function(t){var e=t.pack,r=e.id,o=e.author,a=e.description,c=e.title,u=e.type,l=e.url,s=e.previews,f=t.enter,h=(0,n.useMemo)((function(){return s.find((function(t){return t>=140}))||s[0]}),[]);return n.createElement(i.N,{before:n.createElement("img",{width:"140px",src:"https://rus-anonym.github.io/vk-stickers-storage/".concat(r,"/previews/").concat(h,".jpeg")}),disabled:!0,subhead:"simple"===u?"Обычный":"Анимированный",text:a,caption:o,multiline:!0,actions:n.createElement(i.e,{stretched:!0},n.createElement(i.f,{onClick:f},"Открыть"),n.createElement(i.f,{appearance:"neutral",onClick:function(){var t=document.createElement("a");t.href=l,t.target="_blank",t.click()}},"Открыть в ВК"))},c)},w=function(t){var e=t.meta,r=(0,i.fb)().viewWidth>=i.ab.TABLET,o=p((0,n.useState)(""),2),a=o[0],s=o[1],f=p((0,n.useState)(!0),2),h=f[0],m=f[1],d=p((0,n.useState)(!0),2),v=d[0],y=d[1],w=p((0,n.useState)(null),2),b=w[0],k=w[1],x=e.filter((function(t){return!(""!==a&&!t.title.toLowerCase().includes(a.toLowerCase()))&&(!(!h||!v)||!(!h&&!v)&&((!h||"animated"!==t.type)&&(!v||"simple"!==t.type)))})),L=p((0,n.useState)(1),2),S=L[0],_=L[1],j=(0,n.useMemo)((function(){_(1);for(var t=[],e=0;e<x.length;e+=25)t.push(x.slice(e,e+25));return t}),[a,h,v]);return(0,n.useEffect)((function(){var t=parseInt(l.a.queryParams.id);if(!isNaN(t)){var r=e.find((function(e){return e.id===t}));r&&k(r)}}),[]),null!==b?n.createElement(g,{pack:b,exit:function(){return k(null)}}):n.createElement(i.s,null,n.createElement(i.P,{placeholder:"Поиск",value:a,onChange:function(t){s(t.target.value)},icon:n.createElement(u.a,{action:r?"hover":"click",content:n.createElement(i.m,null,n.createElement(i.t,null,"Фильтры"),n.createElement(i.R,{disabled:!0,multiline:!0,after:n.createElement(i.X,{checked:h,onChange:function(){m(!h)}})},"Обычные"),n.createElement(i.R,{disabled:!0,multiline:!0,after:n.createElement(i.X,{checked:v,onChange:function(){y(!v)}})},"Анимированные"))},n.createElement(i.x,{disabled:r},n.createElement(c.a,null)))}),0===j.length?n.createElement(i.K,{action:n.createElement(i.f,{onClick:function(){s(""),y(!0),m(!0)}},"Убрать фильтры")},"По выбранным фильтрам ничего не найдено"):n.createElement(n.Fragment,null,j[S-1].map((function(t){return n.createElement(E,{pack:t,enter:function(){return k(t)},key:t.id})})),n.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.createElement(i.F,{currentPage:S,onChange:function(t){return _(t)},totalPages:j.length}))))};const b=function(){var t=p((0,n.useState)(null),2),e=t[0],r=t[1];return(0,n.useEffect)((function(){var t;(t=h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a()({method:"GET",baseURL:"https://rus-anonym.github.io/vk-stickers-storage",url:"meta.json"});case 2:e=t.sent,r(e.data);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){m(a,n,o,i,c,"next",t)}function c(t){m(a,n,o,i,c,"throw",t)}i(void 0)}))})()}),[]),null===e?n.createElement(i.s,null,n.createElement(i.K,null,n.createElement(i.U,{size:"large"}))):n.createElement(w,{meta:e})}}}]);