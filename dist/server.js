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

var DataFormHandler = new (formsAngular)(app, {urlPrefix: '/api/'});

// Bootstrap forms-angular controlled models
var modelsPath = path.join(__dirname, 'app/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  var fname = modelsPath + '/' + file;
  if (fs.statSync(fname).isFile()) {
    DataFormHandler.addResource(file.slice(0, -3), require(fname));
  }
});

// Start server
app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
