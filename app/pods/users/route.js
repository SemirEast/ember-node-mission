import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        deleteUser(user) {
          user.destroyRecord().then(()=> {
            this.transitionTo('users')
          })
        }
      }
});
