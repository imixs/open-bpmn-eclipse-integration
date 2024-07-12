#!/bin/bash
echo "***************************************"
echo "* Build - Open BPMN eclipse plugin.....         *"
echo "***************************************"


echo "==> build webview..."
cd client
yarn 
cd ..

echo "==> build ecipse plugin..."
cd server
mvn clean install
cd ..

echo "==> build completed!"