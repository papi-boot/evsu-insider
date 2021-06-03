"use strict";
// const exp = require('express');
// const middleware = exp();
// middleware.get("res", (req, res) => {
//   req.logout
// });
/* @TODO: check if user is already log in and automatacally redirect to dashboard */
const checkAuthenticated = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      return await res.redirect("/evsu-insider/dashboard");
    }
    await next();
  } catch (err) {
    console.error(err);
  }
};

const checkNotAuthenticated = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      return await next();
    }
    req.flash("error", "Please sign in first 🤠.");
    await res.redirect("/evsu-insider/sign-in");
  } catch (err) {
    console.error(err);
  }
};

const signOutUser = async (req, res, next) => {
  try {
    await req.logout();
    await res.redirect("/evsu-insider/sign-in");
    await next();
  } catch (err) {
    console.error(err);
  }
};

module.exports = { checkAuthenticated, checkNotAuthenticated, signOutUser };
