"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("password_resets", {
      password_reset_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      password_reset_for_email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password_reset_token: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password_reset_secret: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password_reset_expiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      password_reset_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      password_reset_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("password_resets");
  },
};
