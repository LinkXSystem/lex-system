module.exports = (sequelize, DateTypes) =>
  sequelize.define(
    "keyword",
    {
      uuid: {
        type: DateTypes.STRING,
        primaryKey: true
      },
      name: {
        type: DateTypes.STRING,
        unique: true
      },
      created_time: {
        type: DateTypes.DATE,
        defaultValue: DateTypes.NOW
      }
    },
    {
      tableName: "keyword",
      timestamps: false
    }
  );
