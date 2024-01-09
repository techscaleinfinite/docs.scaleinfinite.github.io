"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[5132],{8354:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=i(5893),r=i(1151),n=i(5370);const d={draft:!1},o="\ud83d\udcd4 otterwiki Deployment",l={id:"demo-deployment copy/wikis/otterwiki",title:"\ud83d\udcd4 otterwiki Deployment",description:"Otter Wiki is a minimalistic wiki that operates on the power of Python, Markdown, and Git. This lightweight solution is designed for simplicity and efficiency in managing your content. By leveraging the versatility of Markdown and the collaborative capabilities of Git, Otter Wiki provides a user-friendly platform for creating and organizing your documentation.",source:"@site/docs/demo-deployment copy/wikis/otterwiki.md",sourceDirName:"demo-deployment copy/wikis",slug:"/demo-deployment copy/wikis/otterwiki",permalink:"/demo-deployment copy/wikis/otterwiki",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd4 Doku Wiki Deployment",permalink:"/demo-deployment copy/wikis/dokuwiki"},next:{title:"\ud83d\udc0b Custom Docker Image",permalink:"/demo-deployment copy/custom-docker-image/"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Working Directories",id:"working-directories",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:d}=t;return d||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"-otterwiki-deployment",children:"\ud83d\udcd4 otterwiki Deployment"}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/dd23",alt:"Alt Text",width:"25%"})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Otter Wiki"})," is a minimalistic wiki that operates on the power of Python, Markdown, and Git. This lightweight solution is designed for simplicity and efficiency in managing your content. By leveraging the versatility of Markdown and the collaborative capabilities of Git, Otter Wiki provides a user-friendly platform for creating and organizing your documentation."]}),(0,s.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port Type"}),(0,s.jsx)(t.th,{children:"Port Number"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http"}),(0,s.jsx)(t.td,{children:"80"}),(0,s.jsx)(t.td,{children:"Exposes port 80 for the otterwiki app. Users can access the  application through this port."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),(0,s.jsx)(t.h3,{id:"working-directories",children:"Working Directories"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Path Mapping"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})})]}),(0,s.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Environment value:"})}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Docker Image"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/redimp/otterwiki",children:"otterwiki "}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Application name"}),(0,s.jsx)(t.td,{children:"Eg: wiki(you can put any name)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resource Allocation"}),(0,s.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Protocol"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http:"}),(0,s.jsx)(t.td,{children:"80"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp:"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,s.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,s.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,s.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Alt Text",src:i(4646).Z+"",width:"1918",height:"1078"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:i(7344).Z+"",width:"1918",height:"1078"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:i(4866).Z+"",width:"1918",height:"1071"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:i(1461).Z+"",width:"1918",height:"1075"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:i(9193).Z+"",width:"1918",height:"1078"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:i(1776).Z+"",width:"1918",height:"1076"})]}),(0,s.jsx)("img",{src:"/img/t6.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/r22.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/r33.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/r22221.png)",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/r223.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/r22222.png)",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,s.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,s.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,s.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,s.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,s.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, otterwiki"})]})]}),"\n",(0,s.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7344:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/r22-ac90deaf1fe412948c8e69e4f3b50bc7.png"},1461:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/r22221-20fcc82f520ba2776d96ee5291d4d3a1.png"},1776:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/r22222-b6ec3b77bbfde99fbd8f58df04a176cb.png"},9193:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/r223-7950be25f039c68eae78ad4dbddbcf99.png"},4866:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/r33-a6ec8a6862ac6fd507de701de71e6367.png"},4646:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/t6-3ba679bffadd0487627a94d5e3fcb6f6.png"}}]);