"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[3336],{3336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(7294),a=n(913),o=n(381),l=n.n(o),i=n(4495),c=n(657),u=n(2589),s=n(9323),m=n(7909);function f(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=e.text,n=e.user,o=e.time;return r.createElement(a.P,{multiline:!0,disabled:!0,before:n.avatar,text:t,after:l()(o).format("HH:mm:ss")},n.name)};const b=(0,s.a)((function(){var e=d((0,r.useState)(""),2),t=e[0],n=e[1],o=d((0,r.useState)([]),2),l=o[0],s=o[1],p=d((0,r.useState)(0),2),v=p[0],b=p[1],h=d((0,r.useState)(!1),2),E=h[0],g=h[1],C=d((0,r.useState)([{name:"Profile I",avatar:r.createElement(a.A,{size:32,gradientColor:"blue"},"1")},{name:"Profile II",avatar:r.createElement(a.A,{size:32,gradientColor:"red"},"2")},{name:"Profile III",avatar:r.createElement(a.A,{size:32,gradientColor:"yellow"},"3")}]),2),A=C[0],w=C[1];return(0,r.useEffect)((function(){return m.a.events.on("prototypes.rpchat.addUser",(function(e){console.log(e),"custom"===e.type?w([].concat(f(A),[{name:e.name,avatar:r.createElement(a.d,{size:32,src:e.avatar})}])):w([].concat(f(A),[{name:e.name,avatar:r.createElement(a.A,{size:32,gradientColor:e.avatar},e.name.split(" ").slice(0,2).map((function(e){return e.split("")[0]})).join(""))}]))})),function(){m.a.events.removeAllListeners("prototypes.rpchat.addUser")}}),[]),r.createElement(a.p,{vertical:"bottom",filled:!0},r.createElement(a.u,{mode:"plain",style:{height:"100vh"}}),r.createElement(a.u,{mode:"plain"},l.map(y)),r.createElement(a.lb,{before:r.createElement(i.a,{shown:E,content:r.createElement(a.m,null,A.map((function(e,t){return r.createElement(a.P,{disabled:!0,before:e.avatar,actions:r.createElement(a.e,{mode:"horizontal"},r.createElement(a.f,{disabled:t===v,onClick:function(){b(t),g(!1)}},t===v?"Активный":"Выбрать"),r.createElement(a.f,{mode:"destructive",disabled:1===A.length,onClick:function(){A.splice(t,1),b(0)}},r.createElement(u.a,null)))},e.name)})),r.createElement(a.W,null),A.length<5&&r.createElement(a.f,{stretched:!0,onClick:function(){g(!1);var e=A.length;c.a.activeModal="prototypes-rpchat-createProfile",c.a.events.once("onModalClosed",(function(){e!==A.length&&b(A.length-1)}))}},"Create user"))},r.createElement(a.kb,{"aria-label":"Профиль",onClick:function(){return g(!E)}},A[v].avatar)),after:r.createElement(a.kb,{onClick:function(){s((function(e){return[].concat(f(e),[{text:t,time:new Date,user:A[v]}])})),n("")},mode:"send",disabled:0===t.length}),value:t,onChange:function(e){n(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),s((function(e){return[].concat(f(e),[{text:t,time:new Date,user:A[v]}])})),n(""))},placeholder:"Write a message..."}))}))}}]);