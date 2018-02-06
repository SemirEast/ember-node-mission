import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { computed }  from '@ember/object';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default Controller.extend({
    blog: alias('model.blog'),
    authors: alias('model.users'),
    comments: computed('model.blog.comments[]', function(){
        return this.get('model.blog.comments')
    }),
    isExpandedCreate: false,
    actions: {
        updateBlog() {
            let blog = this.get('model');
            blog.set('title', this.get('buffer').get('title'));
            blog.set('text', this.get('buffer').get('text'));
            blog.save().then(() => {
                blog.reload();
            });
        },
        addComment() {
            let comment = this.store.createRecord('comment', this.get('comment'));
            comment.set('author', this.get('buffer').get('author'));
            comment.set('text', this.get('buffer').get('text'));
            comment.set('publishDate', new Date());
            comment.set('blog', this.get('model.blog'));
            comment.save().then(() => {
                this.set('isExpandedCreate', false);
                comment.deleteRecord();
                let buffer = BufferedProxy.create({
                    content: {
                        author: this.get('model.author')
                    }
                });
                this.set('buffer', buffer);
            });
        }
    }
})
