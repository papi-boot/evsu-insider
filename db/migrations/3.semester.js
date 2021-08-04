"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("semesters", {
      semester_id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      semester_for_year_level: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "year_levels",
          key: "year_level_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      semester_year_count: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      semester_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      semester_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("semesters");
  },
};
