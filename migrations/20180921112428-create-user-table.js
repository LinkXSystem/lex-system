'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'user',
      {
        uuid: {
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        open_uuid: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        avatar: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        incline: {
          type: Sequelize.ENUM('writer', 'reader', 'reviewer'),
          defaultValue: 'reader',
        },
        inspect: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
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
          comment: '更新时间',
        },
      },
      {
        comment: '文章表',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  },
};
