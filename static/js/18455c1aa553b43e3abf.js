"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[828],{1935:(e,t,n)=>{n.d(t,{a:()=>p});var r=n(7294),u=n(3935),s=n(7211),a=n(9590),o=n.n(a),c=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},i="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,l=[],p=function(e,t,n){void 0===n&&(n={});var a=r.useRef(null),p={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||l},f=r.useState({styles:{popper:{position:p.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),d=f[0],m=f[1],y=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);u.flushSync((function(){m({styles:c(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:c(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),b=r.useMemo((function(){var e={onFirstUpdate:p.onFirstUpdate,placement:p.placement,strategy:p.strategy,modifiers:[].concat(p.modifiers,[y,{name:"applyStyles",enabled:!1}])};return o()(a.current,e)?a.current||e:(a.current=e,e)}),[p.onFirstUpdate,p.placement,p.strategy,p.modifiers,y]),w=r.useRef();return i((function(){w.current&&w.current.setOptions(b)}),[b]),i((function(){if(null!=e&&null!=t){var r=(n.createPopper||s.a)(e,t,b);return w.current=r,function(){r.destroy(),w.current=null}}}),[e,t,n.createPopper]),{state:w.current?w.current.state:null,styles:d.styles,attributes:d.attributes,update:w.current?w.current.update:null,forceUpdate:w.current?w.current.forceUpdate:null}}}}]);