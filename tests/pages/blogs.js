import {
  create,
  visitable,
  clickable,
  collection,
  text
 } from "ember-cli-page-object";

export default create({
  visit: visitable('/blog'),
  addBlogButton: clickable('[data-test-add-blog]'),
  blogs: collection({
    itemScope: '[data-test-blog-id]',
    item: {
      title: text('[data-test-blog-title] > .title')
    }
  })
})