"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
