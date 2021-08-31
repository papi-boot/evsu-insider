"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_status", {
      user_status_id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      user_status_belongs_to: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      user_status_line: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      user_status_idle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_status_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_status_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user_status");
  },
};
