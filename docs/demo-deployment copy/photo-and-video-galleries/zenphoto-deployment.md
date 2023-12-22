
<p align="center">
  <img src="/img/eegb.jpg" alt="Alt Text" width="25%"/>
</p> 
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>


# 📸 ZenPhoto Deployment

### Zenphoto: Creative Website CMS

Zenphoto is a versatile Content Management System (CMS) designed for self-hosted websites, focusing on multimedia galleries. It excels in handling various media formats, offers customized page and menu management, robust blogging features, efficient file handling, and multilingual support. With scheduled publishing, user management, and community interaction features, Zenphoto empowers artists, photographers, filmmakers, and musicians to showcase their creativity seamlessly on a global stage.

### Exposed Ports

| Port Type | Port Number | Description                              |
| --------- | ----------- | ---------------------------------------- |
| Http      | 80          | Zenphoto application is on port 80.      |
| Tcp       | -           | -             |

### Path Configuration

"Zenphoto" uses path configuration. Set these when running the container:

| Path                          | Description                              |
| ----------------------------- | ---------------------------------------- |
| `~/zenphoto/mysql:/var/lib/mysql \`            | Path for Zenphoto MySQL data. Internal path used by Zenphoto for MySQL.            |
| `~/zenphoto/www:/var/www/html \`              | Path for Zenphoto web content.Internal path used by Zenphoto for HTML.           |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          | [Zenphoto ](https://hub.docker.com/r/emieza/zenphoto)  👈(click me,for the dockerhub image)                              |
| Application name      |  Eg: zen1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to zenphoto Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: zenphoto&#x20;
2. **Application Details:**
   * Application Name: Zenphoto
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `80`
4. **Installation Options:**
   * Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional):**
   * If selecting "Advanced," you can customize the environment variables and working directory:
   *   **Environment Variables:**

       Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like `API_KEY=xyz`, and provide flexibility to adjust an app's behavior without changing its code.

       * Environment Variables: Define environment variables with keys and values (e.g., `key=value`).
   *   **Working Directory:**

       The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to `/usr/src/yourAPP`, an app will reference files from there, like `/usr/src/yourAPP/data.txt`.

       * Working Directory: Set the working directory for the application (e.g., `usr/src/yourAPP`).
       * Here use ( use the path after   " :"  )
       *

           ```sh
            -v ~/zenphoto/mysql:/var/lib/mysql \
                   -v ~/zenphoto/www:/var/www/html \
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Zenphoto instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/t555.jpg)
![Alt Text](/img/eer44.jpg)
![Alt Text](/img/uyt5.jpg)
![Alt Text](/img/s22.jpg)
![Alt Text](/img/rw4.jpg)
![Alt Text](/img/e333.jpg)
![Alt Text](/img/fr4.jpg)
![Alt Text](/img/htt.jpg)
![Alt Text](/img/tht5.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Zenphoto image we used.**

This is the official Zenphoton image.

**Can I deploy my own Zenphoto image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, zen photo

</details>

</span>
