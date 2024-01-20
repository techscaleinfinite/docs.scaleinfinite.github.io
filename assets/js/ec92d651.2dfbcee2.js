"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[9624],{947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var d=n(5893),s=n(1151),i=n(5370);const r={draft:!1},l="tvheadend Deployment",o={id:"demo-deployment copy/media-and-entertainment/tvheadend",title:"tvheadend Deployment",description:"tvheadend:",source:"@site/docs/demo-deployment copy/media-and-entertainment/tvheadend.md",sourceDirName:"demo-deployment copy/media-and-entertainment",slug:"/demo-deployment copy/media-and-entertainment/tvheadend",permalink:"/demo-deployment copy/media-and-entertainment/tvheadend",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfb5 Spotify Deployment",permalink:"/demo-deployment copy/media-and-entertainment/spotify-deployment"},next:{title:"\ud83d\udcf8Photo and Videos",permalink:"/category/photo-and-videos"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"tvheadend-deployment",children:"tvheadend Deployment"}),"\n",(0,d.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,d.jsx)("p",{align:"center",children:(0,d.jsx)("img",{src:"/img/g5g.png",alt:"Alt Text",width:"25%"})}),(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"tvheadend:"}),"\r\ntvheadend is an automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, \xb5Torrent and Blackhole."]}),(0,d.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Port Type"}),(0,d.jsx)(t.th,{children:"Port Number"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Http"}),(0,d.jsx)(t.td,{children:"9981"}),(0,d.jsx)(t.td,{children:"tvheadend Web UI is accessible on port 9981."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Tcp"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"-"})]})]})]}),(0,d.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,d.jsx)(t.p,{children:"tvheadend uses volume mounts to manage configuration and download data. You can set these when running the container:"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Volume"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,d.jsx)(t.td,{children:"Path to tvheadend's configuration files."})]})})]}),(0,d.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Environment value:"})}),(0,d.jsx)(t.th,{children:"Decription"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,d.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,d.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Decription"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Docker Image"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/tvheadend",children:"linuxserver/tvheadend"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Application name"}),(0,d.jsx)(t.td,{children:"Eg: tvheadend1(you can put any name)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Resource Allocation"}),(0,d.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Protocol"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Http:"}),(0,d.jsx)(t.td,{children:"9981"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Tcp:"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Advanced"}),(0,d.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,d.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,d.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,d.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,d.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,d.jsx)("img",{src:"/img/44e.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,d.jsx)("img",{src:"/img/44h.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,d.jsx)("img",{src:"/img/44r.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,d.jsx)("img",{src:"/img/44t.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,d.jsx)("img",{src:"/img/44y.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,d.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,d.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,d.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,d.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,d.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,d.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,d.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,d.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Category"}),(0,d.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, tvheadend"})]})]}),"\n",(0,d.jsx)(i.Z,{})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}}}]);