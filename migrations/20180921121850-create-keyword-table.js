'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'keyword',
      {
        uuid: {
          type: Sequelize.STRING(32),
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        code: {
          type: Sequelize.INTEGER,
          unique: true,
          allowNull: false,
        },
        created_time: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        comment: '关键词表',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('keyword');
  },
};
