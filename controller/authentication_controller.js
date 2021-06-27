"use strict";
const verifyRegister = require("../middleware/verify.register");
const passport = require("passport");
const passportConfig = require("../middleware/passport.config.js"); //Require the passport config;


/* @TODO: initialize the passport */
passportConfig.initializePassport(passport);

// -- GET HTTP REQUEST: get login form
const getLoginForm = async (req, res) => {
  try {
    await res.render("authentication/login", {
      doc_title: "Sign In | EVSU Insider",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST: get register form
const getRegisterForm = async (req, res) => {
  try {
    await res.render("authentication/register", {
      doc_title: "Join EVSU Insider Today",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- POST HTTP REQUEST: verifying account to sign up
const postRegisterForm = verifyRegister.initialize;

// -- POST HTTP REQUEST: verifying account to sign in
const postLoginForm =  passport.authenticate("local",  {
  successRedirect: "/insider-hub/dashboard",
  failureRedirect: "/insider-hub/sign-in",
  failureFlash: true,
  failureMessage: "Please provide a valid credentials",
});

module.exports = {
  getRegisterForm,
  getLoginForm,
  postRegisterForm,
  postLoginForm,
};
