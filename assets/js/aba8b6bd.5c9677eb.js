"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[1644],{8225:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(85893),n=t(11151),d=t(5370);const r={draft:!1},l="Gladys Assistant",o={id:"demo-deployment copy/lifestyle/gladys",title:"gladys",description:"Craft your perfect smart home experience with Gladys Assistant.",source:"@site/docs/demo-deployment copy/lifestyle/gladys.md",sourceDirName:"demo-deployment copy/lifestyle",slug:"/demo-deployment copy/lifestyle/gladys",permalink:"/demo-deployment copy/lifestyle/gladys",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"foldingathome",permalink:"/demo-deployment copy/lifestyle/foldingathome"},next:{title:"grocy",permalink:"/demo-deployment copy/lifestyle/grocy"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/llkm.png",alt:"Alt Text",width:"25%"})}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(s.h1,{id:"gladys-assistant",children:"Gladys Assistant"}),(0,i.jsx)(s.p,{children:"Craft your perfect smart home experience with Gladys Assistant."}),(0,i.jsx)(s.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Port Type"}),(0,i.jsx)(s.th,{children:"Port Number"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Http"}),(0,i.jsx)(s.td,{children:"80"}),(0,i.jsx)(s.td,{children:'"Gladys" application is accessible on port 80.'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Tcp"}),(0,i.jsx)(s.td,{children:"-"}),(0,i.jsx)(s.td,{children:"-"})]})]})]}),(0,i.jsx)(s.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,i.jsx)(s.p,{children:'"Gladys" may use volume mounts for data and configuration. Set these when running the container:'}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Volume"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]})})]}),(0,i.jsx)(s.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Environment value:"})}),(0,i.jsx)(s.th,{children:"Decription"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"-"}),(0,i.jsx)(s.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(s.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Decription"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Docker Image"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"https://hub.docker.com/r/gladysassistant/gladys",children:"gladysassistant/gladyss"})," \ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Application name"}),(0,i.jsx)(s.td,{children:"Eg: nmetabas1(you can put any name)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resource Allocation"}),(0,i.jsx)(s.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Protocol"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Http:"}),(0,i.jsx)(s.td,{children:"80"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Tcp:"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Advanced"}),(0,i.jsx)(s.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(s.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(s.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(s.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(s.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Alt Text",src:t(10792).Z+"",width:"1871",height:"1053"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(92429).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(81091).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(72570).Z+"",width:"1918",height:"1077"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(47726).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(32386).Z+"",width:"1917",height:"1078"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(86109).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(75465).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(75465).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(s.img,{alt:"Alt Text",src:t(30974).Z+"",width:"1918",height:"1078"})]}),(0,i.jsx)(s.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(s.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(s.h3,{id:"faq",children:"FAQ"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"About Gladys image we used."})}),(0,i.jsx)(s.p,{children:"This is the official Gladys  mage."}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Can I deploy my own media Gladys with modified configuration ?"})}),(0,i.jsx)(s.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Are my data persistent ?"})}),(0,i.jsx)(s.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,i.jsx)(s.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(s.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(s.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(s.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, monry, finance"})]})]}),"\n",(0,i.jsx)(d.Z,{})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},30974:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/15-bbf663c17affaa3efc46b41bf60521f5.png"},10792:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1c-ebed372d6cf11c4e0f1826b882dd2a39.png"},92429:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1d-7c3efe37c899e20cd6ef1d498fd8d049.png"},81091:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1de-b1178922225fb6b8afee9127c53d2baf.png"},72570:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1e-84ee5af57260bb05ee0f35328cf70637.png"},47726:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1f-9a1a0cc7da1b3950f00117e0d33d46ad.png"},32386:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1q-144e74de8ff1e298a18c56a18009a022.png"},86109:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1r-8003cee005de4c17045a2925c01c3651.png"},75465:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/1s-d3b659b272b5569e0286a742036ec201.png"}}]);