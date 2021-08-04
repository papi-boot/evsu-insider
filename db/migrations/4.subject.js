"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("subjects", {
      subject_id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      subject_name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      subject_description: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      subject_for_semester: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "semesters",
          key: "semester_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      subject_for_year_level: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "year_levels",
          key: "year_level_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      subject_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      subject_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("subjects");
  },
};
