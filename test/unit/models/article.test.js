const { assert } = require('chai');
const faker = require('faker');

const models = require('../../../models');

describe('Article Model', () => {
  let article;

  before(async () => {
    article = await models.article.create({
      uuid: faker.random.uuid(),
      user_uuid: faker.random.uuid(),
      title: faker.lorem.word(),
      description: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      image: faker.image.image(),
      page: faker.random.number(),
      time: faker.random.number(),
      created_time: new Date().getTime(),
      updated_time: new Date().getTime(),
    });
  });

  after(async () => {
    await models.sequelize.close();
  });

  beforeEach(() => {
    // runs before each test in this block
  });

  afterEach(() => {
    // runs after each test in this block
  });

  it('should generate a article model', async () => {
    assert.isOk(article.uuid);
  });

  it('count to the table of user', async () => {
    const count = await models.article.count();

    assert.equal(count, 0);
  });
});
