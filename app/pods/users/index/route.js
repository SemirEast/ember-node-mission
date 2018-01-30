
import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var blogs = this.get('store').findAll('blog');
        return this.get('store').findAll('user');
    }
});