import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';

const {
    RSVP
 } = Ember;

export default Ember.Route.extend({
    model(params) {
        return RSVP.hash({
            users: this.store.findAll('user'),
            blog: this.store.findRecord('blog', params.blog_id),
            author: this.modelFor('users.show')
        })
    },
    setupController(c, m) {
        this._super(...arguments);

        c.set('isExpandedCreate', false);

        let comment = {
            author: m.author
        }
        
        let buffer = BufferedProxy.create({
            content: comment
        });
        c.set('buffer', buffer);
    }
});