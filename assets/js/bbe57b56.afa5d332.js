"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[6535],{22210:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=i(85893),n=i(11151),r=i(5370);const a={draft:!1},d="\ud83d\udda5 Kavita Deployment",l={id:"demo-deployment copy/document-management/kavita",title:"kavita",description:"Kavita: A Swift and Versatile Digital Library",source:"@site/docs/demo-deployment copy/document-management/kavita.md",sourceDirName:"demo-deployment copy/document-management",slug:"/demo-deployment copy/document-management/kavita",permalink:"/demo-deployment copy/document-management/kavita",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"calibre",permalink:"/demo-deployment copy/document-management/calibre"},next:{title:"komga-deployment",permalink:"/demo-deployment copy/document-management/komga-deployment"}},o={},c=[{value:"Kavita: A Swift and Versatile Digital Library",id:"kavita-a-swift-and-versatile-digital-library",level:3},{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/rhrt.jpg",alt:"Alt Text",width:"25%"})}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h1,{id:"-kavita-deployment",children:"\ud83d\udda5 Kavita Deployment"}),(0,s.jsx)(t.h3,{id:"kavita-a-swift-and-versatile-digital-library",children:"Kavita: A Swift and Versatile Digital Library"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kavita"})," is a self-hosted digital library offering lightning-fast access to a diverse range of file formats. With a sleek design, it caters to bookworms and manga enthusiasts, providing organized series, user reviews, and swift search capabilities. Kavita simplifies library management, offering a command center for users to explore literature seamlessly."]}),(0,s.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port Type"}),(0,s.jsx)(t.th,{children:"Port Number"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http"}),(0,s.jsx)(t.td,{children:"5000"}),(0,s.jsx)(t.td,{children:"Kavita is accessible on port 5000."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),(0,s.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,s.jsx)(t.p,{children:"Kavita uses volume mounts to manage manga and configuration data. You can set these when running the container:"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/your/manga/directory:/manga"})}),(0,s.jsx)(t.td,{children:"Path to your manga directory."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/kavita/data/directory:/kavita/config"})}),(0,s.jsx)(t.td,{children:"Path to your Kavita configuration data."})]})]})]}),(0,s.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Environment value:"})}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Docker Image"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/kizaing/kavita",children:"kavita "})," \ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Application name"}),(0,s.jsx)(t.td,{children:"Eg: kav1(you can put any name)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resource Allocation"}),(0,s.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Protocol"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http:"}),(0,s.jsx)(t.td,{children:"5000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp:"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,s.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,s.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,s.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Alt Text",src:i(4564).Z+"",width:"1920",height:"1080"}),"\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:i(32251).Z+"",width:"1920",height:"1080"})]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Alt Text",src:i(5756).Z+"",width:"1886",height:"1077"}),"\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:i(51547).Z+"",width:"1885",height:"1078"})]}),(0,s.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,s.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"About Kavita image we used."})}),(0,s.jsx)(t.p,{children:"This is the official  Kavita image."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Can I deploy my own Kavita image with modified configuration ?"})}),(0,s.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,s.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,s.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,s.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,s.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Kavita"})]})]}),"\n",(0,s.jsx)(r.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},51547:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/fdfd4-985530d7be73551e776f253f6c590438.jpg"},32251:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/gt-3cb3174668b3daeff7728cd5051bfb4e.jpg"},5756:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/ju-b005d3d1d368ee29ea83f73ee3d5d52e.jpg"},4564:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/swee-41002f05632398154c2deeae8ccb3210.jpg"}}]);