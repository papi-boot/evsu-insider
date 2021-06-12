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

//-- GET: sign out request for user;
routes.get("/evsu-insider/sign-out", signOutUser);

routes.get("/evsu-insider/post/:id", authController.getSpecificPost);

routes.get("/evsu-insider/post-options/:id", authController.getOptionForm)

/* --ALL POST REQUEST */
// -- POST: verify and register account
routes.post("/evsu-insider/sign-up", authController.postRegisterForm);

// -- POST: sign in user and verify
routes.post("/evsu-insider/sign-in", authController.postLoginForm);

routes.post("/evsu-insider/share-answer", authController.postShareAnswer);

/* -- ALL UPDATE REQUEST  */
// -- UPDATE: update one post
routes.put("/evsu-insider/post-options/:id", authController.updateSpecificPost);

/* --ALL DELETE REQUEST */

//-- DELETE: delete specific post
routes.delete("/evsu-insider/post-options/:id", authController.deleteSpecificPost);

module.exports = routes;
