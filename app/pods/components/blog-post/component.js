import Ember from 'ember';

export default Ember.Component.extend({
    isExpandedUpdate: false,
    actions: {
        updatePost(isUpdate, post) {
            if(!isUpdate) {
                this.updateBlogpost(post);
            }
        }
    }
});