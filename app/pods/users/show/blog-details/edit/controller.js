import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateBlog() {
            let blog = this.get('model');
            blog.set('title', this.get('buffer').get('title'));
            blog.set('text', this.get('buffer').get('text'));
            blog.save().then(() => {
                blog.reload();
            });
        }
    }
})
