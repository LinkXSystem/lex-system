const GROUP_NAME = 'article';

const models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: async (request, reply) => {
      const { rows: results, count: total } = await models.article.findAndCountAll({
        attributes: {
          exclude: ['user_uuid'],
        },
        limit: 5,
      });
      reply({
        total,
        results,
      });
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取推荐文章',
    },
  },
];
