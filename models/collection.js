module.exports = (sequelize, DateTypes) =>
  sequelize.define("collection", {
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
    status: {
      type: DateTypes.ENUM("collect", "cancel"),
      defaultValue: "collect"
    },
    created_time: {
      type: DateTypes.DATE,
      defaultValue: DateTypes.NOW
    },
    updated_time: {
      type: DateTypes.DATE,
      defaultValue: DateTypes.NOW
    }
  });
