#forms-angular website
Website to demonstrate and document forms-angular libraries.

The [live version](http://www.forms-angular.org) is hosted on a free Heroku dyno, using a free MongoHQ (now known as [Compose](https://www.compose.io/)) sandbox.  Same applies to the [beta version](http://forms-angular-beta.herokuapp.com/) which is likely to be much closer to what you see in this repo.

##Development and Troubleshooting
To run this website project on your development environment, please follow these steps:

**Note:** Check the node version in the *.node-version* file to see which version of node this project is using.

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

4. [node-imagemagick](https://github.com/yourdeveloper/node-imagemagick) uses a default path for the 'convert' and 'identify' utilities that cannot be modified from the [imagemagick-stream](https://github.com/eivindfjeldstad/imagemagick-stream) library. You may need to perform a symlink to these tools' hardcoded paths in order to get imagemagick to work. These instructions may apply to you if you use automated tools  (e.g. [Boxen](https://boxen.github.com/)) to configure your environment using non-default paths.

  ```bash
  sudo mkdir -p /usr/local/bin
  cd /usr/local/bin
  sudo ln -s `which convert` convert
  sudo ln -s `which identify` identify
  ```

In case of problems with specific formats resulting in the following error:

```bash
convert: no decode delegate for this image format
```

...please check the following [question on stackoverflow](http://stackoverflow.com/questions/5624778/imagemagick-jpeg-decode-delegate-missing-with-os-x-homebrew-install) for answers.


##TODO

- Suggested upgrade from [node-imagemagick](https://github.com/yourdeveloper/node-imagemagick) to [gm](https://github.com/aheckmann/gm), take into account imagemagick-stream's dependencies.
- Contributions, especially corrections / additions to documentation, are very welcome.
