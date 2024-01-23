"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[9574],{258:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=s(5893),t=s(1151),o=s(8662);const l={draft:!1},r="Joomla",a={id:"demo-deployment copy/content-management-system-cms/joomla",title:"Joomla",description:"Joomla is the superhero of open-source web development, simplifying website creation and management. With a user-friendly interface, it empowers users to effortlessly add and organize content, be it articles, images, or videos. Think of Joomla as a versatile wardrobe for your website, offering various templates and themes to dress it up.",source:"@site/docs/demo-deployment copy/content-management-system-cms/joomla.md",sourceDirName:"demo-deployment copy/content-management-system-cms",slug:"/demo-deployment copy/content-management-system-cms/joomla",permalink:"/demo-deployment copy/content-management-system-cms/joomla",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Grafana deployment",permalink:"/demo-deployment copy/content-management-system-cms/grafana-deployment"},next:{title:"Media Wiki Deployment",permalink:"/demo-deployment copy/content-management-system-cms/media-wiki-deployment"}},d={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Steps to connect mysql and joomla",id:"steps-to-connect-mysql-and-joomla",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"joomla",children:"Joomla"}),"\n",(0,i.jsx)(n.h1,{id:"joomla-your-websites-superhero",children:"Joomla: Your Website's Superhero"}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/rfgf.jpg",alt:"Alt Text",width:"25%"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Joomla"})," is the superhero of open-source web development, simplifying website creation and management. With a user-friendly interface, it empowers users to effortlessly add and organize content, be it articles, images, or videos. Think of Joomla as a versatile wardrobe for your website, offering various templates and themes to dress it up."]}),(0,i.jsx)(n.p,{children:"Its superpowers extend with extensions like modules, plugins, and components, allowing users to add functionality and customize their digital space. Joomla gives you the authority with user management, enabling collaboration on web projects. It's SEO-friendly, multilingual, and part of a supportive community. Whether you're starting a personal blog or a business site."}),(0,i.jsx)(n.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Port Type"}),(0,i.jsx)(n.th,{children:"Port Number"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Http"}),(0,i.jsx)(n.td,{children:"80"}),(0,i.jsx)(n.td,{children:"Joomla exposes port 80 for HTTP."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Tcp"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),(0,i.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsx)(n.p,{children:"Joomla relies on several environment variables for its configuration. You can set these when running the container:"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JOOMLA_DB_HOST"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Defaults to the IP and port of the linked ",(0,i.jsx)(n.code,{children:"mysql"})," container."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JOOMLA_DB_USER"})}),(0,i.jsx)(n.td,{children:'"root"'}),(0,i.jsx)(n.td,{children:'Defaults to "root".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JOOMLA_DB_PASSWORD"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Defaults to the value of the ",(0,i.jsx)(n.code,{children:"MYSQL_ROOT_PASSWORD"})," from the linked ",(0,i.jsx)(n.code,{children:"mysql"})," container."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JOOMLA_DB_NAME"})}),(0,i.jsx)(n.td,{children:'"joomla"'}),(0,i.jsx)(n.td,{children:'Defaults to "joomla".'})]})]})]}),(0,i.jsxs)(n.p,{children:["Additionally, when using a linked ",(0,i.jsx)(n.code,{children:"mysql"})," container, you may need to set the ",(0,i.jsx)(n.code,{children:"MYSQL_ROOT_PASSWORD"})," environment variable."]}),(0,i.jsx)(n.p,{children:"Example:"}),(0,i.jsxs)(n.p,{children:["docker run -p 80:80 ",(0,i.jsx)(n.br,{}),"\n","-e JOOMLA_DB_HOST=... ",(0,i.jsx)(n.br,{}),"\n","-e JOOMLA_DB_USER=... ",(0,i.jsx)(n.br,{}),"\n","-e JOOMLA_DB_PASSWORD=... ",(0,i.jsx)(n.br,{}),"\n","-e JOOMLA_DB_NAME=... ",(0,i.jsx)(n.br,{}),"\n","-e MYSQL_ROOT_PASSWORD=example ",(0,i.jsx)(n.br,{}),"\n","joomla-image",":tag"]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Decription"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Docker Image"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"joomla"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Application name"}),(0,i.jsx)(n.td,{children:"Eg: joomla(you can put any name)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resource Allocation"}),(0,i.jsx)(n.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Protocol"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Http:"}),(0,i.jsx)(n.td,{children:"80"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Tcp:"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Advanced"}),(0,i.jsx)(n.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(n.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(n.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(n.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(n.h3,{id:"steps-to-connect-mysql-and-joomla",children:"Steps to connect mysql and joomla"}),(0,i.jsxs)(n.p,{children:["You can check out how to configure ",(0,i.jsx)(n.a,{href:"https://docs.scaleinfinite.fr/demo-deployment/database/mysql-deployment",children:"mysql."})]}),(0,i.jsx)(n.p,{children:"Here are the general steps to configure Joomla to work with a MySQL database:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Database Setup:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Before you start, make sure you have MySQL installed on your server and that it's running. You should also create an empty MySQL database that Joomla will use to store its data. You can do this using the MySQL client or a graphical tool like phpMyAdmin."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Joomla Installation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Download the Joomla installation package from the official Joomla website."}),"\n",(0,i.jsx)(n.li,{children:"Upload the installation package to your web server's directory using FTP or a file manager provided by your hosting provider."}),"\n",(0,i.jsx)(n.li,{children:"Visit your website's URL in a web browser, and the Joomla installation process will begin. Follow the on-screen instructions, which will include entering your database information."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Database Configuration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["During the Joomla installation, you will need to provide the following database information:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Database Type: Select "MySQLi" or "MySQL" as the database type, depending on your MySQL version and configuration.'}),"\n",(0,i.jsx)(n.li,{children:'Hostname: This is usually "localhost" if your MySQL server is on the same server as your Joomla installation. If your MySQL server is on a different server, enter the server\'s IP address or hostname.'}),"\n",(0,i.jsx)(n.li,{children:"Username: The MySQL username you created when setting up the database."}),"\n",(0,i.jsx)(n.li,{children:"Password: The password associated with the MySQL username."}),"\n",(0,i.jsx)(n.li,{children:"Database Name: The name of the MySQL database you created for Joomla."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Table Prefix (Optional):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Joomla allows you to set a table prefix for its database tables. This is a security measure that adds a prefix to the table names to help prevent conflicts with other applications sharing the same database."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Site Configuration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Complete the remaining steps of the Joomla installation, which include configuring your site settings, creating an administrator account, and choosing a template."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Finalize Installation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once you've completed the installation, Joomla will create the necessary database tables and configure itself to work with the MySQL database you specified."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use Joomla:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can now use Joomla to create and manage your website's content through its user-friendly interface. Joomla will handle all database interactions behind the scenes."}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Step-by-Step Guide to joomla Deployment"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Docker Image Selection:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Docker Image Name: ",(0,i.jsx)(n.code,{children:"joomla"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application Details:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Application Name: ",(0,i.jsx)(n.code,{children:"joomla"})]}),"\n",(0,i.jsx)(n.li,{children:"Resource Allocation: Set the desired resource allocation from 0-100%."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Protocol Configuration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Protocol: ",(0,i.jsx)(n.code,{children:"HTTP"})]}),"\n",(0,i.jsxs)(n.li,{children:["Port: ",(0,i.jsx)(n.code,{children:"80"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Installation Options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Choose between "Default" or "Advanced" installation.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advanced Installation (Optional):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'If selecting "Advanced," you can customize the environment variables and working directory:'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Environment Variables:"})}),"\n",(0,i.jsxs)(n.p,{children:["Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like ",(0,i.jsx)(n.code,{children:"API_KEY=xyz"}),", and provide flexibility to adjust an app's behavior without changing its code."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment Variables: Define environment variables with keys and values (e.g., ",(0,i.jsx)(n.code,{children:"key=value"}),")."]}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following environment variables are also honored for configuring your Joomla instance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-e JOOMLA_DB_HOST=..."})," (defaults to the IP and port of the linked ",(0,i.jsx)(n.code,{children:"mysql"})," container)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-e JOOMLA_DB_USER=..."}),' (defaults to "root")']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-e JOOMLA_DB_PASSWORD=..."})," (defaults to the value of the ",(0,i.jsx)(n.code,{children:"MYSQL_ROOT_PASSWORD"})," environment variable from the linked ",(0,i.jsx)(n.code,{children:"mysql"})," container)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-e JOOMLA_DB_NAME=..."}),' (defaults to "joomla")']}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:" MYSQL_ROOT_PASSWORD: example\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Working Directory:"})}),"\n",(0,i.jsxs)(n.p,{children:["The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to ",(0,i.jsx)(n.code,{children:"/usr/src/yourAPP"}),", an app will reference files from there, like ",(0,i.jsx)(n.code,{children:"/usr/src/yourAPP/data.txt"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Working Directory: Set the working directory for the application (e.g., ",(0,i.jsx)(n.code,{children:"usr/src/yourAPP"}),")."]}),"\n",(0,i.jsx)(n.li,{children:'Here use ( use the path after   " :"  )'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Configuration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Choose between "Public" or "Private" access to the deployed application.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Installation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Click the "Install" button to initiate the deployment process.'}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"By following these steps, you can effortlessly deploy an joomla instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs."}),(0,i.jsx)(n.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsx)("img",{src:"/img/kk0.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/oo0.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/kko.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)(n.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(n.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(n.h3,{id:"faq",children:"FAQ"}),(0,i.jsxs)(n.p,{children:["For Detailed FAQ please vist this page: ",(0,i.jsx)(n.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,i.jsx)(n.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(n.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(n.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(n.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, joomla"})]})]}),"\n",(0,i.jsx)(o.Z,{})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);