"use strict";
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { sequelize, QueryTypes } = require("../config/db.connect");

const initializePassport = (passport) => {
  try {
    const authenticateUser = async (email, password, done) => {
      if (!email && !password) {
        return await done(null, false, {
          message: "Please provide a valid credentials.",
        });
      }
      console.log("Initialize");

      const results = await sequelize.query(
        "SELECT * FROM users WHERE user_email = $1",
        {
          bind: [email],
          type: QueryTypes.SELECT,
        }
      );
      /* @TODO: authenticate the user and compare the user password input from haspassword */
      if (results) {
        bcrypt.compare(
          password,
          results[0].user_password,
          (err, passwordMatch) => {
            if (err) {
              console.error(err);
              throw err;
            }
            /* @TODO: if password match, authenticate the user */
            if (passwordMatch) {
              return done(null, results[0]);
            } else {
              return done(null, false, {
                message: "Password is incorrect.",
              });
            }
          }
        );
      } else {
        /* @TODO: else, if user email was not found log a error mesasge */
        console.log("No data was found");
        return done(null, false, { message: `${email} does not exist` });
      }
    };

    passport.use(
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        authenticateUser
      )
    );

    /* @TODO: serialize user */
    passport.serializeUser((user, done) => done(null, user.user_id));
    /* @TODO: deserialize user */
    passport.deserializeUser(async (id, done) => {
      const results = await sequelize.query(
        "SELECT * FROM users WHERE user_id = $1", 
        {
          bind: [id],
          type: QueryTypes.SELECT,
        } 
      );
      if (results) {
        return done(null, results[0]);
      }
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  initializePassport,
};
