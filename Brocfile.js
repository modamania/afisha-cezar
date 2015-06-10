/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  autoprefixer: {
    browsers: ['last 2 ios version'],
    cascade: false
  }
});

var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

//Concating JS to vendor.js
app.import('bower_components/moment/moment.js');

// app.import('vendor/redactor/redactor.js');
// app.import('vendor/redactor/plugins/fullscreen/fullscreen.js');
// app.import('vendor/redactor/plugins/imagemanager/imagemanager.js');
// app.import('vendor/redactor/plugins/video/video.js');
// app.import('vendor/redactor/plugins/language/ru.js');

//Concating styles to vendor.css
app.import('bower_components/normalize.css/normalize.css');
// app.import('vendor/redactor/redactor.css');



//Creating sass sources ways
var sassSources = [
  'app/styles'
]

//Compiling sass
var appCss = compileSass(sassSources, 'app.scss', 'assets/cezar.css', {
  style: 'nested',
  sourcemap: 'none'
});

//Merging trees
var appAndCustomDeps = mergeTrees([app.toTree(), appCss], {
  overwrite: true
});

//Expotring all modules
module.exports = appAndCustomDeps;
