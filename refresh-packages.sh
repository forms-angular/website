#!/bin/bash
rm -rf app/bower_components
rm -rf node_modules

npm link forms-angular
npm link fng-jq-upload

bower link forms-angular
bower link fng-jq-upload
bower link fng-select2
bower link fng-reports
bower link fng-ckeditor
bower link fng-ui-date
bower link fng-ui-select

npm install --production
bower install

echo "If this is a development environment you need to run npm install"
