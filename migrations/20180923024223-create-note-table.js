'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'note',
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
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_time: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updated_time: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      { comment: '笔记表' },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('note');
  },
};
