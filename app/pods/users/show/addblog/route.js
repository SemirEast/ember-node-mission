
import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('users.show');
    },
    setupController(controller) {
        this._super(...arguments);
        controller.set('blog', {});
    }
});