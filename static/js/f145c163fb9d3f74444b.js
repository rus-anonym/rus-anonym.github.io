"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[3336],{3336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(7294),a=n(902),o=n(381),l=n.n(o),i=n(9534),u=n(657),c=n(1910),f=n(2589),m=n(9323);function s(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(e){var t=e.text,n=e.user,o=e.time;return r.createElement(a.N,{multiline:!0,disabled:!0,before:n.avatar,text:t,after:l()(o).format("HH:mm:ss")},n.name)};const h=(0,m.a)((function(){var e=d((0,r.useState)(""),2),t=e[0],n=e[1],o=d((0,r.useState)([]),2),l=o[0],m=o[1],y=d((0,r.useState)(0),2),b=y[0],h=y[1],v=d((0,r.useState)(!1),2),E=v[0],g=v[1],w=c.a.prototypes.rpchat.profiles;return r.createElement(a.q,{vertical:"bottom",filled:!0},r.createElement(a.t,{mode:"plain",style:{height:"100vh"}}),r.createElement(a.t,{mode:"plain"},l.map(p)),r.createElement(a.db,{before:r.createElement(i.a,{shown:E,content:r.createElement(a.n,null,w.map((function(e,t){return r.createElement(a.N,{disabled:!0,before:e.avatar,actions:r.createElement(a.e,{mode:"horizontal"},r.createElement(a.f,{disabled:t===b,onClick:function(){h(t),g(!1)}},t===b?"Активный":"Выбрать"),r.createElement(a.f,{mode:"destructive",disabled:1===w.length,onClick:function(){w.splice(t,1)}},r.createElement(f.a,null)))},e.name)})),r.createElement(a.T,null),w.length<5&&r.createElement(a.f,{stretched:!0,onClick:function(){g(!1),u.a.activeModal="prototypes-rpchat-createProfile"}},"Create user"))},r.createElement(a.cb,{"aria-label":"Профиль",onClick:function(){return g(!E)}},w[b].avatar)),after:r.createElement(a.cb,{onClick:function(){m((function(e){return[].concat(s(e),[{text:t,time:new Date,user:w[b]}])})),n("")},mode:"send",disabled:0===t.length}),value:t,onChange:function(e){n(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),m((function(e){return[].concat(s(e),[{text:t,time:new Date,user:w[b]}])})),n(""))},placeholder:"Write a message..."}))}))}}]);