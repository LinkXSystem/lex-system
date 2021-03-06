const { assert } = require('chai');
const faker = require('faker');

const models = require('../../../models');

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

  beforeEach(() => {
    // runs before each test in this block
  });

  afterEach(() => {
    // runs after each test in this block
  });

  it('should generate a article model', async () => {
    assert.isOk(article.uuid);
  });

  // it('count to the table of user', async () => {
  //   const count = await models.article.count();

  //   assert.equal(count, 1);
  // });

  // it('get the list of articles model', async () => {
  //   // eslint-disable-next-line
  //   const { rows: result, count: total } = await models.article.findAndCountAll({
  //     where: {
  //       user_uuid: user.uuid,
  //     },
  //   });

  //   assert.equal(total, 1);
  // });

  // it('concat of user & article by the uuid of user', async () => {
  //   // eslint-disable-next-line
  //   models.article.belongsTo(models.user, {
  //     foreignKey: 'user_uuid',
  //   });
  //   // eslint-disable-next-line
  //   const { rows: result, count: total } = await models.article.findAndCountAll({
  //     include: [
  //       {
  //         model: models.user,
  //         where: {
  //           uuid: user.uuid,
  //         },
  //       },
  //     ],
  //   });

  //   assert.equal(total, 1);
  // });
});
