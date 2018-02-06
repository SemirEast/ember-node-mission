import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('show', { path: '/show/:user_id' }, function() {
      this.route('edit', { path: '/edit' });
      this.route('addblog', { path: '/addblog' });
      this.route('blog-details', { path: '/blog-details/:blog_id'}, function() {
        this.route('edit', { path: '/edit'})
      })
    });
    this.route('showBlogs', { path: '/:user_id'});
    this.route('new', { path: '/new' });
  });
  this.route('blogs');
});

export default Router;