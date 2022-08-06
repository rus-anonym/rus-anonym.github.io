"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[9574],{9574:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(7294),a=r(902),l=r(2954),o=r(3178),c=r(240),u=r(2986),i=r(7909),s=r(9323),m=r(657),d=r(4478),f=r(381),p=r.n(f);function y(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b={light:{current:{backgroundColor:"green",color:"white",padding:"3px",borderRadius:"3px"},invalid:{backgroundColor:"red",color:"white",padding:"3px",borderRadius:"3px"},valid:{color:"green"},default:{color:"black"}},dark:{current:{backgroundColor:"green",color:"white",padding:"3px",borderRadius:"3px"},invalid:{backgroundColor:"red",color:"white",padding:"3px",borderRadius:"3px"},valid:{color:"green"},default:{color:"white"}}},x=function(e){var t=e.value,r=e.status;return n.createElement("span",{style:b[i.a.theme][r]},t)},k=function(e){var t=e.split("").map((function(e){return{value:e,status:"default"}}));return t[0].status="current",t},w={ru:/^[ЁёА-я\s]/,en:/^[a-zA-Z\s]/},S=function(e,t){return e.date<t.date?1:-1},C=function(e,t){var r=e.cpm/e.errors,n=t.cpm/t.errors;return r>n?-1:r<n?1:e.cpm>t.cpm?-1:e.cpm<t.cpm?1:0},A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,n=[{key:"load",value:function(){var e=localStorage.getItem("utils-speeedtype-history");return e?JSON.parse(e):[]}},{key:"save",value:function(e){return e.length>100&&(e.sort(S),e=e.slice(0,100)),localStorage.setItem("utils-speeedtype-history",JSON.stringify(e))}}],(r=null)&&E(t.prototype,r),n&&E(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const I=(0,s.a)((function(){var e=g((0,n.useState)(),2),t=e[0],r=e[1],s=g((0,n.useState)(0),2),f=s[0],v=s[1],h=g((0,n.useState)(0),2),E=h[0],b=h[1],I=g((0,n.useState)(0),2),D=I[0],j=I[1],R=g((0,n.useState)(!1),2),O=R[0],T=R[1],L=g((0,n.useState)(A.load()),2),N=L[0],z=L[1],M=(0,d.a)("translation",{keyPrefix:"pages.utils.list.speedtype"}),W=M.t,Y=M.i18n,H=W("text"),P=g((0,n.useState)(k(H)),2),J=P[0],_=P[1],B=function(e){return n.createElement(a.h,{mode:"outline",style:{textAlign:"center"}},n.createElement(a.N,{disabled:!0,text:Y.t("languages.".concat(e.lang)),caption:p()(e.date).format("DD.MM.YYYY, HH:mm:ss")},n.createElement(a.D,{before:e.cpm<200?n.createElement(l.a,null):e.cpm<400?n.createElement(o.a,null):n.createElement(c.a,null),textWrap:"short"},W("cpm"),": ",e.cpm),n.createElement(a.D,{before:n.createElement(u.a,{fill:"rgb(".concat(150+e.errors,", ").concat(162-8.1*e.errors,", ").concat(173-8.65*e.errors,")")}),textWrap:"short"},W("errors"),": ",e.errors)))},Q=function(){v(0),b(0),j(0),_(k(H))},U=function(e){e.preventDefault(),(O||e.key===H[0])&&(T(!0),function(e){if(w[i.a.language].test(e)){var l=J.findIndex((function(e){return"current"===e.status||"invalid"===e.status})),o=J[l];0===l&&"current"===o.status&&r(Date.now());var c=function(){var e=Math.floor(60/((Date.now()-t)/1e3/l));return isNaN(e)&&(e=0),e};if(e===o.value){if(o.status="valid",l+1===J.length){_([]),j(l/(J.length/100));var u=c();v(u);var s=[].concat(y(N),[{lang:i.a.language,cpm:u,errors:E,date:t}]);return z(s),A.save(s),void T(!1)}J[l+1].status="current"}else o.status="invalid",b(E+1);j(l/(J.length/100)),v(c()),_(y(J))}else m.a.popout=n.createElement(a.b,{actions:[{title:W("continue"),autoclose:!0,mode:"default"}],text:W("switchLayout"),onClose:function(){m.a.popout=null}})}(e.key))};return(0,n.useEffect)((function(){return document.addEventListener("keypress",U),function(){document.removeEventListener("keypress",U)}}),[f,t,E,N,D,O]),n.createElement(a.t,null,J.length>0&&n.createElement(a.n,{onClick:function(){var e;null===(e=document.getElementById("input"))||void 0===e||e.focus()}},n.createElement(a.L,{value:D}),n.createElement(a.T,{size:28}),n.createElement("div",{style:{textAlign:"center"}},J.map(x))),n.createElement(a.t,{mode:"plain",header:n.createElement(a.u,null,W("results"))},n.createElement(a.D,{before:f<200?n.createElement(l.a,null):f<400?n.createElement(o.a,null):n.createElement(c.a,null),textWrap:"short"},W("cpm"),": ",f),n.createElement(a.D,{before:n.createElement(u.a,{fill:"rgb(".concat(150+E,", ").concat(162-8.1*E,", ").concat(173-8.65*E,")")}),textWrap:"short"},W("errors"),": ",E),0===J.length&&n.createElement(a.n,{style:{display:"flex",justifyContent:"center"}},n.createElement(a.f,{appearance:"positive",stretched:!0,size:"l",onClick:Q},W("restart")))),N.length>0&&n.createElement(a.t,{mode:"plain"},n.createElement(a.t,{separator:"hide",mode:"plain",style:{textAlign:"center"},description:"".concat(W("formula"),": ").concat(W("cpm")," / ").concat(W("errors"))},n.createElement("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"center"}},n.createElement(a.t,{style:{marginRight:N.length>1?"5px":void 0},separator:"hide",mode:"plain"},n.createElement(a.u,null,W("bestResult")),B(N.sort(C)[0])),N.length>1&&n.createElement(a.t,{style:{marginLeft:"5px"},separator:"hide",mode:"plain"},n.createElement(a.u,null,W("worstResult")),B(N.sort(C)[N.length-1])))),n.createElement(a.T,null),n.createElement(a.t,{mode:"plain",header:n.createElement(a.u,{aside:"".concat(W("total"),": ").concat(N.length)},W("history"))},n.createElement(a.g,null,N.sort(S).map(B))),n.createElement(a.T,null),n.createElement(a.Q,null),n.createElement(a.R,{disabled:!0},n.createElement(a.f,{size:"m",mode:"destructive",onClick:function(){z([]),A.save([]),Q()}},W("clearHistory")))))}))}}]);