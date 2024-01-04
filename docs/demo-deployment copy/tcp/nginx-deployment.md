---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/vb.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# ⚙️ Nginx deployment

### Nginx: The Multifaceted Web Tool

Nginx transcends traditional web servers, functioning as a swift web server, diligent reverse proxy, efficient load balancer, proficient mail proxy, and adept HTTP cache. It powers websites, secures applications, orchestrates server resources, handles email routing, and optimizes content delivery with its versatile features.

### Exposed Ports

| Port Type | Port Number | Description                                     |
| --------- | ----------- | ----------------------------------------------- |
| Http      | 80          | Nginx is exposed on port 80.                   |
| Tcp       | -           | -             |

### Volume Configuration

When running the container, you may mount the Nginx configuration file from the host using the following volume configurations:

| Volume                                      | Description                                     |
| ------------------------------------------- | ----------------------------------------------- |
| `/host/path/nginx.conf:/etc/nginx/nginx.conf:ro` | Mounts the Nginx configuration file in read-only mode. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [`nginx`](https://hub.docker.com/\_/nginx)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: nginx (you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots
![Alt Text](/img/ss2.jpg)
![Alt Text](/img/jje4.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.


### FAQ

**About nginx image we used.**

This is the official nginx image.

**Can I deploy my own nginx image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, nginx

</details>

</span>


<Comments />