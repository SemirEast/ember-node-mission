import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('show', { path: '/show/:user_id' }, function() {
      this.route('edit');
    });
    this.route('showBlogs', { path: '/:user_id'});
  });
  this.route('blogs');
});

export default Router;
