import { Model, belongsTo, hasMany } from "ember-cli-mirage";

export default Model.extend({
  author: belongsTo('user'),
  comments: hasMany('comment')
});