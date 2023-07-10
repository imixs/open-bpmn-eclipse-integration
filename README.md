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

The server/editor part consists of a set of [Eclipse](https://www.eclipse.org/ide/) plugins that have to be imported into your Eclipse IDE workspace.
Open an Eclipse instance and workspace of your choice then open the import menu (`File -> Import...`).
Choose `Maven -> Existing Maven Projects` and click `Next >`.
Select the '/server/' directory as the `Root Directory`. Make sure that all projects are selected and click finish.

To resolve all compilation errors you have to set the correct target platform.
Got to the preferences (`Window -> Preferences`) and navigate to the target platform options (`Plug-in Development -> Target Platform`)-
Selected the `2021-03-Release` target definition and click `Apply`.
Once the target platform has been resolved there should be no more compilation errors.


## Building this Project

The server component is built with `maven` and the client component is built with `yarn`.
A convenience script to build both is provided.
To build all components execute the following in the directory containing this README:

```bash
yarn build
```

In addition, it is also possible to build each component individually:

```bash
# Build only the glsp-client
yarn build:client

# Build only glsp-server
yarn build:server
```

Or you can use the available VS Code tasks configured in the [glsp-client](glsp-client/) (via Menu _Terminal > Run Task..._)

-   `Build TaskList GLSP Client example`
-   `Copy TaskList GLSP Client bundle`

## Running/Debugging 

To test the Open-BPMN Eclipse Integration a launch configuration is provided. In your [Eclipse Workspace](#eclipse-workspace) navigate to the
`org.openbpmn.eclipse.integration.editor` plugin. Start or debug the project by via right-clicking on the `Open-BPMN.launch` file (`Run as -> Open-BPMN`).

This opens a second instance of Eclipse, which has the GLSP task list editor plugins preinstalled.
Import the provided [`example project`](glsp-server/workspace/TaskListExample/) into this workspace and double click on the `example.tasklist` file to open the diagram editor.
