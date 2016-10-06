#forms-angular website
Website to demonstrate and document forms-angular libraries.

The [live version](http://www.forms-angular.org) uses a free [mLab](https://www.mlab.com/) sandbox.

##Development and Troubleshooting
To run this website project on your development environment, please follow these steps:

1. Copy the example configuration files and change any config parameters appropriate to your environment (e.g. mongo server, database, etc.).

  ```bash
  cp lib/config/env/test.js.example lib/config/env/test.js
  cp lib/config/env/development.js.example lib/config/env/development.js
  ```

2. Run npm and bower packages installs

  ```bash
  npm install
  bower install
  ```

3. Run ```node_modules/protractor/bin/webdriver-manager update```

- Contributions, especially corrections / additions to documentation, are very welcome.
