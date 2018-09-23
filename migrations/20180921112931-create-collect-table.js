'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('collect', {
      uuid: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      user_uuid: {
        type: Sequelize.STRING(36),
      },
      article_uuid: {
        type: Sequelize.STRING(36),
      },
      created_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('collect');
  },
};
