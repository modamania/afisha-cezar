/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'cezar',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' 'unsafe-inline' http://10.0.1.35:8000 http://localhost:8000 http://188.166.46.25:8000",
      'img-src': "'self' 'unsafe-eval' 'unsafe-inline' data: http://10.0.1.35:8000 http://localhost:8000 http://188.166.46.25:8000",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    }
  };

  ENV['simple-auth'] = {
  crossOriginWhitelist: ['*'],
  authorizer: 'simple-auth-authorizer:token',
  };

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: 'http://188.166.46.25:8000/login',
    identificationField: 'identification',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {}
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiHost = 'http://188.166.46.25:8000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = 'http://188.166.46.25:8000';
    ENV.locationType = 'hash';
  }

  return ENV;
};
