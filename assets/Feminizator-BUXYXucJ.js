var R=Object.defineProperty;var D=(m,e,o)=>e in m?R(m,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):m[e]=o;var y=(m,e,o)=>D(m,typeof e!="symbol"?e+"":e,o);import{aM as $,r as E,aJ as i,j as s}from"./index-BeeopUgg.js";import{G as c,Z as v,a6 as w,H as h,B as _,j as x}from"./index-DRAqI86D.js";import{S as F}from"./Snackbar-BACEnWPP.js";import{c as I}from"./clipboard-hf8Vwe-o.js";import{I as M}from"./linked_24-CNU4bx6l.js";import"./useCSSKeyframesAnimationController-DWpzUeXG.js";var C={exports:{}},b={},S={},j;function G(){if(j)return S;j=1,Object.defineProperty(S,"__esModule",{value:!0});function m(e){var o=4,t=e.length,n=t%o;if(!n)return e;var l=t,a=o-n,r=t+a,u=Buffer.alloc(r);for(u.write(e);a--;)u.write("=",l++);return u.toString()}return S.default=m,S}var B;function H(){if(B)return b;B=1,Object.defineProperty(b,"__esModule",{value:!0});var m=G();function e(r,u){return u===void 0&&(u="utf8"),Buffer.isBuffer(r)?n(r.toString("base64")):n(Buffer.from(r,u).toString("base64"))}function o(r,u){return u===void 0&&(u="utf8"),Buffer.from(t(r),"base64").toString(u)}function t(r){return r=r.toString(),m.default(r).replace(/\-/g,"+").replace(/_/g,"/")}function n(r){return r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function l(r){return Buffer.from(t(r),"base64")}var a=e;return a.encode=e,a.decode=o,a.toBase64=t,a.fromBase64=n,a.toBuffer=l,b.default=a,b}var k;function O(){return k||(k=1,function(m){m.exports=H().default,m.exports.default=m.exports}(C)),C.exports}var T=O();const q=$(T),p=class p{static findEndingData(e){const o=[];for(const t of p.endings){const n=t.rules.find(({pattern:l})=>new RegExp("^.*"+l+"$","i").test(e));n&&o.push({ending:t,rule:n})}return o.length>0?o:void 0}static makeFeminitive(e){if(e.length<3)return e;const o=p.exceptions.find(n=>n.word===e);if(o)return o;const t=n=>{const{ending:l,rule:a}=n,r=a.removeSymbolsCount===0?e:e.slice(0,-a.removeSymbolsCount),u=l.pattern.split("+"),L=u.length>1?u[0]:"",d=u.length>1?u[1]:l.pattern,g=[];return d.split("|").map(P=>{g.push(r+L+P)}),{type:"feminitive",stem:r,feminitives:g,endings:d.split("|")}};for(const n of[e.slice(-4),e.slice(-3),e.slice(-2)]){const l=p.findEndingData(n);if(!l)continue;const a=l.map(t);return{type:"feminitive",stem:a[0].stem,endings:[].concat(...a.map(r=>r.endings)),feminitives:[].concat(...a.map(r=>r.feminitives))}}return e}};y(p,"exceptions",[{word:"феминист",feminitives:["профеминист","союзник"],description:"Мифическое создание, якобы поддерживающее феминизм. В реальности не встречается."},{word:"жена",feminitives:["мужерабка","подстилка патриархата"],description:"Женщина, прогнувшаяся под патриархат и получающая удовольствие от угнетения."}].map(e=>({...e,type:"exception"}))),y(p,"endings",[{pattern:"бо",rules:[{pattern:"либо",removeSymbolsCount:2}]},{pattern:"их",rules:[{pattern:"их",removeSymbolsCount:2}]},{pattern:"ых",rules:[{pattern:"ых",removeSymbolsCount:2}]},{pattern:"ной",rules:[{pattern:"ной",removeSymbolsCount:3}]},{pattern:"ных",rules:[{pattern:"ных",removeSymbolsCount:3}]},{pattern:"тей",rules:[{pattern:"тей",removeSymbolsCount:3}]},{pattern:"ть",rules:[{pattern:"[аеи]ть",removeSymbolsCount:2}]},{pattern:"ёт",rules:[{pattern:"[её]т",removeSymbolsCount:2}]},{pattern:"ют",rules:[{pattern:"ают",removeSymbolsCount:2}]},{pattern:"ая",rules:[{pattern:"[дкнш]ое",removeSymbolsCount:2},{pattern:"[дн]ый",removeSymbolsCount:2},{pattern:"[бвлмпт][оы][ей]",removeSymbolsCount:2},{pattern:"[шщ]ее",removeSymbolsCount:2},{pattern:"[кнпщщ]ий",removeSymbolsCount:2}]},{pattern:"яя",rules:[{pattern:"[нчщ]ий",removeSymbolsCount:2},{pattern:"[нчщ]ее",removeSymbolsCount:2}]},{pattern:"аяся",rules:[{pattern:"ееся",removeSymbolsCount:4},{pattern:"ийся",removeSymbolsCount:4}]},{pattern:"ок|есс|ин|иц",rules:[{pattern:"вий",removeSymbolsCount:2},{pattern:"лей",removeSymbolsCount:2},{pattern:"ств",removeSymbolsCount:0},{pattern:"тра",removeSymbolsCount:0},{pattern:"еров",removeSymbolsCount:2}]},{pattern:"ч+ки|ессы|ини|ицы",rules:[{pattern:"века",removeSymbolsCount:2}]},{pattern:"ки|ессы|ини|ицы",rules:[{pattern:"[ае]за",removeSymbolsCount:1},{pattern:"[ай]на",removeSymbolsCount:1},{pattern:"[ас]та",removeSymbolsCount:1},{pattern:"[её]ма",removeSymbolsCount:1},{pattern:"[коя][тдя]а",removeSymbolsCount:1},{pattern:"[мн]ца",removeSymbolsCount:2},{pattern:"алла",removeSymbolsCount:1},{pattern:"дке",removeSymbolsCount:2},{pattern:"е[жт]а",removeSymbolsCount:1},{pattern:"зда",removeSymbolsCount:1},{pattern:"ены",removeSymbolsCount:1},{pattern:"еста",removeSymbolsCount:1},{pattern:"и[дтщ]а",removeSymbolsCount:1},{pattern:"иала",removeSymbolsCount:1},{pattern:"инка",removeSymbolsCount:1},{pattern:"кты",removeSymbolsCount:1},{pattern:"лива",removeSymbolsCount:1},{pattern:"нта",removeSymbolsCount:1},{pattern:"о[лрс]а",removeSymbolsCount:1},{pattern:"рева",removeSymbolsCount:1},{pattern:"ства",removeSymbolsCount:1},{pattern:"те[лр][аия]",removeSymbolsCount:1},{pattern:"[оу]ви",removeSymbolsCount:1},{pattern:"фона",removeSymbolsCount:1},{pattern:"я[дс]а",removeSymbolsCount:1}]},{pattern:"ессы|ини|ицы",rules:[{pattern:"[вгнст]и[ия]",removeSymbolsCount:2},{pattern:"бега",removeSymbolsCount:1},{pattern:"[бк]оя",removeSymbolsCount:1},{pattern:"иги",removeSymbolsCount:1},{pattern:"[врт]ца",removeSymbolsCount:1},{pattern:"ени",removeSymbolsCount:1},{pattern:"есы",removeSymbolsCount:1},{pattern:"[исы]ка",removeSymbolsCount:1},{pattern:"изма",removeSymbolsCount:1},{pattern:"лия",removeSymbolsCount:2},{pattern:"сьма",removeSymbolsCount:1},{pattern:"йма",removeSymbolsCount:1},{pattern:"нка",removeSymbolsCount:1},{pattern:"ья",removeSymbolsCount:1},{pattern:"уки",removeSymbolsCount:1},{pattern:"юди",removeSymbolsCount:1},{pattern:"у[сх]а",removeSymbolsCount:1}]},{pattern:"ии",rules:[{pattern:"[гн]и[ия]",removeSymbolsCount:2}]},{pattern:"есс|иц|инь",rules:[{pattern:"вых",removeSymbolsCount:2}]},{pattern:"й+ки",rules:[{pattern:"боя",removeSymbolsCount:1},{pattern:"ви[йя]",removeSymbolsCount:1}]},{pattern:"ей",rules:[{pattern:"[шщ]им",removeSymbolsCount:2},{pattern:"его",removeSymbolsCount:3}]},{pattern:"ой",rules:[{pattern:"[вгдклнртш]ого",removeSymbolsCount:3},{pattern:"[ео]му",removeSymbolsCount:3},{pattern:"[гд][иы]м",removeSymbolsCount:2},{pattern:"[клмнр][оы]м",removeSymbolsCount:2}]},{pattern:"ке|ессе|ине|ице",rules:[{pattern:"[ия]де",removeSymbolsCount:1},{pattern:"[оя]ду",removeSymbolsCount:1},{pattern:"ане",removeSymbolsCount:1},{pattern:"е[нс]те",removeSymbolsCount:1},{pattern:"[ар]те",removeSymbolsCount:1},{pattern:"ессе",removeSymbolsCount:1},{pattern:"[её]ме",removeSymbolsCount:1},{pattern:"ксу",removeSymbolsCount:1},{pattern:"лу",removeSymbolsCount:1},{pattern:"нию",removeSymbolsCount:2},{pattern:"нке",removeSymbolsCount:1},{pattern:"оду",removeSymbolsCount:1},{pattern:"ету",removeSymbolsCount:1},{pattern:"сту",removeSymbolsCount:1},{pattern:"усе",removeSymbolsCount:1}]},{pattern:"ессе|ине|ице",rules:[{pattern:"еге",removeSymbolsCount:1},{pattern:"тве",removeSymbolsCount:1},{pattern:"дне",removeSymbolsCount:1},{pattern:"[иы]ке",removeSymbolsCount:1},{pattern:"нцу",removeSymbolsCount:1},{pattern:"чае",removeSymbolsCount:1}]},{pattern:"ей|це",rules:[{pattern:"н[иь]ем",removeSymbolsCount:2}]},{pattern:"ессам",rules:[{pattern:"кам",removeSymbolsCount:2}]},{pattern:"ессам|иням|ицам",rules:[{pattern:"[дт]ям",removeSymbolsCount:2}]},{pattern:"ую",rules:[{pattern:"шой",removeSymbolsCount:2},{pattern:"чий",removeSymbolsCount:2},{pattern:"[вг]ое",removeSymbolsCount:2}]},{pattern:"ессой|иней|ицей",rules:[{pattern:"[вгдл]ом",removeSymbolsCount:2},{pattern:"ью",removeSymbolsCount:2},{pattern:"[илнт][её]м",removeSymbolsCount:2}]},{pattern:"ками|ессами|ицами",rules:[{pattern:"[вдлн][ая]ми",removeSymbolsCount:3},{pattern:"[иы]ми",removeSymbolsCount:3},{pattern:"тами",removeSymbolsCount:3},{pattern:"ьями",removeSymbolsCount:4}]},{pattern:"ессами|ицами",rules:[{pattern:"[ая]ми",removeSymbolsCount:3}]},{pattern:"ч+ка|есса|ина|иня|ица",rules:[{pattern:"ёнок",removeSymbolsCount:1},{pattern:"ыка",removeSymbolsCount:2},{pattern:"[ае]к",removeSymbolsCount:1}]},{pattern:"ч+есса|ина|иня|ица",rules:[{pattern:"цо",removeSymbolsCount:2}]},{pattern:"ц+есса|иня|ица",rules:[{pattern:"[бнр]ец",removeSymbolsCount:2}]},{pattern:"к+иня",rules:[{pattern:"ст",removeSymbolsCount:0},{pattern:"нт",removeSymbolsCount:0}]},{pattern:"н+ица",rules:[{pattern:"ль",removeSymbolsCount:0}]},{pattern:"адья",rules:[{pattern:"поп",removeSymbolsCount:0}]},{pattern:"ка|есса|иня|ица",rules:[{pattern:"[аеёиноруэю][бвжзлнпрстфчшщ]",removeSymbolsCount:0},{pattern:"евт",removeSymbolsCount:0},{pattern:"[аеи][дн]ец",removeSymbolsCount:2},{pattern:"тец",removeSymbolsCount:0},{pattern:"[лн]ь",removeSymbolsCount:1},{pattern:"л[блнпт]",removeSymbolsCount:0},{pattern:"льм",removeSymbolsCount:0},{pattern:"мп",removeSymbolsCount:0},{pattern:"оша",removeSymbolsCount:1},{pattern:"рин",removeSymbolsCount:2},{pattern:"с[лст]",removeSymbolsCount:0},{pattern:"ы[нсш]",removeSymbolsCount:0},{pattern:"я[жнпрсчшщ]",removeSymbolsCount:0}]},{pattern:"ка",rules:[{pattern:"яд",removeSymbolsCount:0},{pattern:"[аеёуы]м",removeSymbolsCount:0},{pattern:"рий",removeSymbolsCount:0},{pattern:"[аеоу]й",removeSymbolsCount:0},{pattern:"[рст]ь",removeSymbolsCount:0}]},{pattern:"есса|иня|ица",rules:[{pattern:"[аеёинорсуыя][гдкмхц]",removeSymbolsCount:0},{pattern:"[аеи]лец",removeSymbolsCount:2},{pattern:"[бвдт]р",removeSymbolsCount:0},{pattern:"з[дм]",removeSymbolsCount:0},{pattern:"ол[гк]",removeSymbolsCount:0},{pattern:"офе",removeSymbolsCount:1},{pattern:"ыв",removeSymbolsCount:0},{pattern:"[аеиоу]й",removeSymbolsCount:1},{pattern:"[дрст]ь",removeSymbolsCount:1},{pattern:"ядя",removeSymbolsCount:1},{pattern:"дья",removeSymbolsCount:2},{pattern:"[кы]т",removeSymbolsCount:0},{pattern:"к[сх]",removeSymbolsCount:1},{pattern:"[бвдклмнрстхч]о",removeSymbolsCount:1},{pattern:"[вжлнстч][иь][её]",removeSymbolsCount:2},{pattern:"мя",removeSymbolsCount:1},{pattern:"[лрцщ]е",removeSymbolsCount:1}]},{pattern:"есса",rules:[{pattern:"[длн]ие",removeSymbolsCount:1}]},{pattern:"ыня",rules:[{pattern:"рин",removeSymbolsCount:2},{pattern:"уз",removeSymbolsCount:0}]},{pattern:"ица",rules:[{pattern:"[дл]ие",removeSymbolsCount:2},{pattern:"ще",removeSymbolsCount:3}]},{pattern:"ша",rules:[{pattern:"у[нт]",removeSymbolsCount:0},{pattern:"ир",removeSymbolsCount:0}]},{pattern:"ь+я",rules:[{pattern:"ун",removeSymbolsCount:0}]},{pattern:"ессы|ыни|ицы",rules:[{pattern:"нга",removeSymbolsCount:1},{pattern:"о[дс]ы",removeSymbolsCount:1},{pattern:"усы",removeSymbolsCount:2}]},{pattern:"инь",rules:[{pattern:"дей",removeSymbolsCount:2}]},{pattern:"на",rules:[{pattern:"обно",removeSymbolsCount:2}]}]);let f=p;const J=({word:m})=>{const[e,o]=E.useState(null),t=f.makeFeminitive(m.toLowerCase());return typeof t=="string"?s.jsx(c,{header:s.jsx(h,{children:"Прекрасное слово"}),mode:"plain",children:s.jsx(v,{children:t})}):s.jsxs(c,{header:s.jsx(h,{subtitle:t.type==="exception"&&t.description,children:t.feminitives[0]}),mode:"plain",children:[t.feminitives.length>1&&s.jsx(v,{children:t.feminitives.filter(n=>n!==t.feminitives[0]).map((n,l)=>s.jsx(v,{children:n},l))}),s.jsx(v,{children:s.jsx(_,{before:s.jsx(M,{}),stretched:!0,size:"m",appearance:"neutral",onClick:()=>{const n=i.url+"?word="+q.encode(m);I(n).then(()=>{o(s.jsx(F,{onClose:()=>o(null),children:"Ссылка скопирована в буфер обмен"}))})},children:"Скопировать"})}),e!==null&&e]})},Q=()=>{const[m,e]=E.useState(i.queryParams.word?q.decode(i.queryParams.word):""),o=s.jsxs(s.Fragment,{children:["Вдохновлено"," ",s.jsx(x,{target:"_blank",href:"https://feminitives.ru/",children:"feminitives.ru"})," ","(автор"," ",s.jsx(x,{target:"_blank",href:"https://github.com/envrm",children:"envrm"}),")"]});return s.jsxs(c,{description:o,children:[s.jsx(v,{children:s.jsx(w,{value:m,onChange:t=>{e(t.target.value.trim())}})}),m!==""&&s.jsx(J,{word:m})]})};export{Q as default};