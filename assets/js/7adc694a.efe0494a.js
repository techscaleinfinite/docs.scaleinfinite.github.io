"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[6635],{5162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(5893),r=n(1151),i=n(8662);const l={draft:!1},d="htpcmanager Deployment",o={id:"demo-deployment copy/tcp/htpcmanager",title:"htpcmanager Deployment",description:"HTPCManager:",source:"@site/docs/demo-deployment copy/tcp/htpcmanager.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/htpcmanager",permalink:"/demo-deployment copy/tcp/htpcmanager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Gitea",permalink:"/demo-deployment copy/tcp/gitea"},next:{title:"HTTPd Deployment",permalink:"/demo-deployment copy/tcp/httpd-deployment"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"htpcmanager-deployment",children:"htpcmanager Deployment"}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/32.png",alt:"Alt Text",width:"25%"})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"HTPCManager:"}),"\r\nA front-end interface that serves as a unified dashboard for various HTPC (Home Theater PC) related applications. HTPCManager provides a centralized and user-friendly platform for managing and accessing multiple HTPC applications from a single interface."]}),(0,s.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port Type"}),(0,s.jsx)(t.th,{children:"Port Number"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http"}),(0,s.jsx)(t.td,{children:"8085"}),(0,s.jsx)(t.td,{children:"htpcmanager Web UI is accessible on port 8085."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),(0,s.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,s.jsx)(t.p,{children:"htpcmanager uses volume mounts to manage configuration and download data. You can set these when running the container:"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,s.jsx)(t.td,{children:"Path to htpcmanager's configuration files."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/path/to/downloads"})}),(0,s.jsx)(t.td,{children:"Path to the directory where downloads are stored."})]})]})]}),(0,s.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Environment value:"})}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Docker Image"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/htpcmanager",children:"linuxserver/htpcmanager"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Application name"}),(0,s.jsx)(t.td,{children:"Eg: qb1(you can put any name)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resource Allocation"}),(0,s.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Protocol"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http:"}),(0,s.jsx)(t.td,{children:"8085"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp:"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,s.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,s.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,s.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,s.jsx)("img",{src:"/img/c77.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/c4.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/c5.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/c6.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/c66.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,s.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,s.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,s.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,s.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,s.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, htpcmanager"})]})]}),"\n",(0,s.jsx)(i.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);