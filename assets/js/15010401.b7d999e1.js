"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[47],{53954:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=s(85893),t=s(11151),i=s(5370);const r={draft:!1},l="\ud83d\udda5 Mongo DB",d={id:"demo-deployment copy/database/mongo db",title:"mongo db",description:"MongoDB: The Gem of NoSQL",source:"@site/docs/demo-deployment copy/database/mongo db.md",sourceDirName:"demo-deployment copy/database",slug:"/demo-deployment copy/database/mongo db",permalink:"/demo-deployment copy/database/mongo db",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"maria db deployment",permalink:"/demo-deployment copy/database/maria db deployment"},next:{title:"mysql deployment",permalink:"/demo-deployment copy/database/mysql deployment"}},c={},a=[{value:"MongoDB: The Gem of NoSQL",id:"mongodb-the-gem-of-nosql",level:3},{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure ",id:"steps-and-procedure-",level:3},{value:"Steps to connect with mongo db",id:"steps-to-connect-with-mongo-db",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/img/ddve.jpg",alt:"Alt Text",width:"25%"})}),"\n",(0,o.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,o.jsx)(n.h1,{id:"-mongo-db",children:"\ud83d\udda5 Mongo DB"}),(0,o.jsx)(n.h3,{id:"mongodb-the-gem-of-nosql",children:"MongoDB: The Gem of NoSQL"}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MongoDB"})," shines as a NoSQL database, offering flexibility and scalability. Departing from traditional databases, it embraces document orientation with BSON, allowing diverse and nested data structures. MongoDB's dynamic schema, powerful query language, and CRUD operations provide a creative and efficient approach to data management. It's a gem for those who seek a flexible, document-friendly, and infinitely scalable database solution."]}),(0,o.jsx)(n.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Port Type"}),(0,o.jsx)(n.th,{children:"Port Number"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Tcp"}),(0,o.jsx)(n.td,{children:"27017"}),(0,o.jsx)(n.td,{children:"MongoDB exposes port 27017 for TCP traffic."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"http"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"})]})]})]}),(0,o.jsx)(n.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,o.jsx)(n.p,{children:"MongoDB uses volume mounts to manage data storage and configuration. You can set these when running the container:"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Volume"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/my/own/datadir"})}),(0,o.jsx)(n.td,{children:"Path to MongoDB data directory."})]})})]}),(0,o.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Environment value:"})}),(0,o.jsx)(n.th,{children:"Decription"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"})]})})]})]}),"\n",(0,o.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Decription"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Docker Image"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/_/mongo",children:"mongo db"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Application name"}),(0,o.jsx)(n.td,{children:"Eg: mongo1(you can put any name)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resource Allocation"}),(0,o.jsx)(n.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Protocol"})}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Http:"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Tcp:"}),(0,o.jsx)(n.td,{children:"27017"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Advanced"}),(0,o.jsx)(n.td,{children:"Install with Default"})]})]})]}),(0,o.jsx)(n.h3,{id:"steps-and-procedure-",children:"Steps And Procedure "}),(0,o.jsxs)(n.p,{children:["For Detailed steps and procedure please vist this page: ",(0,o.jsx)(n.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,o.jsx)(n.h3,{id:"steps-to-connect-with-mongo-db",children:"Steps to connect with mongo db"}),(0,o.jsx)(n.p,{children:"If you want to connect MongoDB Compass to a MongoDB instance running on a different host or IP address, you can follow these steps:"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Open MongoDB Compass"}),": Launch MongoDB Compass on your computer."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:'Click "New Connection"'}),': In the MongoDB Compass interface, click on the "New Connection" button to start creating a new connection.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Configure Connection Details"}),": In the connection configuration window, follow these steps:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Hostname"}),": Enter the IP address or hostname of the MongoDB server you want to connect to. In your case, this would be ",(0,o.jsx)(n.code,{children:"103.37.96.201"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Port"}),": Use the default MongoDB port ",(0,o.jsx)(n.code,{children:"27017"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Authentication"}),": If the MongoDB server requires authentication, enter the necessary credentials (username and password)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Enter Connection URL"}),': In the connection configuration window, you\'ll see a single text box labeled "Connection String." Here, you will directly enter the connection URL in the following format:']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-arduino",children:" codemongodb://<IP_ADDRESS>:27017\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<IP_ADDRESS>"})," with the actual IP address of the MongoDB server. In your case, the URL would be:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-arduino",children:" codemongodb://103.37.96.201:27017\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Advanced Options"}),' (Optional): If you need to specify additional connection options, you can expand the "Advanced" section. Here, you can configure options like SSL, replica set name, and more.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Test Connection"}),': After entering the connection details, you can click the "Test" button to check if the connection is successful. MongoDB Compass will attempt to connect to the server and validate the settings.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Save the Connection"}),': If the connection test is successful, you can give your connection a name and optionally add it to your favorites. Then click the "Connect" button to establish the connection.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Explore and Manage Data"}),": Once the connection is established, MongoDB Compass will display the databases and collections available on the connected server. You can explore and manage your data using the intuitive graphical interface."]}),"\n"]}),"\n"]}),(0,o.jsxs)(n.p,{children:["Remember that for the connection to work, the MongoDB server at the specified IP address (",(0,o.jsx)(n.code,{children:"103.37.96.201"})," in your case) must be reachable from your computer and configured to allow connections from the IP address you are using. Also, if the server requires authentication, make sure to provide the correct credentials during the connection setup."]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step-by-Step Guide to MONGO DB Deployment"})}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Docker Image Selection:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Docker Image Name: ",(0,o.jsx)(n.code,{children:"Mongo db"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Application Details:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Application Name: Mongo1"}),"\n",(0,o.jsx)(n.li,{children:"Resource Allocation: Set the desired resource allocation from 0-100%."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Protocol Configuration:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Protocol: ",(0,o.jsx)(n.code,{children:"TCP"})]}),"\n",(0,o.jsxs)(n.li,{children:["Port: ",(0,o.jsx)(n.code,{children:"27017"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Installation Options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Choose between "Default" or "Advanced" installation.'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Advanced Installation (Optional):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'If selecting "Advanced," you can customize the environment variables and working directory:'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Environment Variables:"})}),"\n",(0,o.jsxs)(n.p,{children:["Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like ",(0,o.jsx)(n.code,{children:"API_KEY=xyz"}),", and provide flexibility to adjust an app's behavior without changing its code."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Environment Variables: Define environment variables with keys and values (e.g., ",(0,o.jsx)(n.code,{children:"key=value OR MONGO_INITDB_ROOT_USERNAME=root, MONGO_INITDB_ROOT_PASSWORD=123"})," )."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Working Directory:"})}),"\n",(0,o.jsxs)(n.p,{children:["The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to ",(0,o.jsx)(n.code,{children:"/usr/src/yourAPP"}),", an app will reference files from there, like ",(0,o.jsx)(n.code,{children:"/usr/src/yourAPP/data.txt"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Working Directory: Set the working directory for the application (e.g., ",(0,o.jsx)(n.code,{children:"usr/src/yourAPP"}),")."]}),"\n",(0,o.jsx)(n.li,{children:'Here use ( use the path after   " :"  )'}),"\n",(0,o.jsx)(n.li,{children:"/my/own/datadir:/data/db"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Access Configuration:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Choose between "Public" or "Private" access to the deployed application.'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Installation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Click the "Install" button to initiate the deployment process.'}),"\n"]}),"\n"]}),"\n"]}),(0,o.jsx)(n.p,{children:"By following these steps, you can effortlessly deploy an mongodb instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs."}),(0,o.jsx)(n.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"Alt Text",src:s(27360).Z+"",width:"1920",height:"1080"}),"\n",(0,o.jsx)(n.img,{alt:"Alt Text",src:s(36812).Z+"",width:"1918",height:"1080"}),"\n",(0,o.jsx)(n.img,{alt:"Alt Text",src:s(93652).Z+"",width:"1920",height:"1080"})]}),(0,o.jsx)(n.h3,{id:"faq",children:"FAQ"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"About Mongo DB image we used."})}),(0,o.jsx)(n.p,{children:"This is the official Mongo DB image."}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Are there any restrictions on adding data sources ?"})}),(0,o.jsx)(n.p,{children:"you can add any data source that Mongo Db supports."}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Can i deploy older version of  Mondo or my own modified Mongo db image ?"})}),(0,o.jsx)(n.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Are my data persistent ?"})}),(0,o.jsx)(n.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,o.jsx)(n.h3,{id:"join-us",children:"Join us"}),(0,o.jsxs)(n.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,o.jsx)(n.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Category"}),(0,o.jsx)(n.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, , database, mongo db"})]})]}),"\n",(0,o.jsx)(i.Z,{})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},27360:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/ee2-594436c0ba1929a78fccc2dce714d0da.jpg"},36812:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/ef33-d33857f49256e86fdcb6a2f9b7d8e22e.jpg"},93652:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/rr32-1c92dd21b1f7c720fc5a76a0b88c3b8d.jpg"}}]);