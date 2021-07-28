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
const {
  updateProfileInformation,
  updateRequestChangePassword,
  updateChangeEmailRequest,
} = require("../query/update_data");
const data = require("../db_api/data_config");
const { checkNotAuthenticated } = require("../middleware/check.authenticated");

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
          const { fullname, email } = await req.body;
          const checkInfo = await data.data_fetchOneUser(req.user.user_id);
          if (checkInfo.length > 0) {
            if (
              checkInfo[0].user_fullname === fullname &&
              checkInfo[0].user_email === email &&
              !req.files.length > 0
            ) {
              console.log("DATA NOT MODIFIED");
              req.flash("success", "Profile not modified");
              return res
                .status(304)
                .json({ message: "Profile not Modified", url: "/profile" });
            } else {
              const results = await updateProfileInformation(req, res);
              if (results) {
                console.log("Profile information succesfully update");
                req.flash(
                  "success",
                  "Profile information successfully update."
                );
                return res.status(200).json({
                  message: "Profile successfully update",
                  url: "/profile",
                });
              }
            }
          } else {
            req.flash("error", "Session expired, Please try again");
            return res.redirect("/profile");
          }
        }
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
});

account_settings_routes.put("/change-email", async (req, res) => {
  try {
    if (req.user) {
      await updateChangeEmailRequest(req, res);
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
});

account_settings_routes.put("/change-password", async (req, res) => {
  try {
    if (req.user) {
      await updateRequestChangePassword(req, res);
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = { account_settings_routes };
