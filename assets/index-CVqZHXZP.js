const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoveMemeGenerator-Dy3oIniS.js","assets/index-r1diih1v.js","assets/index-CKLLfRSX.css","assets/clipboard-hf8Vwe-o.js","assets/index-CdXxJyXX.js","assets/index-HBn8BHWd.css","assets/Snackbar-ClJvrNmH.js","assets/useCSSKeyframesAnimationController-C_nR4Q43.js","assets/Snackbar-BBkwWMuA.css","assets/CardScroll-BHa2RLwl.js","assets/CardScroll-jeXaIXl8.css","assets/Search-Bn7dh6E9.js","assets/Search-BKirABfF.css"])))=>i.map(i=>d[i]);
import{aH as m,r as x,aJ as i,j as e,aP as f}from"./index-r1diih1v.js";import{u as P,a as h,V as n,P as a,G as r,d as j,L as v,H as k}from"./index-CdXxJyXX.js";import{C as _}from"./CellButton-CgeMyFY3.js";const o=[{id:"love-meme-generator",title:"Love Meme generator",description:"",isMobile:!0,isDesktop:!0,component:e.jsx(v,{callbacks:[()=>f(()=>import("./LoveMemeGenerator-Dy3oIniS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))]})}],b=()=>{const{isDesktop:l}=P(),{t:c,i18n:d}=h("translation",{keyPrefix:"pages.prototypes"});x.useEffect(()=>{o.some(t=>t.id===i.activePanel)||(i.activePanel=null)});const s=o.filter(t=>t.isDesktop===l||t.isMobile===!l),u=t=>e.jsxs(r,{children:[e.jsx(k,{size:"m",multiline:!0,subtitle:t.description,children:t.title}),e.jsx(_,{onClick:()=>{i.activePanel=t.id},children:c("start")})]}),p=t=>e.jsx(a,{id:t.id,children:t.component});return s.length===0?e.jsx(n,{activePanel:"default",children:e.jsx(a,{id:"default",children:e.jsx(r,{children:e.jsx(j,{children:d.t("utils.feature")})})})}):e.jsxs(n,{activePanel:i.activePanel||"default",children:[e.jsx(a,{id:"default",children:e.jsx(r,{children:s.map(u)})}),s.map(p)]})},g=m(b);export{g as default};
