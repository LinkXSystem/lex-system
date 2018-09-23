'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'article',
      {
        uuid: {
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        user_uuid: {
          type: Sequelize.STRING(36),
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        page: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        time: {
          type: Sequelize.INTEGER,
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
      {
        comment: '文章表',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('article');
  },
};
