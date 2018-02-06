import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
    user: alias('model'),
    actions: {
        addBlogpost() {
            let blog = this.store.createRecord('blog', this.get('blog'));
            let user = this.get('model');
            blog.set('datePublished', new Date());
            blog.set('author', user);
            blog.save().then(() => {
                this.transitionToRoute('users.show', user.id);
            }, () => {
                blog.deleteRecord();
            })
        }
    }
})