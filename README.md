LWALA FORM LOGIC

A web-form that that allows the CHW to make a request for specific quantities of commodities from their CHA.

**Overview**

1. A super-admin logs in to the form portal and is able to add CHA (Community Health Assistants) and ties them to a local health facility within the county.

2. A CHW (Health Worker) is then able to register to the form portal and chooses the local health facility they want to register to. Upon registering they will be paired with the CHA as their supervisor.

3. A CHA can then log in to the form portal and make the request for commodities.

4. The dashboard interface (**dashboard.html**) pulls any request and summarizes it into a table with the total number of requests

5. All request logs are produced by a backend service which logs the requests information into a csv file before saving the data into a database. Sample summary logs are available: [here](https://gitlab.com/nelsonkimaiga/LwalaFormLogic/-/tree/main/formlogic/summaries)

**Technical Stack used**

**1. ****Front-End**

**a. ****HTML5**

**b. ****CSS3 with Bootstrap**

**c. ****JavaScript(Vanilla)**

**d. ****JQuery**

**e. ****Python or Node HTTP server**

**2. ****Back-End (API)**

**a. ****Java**

**b. ****Spring Framework for data persistence and API handling**

**c. ****MySQL**

**d. ****Ngrok for tunneling backend URLs and CORS handling**

**Getting Started**

1. To run the backend service, you will require:

a.  JDK  and installed on your local environment

b. Gradle

c. MySQL 5.7

d. Once cloned, go to the root of the directory named **formlogic** andrun **./gradlew build**

e. Backend service should run successfully.

2. To run the front-end client:

a. Install [ngrok](https://ngrok.com/download)

b. Run the command: **./ngrok http 8080**

c. Append the generated url on the terminal window and append it to the .js files in the [js folder:](https://gitlab.com/nelsonkimaiga/LwalaFormLogic/-/tree/main/formlogic_frontEnd/js)

 i. Locate the **fetch**() function in each of these files and replace the url in the function with your generated ngrok url eg: **https://55bc-102-219-208-30.ngrok.io/lwala/login**

 ii. Run **http-server** (if you have Node) or **python3 -m http.server (**If you have python**)** to serve the front-end on a http port**.**

 iii. Then open **127.0.0.1:8000** (or your generated port number)
