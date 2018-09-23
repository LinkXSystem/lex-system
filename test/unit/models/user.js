const { assert } = require('chai');
const faker = require('faker');

const models = require('../../../models');

describe('User Model', () => {
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
  });

  after(async () => {
    await models.sequelize.close();
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  it('should generate a user model', async () => {
    // assert.isOk(user.uuid);
  });

  it('count to the table of user', async () => {
    const count = await models.user.count();

    assert.equal(count, 0);
  });
});
