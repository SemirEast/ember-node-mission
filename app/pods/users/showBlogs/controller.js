import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteBlogpost() {
      const blogpostToDelete = this.get('model');
      blogpostToDelete.destroyRecord().then(() => {
        this.transitionToRoute('users.index');
      });
    }
  }
})