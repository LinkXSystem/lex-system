'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'essay',
      {
        uuid: {
          type: Sequelize.STRING(32),
          primaryKey: true,
        },
        user_uuid: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
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
        comment: '随笔表',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('essay');
  },
};
