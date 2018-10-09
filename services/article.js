const { article, user } = require('../models');

const findArticleByUuid = (uuid) => {
  article.belongsTo(user, {
    foreignKey: 'user_uuid',
  });

  return article.findAll({
    where: {
      uuid,
    },
  });
};

const findAndCountAll = () => {
  article.belongsTo(user, {
    foreignKey: 'user_uuid',
  });

  return article.findAndCountAll({
    include: [
      {
        model: user,
        attributes: {
          exclude: ['open_uuid'],
        },
      },
    ],
  });
};

const findAndCountAllByUserUuid = userUuid => article.findAndCountAll({
  where: {
    user_uuid: userUuid,
  },
});

module.exports = {
  findArticleByUuid,
  findAndCountAll,
  findAndCountAllByUserUuid,
};
