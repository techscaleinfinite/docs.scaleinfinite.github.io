"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[111],{3459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(5893),i=n(1151);const r={sidebar_position:1},o="Architecture",a={id:"introduction/cloud-float/architecture",title:"Architecture",description:"Some Key Concepts",source:"@site/docs/introduction/cloud-float/architecture.md",sourceDirName:"introduction/cloud-float",slug:"/introduction/cloud-float/architecture",permalink:"/introduction/cloud-float/architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cloud float",permalink:"/introduction/cloud-float/"},next:{title:"Create Account",permalink:"/introduction/cloud-float/create account"}},c={},l=[{value:"Some Key Concepts",id:"some-key-concepts",level:3},{value:"Benefits of persistence:",id:"benefits-of-persistence",level:3}];function d(e){const t={em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/ohh.jpg",alt:"Alt Text",width:"400"})}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"some-key-concepts",children:"Some Key Concepts"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"App Redeployment and Data Persistence in Kubernetes:"})," When you redeploy an application in Kubernetes, the default behavior is to replace the existing pods with new ones containing the updated application. This process involves stopping the old pods and starting new ones. However, there's an important consideration regarding data persistence."]}),(0,s.jsx)(t.p,{children:"By default, when you redeploy an application, the data stored within the application's container is lost, as the old containers are terminated. But don't worry, you can take steps to make your application's data persistent."}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Persistent Storage with Kubernetes:"})," Kubernetes offers solutions for persistent storage. You can configure your application to use external storage options like Persistent Volume Claims (PVCs) or StatefulSets. These mechanisms allow you to store data outside of the application containers. The benefit? Even if the application pods are replaced or redeployed, your data remains secure and accessible."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:'"Go" Button for Data Persistence:'}),' Imagine a "Go" button on our platform that empowers you to make your app\'s data persistent. Clicking this button could prompt Kubernetes to associate your app with a Persistent Volume Claim. The result? Your data stays safe and sound, even if you decide to redeploy the app.']}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Upgrades, Port Changes, and Kubernetes:"})," When you upgrade your application or modify its configuration (such as changing the port), Kubernetes is here to help. It seamlessly manages this process, ensuring minimal downtime by gradually replacing the old pods with new ones."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Temporary vs. Persistent Storage:"})," Temporary storage, like RAM, can hold data only while the application is running. Once the app stops or restarts, this data disappears. To enhance data resilience, consider persistent storage. It involves storing data in a Persistent Volume, which could be on a hard disk, network storage, or even a cloud-based solution. This way, your data remains intact even when your application goes through changes or upgrades."]}),(0,s.jsx)(t.p,{children:'In summary, Kubernetes offers you control over data persistence during application redeployment. With persistent storage solutions and the "Go" button, you can ensure that your valuable data stays safe and accessible throughout your application\'s lifecycle.'})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"benefits-of-persistence",children:"Benefits of persistence:"}),(0,s.jsx)(t.p,{children:"Data persistence is a transformative aspect of application deployment that brings forth a plethora of advantages, ensuring your valuable information remains intact across redeployments and upgrades. Here's why embracing data persistence is a game-changer for your hosting experience:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Continuous Availability"}),": With data persistence, your application's critical data remains accessible even when the application itself is redeployed. This ensures uninterrupted access to your app's content, providing a seamless experience for both users and administrators."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Reliability and Data Integrity"}),": By persisting data externally, you safeguard it from the inherent volatility of containerized environments. This reliability prevents data loss due to unexpected events, enhancing the integrity of your application's content."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Efficient Backup and Recovery"}),": Persistent data is easier to back up and recover. Should you encounter issues or need to restore previous versions of your application, having a reliable data store ensures swift recovery without compromising data accuracy."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Streamlined Upgrades and Scaling"}),": When upgrading or scaling your application, persistent data remains untouched. This means you can enhance your app's features or accommodate increased traffic while preserving user-generated content or important configurations."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Business Continuity"}),": For applications that rely on user-generated data, such as content sharing platforms or collaborative tools, data persistence ensures business continuity. Your users won't experience interruptions or data loss during routine maintenance or upgrades."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Data-Driven Insights"}),": By preserving historical data across deployments, you empower yourself with valuable insights. These insights can help you analyze trends, user behavior, and performance over time, leading to more informed decisions."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Regulatory Compliance"}),": Some industries have strict regulations regarding data retention and privacy. Data persistence enables compliance with these regulations by ensuring data is retained securely and transparently."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Data-Intensive Applications"}),": Applications that manage large datasets, like databases or media servers, benefit immensely from data persistence. These apps can continue to serve data without the need for time-consuming data migration during every redeployment."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Reduced Downtime"}),": When you don't need to migrate or recreate data during app upgrades or changes, downtime is minimized. Your users experience fewer disruptions, enhancing user satisfaction."]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.strong,{children:"Fostering Innovation"}),": With the assurance of data persistence, your development team can confidently explore new features and functionality. The safety net of preserved data encourages innovation without the fear of data loss."]})}),"\n"]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions "})]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);