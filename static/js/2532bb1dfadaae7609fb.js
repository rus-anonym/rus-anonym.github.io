"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[4566],{4566:(t,e,r)=>{r.r(e),r.d(e,{default:()=>L});var n=r(7294),o=r(8283),a=r(5613),i=r(4578),u=r(3750),c=r(7227),l=r(7909),s=r(578),h=r(5822),f=r(1184),m=r(4409),p=r(4478);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(t,e)||k(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),u=new j(o||[]);return n(i,"_invoke",{value:x(t,r,u)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function f(){}function m(){}function p(){}var y={};c(y,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(A([])));b&&b!==e&&r.call(b,a)&&(y=b);var k=p.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,a,i,u){var c=s(t[n],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==v(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,u)}))}u(c.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=_(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=p,n(k,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=c(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(k),c(k,u,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function g(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function b(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||k(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=function(t){var e=t.name,r=t.surname,o=t.nickname,i=t.avatar,u=t.url,c=i?n.createElement(a.d,{size:48,src:i}):n.createElement(a.B,{size:48,gradientColor:(0,a.qb)([].concat(b(e.split("")),b(r.split(""))).map((function(t){return t.charCodeAt(0)})).reduce((function(t,e){return t+e}),0))},e[0],r[0]);return n.createElement(a.T,{multiline:!0,hasActive:!1,hasHover:!1,before:c,caption:n.createElement(n.Fragment,null,o,u.personal&&n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement(a.D,{target:"_blank",href:u.personal},u.personal))),bottom:n.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.github&&n.createElement(a.D,{href:u.github,target:"_blank"},n.createElement(a.d,{style:{margin:"5px"},size:24,src:"dark"===l.a.theme?m:f})),u.vk&&n.createElement(a.D,{href:u.vk,target:"_blank"},n.createElement(a.d,{style:{margin:"5px"},size:24,src:s})),u.telegram&&n.createElement(a.D,{href:u.telegram,target:"_blank"},n.createElement(a.d,{style:{margin:"5px"},size:24,src:h})))},e," ",r)},x=[{name:"Андрей",surname:"Пшеничный",nickname:"girl_dev",url:{personal:"https://girl-dev.me/",vk:"https://vk.com/girl_dev",github:"https://github.com/GirlDev1337",telegram:"https://t.me/girl_dev"}},{name:"Никита",surname:"Смирнов",nickname:"sm1rnovdev",url:{vk:"https://vk.com/sm1rnovdev",github:"https://github.com/sm1rnovdev",telegram:"https://t.me/sm1rnovdev"}},{name:"Женя",surname:"Матеюк",nickname:"zhenya00000",url:{personal:"https://zhenya00000.github.io/",vk:"https://vk.com/zhenya00000",github:"https://github.com/zhenya00000"}},{name:"Дмитрий",surname:"Волков",nickname:"dimondaf",url:{vk:"https://vk.com/dimondaf",telegram:"https://t.me/dimondaf"}},{name:"Всеволод",surname:"Кравец",nickname:"sevakravets",url:{vk:"https://vk.com/sevakravets",telegram:"https://t.me/noname2544",github:"https://github.com/kravetsone"}},{name:"Сергей",surname:"Стёпочкин",nickname:"kolesto65",url:{vk:"https://vk.com/kolesto65",github:"https://github.com/kolesto65"}},{name:"Иван",surname:"Ивлепенко",nickname:"ivlepenko",url:{vk:"https://vk.com/ivlepenko"}},{name:"Ярослав",surname:"Клопенко",nickname:"klopenkooff",url:{vk:"https://vk.com/klopenkooff",telegram:"https://t.me/klopenkooff",github:"https://github.com/MrSlavik0"}},{name:"Вадим",surname:"Филатов",nickname:"flxpr",url:{vk:"https://vk.com/id649590332",telegram:"https://t.me/flxpr",github:"https://github.com/flxprhub"}},{name:"Юлий",surname:"Цезарев",url:{vk:"https://vk.com/id496798589"}},{name:"Руслан",surname:"Некрасов",nickname:"RuslanNashkin",url:{vk:"https://vk.com/RuslanNashkin",github:"https://github.com/RuslanNashkin",telegram:"https://t.me/RuslanNashkin"}}],_=function(){var t,e=(t=d().mark((function t(){var e,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new o.a,t.next=3,e.repos.get({owner:"rus-anonym",repo:"rus-anonym.github.io"});case 3:return r=t.sent,t.abrupt("return",{stars:r.data.stargazers_count,issues:r.data.open_issues_count,forks:r.data.forks});case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){g(a,n,o,i,u,"next",t)}function u(t){g(a,n,o,i,u,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();const L=function(){var t=y((0,n.useState)(),2),e=t[0],r=t[1],o=(0,p.a)("translation",{keyPrefix:"pages.aboutSite"}).t,s=(0,a.rb)().viewWidth>=a.lb.TABLET;return(0,n.useEffect)((function(){_().then(r)}),[]),n.createElement(n.Fragment,null,n.createElement(a.v,null,e&&n.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.createElement(a.k,{after:n.createElement(i.c,{size:24}),hasActive:!1,hasHover:!1},e.stars),n.createElement(a.k,{after:n.createElement(i.a,{size:24,style:{marginLeft:"5px",marginTop:"5px"}}),disabled:!0},e.issues),n.createElement(a.k,{after:n.createElement(i.b,{size:24}),hasActive:!1,hasHover:!1},e.forks)),n.createElement(a.D,{target:"_blank",href:"https://github.com/rus-anonym/rus-anonym.github.io"},n.createElement(a.X,{before:n.createElement(a.d,{size:36,src:"dark"===l.a.theme?m:f}),after:n.createElement(c.a,null)},o("github")))),n.createElement(a.v,{header:n.createElement(a.w,{subtitle:o("dreamTeamDescription")},o("dreamTeam"))},n.createElement("div",{style:{display:"flex",flexDirection:s?"row":"column",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"},children:x.map(E)}),n.createElement(a.Q,{icon:n.createElement(u.a,{size:56,style:{color:"red"}})},o("RusAnonymTeam")+" ",n.createElement(a.D,{target:"_blank",href:"https://vk.com/rus_anonym_team"},"RusAnonym Team"))))}}}]);