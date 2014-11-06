'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    formsAngular = require('forms-angular');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./lib/config/config');
mongoose.connect(config.mongo.uri, config.mongo.options);

// Setup Express
var app = express();
require('./lib/config/express')(app);

var fngHandler = new (formsAngular)(app, {
  urlPrefix: '/api/',
  JQMongoFileUploader: {}
});

// Bootstrap forms-angular controlled models
var modelsPath = path.join(__dirname, 'app/models');

fs.readdirSync(modelsPath).forEach(function (file) {
  var fname = modelsPath + '/' + file;
  if (fs.statSync(fname).isFile()) {
    var fngModelInfo = require(fname);
    fngHandler.newResource(fngModelInfo.model, fngModelInfo.options);
  }
});

// If we are starting the server to run e2e tests then add a little data
if (app.get('env') === 'test') {
  var exec = require('child_process').exec;
  var dataPath = path.join(__dirname, 'test/e2e/e2edata');
  var dataFiles = fs.readdirSync(dataPath);
  dataFiles.forEach(function (file) {
    var fname = dataPath + '/' + file;
    if (fs.statSync(fname).isFile()) {
      exec('mongoimport --db fng-test --drop --collection ' + file.slice(0, -3) + 's --jsonArray < ' + fname,
        function (error, stdout, stderr) {
        if (error !== null) {
          console.log('Error importing models : ' + error + ' (Code = ' + error.code + '    ' + error.signal + ') : ' + stderr + ' : ' + stdout);
        }
      });
    }
  });
}

// Start server
app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
