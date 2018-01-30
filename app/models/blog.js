import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  publishDate: DS.attr('date'),
  author: DS.belongsTo('user')
})