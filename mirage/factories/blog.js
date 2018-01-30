
import { Factory } from "ember-cli-mirage";
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.company.catchPhrase();
  },
  text() {
    return faker.lorem.paragraphs(3);
  },
  publishDate() {
    return faker.date.past();
  }
})