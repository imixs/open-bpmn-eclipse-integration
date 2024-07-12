# Open-BPMN Eclipse Integration

This project provides a Eclipse plugin to run [Open-BPMN](https://github.com/imixs/open-bpmn) in a Eclipse IDE. 
This implementation is based on the [Eclipse GLSP - Project Template](https://github.com/eclipse-glsp/glsp-examples/tree/master/project-templates/java-emf-eclipse). You will find more details there as also in the [Eclipse GLSP Eclipse IDE Integration project](https://github.com/eclipse-glsp/glsp-eclipse-integration).


# Development Setup

The following section is important if you plan to develop the Open-BPMN Eclipse Plugin or contribute to the project. If you just want to use Open-BPMN in your Eclipse IDE see the [Open-BPMN Website](https://www.open-bpmn.org)

To develop and build the Eclipse Plugin you need to setup your Eclipse Workspace first.  

## Import the glsp-eclipse-integration project

First you need to checkout the version 2.1.0 from the  [Eclipse GLSP Eclipse IDE Integration project from Github](https://github.com/eclipse-glsp/glsp-eclipse-integration)

Switch into the `/server/` directory and build the project with maven

	$ mvn clean install

Next you can start a new empty Eclipse Workspace and import the following two project form the Eclipse GLSP Eclipse IDE Integration project.

	- server/plugins/org.eclipse.glsp.ide.editor
	- server/releng/org.eclipse.glsp.ide.releng.target

This part provides the integration code and the target definition needed to build the Open-BPMN Eclipse Integration later. 

## Setup Your Target Platform

Now open the target platform definition `org.eclipse.glsp.ide.releng.target/r2023-09.target` and set it as your target platform. 

## Import Open BPMN Eclipse Integration

Next checkout this project form [Github](https://github.com/imixs/open-bpmn-eclipse-integration). The Open-BPMN Eclipse project is split into a client and a server part. Both parts need to be build before you can start importing the projects into your Eclipse IDE.

You can run the build script for Linux with:

	$ ./build.sh

...or you can build the client and server part manually: 

### The Client

The client component is built with `yarn`. The client contains the webapp in the folder `open-bpmn-webapp` . To build the client run:

	$ cd client/
	$ yarn

	
### The Server 

The server component is built with `maven`. To build the server run:

	$ cd server
	$ mvn clean install
	
	
## Import the Open-BPMN Plugin

Now you can import the Open-BPMN Editor project form the [Open-BPMN Eclipse Integration project](https://github.com/imixs/open-bpmn-eclipse-integration).

 - server/open-bpmn.eclipse.editor


## Start Open-BPMN for Eclipse

Finally, you can now start an Eclipse Application containing the Open-BPMN  plug-in project by using the `Open-BPMN.launch` launch configuration provided in this project. The Open-BPMN Editor is registered for any `.bpmn` files. 



# Open BPMN Client Part

The client part is mainly defined by the [Open-BPMN Core Project](https://github.com/imixs/open-bpmn). But some integration code is needed and defined in `/client/' . For Example you will finde there the launcher classes and the .css definitions.



# Running/Debugging 

To test the Open-BPMN Eclipse Integration a launch configuration is provided. In your [Eclipse Workspace](#eclipse-workspace) navigate to the
`org.openbpmn.eclipse.integration.editor` plugin. Start or debug the project by via right-clicking on the `Open-BPMN.launch` file (`Run as -> Open-BPMN`).

This opens a second instance of Eclipse, which has the GLSP task list editor plugins preinstalled.
Import the provided [`example project`](glsp-server/workspace/TaskListExample/) into this workspace and double click on the `example.tasklist` file to open the diagram editor.




# Logfiles

During development you may run into several problems needed to be analyzed and debugged. If you have the Editor Plugin already with your lauch configuration a good place to analyze errors is to view the local error log from the launched workspace. To to so open in your launched eclipse ide

_Eclipse IDE: Window -> Show View -> Other -> General -> Error Log._

This will open the current error log.

Another place to finde log files is the runtime folder used by your launch configuration - e.g.:

	~/runtime-OpenBPMNEditor$
