"use strict";
const verifyRegister = require("../middleware/verify.register");
const passport = require("passport");
const passportConfig = require("../middleware/passport.config.js"); //Require the passport config;
const { checkNotAuthenticated } = require("../middleware/check.authenticated");

/* @TODO: initialize the passport */
passportConfig.initializePassport(passport);

// -- GET HTTP REQUEST: get login form
const getLoginForm = async (req, res) => {
  try {
    await res.render("authentication/login", {
      doc_title: "Sign In 🐱‍👤 | EVSU Insider",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST: get register form
const getRegisterForm = async (req, res) => {
  try {
    await res.render("authentication/register", {
      doc_title: "Join EVSU Insider Today 🐱‍👤",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST : get dashboard/main page
const getHomeDashboard = async (req, res) => {
  try {
    console.log(req.user);
    if (req.user) {
      await res.render("dashboard/index", {
        doc_title: "EVSU Insider | Dashboard",
        user: req.user,
        auth_link: {
          share_answer: "/evsu-insider/share-answer",
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST : get create/share new answer form
const getCreateAnswerForm = async (req, res) => {
  try {
    if (req.user) {
      res.render("dashboard/create_answer", {
        doc_title: "Share Answer ⭐",
        auth_link: "",
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

// -- POST HTTP REQUEST: verifying account to sign up
const postRegisterForm = verifyRegister.initialize;

// -- POST HTTP REQUEST: verifying account to sign in
const postLoginForm = passport.authenticate("local", {
  successRedirect: "/evsu-insider/dashboard",
  failureRedirect: "/evsu-insider/sign-in",
  failureFlash: true,
});

module.exports = {
  getRegisterForm,
  getLoginForm,
  getHomeDashboard,
  getCreateAnswerForm,
  postRegisterForm,
  postLoginForm,
};
