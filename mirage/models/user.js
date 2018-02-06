import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    blogs: hasMany('blog'),
    comments: hasMany('comment')
});