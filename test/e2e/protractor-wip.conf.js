exports.config = {
  specs: [
    './reports.spec.js'
  ],
  capabilities: {
    browserName: 'firefox',
    version: '',
    platform: 'ANY'
  },
  baseUrl: 'http://localhost:9001'
};
