"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[650],{37435:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=s(85893),d=s(11151),r=s(5370);const o={draft:!1},i="doublecommander Deployment",l={id:"demo-deployment copy/tcp/doublecommander",title:"doublecommander",description:"doublecommander:",source:"@site/docs/demo-deployment copy/tcp/doublecommander.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/doublecommander",permalink:"/demo-deployment copy/tcp/doublecommander",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"darktable",permalink:"/demo-deployment copy/tcp/darktable"},next:{title:"dufs",permalink:"/demo-deployment copy/tcp/dufs"}},c={},a=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/33d.png",alt:"Alt Text",width:"25%"})}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h1,{id:"doublecommander-deployment",children:"doublecommander Deployment"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"doublecommander:"}),"\r\nDouble Commander is a free cross platform open source file manager with two panels side by side. It is inspired by Total Commander and features some new ideas."]}),(0,n.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port Type"}),(0,n.jsx)(t.th,{children:"Port Number"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http"}),(0,n.jsx)(t.td,{children:"3000"}),(0,n.jsx)(t.td,{children:"doublecommander Web UI is accessible on port 3000."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),(0,n.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,n.jsx)(t.p,{children:"doublecommander uses volume mounts to manage configuration and download data. You can set these when running the container:"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Volume"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,n.jsx)(t.td,{children:"Path to doublecommander's configuration files."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/path/to/downloads"})}),(0,n.jsx)(t.td,{children:"Path to the directory where downloads are stored."})]})]})]}),(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Environment value:"})}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Docker Image"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/doublecommander",children:"linuxserver/doublecommander"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application name"}),(0,n.jsx)(t.td,{children:"Eg: qb1(you can put any name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Allocation"}),(0,n.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Protocol"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http:"}),(0,n.jsx)(t.td,{children:"3000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp:"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Advanced"}),(0,n.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,n.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,n.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,n.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Alt Text",src:s(90302).Z+"",width:"1918",height:"1032"}),"\r\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(28606).Z+"",width:"1918",height:"1032"})]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Alt Text",src:s(92416).Z+"",width:"1908",height:"1078"}),"\r\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(96744).Z+"",width:"1918",height:"1038"}),"\r\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(64594).Z+"",width:"1918",height:"1016"})]}),(0,n.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,n.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,n.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"About doublecommander image we used."})}),(0,n.jsx)(t.p,{children:"This is the official doublecommander image."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Can I deploy my own doublecommander image with modified configuration ?"})}),(0,n.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,n.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,n.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,n.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,n.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Category"}),(0,n.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, doublecommander"})]})]}),"\n",(0,n.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},90302:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/f454-b1f6ab899aaf366eacff2559b65bc830.png"},92416:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/f555-7d551dae77247afec5fb2157455bdd78.png"},28606:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/f56-993ea080f3defe705881234593760930.png"},96744:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/f643-9d2ab65b2ab4ba1f4a0ae57821085ee3.png"},64594:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/f6666-8ae0488bc2f8b7e1141da9afbe71eb65.png"}}]);