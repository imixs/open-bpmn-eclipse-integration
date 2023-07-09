# Open-BPMN Eclipse Integration

This project provides a Eclipse plugin to run Open-BPMN in a Eclipse IDE. 

## Project Structure

This implementation is based on the [Eclipse GLSP - Project Template](https://github.com/eclipse-glsp/glsp-examples/tree/master/project-templates/java-emf-eclipse). You will find more details there as also in the [Eclipse GLSP Eclipse IDE Integration project](https://github.com/eclipse-glsp/glsp-eclipse-integration).

The Open-BPMN Eclipse project is split into a client and a server part.



### The Client

The client contains the webapp in the folder `open-bpmn-webapp` . To build the client run:

	$ cd client/
	$ yarn

**Note:** To build the client you need a modern version of node.js. To upgrade the node.js version for the build only you can run:

	$ nvm install node --reinstall-packages-from=node
	
	
### The Server 

To build the server run:

	$ cd server
	$ mvn clean install
	
	
	