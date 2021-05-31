"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      user_fullname: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
      },
      user_password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      user_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      user_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
  },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
