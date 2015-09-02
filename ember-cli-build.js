/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    autoprefixer: {
      browsers: ['last 2 ios version'],
      cascade: false
    }
  });

  app.import('bower_components/moment/moment.js');
  app.import('bower_components/normalize.css/normalize.css');

  return app.toTree();
};
