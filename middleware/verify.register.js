"use strict";
const bcrypt = require("bcrypt"); // for hashing password
const { sequelize, QueryTypes } = require("../config/db.connect");
const insertUser = require("../query/insert_user");

const initialize = async (req, res) => {
  console.log("Processing registering the account");
  let validateFormMessage = [];

  try {
    const { name, email, password, confirm_password } = req.body;

    /* VALIDATIONS on registering the account */
    if (!name && !email && !password && !confirm_password) {
      validateFormMessage.push("All fields must have a valid information.");
    } else if (!name) {
      validateFormMessage.push("Name field is required.");
    } else if (!email) {
      validateFormMessage.push("Email field is required.");
    } else if (!password) {
      validateFormMessage.push("Password field is required.");
    } else if (!confirm_password) {
      validateFormMessage.push("Password dont match.");
    } else if (password.length < 6) {
      validateFormMessage.push(
        "Password should be at least 8 characters long."
      );
    } else if (password !== confirm_password) {
      validateFormMessage.push("Password dont match.");
    }

    if (validateFormMessage.length > 0) {
      req.flash("error", validateFormMessage);
      return res.redirect("/sign-up");
    } else {
      const results = await sequelize.query(
        "SELECT * FROM users WHERE user_email = $1",
        {
          type: QueryTypes.SELECT,
          bind: [email],
        }
      );
      /* @TODO: Check email if it is exist and return flash message */
      if (results.length > 0) {
        req.flash("error", `Email ${email} is already taken.`);
        return res.redirect("/sign-up");
      } else {
        /* @TODO: Register the user if the email is not exisiting in database */
        const hashPassword = await bcrypt.hash(password, 10); //Hash the password and save it to database

        /* @TODO: Log the successful message on client side */
        const results = await insertUser(name, email, hashPassword, req, res);

        console.log(results);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  initialize,
};
