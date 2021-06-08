"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts", {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      post_title: {
        allowNull: false,
        type: DataTypes.STRING(200),
      },
      post_author: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      post_subject: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "subjects",
          key: "subject_id",
        },
      },
      post_tag: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      post_body: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      post_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      post_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("posts");
  },
};
