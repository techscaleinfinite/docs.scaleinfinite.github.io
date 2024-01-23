"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[7128],{4577:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=i(5893),s=i(1151),r=i(8662);const l={draft:!1},o="Jellyfin Deployment",d={id:"demo-deployment copy/media-and-entertainment/jellyfin-deployment",title:"Jellyfin Deployment",description:"Jellyfin is the open-source maestro for your personal media symphony, providing a cost-free platform to organize and stream diverse content types. Its versatility extends to movies, music, and photos, ensuring your entire collection is easily accessible. Jellyfin harmoniously streams your media to various devices, allowing you to indulge in your favorites wherever you go. With customizable server aesthetics, it creates a private media haven tailored to your style. Security is paramount with Jellyfin's self-hosted solution, ensuring your digital treasures remain private and protected. In a media-dominated world, Jellyfin stands as your personal curator, delivering a neat, accessible, and private collection curated to your preferences. \ud83c\udfac\ud83c\udfb5\ud83d\udcf7",source:"@site/docs/demo-deployment copy/media-and-entertainment/jellyfin-deployment.md",sourceDirName:"demo-deployment copy/media-and-entertainment",slug:"/demo-deployment copy/media-and-entertainment/jellyfin-deployment",permalink:"/demo-deployment copy/media-and-entertainment/jellyfin-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"headphones Deployment",permalink:"/demo-deployment copy/media-and-entertainment/headphones"},next:{title:"Lidarr Deployment",permalink:"/demo-deployment copy/media-and-entertainment/lidarr-deployment"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Path Configuration",id:"path-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"jellyfin-deployment",children:"Jellyfin Deployment"}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/dsd.jpg",alt:"Alt Text",width:"25%"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Jellyfin"})," is the open-source maestro for your personal media symphony, providing a cost-free platform to organize and stream diverse content types. Its versatility extends to movies, music, and photos, ensuring your entire collection is easily accessible. Jellyfin harmoniously streams your media to various devices, allowing you to indulge in your favorites wherever you go. With customizable server aesthetics, it creates a private media haven tailored to your style. Security is paramount with Jellyfin's self-hosted solution, ensuring your digital treasures remain private and protected. In a media-dominated world, Jellyfin stands as your personal curator, delivering a neat, accessible, and private collection curated to your preferences. \ud83c\udfac\ud83c\udfb5\ud83d\udcf7"]}),(0,n.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port Type"}),(0,n.jsx)(t.th,{children:"Port Number"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http"}),(0,n.jsx)(t.td,{children:"8096"}),(0,n.jsx)(t.td,{children:'"Jellyfin" application is accessible on port 8096.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),(0,n.jsx)(t.h3,{id:"path-configuration",children:"Path Configuration"}),(0,n.jsx)(t.p,{children:"Jellyfin may use path configuration. Set these when running the container:"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Path"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/path/to/movies"})}),(0,n.jsx)(t.td,{children:"Path for movies in Jellyfin."})]})})]}),(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Environment value:"})}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Docker Image"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/jellyfin/jellyfin",children:(0,n.jsx)(t.code,{children:"Jellyfin"})}),")\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application name"}),(0,n.jsx)(t.td,{children:"Eg: jell1(you can put any name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Allocation"}),(0,n.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Protocol"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http:"}),(0,n.jsx)(t.td,{children:"8096"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp:"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Advanced"}),(0,n.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,n.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,n.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,n.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,n.jsx)("img",{src:"/img/l7.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/k5k.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/ll.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/ooog.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/kkkj.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/kkn.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,n.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,n.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,n.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,n.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Category"}),(0,n.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media, entertainment, jellyfin"})]})]}),"\n",(0,n.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);