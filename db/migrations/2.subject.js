"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("subjects", {
      subject_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      subject_name: {
        allowNUll: false,
        type: DataTypes.STRING(100),
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
