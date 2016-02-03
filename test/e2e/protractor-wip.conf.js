exports.config = {
  specs: [
    './selects.spec.js'
  ],

  capabilities: {
    browserName: 'firefox'
  },
  directConnect: true,//  broken with firefox 38 - see https://github.com/angular/protractor/issues/2134
  baseUrl: 'http://localhost:9000',
  framework: 'jasmine2'
};
