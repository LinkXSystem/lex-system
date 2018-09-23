'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'relation',
      {
        uuid: {
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        from: {
          type: Sequelize.STRING(36),
          allowNull: false,
        },
        to: {
          type: Sequelize.STRING(36),
          allowNull: false,
        },
        created_time: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        comment: '关系表',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
