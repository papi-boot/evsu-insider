"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post_thumbnail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post_thumbnail.init(
    {
      year_level: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "post_thumbnail",
    }
  );
  return post_thumbnail;
};
