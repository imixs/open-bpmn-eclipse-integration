# Open-BPMN Eclipse Integration

This project provides a Eclipse plugin to run Open-BPMN in a Eclipse IDE. 


This implementation is based on the [Eclipse GLSP - Project Template](https://github.com/eclipse-glsp/glsp-examples/tree/master/project-templates/java-emf-eclipse). You will find more details there as also in the [Eclipse GLSP Eclipse IDE Integration project](https://github.com/eclipse-glsp/glsp-eclipse-integration).

The Open-BPMN Eclipse project is split into a client and a server part.



## The Client

The client contains the webapp in the folder `open-bpmn-webapp` . To build the client run:

	$ cd client/
	$ yarn

**Note:** To build the client you need a modern version of node.js. To upgrade the node.js version for the build only you can run:

	$ nvm install node --reinstall-packages-from=node
	
	
## The Server 

To build the server run:

	$ cd server
	$ mvn clean install
	
	
### Eclipse workspace

The server/editor part consists of a set of Eclipse plugins that have to be imported into your Eclipse IDE workspace. Open an Eclipse instance and workspace of your choice then open the import menu (File -> Import...). Choose Maven -> Existing Maven Projects and click Next >. Select the parent directory of this README as Root Directory. Make sure that all projects are selected and click finish.

To resolve all compilation errors you have to set the correct target platform. Got to the preferences (Window -> Preferences) and navigate to the target platform options (Plug-in Development -> Target Platform)- Selected the 2021-03-Release target definition and click Apply. Once the target platform has been resolved there should be no more compilation errors.	



