var ScreenShotReporter = require('protractor-screenshot-reporter');
var path = require('path');

exports.config = {
  specs: [
    './bs3-1024x768.spec.js'
  ],
  capabilities: {
    browserName: 'firefox'
  },
  //directConnect: true,  broken with firefox 38 - see https://github.com/angular/protractor/issues/2134
  baseUrl: 'http://0.0.0.0:9000',
  framework: 'jasmine',

  onPrepare: function() {

    // Disable animations so e2e tests run more quickly
    var disableNgAnimate = function() {
      angular.module('disableNgAnimate', []).run(['$animate', function($animate) {
        $animate.enabled(false);
      }]);
    };

    browser.addMockModule('disableNgAnimate', disableNgAnimate);

    // Add a screenshot reporter and store screenshots
    jasmine.getEnv().addReporter(new ScreenShotReporter({
      baseDirectory: 'test/screen_tests/screenshots',
      pathBuilder: function (spec, descriptions, results, capabilities) {
        return path.join('bs3-firefox-1024x768-' + descriptions[0]);
      }
    }));
  }

};
