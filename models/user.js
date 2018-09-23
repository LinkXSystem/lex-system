module.exports = (sequelize, DateTypes) =>
  sequelize.define(
    'user',
    {
      uuid: {
        type: DateTypes.STRING,
        primaryKey: true,
      },
      open_uuid: {
        type: DateTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DateTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DateTypes.STRING,
        allowNull: false,
      },
      incline: {
        type: DateTypes.ENUM('writer', 'reader', 'reviewer'),
        defaultValue: 'reader',
      },
      inspect: {
        type: DateTypes.BOOLEAN,
      },
      created_time: {
        type: DateTypes.DATE,
        defaultValue: DateTypes.NOW,
      },
      updated_time: {
        type: DateTypes.DATE,
        defaultValue: DateTypes.NOW,
      },
    },
    {
      tableName: 'user',
      timestamps: false,
    },
  );
