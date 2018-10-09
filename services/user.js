const { user } = require('../models');

const findUserByUuid = uuid => user.findAll({
  attributes: {
    exclude: ['open_uuid'],
  },
  where: {
    uuid,
  },
});

module.exports = {
  findUserByUuid,
};
