# Open-BPMN Eclipse Integration

This project provides a Eclipse plugin to run Open-BPMN in a Eclipse IDE. 


This implementation is based on the [Eclipse GLSP - Project Template](https://github.com/eclipse-glsp/glsp-examples/tree/master/project-templates/java-emf-eclipse). You will find more details there as also in the [Eclipse GLSP Eclipse IDE Integration project](https://github.com/eclipse-glsp/glsp-eclipse-integration).

The Open-BPMN Eclipse project is split into a client and a server part.



## The Client

The client contains the webapp in the folder `open-bpmn-webapp` . To build the client run:

	$ cd client/
	$ yarn

	
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




# Logfiles

During development you may run into several problems needed to be analyzed and debugged. If you have the Editor Plugin already with your lauch configuration a good place to analyze errors is to view the local error log from the launched workspace. To to so open in your launched eclipse ide

_Eclipse IDE: Window -> Show View -> Other -> General -> Error Log._

This will open the current error log.

Another place to finde log files is the runtime folder used by your launch configuration - e.g.:

	~/runtime-OpenBPMNEditor$

# Debug

To debug the web module you can intall and start it in a local dev server:

1.)  Install a local development server:

If not yet done install a web server: In your project's  directory `/open-bpmn-eclipse-integration/server/org.openbpmn.eclipse.integration.editor/diagram/` run the following command to install a simple HTTP server called http-server:

	npm install http-server -g

2.) Start the local development server:

From your project's  directory `/open-bpmn-eclipse-integration/server/org.openbpmn.eclipse.integration.editor/diagram/` run
 
	$ http-server

The server will start running and provide you with a local URL where you can access your GLSP diagram app

	http://localhost:8080/diagram.html

Now you can test your Node.js app bundled with Webpack in the local development server. Any changes you make to your code will require rebuilding the bundle using Webpack and refreshing the page in the browser to see the updated results.
