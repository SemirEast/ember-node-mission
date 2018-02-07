import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';
import usersPage from '../pages/users';

moduleForAcceptance('Acceptance | users', {
  beforeEach() {
    server.createList('user', 2)
  }
});

test('visiting /users', async function(assert) {
  assert.expect(2);

  await usersPage.visit();
  assert.equal(currentURL(), '/users', 'navigated to /users');
  assert.equal(usersPage.users().count, 2, 'users seeded');
});