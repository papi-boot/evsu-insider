"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts", {
      post_id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()")
      },
      post_title: {
        allowNull: false,
        type: DataTypes.STRING(200),
      },
      post_author: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      post_subject: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "subjects",
          key: "subject_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      post_tag: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      post_body: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      post_pin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
