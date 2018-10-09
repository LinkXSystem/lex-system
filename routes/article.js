const GROUP_NAME = 'article';

const services = require('../services');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: async (request, reply) => {
      const { rows: results, count: total } = await services.article.findAndCountAll();

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
