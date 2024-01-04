"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[3505],{65271:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(85893),n=s(11151),r=s(5370);const o={draft:!1},d="\u2699\ufe0f wireshark Deployment",l={id:"demo-deployment copy/tcp/wireshark",title:"wireshark",description:"Wireshark stands as the world's foremost network protocol analyzer, widely utilized for scrutinizing network activities at a microscopic level. Serving as the de facto standard across numerous commercial, non-profit enterprises, government agencies, and educational institutions, Wireshark allows users to gain detailed insights into their network's functioning. Its unparalleled capabilities make it an essential tool for network professionals, enabling them to analyze and understand the intricacies of network protocols with precision.",source:"@site/docs/demo-deployment copy/tcp/wireshark.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/wireshark",permalink:"/demo-deployment copy/tcp/wireshark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"vscode-deployment",permalink:"/demo-deployment copy/tcp/vscode-deployment"},next:{title:"youpass",permalink:"/demo-deployment copy/tcp/youpass"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Configuration",id:"volume-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/qaw.jpg",alt:"Alt Text",width:"25%"})}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h1,{id:"\ufe0f-wireshark-deployment",children:"\u2699\ufe0f wireshark Deployment"}),(0,i.jsx)(t.p,{children:"Wireshark stands as the world's foremost network protocol analyzer, widely utilized for scrutinizing network activities at a microscopic level. Serving as the de facto standard across numerous commercial, non-profit enterprises, government agencies, and educational institutions, Wireshark allows users to gain detailed insights into their network's functioning. Its unparalleled capabilities make it an essential tool for network professionals, enabling them to analyze and understand the intricacies of network protocols with precision."}),(0,i.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port Type"}),(0,i.jsx)(t.th,{children:"Port Number"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http"}),(0,i.jsx)(t.td,{children:"3000"}),(0,i.jsx)(t.td,{children:"It is exposed on port 3000."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsx)(t.h3,{id:"volume-configuration",children:"Volume Configuration"}),(0,i.jsx)(t.p,{children:"When running the container, you may mount the configuration data directory from the host using the following volume configurations:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Volume"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/path/to/appdata/config:/config"})}),(0,i.jsx)(t.td,{children:"Mounts the configuration data directory from the host."})]})})]}),(0,i.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/wireshark",children:"wireshark"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: vs1 (you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"3000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(84434).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(91346).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(26199).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(86454).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(16436).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(66082).Z+"",width:"1918",height:"1078"})]}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"About wireshark image we used."})}),(0,i.jsx)(t.p,{children:"This is the official wireshark image."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Can I deploy my own wireshark image with modified configuration ?"})}),(0,i.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,i.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, wireshark"})]})]}),"\n",(0,i.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},84434:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/x1-2719737df156ce6be057aab183b9add7.png"},91346:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/x2-0f305bd5e541013db8e1b3803ca7d50b.png"},26199:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/x3-89b4d0f80480d2014178403808867415.png"},86454:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/x4-f43280410370fba73a94f41cd0ef036e.png"},16436:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/x5-77e2dce214983beeba073b1f33ddada0.png"},66082:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/x6-7b6fd44289c3a800f05b185dbced3e03.png"}}]);