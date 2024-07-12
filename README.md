# Open-BPMN Eclipse Integration

This project provides a Eclipse plugin to run [Open-BPMN](https://github.com/imixs/open-bpmn) in a Eclipse IDE. 
This implementation is based on the [Eclipse GLSP - Project Template](https://github.com/eclipse-glsp/glsp-examples/tree/master/project-templates/java-emf-eclipse). You will find more details there as also in the [Eclipse GLSP Eclipse IDE Integration project](https://github.com/eclipse-glsp/glsp-eclipse-integration).

The Open-BPMN Eclipse project is split into a client and a server part.

## The Client

The client component is built with `yarn`. The client contains the webapp in the folder `open-bpmn-webapp` . To build the client run:

	$ cd client/
	$ yarn

	
## The Server 

The server component is built with `maven`. To build the server run:

	$ cd server
	$ mvn clean install
	
	
### Eclipse workspace

The server/editor part consists of a set of [Eclipse](https://www.eclipse.org/ide/) plugins that have to be imported into your Eclipse IDE workspace.
Open an Eclipse instance and workspace of your choice then open the import menu (`File -> Import...`).
Choose `Maven -> Existing Maven Projects` and click `Next >`.
Select the '/server/' directory as the `Root Directory`. Make sure that all projects are selected and click finish.

To resolve all compilation errors you have to set the correct target platform.
Got to the preferences (`Window -> Preferences`) and navigate to the target platform options (`Plug-in Development -> Target Platform`)-
Selected the `2021-03-Release` target definition and click `Apply`.
Once the target platform has been resolved there should be no more compilation errors.



## Running/Debugging 

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
