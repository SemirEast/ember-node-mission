import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  age() {
    return faker.random.number({min:18, max:60});
  },
  city() {
    return faker.address.city();
  },
  image() {
    return faker.image.avatar();
  },
  jobTitle() {
    return faker.name.jobTitle();
  },
  dateJoined() {
    return faker.date.past();
  }
});