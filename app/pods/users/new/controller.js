import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addAuthor() {
            let addAuthor = this.store.createRecord('user', this.get('user'));
            addAuthor.set('dateJoined', new Date());
            addAuthor.save().then(() => {
                this.transitionToRoute('users');
            }, () => {
                addAuthor.deleteRecord();
            })
        }
    }
})