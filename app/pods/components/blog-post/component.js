import Ember from 'ember';

export default Ember.Component.extend({
    isExpandedUpdate: false,
    actions: {
        updatePost(isUpdate, post) {
            console.log(isUpdate);
            console.log(post);
            if(!isUpdate) {
                this.updateBlogpost(post);
            }
        }
    }
});