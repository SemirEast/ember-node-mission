
import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var blogs = this.get('store').findAll('blog');
        var comments = this.get('store').findAll('comment');
        return this.get('store').findAll('user');
    }
});