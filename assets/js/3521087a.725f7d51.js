"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[8936],{337:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=s(5893),i=s(1151),n=s(8662);const l={draft:!1},o="kerberos Deployment",d={id:"demo-deployment copy/video surveillance/kerberos",title:"kerberos Deployment",description:"Kerberos Agent",source:"@site/docs/demo-deployment copy/video surveillance/kerberos.md",sourceDirName:"demo-deployment copy/video surveillance",slug:"/demo-deployment copy/video surveillance/kerberos",permalink:"/demo-deployment copy/video surveillance/kerberos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"video sureillance ",permalink:"/category/video-sureillance-"},next:{title:"oscam Deployment",permalink:"/demo-deployment copy/video surveillance/oscam"}},c={},a=[{value:"Kerberos Agent",id:"kerberos-agent",level:2},{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Working Directories",id:"working-directories",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"kerberos-deployment",children:"kerberos Deployment"}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/xcd.png",alt:"Alt Text",width:"25%"})}),(0,r.jsx)(t.h2,{id:"kerberos-agent",children:"Kerberos Agent"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kerberos Agent"})," is a modern video surveillance management system offered as open source under the MIT License. This cutting-edge solution provides advanced features for video surveillance, making it a versatile and customizable option for various applications. With the MIT License, users have the freedom to use, modify, and distribute the software, promoting collaboration and innovation in the field of video surveillance."]}),(0,r.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Port Type"}),(0,r.jsx)(t.th,{children:"Port Number"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http"}),(0,r.jsx)(t.td,{children:"80"}),(0,r.jsx)(t.td,{children:"Exposes port 80 for the kerberosapp. Users can access the  application through this port."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),(0,r.jsx)(t.h3,{id:"working-directories",children:"Working Directories"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Path Mapping"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})})]}),(0,r.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Environment value:"})}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Docker Image"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/redimp/otterwiki",children:"kerberos"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Application name"}),(0,r.jsx)(t.td,{children:"Eg: wiki(you can put any name)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resource Allocation"}),(0,r.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Protocol"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http:"}),(0,r.jsx)(t.td,{children:"80"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp:"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advanced"}),(0,r.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,r.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,r.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,r.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,r.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,r.jsx)("img",{src:"/img/y7.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/y45.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/y67.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/y7765.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,r.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,r.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,r.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,r.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,r.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,r.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,r.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Category"}),(0,r.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, otterwiki"})]})]}),"\n",(0,r.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);