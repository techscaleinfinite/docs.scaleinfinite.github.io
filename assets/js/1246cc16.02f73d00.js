"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[8391],{9353:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=s(5893),i=s(1151),n=s(5370);const l={draft:!1},d="taskwarrior-web",o={id:"demo-deployment copy/to do/task mangement/taskwarrior-web",title:"taskwarrior-web",description:"Taskwarrior-Web Container: Run the Taskwarrior-Web UI synchronized with a Taskwarrior server. This container enables seamless integration, allowing users to manage tasks using the Taskwarrior-Web interface in sync with a Taskwarrior server.",source:"@site/docs/demo-deployment copy/to do/task mangement/taskwarrior-web.md",sourceDirName:"demo-deployment copy/to do/task mangement",slug:"/demo-deployment copy/to do/task mangement/taskwarrior-web",permalink:"/demo-deployment copy/to do/task mangement/taskwarrior-web",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"TASK.MD",permalink:"/demo-deployment copy/to do/task mangement/tasks"},next:{title:"\ud83d\udcd1 Blogging Hub",permalink:"/blogs/"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Working Directories",id:"working-directories",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"taskwarrior-web",children:"taskwarrior-web"}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/jnhnn.png",alt:"Alt Text",width:"25%"})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Taskwarrior-Web Container:"})," Run the Taskwarrior-Web UI synchronized with a Taskwarrior server. This container enables seamless integration, allowing users to manage tasks using the Taskwarrior-Web interface in sync with a Taskwarrior server."]}),(0,r.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Port Type"}),(0,r.jsx)(t.th,{children:"Port Number"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http"}),(0,r.jsx)(t.td,{children:"5678"}),(0,r.jsx)(t.td,{children:"Exposes port 5678 for the taskwarrior-webapp. Users can access the  application through this port."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),(0,r.jsx)(t.h3,{id:"working-directories",children:"Working Directories"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Path Mapping"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:":/root/.task"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:":"}),(0,r.jsx)(t.td,{})]})]})]}),(0,r.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Environment value:"})}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TASKD_SERVER="}),(0,r.jsx)(t.td,{children:"trident.hav0k.ru:53589"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TASKD_CREDENTIALS="}),(0,r.jsx)(t.td,{children:"AlphaV/Alexey Vildyaev/3e382537-d7d9-4677-8311-3cfd1047623f"})]})]})]})]}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Docker Image"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/jeckel/taskwarrior-web",children:"jeckel/taskwarrior-web"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Application name"}),(0,r.jsx)(t.td,{children:"Eg: wiki(you can put any name)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resource Allocation"}),(0,r.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Protocol"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http:"}),(0,r.jsx)(t.td,{children:"5678"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp:"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advanced"}),(0,r.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,r.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,r.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,r.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,r.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,r.jsx)("img",{src:"/img/50.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/45.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/46.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/47.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/48.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/49.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,r.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,r.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,r.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,r.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,r.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,r.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,r.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Category"}),(0,r.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, taskwarrior-web"})]})]}),"\n",(0,r.jsx)(n.Z,{})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);