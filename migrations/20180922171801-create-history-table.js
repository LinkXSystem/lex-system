'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('history', {
      uuid: {
        type: Sequelize.STRING(32),
        primaryKey: true,
      },
      user_uuid: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      article_uuid: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      created_time: {
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('history');
  },
};
