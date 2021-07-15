"use strict";
const verifyRegister = require("../middleware/verify.register");
const passport = require("passport");
const passportConfig = require("../middleware/passport.config.js"); //Require the passport config;

/* @TODO: initialize the passport */
passportConfig.initializePassport(passport);

// -- GET HTTP REQUEST: get login form
const getLoginForm = async (req, res) => {
  try {
    res.header("Service-Worker-Allowed", "/");
    await res.render("authentication/login", {
      doc_title: "Sign In | Insider Hub",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST: get register form
const getRegisterForm = async (req, res) => {
  try {
    res.header("Service-Worker-Allowed", "/");
    await res.render("authentication/register", {
      doc_title: "Join Insider Hub Today",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- POST HTTP REQUEST: verifying account to sign up
const postRegisterForm = verifyRegister.initialize;

// -- POST HTTP REQUEST: verifying account to sign in
const postLoginForm = passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/sign-in",
  failureFlash: true,
  failureMessage: "Please provide a valid credentials",
});

module.exports = {
  getRegisterForm,
  getLoginForm,
  postRegisterForm,
  postLoginForm,
};
