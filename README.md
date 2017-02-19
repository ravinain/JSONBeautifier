1. Install NodeJS, see https://nodejs.org/en/ . If you are using unix then type "sudo apt-get install npm" command to install it.
2. Execute setup.bat/.sh to install http-server. Skip this step, if node_modules/.bin/http-server exists
3. Execute start-server.bat/.sh to start server. If executing this script in unix and get an error such as /usr/bin/env node not found then executing below command to fix the problem:
 "sudo ln /usr/bin/nodejs /usr/bin/node" 
4. Execute npm run build command (if bundle.js file doesn't exists in modules folder)
4. Open http://localhost:8080/app/ . If this does not work then check the port number; it should match with the port number showing in start-server.bat command window.

Project Snapshots:

![Snapshot 1](snapshots/1.JPG?raw=true)
![Snapshot 2](snapshots/2.JPG?raw=true)
![Snapshot 3](snapshots/3.JPG?raw=true)
![Snapshot 4](snapshots/4.JPG?raw=true)
