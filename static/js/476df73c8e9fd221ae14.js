"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[4399],{4399:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(7294),i=r(118),o=r(488),a=r(5187),l=r(5506),c=r(2012),u=r(476),s=r(7283),f=r(8828),p=r(9316),h=r(381),d=r.n(h),m=r(547),y=r(4478);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(){E=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),a=new _(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return O()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var l=k(a,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function p(){}function h(){}var d={};l(d,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==t&&r.call(y,i)&&(d=y);var g=h.prototype=f.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(i,o,a,l){var c=u(e[i],e,o);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==v(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,l)}))}l(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,l(g,"constructor",h),l(h,"constructor",p),p.displayName=l(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,a,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new b(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(g),l(g,a,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function k(e,t,r,n,i,o,a){try{var l=e[o](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,i)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){k(o,n,i,a,l,"next",e)}function l(e){k(o,n,i,a,l,"throw",e)}a(void 0)}))}}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=[{title:"Aztec 2D",url:"https://en.wikipedia.org/wiki/Aztec_Code"},{title:"CODABAR 1D",url:"https://en.wikipedia.org/wiki/Codabar"},{title:"Code 39 1D",url:"https://en.wikipedia.org/wiki/Code_39"},{title:"Code 93 1D",url:"https://en.wikipedia.org/wiki/Code_93"},{title:"Code 128 1D",url:"https://en.wikipedia.org/wiki/Code_128"},{title:"Data Matrix 2D",url:"https://ru.wikipedia.org/wiki/Data_Matrix"},{title:"EAN-8 1D",url:"https://en.wikipedia.org/wiki/EAN-8"},{title:"EAN-13 1D",url:"https://en.wikipedia.org/wiki/International_Article_Number"},{title:"ITF (Interleaved Two of Five) 1D",url:"https://en.wikipedia.org/wiki/Interleaved_2_of_5"},{title:"MaxiCode 2D",url:"https://en.wikipedia.org/wiki/MaxiCode"},{title:"PDF417",url:"https://en.wikipedia.org/wiki/PDF417"},{title:"QR Code 2D",url:"https://en.wikipedia.org/wiki/QR_code"},{title:"RSS 14",url:"https://en.wikipedia.org/wiki/GS1_DataBar"},{title:"RSS Expanded",url:"https://en.wikipedia.org/wiki/GS1_DataBar"},{title:"UPC-A 1D",url:"https://en.wikipedia.org/wiki/Universal_Product_Code"},{title:"UPC-E 1D",url:"https://en.wikipedia.org/wiki/Universal_Product_Code"},{title:"UPC/EAN",url:"https://en.wikipedia.org/wiki/Universal_Product_Code"}],O=function(e){var t=e.result,r=(0,y.a)("translation",{keyPrefix:"pages.utils.list.qr.result"}).t;return n.createElement(n.Fragment,null,n.createElement(i.C,{before:n.createElement(o.a,null),textWrap:"full",textLevel:"primary"},r("text"),": ",t.getText()),n.createElement(i.C,{before:n.createElement(a.a,null),textLevel:"primary"},r("created"),":"," ",d()(t.getTimestamp()).format("DD.MM.YYYY, HH:mm:ss")),n.createElement(i.R,null),n.createElement(i.j,{indicator:n.createElement(i.m,{mode:"primary"},t.getNumBits())},"Raw Bits count"),n.createElement(i.C,{before:n.createElement(o.a,null),textWrap:"full",textLevel:"primary"},"Barcode Format:"," ",n.createElement(i.B,{target:"_blank",href:L[t.getBarcodeFormat()].url},L[t.getBarcodeFormat()].title)))},C=function(e){var t=e.setResult,r=e.setFileSelector,o=S((0,n.useState)(null),2),a=o[0],c=o[1],u=S((0,n.useState)(null),2),s=u[0],h=u[1],d=S((0,n.useState)([{value:"11",label:L[11].title}]),2),v=d[0],g=d[1],w=(0,y.a)("translation",{keyPrefix:"pages.utils.list.qr"}).t,b=function(){var e=x(E().mark((function e(){var r,o,l,c,u;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return r=new Map,o=v.map((function(e){return Number(e.value)})),r.set(f.DecodeHintType.POSSIBLE_FORMATS,o),l=new p.a(r),e.prev=6,e.next=9,l.decodeFromImageUrl(URL.createObjectURL(a));case 9:c=e.sent,t(c),e.next=19;break;case 13:return e.prev=13,e.t0=e.catch(6),e.next=17,(new p.a).decodeFromImageUrl(URL.createObjectURL(a)).catch((function(){h(n.createElement(i.J,null,w("notDetect")))}));case 17:(u=e.sent)&&h(n.createElement(i.J,null,w("perhapsYouMeant")+" ",n.createElement(i.B,{target:"_blank",href:L[u.getBarcodeFormat()].url},L[u.getBarcodeFormat()].title),"?"));case 19:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}();return n.createElement(i.n,null,n.createElement(i.r,{top:a?a.name:w("selectFile")},n.createElement(i.p,{before:n.createElement(l.a,null),controlSize:"l",stretched:!0,appearance:"accent",onChange:function(e){c(e.target.files[0])}},w("choosePhoto"))),n.createElement(i.r,{top:w("selectScanFormats")},n.createElement(m.a,{options:L.map((function(e,t){return{value:t.toString(),label:e.title}})),onChange:g,closeAfterSelect:!1,creatable:!1,value:v,emptyText:w("emptyFormats")})),n.createElement(i.r,null,n.createElement(i.f,{stretched:!0,size:"m",disabled:null===a,onClick:function(){b()}},w("scan"))),null!==s&&s,n.createElement(i.n,null,n.createElement(i.f,{before:n.createElement(l.a,null),size:"l",stretched:!0,onClick:function(){return r(!1)}},w("selectCamera"))))};const P=function(){var e=(0,y.a)("translation",{keyPrefix:"pages.utils.list.qr"}).t,t=S((0,n.useState)(!1),2),r=t[0],o=t[1],a=S((0,n.useState)(null),2),l=a[0],f=a[1],p=S((0,n.useState)("initialize"),2),h=p[0],d=p[1],m=(0,i.cb)().viewWidth>=i.Z.TABLET,v=function(){var e=x(E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:d("work"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),d("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){v()}),[]),r&&null===l?n.createElement(C,{setResult:f,setFileSelector:o}):"work"!==h&&null===l?n.createElement(i.t,null,n.createElement(i.J,{icon:"error"===h?n.createElement(c.a,null):n.createElement(u.a,null),action:n.createElement(i.f,{size:"m",onClick:function(){v()}},e("requestCamera"))},e("error"===h?"errorCameraInitialize":"initializeCamera")),n.createElement(i.n,null,n.createElement(i.f,{size:"l",stretched:!0,onClick:function(){return o(!0)}},e("selectFile")))):null===l?n.createElement(i.t,null,n.createElement(s.a,{onResult:function(e){e&&f(e)},constraints:w({width:{ideal:1920},height:{ideal:1080}},!m&&{facingMode:{exact:"environment"}})}),n.createElement(i.n,null,n.createElement(i.f,{size:"l",stretched:!0,onClick:function(){return o(!0)}},e("selectFile")))):n.createElement(i.t,null,n.createElement(O,{result:l}),n.createElement(i.R,null),n.createElement(i.n,null,n.createElement(i.f,{size:"l",stretched:!0,onClick:function(){f(null)}},e("rescan"))))}}}]);