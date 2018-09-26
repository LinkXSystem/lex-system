module.exports = (sequelize, DateTypes) => sequelize.define(
  'article',
  {
    uuid: {
      type: DateTypes.STRING,
      primaryKey: true,
    },
    user_uuid: {
      type: DateTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DateTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DateTypes.STRING,
    },
    content: {
      type: DateTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DateTypes.STRING,
      allowNull: false,
    },
    page: {
      type: DateTypes.INTEGER,
      defaultValue: 0,
    },
    time: {
      type: DateTypes.INTEGER,
      allowNull: false,
    },
    created_time: {
      type: DateTypes.DATE,
      allowNull: false,
      defaultValue: DateTypes.NOW,
    },
    updated_time: {
      type: DateTypes.DATE,
      allowNull: false,
      defaultValue: DateTypes.NOW,
    },
  },
  {
    tableName: 'article',
    timestamps: false,
  },
);
