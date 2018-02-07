import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  user: alias('model'),
  actions: {
    deleteUser() {
      const userToDelete = this.get('model');
      userToDelete.destroyRecord().then(() => {
        this.transitionToRoute('users.index');
      });
    },
    deleteBlogpost(post) {
      const user = this.get('model');
      post.destroyRecord().then(() => {
        this.transitionToRoute('users.show', user.id);
      });
    },
    updateBlogpost(post) {
      post.save().then(() => {
        post.reload();
      });
    }
  }
})
