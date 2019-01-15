module.exports = (sequelize, DateTypes) =>
  sequelize.define(
    "comment",
    {
      uuid: {
        type: DateTypes.STRING,
        primaryKey: true
      },
      user_uuid: {
        type: DateTypes.STRING,
        allowNull: false
      },
      content: {
        type: DateTypes.STRING,
        allowNull: false
      },
      created_time: {
        type: DateTypes.DATE,
        allowNull: false,
        defaultValue: DateTypes.NOW
      },
      updated_time: {
        type: DateTypes.DATE,
        allowNull: false,
        defaultValue: DateTypes.NOW
      }
    },
    {
      tableName: "comment",
      timestamps: false
    }
  );
