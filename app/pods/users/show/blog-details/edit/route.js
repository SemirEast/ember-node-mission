import Ember from 'ember';
import { alias } from '@ember/object/computed';

export default Ember.Route.extend({
    model() {
        return alias('users.show.blog-details');
    }
});