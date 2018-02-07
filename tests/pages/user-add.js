import {
  create,
  visitable,
  fillable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/users/new'),
  firstName: fillable('[data-test-do-control="firstName"]'),
  lastName: fillable('[data-test-do-control="lastName"]'),
  age: fillable('[data-test-do-control="age"]'),
  jobTitle: fillable('[data-test-do-control="jobTitle"]'),
  city: fillable('[data-test-do-control="city"]'),
  submit: clickable('[data-test-add-user-button]')
});