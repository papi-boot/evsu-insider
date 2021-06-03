"use strict";

const { sequelize, QueryTypes } = require("../config/db.connect");

const registerUser = async (name, email, password, req, res) => {
  try {
    const results = await sequelize.query(
      "INSERT INTO users(user_fullname, user_email, user_password, user_created_at, user_updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING user_id user_email",
      {
        type: QueryTypes.INSERT,
        bind: [name, email, password, new Date(), new Date()],
      }
    );
    if (results[1]) {
      console.log(results[1]);
      req.flash(
        "success",
        `Your Account has been successfully registered 🤠.`
      );
      res.redirect("/evsu-insider/sign-in");
    } else {
      req.flash(
        "error",
        "Something went wrong on verifying the account. Please try again."
      );
      res.redirect("/evsu-insider/sign-up");
    }

    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = registerUser;
