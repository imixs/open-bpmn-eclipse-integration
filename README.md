# Open-BPMN Eclipse Integration

This project provides the Eclipse plugin to run [Open-BPMN](https://github.com/imixs/open-bpmn) in a Eclipse IDE.
This implementation is based on the [Eclipse GLSP - Project Template](https://github.com/eclipse-glsp/glsp-examples/tree/master/project-templates/java-emf-eclipse). You will find more details there as also in the [Eclipse GLSP Eclipse IDE Integration project](https://github.com/eclipse-glsp/glsp-eclipse-integration).

## Project structure

This project integrates the [open-bpmn.glsp-client](https://github.com/imixs/open-bpmn/tree/master/open-bpmn.glsp-client) into a Eclipse Plugin using the following project structure:

- [`open-bpmn.eclipse.client`](open-bpmn.eclipse.client) - NodeJS Code
  - [`open-bpmn-eclipse`](open-bpmn.eclipse.client/open-bpmn-eclipse): glue code for integrating the editor into Eclipse
- [`glsp-server`](glsp-server) - Java Code
  - [`org.eclipse.glsp.example.javaemf.server`](glsp-server/org.eclipse.glsp.example.javaemf.server/): GLSP server for the Tasklist diagram language
    - [`src`](glsp-server/org.eclipse.glsp.example.javaemf.server/src/org/eclipse/glsp/example/javaemf/server/): dependency injection module of the server and diagram configuration
    - [`src/handler`](glsp-server/org.eclipse.glsp.example.javaemf.server/src/org/eclipse/glsp/example/javaemf/server/handler/): handlers for the diagram-specific actions
    - [`src/model`](glsp-server/org.eclipse.glsp.example.javaemf.server/src/org/eclipse/glsp/example/javaemf/server/model): all source model, graphical model and model state related files
    - [`src/launch`](glsp-server/org.eclipse.glsp.example.javaemf.server/src/org/eclipse/glsp/example/javaemf/server/launch): contains the Java GLSP server launcher
    - [`src/palette`](glsp-server/org.eclipse.glsp.example.javaemf.server/src/org/eclipse/glsp/example/javaemf/server/palette/): custom palette item provider
  - [`org.eclipse.glsp.example.javaemf.editor](glsp-server/org.eclipse.glsp.example.javaemf.editor/): plugin providing the Eclipse Tasklist diagram editor
  - [`workspace/TaskListExample](glsp-server/workspace/TaskListExample/) A sample eclipse project containing a Tasklist diagram.

The most important entry points are:

- [`glsp-client/tasklist-glsp/src/tasklist-diagram-module.ts`](glsp-client/tasklist-glsp/src/tasklist-diagram-module.ts) dependency injection module of the client
- [`glsp-client/tasklist-eclipse/src/app`](glsp-client/tasklist-eclipse/src/app.ts): Browser application bundle
- [`glsp-server/org.eclipse.glsp.example.javaemf.editor/src/org/eclipse/glsp/example/javaemf/editor/TaskListEclipseDiagramModule.java`](glsp-server/org.eclipse.glsp.example.javaemf.editor/src/org/eclipse/glsp/example/javaemf/editor/TaskListEclipseDiagramModule.java): dependency injection module of the Eclipse ide integration
- [`glsp-server/org.eclipse.glsp.example.javaemf.editor/src/org/eclipse/glsp/example/javaemf/editor/TaskListServerManager.java`](glsp-server/org.eclipse.glsp.example.javaemf.editor/src/org/eclipse/glsp/example/javaemf/editor/TaskListServerManager.java): the server manager counterpart for the Tasklist editor
- [`glsp-server/org.eclipse.glsp.example.javaemf.editor/plugin.xml`](glsp-server/org.eclipse.glsp.example.javaemf.editor/plugin.xml): plugin definition declaring the diagram editor extensions.
- [`glsp-server/org.eclipse.glsp.example.javaemf.target/r2021-03.targe`](glsp-server/org.eclipse.glsp.example.javaemf.target/r2021-03.target): the target platform definition

# Development Setup

The following section is important if you plan to develop the Open-BPMN Eclipse Plugin or contribute to the project. If you just want to use Open-BPMN in your Eclipse IDE see the [Open-BPMN Website](https://www.open-bpmn.org)

**Note:** For development make sure the [open-bpmn]() project is part of your workspace, as the eclipse integration project refers to these sources!

Make sure you are using node 20

`$ nvm use 20`

## Import the glsp-eclipse-integration project

To develop and build the Eclipse Plugin you need to setup your Eclipse Workspace first.
First you need to checkout the latest version from the [Eclipse GLSP Eclipse IDE Integration project from Github](https://github.com/eclipse-glsp/glsp-eclipse-integration)

Switch into the `/server/` directory and build the project with maven

    $ mvn clean install

Next you can start a new empty Eclipse Workspace and import the following two project form the Eclipse GLSP Eclipse IDE Integration project.

    - server/plugins/org.eclipse.glsp.ide.editor
    - server/releng/org.eclipse.glsp.ide.releng.target

This part provides the integration code and the target definition needed to build the Open-BPMN Eclipse Integration later.

## Setup Your Target Platform

Now open the target platform definition `org.eclipse.glsp.ide.releng.target/r2024-09.target` and set it as your target platform.

## Import Open BPMN Eclipse Integration

Make sure you run the latest Eclipse RCP Version as the IDE.

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

Finally, you can now start an Eclipse Application containing the Open-BPMN plug-in project by using the `Open-BPMN.launch` launch configuration provided in this project. The Open-BPMN Editor is registered for any `.bpmn` files.

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
