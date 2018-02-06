
import { Factory } from "ember-cli-mirage";
import faker from 'faker';

export default Factory.extend({
  text() {
    return faker.company.catchPhrase();
  },
  publishDate() {
    return faker.date.past();
  }
})