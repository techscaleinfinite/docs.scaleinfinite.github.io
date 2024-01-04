"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[361],{71061:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var n=t(85893),i=t(11151),r=t(5370);const d={draft:!1},l="Paperless-ng - Document Indexing and Management",o={id:"demo-deployment copy/lifestyle/paperless",title:"paperless",description:"Paperless-ng, developed by Daniel Quinn and contributors, is an application designed for indexing scanned documents. This tool enables users to efficiently search for documents and store metadata alongside their scanned files. With Paperless-ng, you can streamline the organization and retrieval of your documents, making it a valuable asset for efficient document management.",source:"@site/docs/demo-deployment copy/lifestyle/paperless.md",sourceDirName:"demo-deployment copy/lifestyle",slug:"/demo-deployment copy/lifestyle/paperless",permalink:"/demo-deployment copy/lifestyle/paperless",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"noisedash",permalink:"/demo-deployment copy/lifestyle/noisedash"},next:{title:"trago",permalink:"/demo-deployment copy/lifestyle/trago"}},a={},c=[{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:d}=s;return d||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/bfd.png",alt:"Alt Text",width:"25%"})}),(0,n.jsx)(s.h1,{id:"paperless-ng---document-indexing-and-management",children:"Paperless-ng - Document Indexing and Management"}),(0,n.jsx)(s.p,{children:"Paperless-ng, developed by Daniel Quinn and contributors, is an application designed for indexing scanned documents. This tool enables users to efficiently search for documents and store metadata alongside their scanned files. With Paperless-ng, you can streamline the organization and retrieval of your documents, making it a valuable asset for efficient document management."}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Exposed Ports:"})}),(0,n.jsx)(s.th,{children:"Decription"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Http port"}),(0,n.jsx)(s.td,{children:"8000 is exposed to facilitate web-based communication for Paperless-ng. Users can access the Paperless-ng application through this port."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Tcp port"}),(0,n.jsx)(s.td,{children:"-"})]})]})]}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Working directory:"})}),(0,n.jsx)(s.th,{children:"Decription"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"/path/to/Paperless-ng/config:/config"}),(0,n.jsx)(s.td,{children:"This is the path  where Paperless-ng's configuration files are stored. It ensures that the necessary configuration data is accessible."})]})})]}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Environment value:"})}),(0,n.jsx)(s.th,{children:"Decription"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"-"})]})})]})]}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(s.h3,{id:"installation",children:"Installation"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Decription"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Docker Image"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"https://hub.docker.com/r/linuxserver/paperless-ng",children:(0,n.jsx)(s.code,{children:"linuxserver/paperless-ng"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Application name"}),(0,n.jsx)(s.td,{children:"Eg: bzzz1(you can put any name)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Resource Allocation"}),(0,n.jsx)(s.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Protocol"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Http:"}),(0,n.jsx)(s.td,{children:"8000"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Tcp:"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Advanced"}),(0,n.jsx)(s.td,{children:"Install with Default"})]})]})]}),(0,n.jsx)(s.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,n.jsxs)(s.p,{children:["For Detailed steps and procedure please vist this page: ",(0,n.jsx)(s.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,n.jsx)(s.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Alt Text",src:t(59822).Z+"",width:"1918",height:"1078"}),"\r\n",(0,n.jsx)(s.img,{alt:"Alt Text",src:t(30430).Z+"",width:"1915",height:"1077"}),"\r\n",(0,n.jsx)(s.img,{alt:"Alt Text",src:t(19909).Z+"",width:"1917",height:"1078"}),"\r\n",(0,n.jsx)(s.img,{alt:"Alt Text",src:t(4919).Z+"",width:"1918",height:"1078"}),"\r\n",(0,n.jsx)(s.img,{alt:"Alt Text",src:t(76081).Z+"",width:"1917",height:"1077"})]}),(0,n.jsx)(s.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,n.jsx)(s.p,{children:"Check out our youtube video for more clarification."}),(0,n.jsx)(s.h3,{id:"faq",children:"FAQ"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"About Paperless-ng image we used."})}),(0,n.jsx)(s.p,{children:"This is the official Paperless-ng image."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Can I deploy my own Paperless-ng image with modified configuration ?"})}),(0,n.jsx)(s.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Are my data persistent ?"})}),(0,n.jsx)(s.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,n.jsx)(s.h3,{id:"join-us",children:"Join us"}),(0,n.jsxs)(s.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,n.jsx)(s.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going."]}),(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:"Category"}),(0,n.jsx)(s.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment"})]})]}),"\n",(0,n.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},59822:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/5b-befa1460604ee5ef3769dcedbd4d8604.png"},30430:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/5f-de8b2083912f8f82142b61f63b6bd22e.png"},19909:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/5jk-38dfed8676dacd3f8329e779f5d06bee.png"},4919:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/5n-fe6e90c010888d007fd2b803f7e1b480.png"},76081:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/5v-92d7a637aa0c329e1d5eb5593384446b.png"}}]);