"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[670],{9368:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(5893),n=s(1151),l=s(5370);const r={draft:!1},d="\ud83d\udcbb EMQ X - Scalable MQTT Broker",o={id:"demo-deployment copy/lifestyle/emqx",title:"\ud83d\udcbb EMQ X - Scalable MQTT Broker",description:"EMQ X is a highly scalable open-source MQTT broker designed for IoT, IIoT, connected vehicles, and more. With continuous updates and improvements, it ensures optimal performance and seamless communication for a wide range of devices and application",source:"@site/docs/demo-deployment copy/lifestyle/emqx.md",sourceDirName:"demo-deployment copy/lifestyle",slug:"/demo-deployment copy/lifestyle/emqx",permalink:"/demo-deployment copy/lifestyle/emqx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0cDomoticz",permalink:"/demo-deployment copy/lifestyle/domoticz"},next:{title:"\ud83d\udcbb foldingathome Deployment",permalink:"/demo-deployment copy/lifestyle/foldingathome"}},c={},a=[{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"-emq-x---scalable-mqtt-broker",children:"\ud83d\udcbb EMQ X - Scalable MQTT Broker"}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/tyh.png",alt:"Alt Text",width:"25%"})}),(0,i.jsx)(t.p,{children:"EMQ X is a highly scalable open-source MQTT broker designed for IoT, IIoT, connected vehicles, and more. With continuous updates and improvements, it ensures optimal performance and seamless communication for a wide range of devices and application"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Exposed Ports:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http port"}),(0,i.jsx)(t.td,{children:"18083 is exposed to facilitate web-based communication for EMQX. Users can access the EMQX application through this port."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp port"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Working directory:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})})]}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/emqx/emqx",children:(0,i.jsx)(t.code,{children:"emqx/emqx"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: emqzx1(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"18083"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsx)("img",{src:"/img/3b.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/3c.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/3e.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/3ee.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/3f.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/3fg.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/3h.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/3k.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going."]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment"})]})]}),"\n",(0,i.jsx)(l.Z,{})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);