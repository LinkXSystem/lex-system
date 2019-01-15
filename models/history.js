module.exports = (sequelize, DateTypes) =>
  sequelize.define(
    "history",
    {
      uuid: {
        type: DateTypes.STRING,
        primaryKey: true
      },
      user_uuid: {
        type: DateTypes.STRING,
        allowNull: false
      },
      article_uuid: {
        type: DateTypes.STRING
      },
      created_time: {
        type: DateTypes.DATE,
        defaultValue: DateTypes.NOW
      }
    },
    {
      tableName: "history",
      timestamps: false
    }
  );
