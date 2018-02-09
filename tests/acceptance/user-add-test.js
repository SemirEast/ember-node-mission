import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';
import userAddPage from '../pages/user-add';
import userPage from '../pages/users';
import faker from 'faker';

moduleForAcceptance('Acceptance | users/new', {
  beforeEach() {
    server.create('user');
  }
});

test('navigate to users/new from users', async function(assert) {
  assert.expect(2);

  await userPage.visit();
  assert.equal(currentURL(), '/users', 'navigated to /users');

  await userPage.addUserButton();
  assert.equal(currentURL(), '/users/new', 'add button navigated to  /users/new');
});

test('add user', async function(assert) {
  assert.expect(4);

  await userPage.visit();
  let userCount = userPage.users().count;

  await userAddPage.visit();
  assert.equal(currentURL(), '/users/new');

  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let age = faker.random.number({min:18, max:60});
  let city = faker.address.city();
  let jobTitle = faker.name.jobTitle();
  let nameAndAge = firstName + ' ' + lastName + ', ' + age;
  await userAddPage.firstName(firstName).lastName(lastName).age(age).city(city).jobTitle(jobTitle);
  await userAddPage.submit();

  assert.equal(currentURL(), '/users');
  assert.equal(userPage.users(0).nameAndAge, nameAndAge, 'Correct firstName set')
  assert.equal(userPage.users().count, userCount + 1, 'User is visible')
});

test('delete user', async function(assert) {
  assert.expect(2);

  await userPage.visit();
  assert.equal(currentURL(), '/users', 'navigated to /users');

  let userCount = userPage.users().count;

  await userPage.users(0).deleteUserButton();

  assert.equal(userPage.users().count, userCount - 1);
});

test('show user details', async function(assert) {
  assert.expect(2);

  await userPage.visit();
  assert.equal(currentURL(), '/users', 'navigated to /users');

  await userPage.users(0).showUserButton();

  assert.equal(currentURL(), '/users/show/1');
});

test('show edit user', async function(assert) {
  assert.expect(2);

  await userPage.visit();
  assert.equal(currentURL(), '/users', 'navigated to /users');

  await userPage.users(0).editUserButton();

  assert.equal(currentURL(), '/users/show/1/edit');
})