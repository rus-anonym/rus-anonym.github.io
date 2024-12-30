import{r as y,j as e}from"./index-B8IO0icn.js";import{G as h,O as l,X as x,H as u,d as j,i as c,e as a,E as n,R as f,A as m,j as H}from"./index-9atDLGNA.js";import{I as d}from"./InfoRow-B2T0wonO.js";import{h as i}from"./moment-C5S46NFB.js";const s=({text:t,user:r,time:g})=>e.jsx(f,{multiline:!0,before:r.avatar,subtitle:t,after:g,children:r.name}),o={you:{name:"You",avatar:e.jsx(m,{size:32,gradientColor:"red",initials:"Y"})},coWorker:{name:"Co-worker",avatar:e.jsx(m,{size:32,gradientColor:"green",initials:"CW"})}},b=()=>{const t=y.useMemo(()=>Date.now(),[]),r=e.jsxs(e.Fragment,{children:["Inspired by"," ",e.jsx(H,{target:"_blank",href:"https://nohello.com/",children:"nohello.com"})," ","(author Brandon High)"]});return e.jsxs(h,{description:r,children:[e.jsx(l,{children:e.jsx(x,{level:"1",style:{textAlign:"center"},children:"Please Don't Say Just Hello In Chat"})}),e.jsxs(h,{header:e.jsx(u,{style:{justifyContent:"center"},children:"Bad:"}),children:[e.jsx(s,{text:"Hi",user:o.you,time:i(t).format("HH:mm:ss")}),e.jsx(s,{text:"Hello.",user:o.coWorker,time:i(t+3e3).format("HH:mm:ss")}),e.jsx(j,{title:"*CO-WORKER WAITS WHILE YOU PHRASE YOUR QUESTION*"}),e.jsx(s,{text:"I'm working on [something] and I'm trying to do [etc...]",user:o.you,time:i(t+109e3).format("HH:mm:ss")}),e.jsx(s,{text:"Oh, that's [answer...]",user:o.coWorker,time:i(t+189e3).format("HH:mm:ss")}),e.jsx(c,{hasActive:!1,hasHover:!1,children:e.jsx(d,{header:"Spent",children:"3 minutes и 9 seconds"})})]}),e.jsxs(h,{header:e.jsx(u,{style:{justifyContent:"center"},children:"Good:"}),children:[e.jsx(s,{text:"Hi -- I'm working on [something] and I'm trying to do [etc...]",user:o.you,time:i(t).format("HH:mm:ss")}),e.jsx(s,{text:"[answers question]",user:o.coWorker,time:i(t+8e4).format("HH:mm:ss")}),e.jsx(c,{hasActive:!1,hasHover:!1,children:e.jsx(d,{header:"Spent",children:"1 minute и 20 seconds"})})]}),e.jsxs(l,{children:[e.jsx(a,{}),e.jsx(n,{weight:"2",useAccentWeight:!0,children:"Note that you get help minutes sooner, and you don't make them wait. Instead, the co-worker can start thinking about your question right away!"}),e.jsx(n,{weight:"2",useAccentWeight:!0,children:"You're trying to be polite by not jumping right into the request, like you would do in person or on the phone. But Chat is neither of those things. Typing is much slower than talking. Instead of being polite, you are just making the other person wait for you to phrase your question, which is lost productivity."}),e.jsx(a,{size:20}),e.jsx(n,{weight:"2",useAccentWeight:!0,children:'The same goes for "Hello -- Are you there?", "Hi Bob -- quick question.", "Do you have a sec ?", "yt?" and "ping". Just ask the question!'}),e.jsx(a,{size:20}),e.jsx(n,{weight:"2",useAccentWeight:!0,children:`If you feel it's brusque to simply say "Hi" and ask the question, you can do something like this:`}),e.jsx(s,{text:"Hi -- if you're not busy I was wondering if I could ask a question.  I'm working on [something] and I'm trying to do [etc...]",user:o.you,time:""}),e.jsx(a,{size:20}),e.jsx(n,{weight:"2",useAccentWeight:!0,children:'Additionally, asking your question before getting a reply allows asynchronous communication. If the other party is away, and you leave before they come back, they can still answer your question, instead of just staring at a "Hello" and wondering what they missed.'})]})]})};export{b as default};
