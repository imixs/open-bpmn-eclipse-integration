# Open-BPMN Eclipse Integration - Server Plugin

This project provides the Eclipse plugin to run Open-BPMN in a Eclipse IDE. 

	
### Eclipse workspace

The project consists of a set of [Eclipse](https://www.eclipse.org/ide/) plugins that have to be imported into your Eclipse IDE workspace.
Open an Eclipse instance and workspace of your choice then open the import menu (`File -> Import...`).
Choose `Maven -> Existing Maven Projects` and click `Next >`.
Select the directory as the `Root Directory`. Make sure that all projects are selected and click finish.

To resolve all compilation errors you have to set the correct target platform.
Got to the preferences (`Window -> Preferences`) and navigate to the target platform options (`Plug-in Development -> Target Platform`)-
Selected the `2021-03-Release` target definition and click `Apply`.
Once the target platform has been resolved there should be no more compilation errors.


## The Server 

To build the server run:

	$ mvn clean install
	