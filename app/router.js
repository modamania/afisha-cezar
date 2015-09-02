import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', { path: 'events' }, function() {
    this.route('edit', { path: ':event_id/edit' });
    this.route('new');
  });
  this.route('registration');
  this.route('login');
});

export default Router;
