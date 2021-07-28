"use strict";
const express = require("express");
const password_reset_routes = express.Router();
const { forgotPasswordSendReset } = require("../query/insert_data");
const { updatePasswordResetRequest } = require("../query/update_data");

const data = require("../db_api/data_config");
let ifTokenPresent;

password_reset_routes.post("/forgot-password", async (req, res) => {
  try {
    await forgotPasswordSendReset(req, res);
  } catch (err) {
    console.error(err);
  }
});

password_reset_routes.get("/reset-password", async (req, res) => {
  try {
    const checkPasswordToken = await data.data_fetchPasswordToken(req, res);
    ifTokenPresent = checkPasswordToken;
    if (checkPasswordToken.length > 0) {
      return res.status(200).render("password_reset/reset_password", {
        doc_title: "Reset my Password",
        enc_email: checkPasswordToken[0].password_reset_for_email,
      });
    } else {
      return res.status(404).render("not_found/password_reset_404", {
        doc_title: "Reset Password Token Expired",
      });
    }
  } catch (err) {
    return res.status(404).render("not_found/password_reset_404", {
      doc_title: "Reset Password Token Expired",
    });
  }
});
password_reset_routes.get("/q", async (req, res) => {
  ifTokenPresent;
  if (ifTokenPresent.length > 0) {
    res.status(200).json({ response: "OK" });
  }
});

password_reset_routes.put("/reset-password", async (req, res) => {
  try {
    await updatePasswordResetRequest(req, res);
  } catch (err) {
    return res.status(404).render("not_found/password_reset_404", {
      doc_title: "Reset Password Token Expired",
    });
  }
});

module.exports = { password_reset_routes };
