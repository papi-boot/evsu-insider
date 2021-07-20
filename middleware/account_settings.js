"use strict";
require("dotenv").config({ path: "../.env" }).parsed;
const express = require("express");
const multer = require("multer");
const account_settings_routes = express.Router();
const MulterAzureStorage = require("multer-azure-storage");
const uploadStrategy = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    containerName: "profile-image",
    containerSecurity: "blob",
  }),
}).any();
const { updateProfileInformation } = require("../query/update_data");

// account_settings_routes.use(upload.array("profile_image"));

account_settings_routes.put("/profile-info-update", (req, res) => {
  try {
    if (req.user) {
      uploadStrategy(req, res, async (err) => {
        if (err) {
          res.status(500).json({
            error_message:
              "Something went wrong when uploading the image. Please try again or later.",
          });
        } else {
          const results = await updateProfileInformation(req);
          if (results) {
            console.log("Profile information succesfully update");
            res.status(200).json({ message: "Profile successfully update" });
          }
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = { account_settings_routes };
