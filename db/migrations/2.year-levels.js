"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("year_levels", {
      year_level_id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      year_level_number: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      year_level_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      year_level_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("year_levels");
  },
};
