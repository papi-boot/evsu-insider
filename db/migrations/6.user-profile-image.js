"use strict";
const { DataTypes } = require("sequelize");
const DEFAULT_IMAGE =
  "https://insiderhub.blob.core.windows.net/profile-image/male_predef_image.jpg";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_profile_images", {
      profile_image_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      profile_image_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: DEFAULT_IMAGE,
      },
      profile_image_belongs_to: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      profile_image_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      profile_image_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user_profile_images");
  },
};
