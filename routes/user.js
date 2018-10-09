const joi = require('joi');
const { user } = require('../services');

const GROUP_NAME = 'user';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{uuid}/information`,
    handler: async (request, reply) => {
      const { uuid } = request.params;

      const model = await user.findUserByUuid(uuid);

      reply({
        user: model,
      });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取用户信息',
      validate: {
        params: {
          uuid: joi.string().required(),
        },
      },
    },
  },
];
