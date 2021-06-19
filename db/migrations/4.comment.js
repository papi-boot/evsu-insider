"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("comments", {
      comment_id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()")
      },
      comment_from_user: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      comment_from_post: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "posts",
          key: "post_id",
        },
      },
      comment_body: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      comment_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      comment_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("comments");
  },
};
