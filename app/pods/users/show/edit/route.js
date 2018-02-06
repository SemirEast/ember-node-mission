import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default Ember.Route.extend({
  model() {
    return this.modelFor('users.show');
  },
  setupController(c, m) {
    this._super(...arguments);
    
    let buffer = BufferedProxy.create({
        content: m
    });
    c.set('buffer', buffer);
  }
});