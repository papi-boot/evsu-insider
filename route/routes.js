"use strict";
const express = require("express");
const routes = express();
const authController = require("../controller/auth.controller");
const {
  checkAuthenticated,
  signOutUser,
  checkNotAuthenticated,
} = require("../middleware/check.authenticated.js");

/* -- ALL GET HTTP REQUEST -- */
// -- GET: login form
routes.get(
  "/evsu-insider/sign-in",
  checkAuthenticated,
  authController.getLoginForm
);

// -- GET: register form
routes.get(
  "/evsu-insider/sign-up",
  checkAuthenticated,
  authController.getRegisterForm
);

// -- GET: dashboard when authenticated
routes.get(
  "/evsu-insider/dashboard",
  checkNotAuthenticated,
  authController.getHomeDashboard
);

// -- GET: create new answer from

routes.get("/evsu-insider/share-answer", authController.getCreateAnswerForm);


routes.get("/evsu-insider/sign-out", signOutUser);
/* --ALL POST REQUEST */
// -- POST: verify and register account
routes.post("/evsu-insider/sign-up", authController.postRegisterForm);

// -- POST: sign in user and verify
routes.post("/evsu-insider/sign-in", authController.postLoginForm);

module.exports = routes;
