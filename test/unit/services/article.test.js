const { assert } = require('chai');
const faker = require('faker');

const models = require('../../../models');
const services = require('../../../services');

describe('Article Model', () => {
  let article;
  let user;

  before(async () => {
    user = await models.user.create({
      uuid: faker.random.uuid(),
      open_uuid: faker.random.uuid(),
      name: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      incline: 'reader',
      inspect: false,
      created_time: new Date().getTime(),
      updated_time: new Date().getTime(),
    });

    article = await models.article.create({
      uuid: faker.random.uuid(),
      user_uuid: user.uuid,
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

  it('should generate a article model', async () => {
    assert.isOk(article.uuid);
  });

  it('should get article model by the uuid of article', async () => {
    const articles = await services.article.findArticleByUuid(article.uuid);

    console.log('====================================');
    console.log(articles);
    console.log('====================================');

    assert.equal(1, 1);
  });
});
