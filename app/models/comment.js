import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  publishDate: DS.attr('date'),
  author: DS.belongsTo('user'),
  blog: DS.belongsTo('blog')
})