import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
    user: alias('model'),
    actions: {
        updateUser() {
            let user = this.get('model');
            user.set('firstName', this.get('buffer').get('firstName'));
            user.set('lastName', this.get('buffer').get('lastName'));
            user.set('jobTitle', this.get('buffer').get('jobTitle'));
            user.set('age', this.get('buffer').get('age'));
            user.set('city', this.get('buffer').get('city'));
            user.save().then(() => {
                user.reload();
            });
        }
    }
})
