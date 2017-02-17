#!/bin/bash
rm -rf app/bower_components
rm -rf node_modules

npm link forms-angular
npm link fng-jq-upload

bower link forms-angular
bower link fng-jq-upload
bower link fng-reports
bower link fng-ckeditor
bower link fng-ui-date
bower link fng-ui-select

bower install

if [[ "$1" = "dev" ]]; then
  npm install
else
  npm install --production
  echo If this is a development environment run
    echo ""
    echo npm install
    echo ""
    echo "(or run this script with a dev argument)"
fi

