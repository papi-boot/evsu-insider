"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("post_thumbnails", {
      post_thumbnail_id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      post_thumbnail_image_url: {
        type: DataTypes.TEXT,
      },
      post_thumbnail_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      post_thumbnail_belongs_to: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "posts",
          key: "post_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      post_thumbnail_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("post_thumbnails");
  },
};
