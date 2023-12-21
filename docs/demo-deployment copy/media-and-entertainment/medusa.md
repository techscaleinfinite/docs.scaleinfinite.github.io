<p align="center">
  <img src="/img/gngn.png" alt="Alt Text" width="25%"/>
</p> 
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# Medusa - Automatic Video Library Manager

Medusa is an automatic Video Library Manager designed for TV Shows. With its advanced capabilities, Medusa monitors your favorite shows for new episodes and automatically manages your video library. Once new episodes are detected, Medusa takes care of the organizational tasks, ensuring your TV show collection is up-to-date without manual intervention. This seamless automation makes Medusa a valuable tool for TV show enthusiasts who want a hassle-free way to keep their libraries current.




### Exposed Ports

| Port Type | Port Number | Description                                     |
| --------- | ----------- | ----------------------------------------------- |
| Http      | 8081        | "medusa" application is accessible on port 8081. |
| Tcp       | -           | -             |

### Path Configuration

grav may use path configuration. Set these when running the container:

| Path                    | Description                           |
| ----------------------- | ------------------------------------- |
| `/path/to/tvshows`      | Path for TV shows inmedusa.             |
| `/mnt/share1`           | Mount point formedusa to access data.   |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [linuxserver/medua](https://hub.docker.com/r/linuxserver/medusa)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg:medusa1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8081                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                                     


### Steps And Procedure

&#x20; **This deployment utilizes the officialmedusa image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the  application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of themedusa application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the  medusa webpage and explore its content.



**Step-by-Step Guide tomedusa Deployment**

1. **Docker Image Selection:**
   * Docker Image Name:medusa
2. **Application Details:**
   * Application Name:medusa1
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: http
   * Port: 8081
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
       * /path/to/tvshows:/mnt/share1
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy anmedusa instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


![Alt Text](/img/008.png)
![Alt Text](/img/09.png)
![Alt Text](/img/0086.png)
![Alt Text](/img/0087.png)
![Alt Text](/img/098.png)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**Aboutmedusa image we used.**

This is the officialmedusa image.

**Can I deploy my ownmedusa image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment,medusa

</details>

</span>
