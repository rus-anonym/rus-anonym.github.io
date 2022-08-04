"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[338],{7211:(e,t,n)=>{function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function o(e){return e instanceof r(e).Element||e instanceof Element}function i(e){return e instanceof r(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof r(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,{a:()=>le});var s=Math.max,f=Math.min,c=Math.round;function p(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(i(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(r=c(n.width)/s||1),a>0&&(o=c(n.height)/a||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function u(e){var t=r(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return r(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function g(e,t,n){void 0===n&&(n=!1);var o,a,s=i(t),f=i(t)&&function(e){var t=e.getBoundingClientRect(),n=c(t.width)/e.offsetWidth||1,r=c(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),m=d(t),g=p(e,f),y={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(s||!s&&!n)&&(("body"!==l(t)||v(m))&&(y=(o=t)!==r(o)&&i(o)?{scrollLeft:(a=o).scrollLeft,scrollTop:a.scrollTop}:u(o)),i(t)?((b=p(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):m&&(b.x=h(m))),{x:g.left+y.scrollLeft-b.x,y:g.top+y.scrollTop-b.y,width:g.width,height:g.height}}function y(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||d(e)}function w(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:i(e)&&v(e)?e:w(b(e))}function x(e,t){var n;void 0===t&&(t=[]);var o=w(e),i=o===(null==(n=e.ownerDocument)?void 0:n.body),a=r(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=t.concat(s);return i?f:f.concat(x(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return i(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var t=r(e),n=j(e);n&&O(n)&&"static"===m(n).position;)n=j(n);return n&&("html"===l(n)||"body"===l(n)&&"static"===m(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&i(e)&&"fixed"===m(e).position)return null;var n=b(e);for(a(n)&&(n=n.host);i(n)&&["html","body"].indexOf(l(n))<0;){var r=m(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var D="top",A="bottom",k="right",L="left",M="auto",P=[D,A,k,L],W="start",B="end",H="viewport",R="popper",T=P.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),C=[].concat(P,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),S=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var V={placement:"bottom",modifiers:[],strategy:"absolute"};function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function I(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?V:i;return function(e,t,n){void 0===n&&(n=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(n){var i="function"==typeof n?n(f.options):n;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:o(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(t)};var s=function(e){var t=q(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,f.options.modifiers)));return f.orderedModifiers=s.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(N(t,n)){f.rects={reference:g(t,E(n),"fixed"===f.options.strategy),popper:y(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!N(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var _={passive:!0};function F(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case k:t={x:n.x+n.width,y:f};break;case L:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n=e.popper,o=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=s.x,g=void 0===v?0:v,y=s.y,b=void 0===y?0:y,w="function"==typeof l?l({x:g,y:b}):{x:g,y:b};g=w.x,b=w.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),j=L,M=D,P=window;if(u){var W=E(n),H="clientHeight",R="clientWidth";if(W===r(n)&&"static"!==m(W=d(n)).position&&"absolute"===f&&(H="scrollHeight",R="scrollWidth"),i===D||(i===L||i===k)&&a===B)M=A,b-=(h&&W===P&&P.visualViewport?P.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===L||(i===D||i===A)&&a===B)j=k,g-=(h&&W===P&&P.visualViewport?P.visualViewport.width:W[R])-o.width,g*=p?1:-1}var T,C=Object.assign({position:f},u&&Y),S=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:c(t*r)/r||0,y:c(n*r)/r||0}}({x:g,y:b}):{x:g,y:b};return g=S.x,b=S.y,p?Object.assign({},C,((T={})[M]=O?"0":"",T[j]=x?"0":"",T.transform=(P.devicePixelRatio||1)<=1?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",T)):Object.assign({},C,((t={})[M]=O?b+"px":"",t[j]=x?g+"px":"",t.transform="",t))}const J={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=C.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[L,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[L,k].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var K={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var Z={start:"end",end:"start"};function $(e){return e.replace(/start|end/g,(function(e){return Z[e]}))}function ee(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ne(e,t){return t===H?te(function(e){var t=r(e),n=d(e),o=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,f=o.offsetTop)),{width:i,height:a,x:s+h(e),y:f}}(e)):o(t)?function(e){var t=p(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):te(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=s(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=s(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=s(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:f,y:c}}(d(e)))}function re(e,t,n){var r="clippingParents"===t?function(e){var t=x(b(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&i(e)?E(e):e;return o(n)?t.filter((function(e){return o(e)&&ee(e,n)&&"body"!==l(e)})):[]}(e):[].concat(t),a=[].concat(r,[n]),c=a[0],p=a.reduce((function(t,n){var r=ne(e,n);return t.top=s(r.top,t.top),t.right=f(r.right,t.right),t.bottom=f(r.bottom,t.bottom),t.left=s(r.left,t.left),t}),ne(e,c));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function oe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ie(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ae(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,a=n.boundary,s=void 0===a?"clippingParents":a,f=n.rootBoundary,c=void 0===f?H:f,u=n.elementContext,l=void 0===u?R:u,h=n.altBoundary,m=void 0!==h&&h,v=n.padding,g=void 0===v?0:v,y=oe("number"!=typeof g?g:ie(g,P)),b=l===R?"reference":R,w=e.rects.popper,x=e.elements[m?b:l],O=re(o(x)?x:x.contextElement||d(e.elements.popper),s,c),j=p(e.elements.reference),E=X({reference:j,element:w,strategy:"absolute",placement:i}),L=te(Object.assign({},w,E)),M=l===R?L:j,W={top:O.top-M.top+y.top,bottom:M.bottom-O.bottom+y.bottom,left:O.left-M.left+y.left,right:M.right-O.right+y.right},B=e.modifiersData.offset;if(l===R&&B){var T=B[i];Object.keys(W).forEach((function(e){var t=[k,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";W[e]+=T[n]*t}))}return W}function se(e,t,n){return s(e,f(t,n))}const fe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,c=void 0!==a&&a,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,g=void 0===v?0:v,b=ae(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),w=F(t.placement),x=U(t.placement),O=!x,j=z(w),M="x"===j?"y":"x",P=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,R="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,T="number"==typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(P){if(i){var q,V="y"===j?D:L,N="y"===j?A:k,I="y"===j?"height":"width",_=P[j],X=_+b[V],Y=_-b[N],G=m?-H[I]/2:0,J=x===W?B[I]:H[I],K=x===W?-H[I]:-B[I],Q=t.elements.arrow,Z=m&&Q?y(Q):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[V],te=$[N],ne=se(0,B[I],Z[I]),re=O?B[I]/2-G-ne-ee-T.mainAxis:J-ne-ee-T.mainAxis,oe=O?-B[I]/2+G+ne+te+T.mainAxis:K+ne+te+T.mainAxis,ie=t.elements.arrow&&E(t.elements.arrow),fe=ie?"y"===j?ie.clientTop||0:ie.clientLeft||0:0,ce=null!=(q=null==C?void 0:C[j])?q:0,pe=_+oe-ce,ue=se(m?f(X,_+re-ce-fe):X,_,m?s(Y,pe):Y);P[j]=ue,S[j]=ue-_}if(c){var le,de="x"===j?D:L,he="x"===j?A:k,me=P[M],ve="y"===M?"height":"width",ge=me+b[de],ye=me-b[he],be=-1!==[D,L].indexOf(w),we=null!=(le=null==C?void 0:C[M])?le:0,xe=be?ge:me-B[ve]-H[ve]-we+T.altAxis,Oe=be?me+B[ve]+H[ve]-we-T.altAxis:ye,je=m&&be?function(e,t,n){var r=se(e,t,n);return r>n?n:r}(xe,me,Oe):se(m?xe:ge,me,m?Oe:ye);P[M]=je,S[M]=je-me}t.modifiersData[r]=S}},requiresIfExists:["offset"]};const ce={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=z(s),c=[L,k].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return oe("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ie(e,P))}(o.padding,n),u=y(i),l="y"===f?D:L,d="y"===f?A:k,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),g=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,w=p[l],x=g-u[c]-p[d],O=g/2-u[c]/2+b,j=se(w,O,x),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ee(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ue(e){return[D,k,A,L].some((function(t){return e[t]>=0}))}var le=I({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=r(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,_)})),f&&c.addEventListener("resize",n.update,_),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,_)})),f&&c.removeEventListener("resize",n.update,_)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:F(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&l(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});i(r)&&l(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},J,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,g=F(v),y=f||(g===v||!h?[Q(v)]:function(e){if(F(e)===M)return[];var t=Q(e);return[$(e),t,$(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(F(n)===M?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?C:f,p=U(r),u=p?s?T:T.filter((function(e){return U(e)===p})):P,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=ae(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],B=0;B<b.length;B++){var H=b[B],R=F(H),S=U(H)===W,q=[D,A].indexOf(R)>=0,V=q?"width":"height",N=ae(t,{placement:H,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),I=q?S?k:L:S?A:D;w[V]>x[V]&&(I=Q(I));var _=Q(I),z=[];if(i&&z.push(N[R]<=0),s&&z.push(N[I]<=0,N[_]<=0),z.every((function(e){return e}))){E=H,j=!1;break}O.set(H,z)}if(j)for(var X=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},Y=h?3:1;Y>0;Y--){if("break"===X(Y))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},fe,ce,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ae(t,{elementContext:"reference"}),s=ae(t,{altBoundary:!0}),f=pe(a,r),c=pe(s,o,i),p=ue(f),u=ue(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]})}}]);