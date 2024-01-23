"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[4043],{1210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(5893),s=n(1151),o=n(8662);const r={draft:!1},l="Xampp deployment",a={id:"demo-deployment copy/database/xamppdeployment",title:"Xampp deployment",description:"XAMPP is an all-in-one web server solution by Apache Friends, bundling Apache HTTP server, MariaDB database, and PHP/Perl interpreters. It's a versatile toolbox for web development, offering universal compatibility across Windows, macOS, and Linux. As an open-source project, XAMPP encourages community collaboration and innovation in web development. With its local server environment, it serves as a testing ground for dynamic web applications, providing a convenient and comprehensive solution for developers.",source:"@site/docs/demo-deployment copy/database/xamppdeployment.md",sourceDirName:"demo-deployment copy/database",slug:"/demo-deployment copy/database/xamppdeployment",permalink:"/demo-deployment copy/database/xamppdeployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Tomcat Deployment",permalink:"/demo-deployment copy/database/tomcat deployment"},next:{title:" Document Management",permalink:"/category/-document-management"}},d={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation ",id:"installation-",level:3},{value:" Steps And Procedure",id:"-steps-and-procedure",level:3},{value:"Deploy Xampp on Scaleinfinite",id:"deploy-xampp-on-scaleinfinite",level:4},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:4}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"xampp-deployment",children:"Xampp deployment"}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/zz31.png",alt:"Alt Text",width:"25%"})}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"XAMPP"})," is an all-in-one web server solution by Apache Friends, bundling Apache HTTP server, MariaDB database, and PHP/Perl interpreters. It's a versatile toolbox for web development, offering universal compatibility across Windows, macOS, and Linux. As an open-source project, XAMPP encourages community collaboration and innovation in web development. With its local server environment, it serves as a testing ground for dynamic web applications, providing a convenient and comprehensive solution for developers."]}),(0,i.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port Type"}),(0,i.jsx)(t.th,{children:"Port Number"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http"}),(0,i.jsx)(t.td,{children:"80"}),(0,i.jsx)(t.td,{children:"XAMPP is accessible on port 80."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,i.jsx)(t.p,{children:"XAMPP uses volume mounts to manage web pages. You can set these when running the container:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Volume"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-v ~/my_web_pages:/www tomsik68/xampp"})}),(0,i.jsx)(t.td,{children:"Path to your web pages directory."})]})})]}),(0,i.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation-",children:"Installation "}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/tomsik68/xampp/",children:(0,i.jsx)(t.code,{children:"Xampp"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: zamp1(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"80"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"-steps-and-procedure",children:" Steps And Procedure"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[" ",(0,i.jsx)(t.strong,{children:"Docker image of this application consists of following layers :"})]}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"'FROM debian:buster' Taking debian:buster as the base image.\r\n\r\nAnd updating and installing all the required softwares like 'openssh-server' 'supervisor' 'net-tools'\r\n\r\nInstalling the Xampp software. And configuring Xampp to Enable web interface, error display in php.\r\n\r\nAnd creating a /www folder and a symbolic link to it in /opt/lampp/htdocs. This is convenient because it doesn't interfere with xampp, phpmyadmin or other tools in /opt/lampp/htdocs.\r\n\r\nAnd exposing 3306, 22 and 80 ports.\n"})}),(0,i.jsx)(t.h4,{id:"deploy-xampp-on-scaleinfinite",children:"Deploy Xampp on Scaleinfinite"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"This deployment utilizes the official Xampp Docker image. Here's a step-by-step guide to get you started:"})}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Begin by navigating to the "Create Apps" page and use the search bar to find the scaleinfinite/xampp  application.'}),"\n",(0,i.jsx)(t.li,{children:'Click on the "Install" button to initiate the installation process.'}),"\n",(0,i.jsx)(t.li,{children:"Fill in all the required fields with the necessary information."}),"\n",(0,i.jsx)(t.li,{children:'If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).'}),"\n",(0,i.jsx)(t.li,{children:'After making your selections, press the "Install" button to proceed.'}),"\n",(0,i.jsx)(t.li,{children:"Once the installation is complete, you'll be directed to the \"My Apps\" page, where you'll find a list of all the applications you've deployed."}),"\n",(0,i.jsx)(t.li,{children:"Copy the Hostname of the xampp  application without the NodePort and paste it into your preferred browser's address bar."}),"\n",(0,i.jsx)(t.li,{children:"Voil\xe0! You're now able to access the xampp webpage and explore its content."}),"\n"]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsx)("img",{src:"/img/ww23.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/rr4.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/rrr2.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,i.jsx)(t.h4,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, , database, xampp"})]})]}),"\n",(0,i.jsx)(o.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);