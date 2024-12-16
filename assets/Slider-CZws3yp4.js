import{r as f,j as p,b as at,aV as ct,u as ut,q as A}from"./index-r1diih1v.js";import{E as dt,J as ft,aa as pt,ab as ht,ac as gt,ad as _t,p as vt,t as nt,ae as bt,v as yt,af as mt}from"./index-CdXxJyXX.js";import{a as St}from"./Search-Bn7dh6E9.js";const zt="_host_vior9_1",Rt="_focusVisible_vior9_17",Et="_hover_vior9_22",kt="_active_vior9_26",Nt="_nativeInput_vior9_34",N={host:zt,focusVisible:Rt,hover:Et,active:kt,nativeInput:Nt},Q=({className:s,getRootRef:t,inputProps:e,withTooltip:n,isActive:o,...l})=>{const{focusVisible:r,onBlur:E,onFocus:j}=dt(),v=ft({focusVisible:r,mode:N.focusVisible}),[g,b]=f.useState(null),V=f.useMemo(()=>[pt({crossAxis:0,mainAxis:15}),ht(),gt({padding:8}),_t({element:g})],[g]),{x:q,y:B,placement:C,refs:_,strategy:F,middlewareData:{arrow:w},update:u}=vt({placement:"top",middleware:V}),{value:c,setTrue:d,setFalse:h}=St(!1),y=nt(t,_.setReference),m=n&&(r||c||o),S=e&&e.value;return f.useEffect(function(){m&&S!=="undefined"&&u()},[S,u,m]),p.jsxs(f.Fragment,{children:[p.jsx("span",{...l,ref:y,onMouseEnter:d,onMouseLeave:h,className:at(N.host,v,o&&N.active,c&&N.hover,s),children:p.jsx("input",{...e,type:"range",className:N.nativeInput,"aria-orientation":"horizontal",onBlur:E,onFocus:j})}),m&&p.jsx(bt,{appearance:"neutral",getRootRef:_.setFloating,style:yt(F,q,B),arrowProps:{coords:w,placement:C,getRootRef:b},description:S})]})},Z=(s,t,e)=>(s-t)/(e-t)*100,tt=(s,t,e,n,o)=>ct(s,[0,t],[e,n],{step:o}),L=(s,t,e)=>s<t?t:s>e?e:s,et=(s,t,e,n,o)=>{const[l,r]=s;if(r===null)return[L(t,e,n),null];switch(o){case"start":return t>r?[r,r]:[L(t,e,n),r];case"end":return t<l?[l,l]:[l,L(t,e,n)];case null:default:return s}},Vt=(s,t,e)=>{const[n,o]=s;switch(e){case"start":return[t,o];case"end":return[n,t];case null:default:return s}};function Ct(s){return s[1]!==null}const Ft=(s,t,e)=>{if(e==="start")return"start";if(e==="end")return"end";const[n,o]=s,l=.1,r=o!==null?n-l:n,E=o!==null?o+l:0;return Math.abs(r-t)<=Math.abs(E-t)?"start":"end"},st=s=>{if(s){if(s.dataset.type==="start")return"start";if(s.dataset.type==="end")return"end"}return null},wt={"aria-label":void 0,"aria-valuetext":void 0,"aria-labelledby":void 0},Mt=s=>{const t=s["aria-label"],e=s["aria-valuetext"],n=s["aria-labelledby"];return{...s,...wt,ariaLabel:t,ariaValueText:e,ariaLabelledBy:n}},Tt="_host_iyqlk_1",It="_disabled_iyqlk_7",Dt="_track_iyqlk_12",jt="_trackFill_iyqlk_13",qt="_thumbs_iyqlk_31",Bt="_thumb_iyqlk_31",Pt="_sizeL_iyqlk_43",Yt="_sizeM_iyqlk_47",xt="_sizeS_iyqlk_51",Xt="_sizeYCompact_iyqlk_59",$t="_sizeYNone_iyqlk_72",i={host:Tt,disabled:It,track:Dt,trackFill:jt,thumbs:qt,thumb:Bt,sizeL:Pt,sizeM:Yt,sizeS:xt,sizeYCompact:Xt,sizeYNone:$t},At={none:i.sizeYNone,compact:i.sizeYCompact},Lt={l:i.sizeL,m:i.sizeM,s:i.sizeS},Jt=({step:s=1,min:t=0,max:e=100,value:n,multiple:o,defaultValue:l=o?[t,e]:t,disabled:r,className:E,getRootRef:j,getAriaLabel:v,getAriaValueText:g,onChange:b,withTooltip:V,size:q="l",...B})=>{const{sizeY:C="none"}=ut(),_=n!==void 0,[F,w]=f.useState(l),u=f.useMemo(()=>{const a=_?n:F;return Array.isArray(a)?[A(a[0],t,e),A(a[1],t,e)]:[A(a,t,e),null]},[_,n,F,t,e]),[c,d]=u,h=o&&d!==null,y=Z(c,t,e),m=h?Z(d,t,e):0,[S,P]=f.useState(null),z=f.useRef({dragging:null,startX:0,containerWidth:0}).current,Y=nt(j),x=f.useRef(null),X=f.useRef(null),{ariaLabel:W,ariaValueText:H,ariaLabelledBy:O,...rt}=Mt(B),$=(a,R)=>{r||u[0]===a[0]&&u[1]===a[1]||(o?Ct(a)&&(!_&&w(a),b&&b(a,R)):(!_&&w(a[0]),b&&b(a[0],R)))},ot=a=>{if(!Y.current)return;const{left:R,width:M}=Y.current.getBoundingClientRect(),k=st(a.originalEvent.target),T=a.startX-R,I=tt(T,M,t,e,s),D=Ft(u,I,k);z.dragging=D,z.containerWidth=M,z.startX=T;const U=et(u,I,t,e,D),[G,K]=U;x.current&&(k==="start"||G!==c&&K===d)?(x.current.focus(),a.originalEvent.preventDefault()):X.current&&(k==="end"||K!==d&&G===c)&&(X.current.focus(),a.originalEvent.preventDefault()),$(U,a),a.originalEvent.stopPropagation(),P(z.dragging)},it=a=>{const{startX:R,containerWidth:M,dragging:k}=z,{shiftX:T=0}=a,I=R+T,D=tt(I,M,t,e,s);$(et(u,D,t,e,k),a),a.originalEvent.stopPropagation(),a.originalEvent.preventDefault()},lt=a=>{z.dragging=null,a.originalEvent.stopPropagation(),P(null)},J=a=>{$(Vt(u,Number(a.target.value),st(a.target)),a)};return p.jsxs(mt,{"data-value":h?`${c},${d}`:c,...rt,className:at(i.host,r&&i.disabled,C!=="regular"&&At[C],Lt[q],E),onStart:r?void 0:ot,onMove:r?void 0:it,onEnd:r?void 0:lt,children:[p.jsx("div",{className:i.track}),p.jsx("div",{className:i.trackFill,style:h?{left:`${y}%`,right:`${100-m}%`}:{width:`${y}%`}}),p.jsxs("div",{ref:Y,className:i.thumbs,children:[p.jsx(Q,{"data-type":"start",className:i.thumb,style:{left:`${y}%`,zIndex:h&&y>=50?2:void 0},withTooltip:V,inputProps:{"data-type":"start",ref:x,step:s,min:t,value:c,max:h?d:e,disabled:r,"aria-label":v?v(0):W,"aria-valuetext":g?g(c,0):H,"aria-labelledby":O,onChange:J},isActive:S==="start"}),h&&p.jsx(Q,{"data-type":"end",className:i.thumb,style:{left:`${m}%`},withTooltip:V,inputProps:{"data-type":"end",ref:X,step:s,min:c,value:d,max:e,disabled:r,"aria-label":v?v(1):W,"aria-valuetext":g?g(d,1):H,"aria-labelledby":O,onChange:J},isActive:S==="end"})]})]})};export{Jt as S};
