import {
  create,
  visitable,
  clickable,
  collection,
  text
 } from "ember-cli-page-object";

 export default create({
  visit: visitable('/users'),
  addUserButton: clickable('[data-test-add-user]'),
  users: collection({
    itemScope: '[data-test-user-id]',
    item: {
      nameAndAge: text('[data-test-name-and-age]'),
      lastName: text('[data-test-user-lastName] > .lastName'),
      age: text('[data-test-user-age] > .age'),
      jobTitle: text('[data-test-user.jobTitle] > .jobTitle'),
      city: text('[data-test-user-city] > .city'),
      deleteUserButton: clickable('[data-test-delete-user] > i'),
      showUserButton: clickable('[data-test-show-user] > a > i'),
      editUserButton: clickable('[data-test-edit-user] > a > i')
    }
  })
 })