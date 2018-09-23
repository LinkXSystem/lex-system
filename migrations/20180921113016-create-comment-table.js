'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comment',
      {
        uuid: {
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        user_uuid: {
          type: Sequelize.STRING(36),
          allowNull: false,
        },
        article_uuid: {
          type: Sequelize.STRING(36),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_time: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_time: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        comment: '评论表',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comment');
  },
};
