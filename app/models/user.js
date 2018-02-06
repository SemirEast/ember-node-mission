import DS from 'ember-data';
import { computed }  from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr('number'),
  city: DS.attr('string'),
  image: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  blogs: DS.hasMany('blog'),
  blogsCount: computed('blogs.[]', function() {
    let count = this.hasMany('blogs').ids().length;
    return count ? count : 0;
  }),
  jobTitle: DS.attr('string'),
  dateJoined: DS.attr('date'),
  comments: DS.hasMany('comment')
});