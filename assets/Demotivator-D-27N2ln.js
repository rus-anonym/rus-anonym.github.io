import{m as B,r as a,u as Q,f as X,h as Z,j as t,b as ee,aC as te}from"./index-6B4uCwa3.js";import{v as ne,a8 as oe,N as se,a9 as ae,a as ie,G as re,j as W,$ as F,a7 as le,a0 as ce,a1 as ue,_ as U,aa as de,B as V}from"./index-DyXsVac9.js";import{S as $}from"./Snackbar-BRSj5dmN.js";import{F as q}from"./FormLayoutGroup-ngmmpZye.js";import{S as J}from"./Slider-BN6KaZsg.js";import{c as he}from"./index-59J0kfR1.js";import"./useCSSKeyframesAnimationController-C73JAUWT.js";import"./Search-CkshOnEL.js";var me=B("Icon24Copy","copy_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="copy_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M4 18a2.01 2.01 0 0 1-2-2.01V5.518A3.517 3.517 0 0 1 5.518 2H15.99A2.01 2.01 0 0 1 18 4H6.764A2.764 2.764 0 0 0 4 6.764zM8.01 6h11.98C21.1 6 22 6.9 22 8.01v11.98c0 1.11-.9 2.01-2.01 2.01H8.01C6.9 22 6 21.1 6 19.99V8.01C6 6.9 6.9 6 8.01 6M9 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" /></g></symbol>',24,24),ge=B("Icon24RefreshOutline","refresh_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="refresh_outline_24"><path fill="currentColor" d="M10.274 4.042a.895.895 0 0 1-.02-1.269.904.904 0 0 1 1.274-.02l2.698 2.602A.9.9 0 0 1 14.5 6a.9.9 0 0 1-.274.645l-2.698 2.602a.904.904 0 0 1-1.274-.02.895.895 0 0 1 .02-1.27l1.175-1.133a6.2 6.2 0 0 0-5.245 3.974 6.2 6.2 0 1 0 10.86-1.376.9.9 0 0 1 1.47-1.04 8 8 0 1 1-7.235-3.351z" /></symbol>',24,24),pe=B("Icon24WarningTriangleOutline","warning_triangle_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="warning_triangle_outline_24"><g fill="currentColor"><path fill-rule="evenodd" d="M9.489 4.55c1.116-1.933 3.906-1.933 5.023 0l6.928 12c1.116 1.933-.28 4.35-2.512 4.35H5.072c-2.233 0-3.628-2.417-2.512-4.35zm3.464.9a1.1 1.1 0 0 0-1.906 0l-6.928 12a1.1 1.1 0 0 0 .953 1.65h13.856a1.1 1.1 0 0 0 .953-1.65z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 8c.497 0 .9.374.9.836v4.828c0 .462-.403.836-.9.836s-.9-.374-.9-.836V8.836c0-.462.403-.836.9-.836" clip-rule="evenodd" /><path d="M13 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></g></symbol>',24,24);function fe(c,j){const i=a.useRef(null),C=a.useRef(void 0),r=a.useCallback(o=>{j&&o.offsetParent&&(o.style.height="",o.style.height=`${o.scrollHeight}px`,o.scrollHeight!==C.current&&c&&(c(o),C.current=o.scrollHeight))},[j,c]),y=a.useCallback(()=>{const o=i.current;o&&r(o)},[i,r]);return[i,y]}const xe="_host_1m9uo_1",we="_el_1m9uo_7",be="_sizeYCompact_1m9uo_21",ve="_sizeYNone_1m9uo_26",je="_alignCenter_1m9uo_45",Ce="_alignRight_1m9uo_49",T={host:xe,el:we,sizeYCompact:be,sizeYNone:ve,alignCenter:je,alignRight:Ce},_e={none:T.sizeYNone,compact:T.sizeYCompact},ze=({grow:c=!0,style:j,onResize:i,className:C,getRootRef:r,getRef:y,rows:o=2,maxHeight:M,status:m,onChange:I,align:k,mode:g,after:_,before:w,afterAlign:s,beforeAlign:D,value:P,...L})=>{const{sizeY:e="none"}=Q(),n=X(),{window:d}=Z(),[h,l]=fe(i,c),p=ne(y,h);return a.useEffect(l,[l,e,n,P]),oe(d,l),t.jsx(se,{className:ee(T.host,e!=="regular"&&_e[e],k==="right"&&T.alignRight,k==="center"&&T.alignCenter,C),style:j,getRootRef:r,disabled:L.disabled,status:m,mode:g,after:_,before:w,afterAlign:s,beforeAlign:D,maxHeight:M,children:t.jsx(ae,{...L,value:P,as:"textarea",rows:o,className:T.el,onChange:te(I,l),getRootRef:p})})},Ee=()=>{const[c,j]=a.useState(""),[i,C]=a.useState(""),[r,y]=a.useState(64),[o,M]=a.useState(32),[m,I]=a.useState(null),[k,g]=a.useState(null),[_,w]=a.useState(null),{t:s}=ie("translation",{keyPrefix:"pages.utils.list.demotivator"}),D=a.useMemo(()=>{const e=c===""&&i==="";return e&&w(m),!(e||m===null)},[c,i,m]),P=()=>{if(!D)return;const e=document.createElement("canvas"),n=e.getContext("2d",{alpha:!1});e.height=1e4,e.width=1e3;const d=100,h=80,l=14,p=24,E=18,u=E+r,O=E/1.7+o,G=({ctx:A,text:b,maxWidth:H,font:z})=>{const R=b.split(" "),v=[];let f=R[0];A.font=z;for(let N=1;N<R.length;++N){const x=R[N];A.measureText(f+" "+x).width<H?f+=" "+x:(v.push(f),f=x)}return v.push(f),v};(async()=>{const A=e.width-d*2,b=new Image;b.src=m,await new Promise(S=>b.onload=S);const H=e.width-d*2,z=b.height*H/b.width,R=z+h*1.3+l*2,v=G({ctx:n,text:c,maxWidth:A,font:`${r}px Times New Roman`}),f=G({ctx:n,text:i,maxWidth:A,font:`${o}px Roboto`}),N=h*2+z+l*2+p*2+(v.length*u-u+r)+(i?f.length*O-O+o:-(p+u-r));e.height=N,n.fillStyle="black",n.fillRect(-.5,-.5,e.width,e.height),n.drawImage(b,d,h,H,z);const x=[d-l,h-l,H+l*2,z+l*2];n.rect(x[0],x[1],x[2],x[3]),n.strokeStyle="white",n.lineWidth=4,n.stroke(),n.font=`${r}px Times New Roman`,n.fillStyle="white",n.textAlign="center",n.textBaseline="top",v.forEach((S,Y)=>{n.fillText(S,e.width/2,R+Y*u)}),i&&(n.font=`${o}px Roboto`,n.textBaseline="top",f.forEach((S,Y)=>{const K=R+p+v.length*u+Y*O;n.fillText(S,e.width/2,K)})),w(e.toDataURL())})()},L=e=>{var h;e.preventDefault();const n=(h=e.clipboardData)==null?void 0:h.items;if(!n)return;let d=!1;for(const l in n){const p=n[l];if(p.kind==="file"){const E=p.getAsFile();if(E){const u=new FileReader;u.onloadend=()=>{u.result&&(I(u.result.toString()),w(u.result.toString()))},u.readAsDataURL(E),d=!0}}}d||g(t.jsx($,{before:t.jsx(pe,{role:"alert"}),onClose:()=>g(null),children:s("notFoundClipboardImage")}))};return a.useEffect(()=>(document.addEventListener("paste",L),()=>{document.removeEventListener("paste",L)}),[]),a.useEffect(P,[c,i,r,o,m,D]),t.jsxs(re,{description:t.jsxs(t.Fragment,{children:[`${s("basedOn")} `,t.jsx(W,{target:"_blank",href:"https://github.com/jarvis394/cubebot",children:"cubebot"})," ","(",`${s("author")} `,t.jsx(W,{target:"_blank",href:"https://github.com/jarvis394",children:"jarvis394"}),")"]}),children:[t.jsxs("form",{children:[t.jsxs(q,{mode:"horizontal",children:[t.jsx(F,{top:s("title"),children:t.jsx(le,{multiple:!0,value:c,onChange:e=>j(e.target.value)})}),t.jsx(F,{top:s("fontSize"),bottom:`${r}px`,children:t.jsx(J,{min:24,max:128,step:1,value:r,onChange:e=>y(e)})})]}),t.jsxs(q,{mode:"horizontal",children:[t.jsx(F,{top:s("subtitle"),children:t.jsx(ze,{value:i,onChange:e=>C(e.target.value)})}),t.jsx(F,{top:s("fontSize"),bottom:`${o}px`,children:t.jsx(J,{min:12,max:64,step:1,value:o,onChange:e=>M(e)})})]}),m===null&&t.jsx(F,{top:s("uploadImage"),children:t.jsx(ce,{before:t.jsx(ue,{role:"presentation"}),size:"m",accept:".jpg, .jpeg, .png",onChange:e=>{if(!e.target.files||e.target.files.length===0)return;const n=URL.createObjectURL(e.target.files[0]);I(n),w(n)},children:s("openGallery")})}),D&&t.jsx(U,{children:t.jsxs(de,{stretched:!0,children:[t.jsx(V,{before:t.jsx(me,{}),size:"l",onClick:()=>{he(_).then(()=>{g(t.jsx($,{onClose:()=>g(null),children:s("copiedToClipboard")}))}).catch(()=>{const e=document.createElement("a");e.download="demotivator.jpeg",e.href=_,e.click(),e.remove(),g(t.jsx($,{onClose:()=>g(null),children:s("savedOnDevice")}))})},stretched:!0,appearance:"accent",children:s("copy")}),t.jsx(V,{before:t.jsx(ge,{}),size:"l",onClick:()=>{I(null),w(null)},stretched:!0,appearance:"neutral",children:s("reset")})]})})]}),_!==null&&t.jsx(U,{children:t.jsx("img",{style:{display:"block",width:"100%",borderRadius:"3px",marginLeft:"auto",marginRight:"auto"},src:_,alt:""})}),k!==null&&k]})};export{Ee as default};
