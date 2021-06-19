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
        defaultValue: Sequelize.literal("uuid_generate_v4()")
      },
      subject_name: {
        allowNUll: false,
        type: DataTypes.STRING(100),
      },
      subject_description: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      subject_quarter: {
        allowNull: false,
        type: DataTypes.INTEGER
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
