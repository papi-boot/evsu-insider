"use strict";
const express = require("express");
const routes = express();
const dashboardController = require("../controller/dashboard_controller");
const authenticationController = require("../controller/authentication_controller");
const {
  checkAuthenticated,
  signOutUser,
  checkNotAuthenticated,
} = require("../middleware/check.authenticated.js");

/* -- ALL GET HTTP REQUEST -- */

// -- GET: redirect to page check authenticated or not
routes.get("/", (req, res) => {
  try {
    return res.redirect("/evsu-insider/sign-in");
  } catch (err) {
    console.error(err);
  }
});

// -- GET: login form
routes.get(
  "/evsu-insider/sign-in",
  checkAuthenticated,
  authenticationController.getLoginForm
);

// -- GET: register form
routes.get(
  "/evsu-insider/sign-up",
  checkAuthenticated,
  authenticationController.getRegisterForm
);

// -- GET: dashboard when authenticated
routes.get(
  "/evsu-insider/dashboard",
  checkNotAuthenticated,
  dashboardController.getHomeDashboard
);

// -- GET: create new answer from
routes.get(
  "/evsu-insider/share-answer",
  dashboardController.getCreateAnswerForm
);

//-- GET: sign out request for user;
routes.get("/evsu-insider/sign-out", signOutUser);

//-- GET: get the specific one post/answer
routes.get("/evsu-insider/post", dashboardController.getSpecificPost);

//-- GET: get the option page for specific post/answer
routes.get("/evsu-insider/post-options", dashboardController.getOptionForm);

//-- GET: get specific subject and its all post/answer
routes.get(
  "/evsu-insider/subjects",
  dashboardController.getSpecificSubjectAndPost
);

/* --ALL POST REQUEST */
// -- POST: verify and register account
routes.post("/evsu-insider/sign-up", authenticationController.postRegisterForm);

// -- POST: sign in user and verify
routes.post("/evsu-insider/sign-in", authenticationController.postLoginForm);

routes.post("/evsu-insider/share-answer", dashboardController.postShareAnswer);

/* -- ALL UPDATE REQUEST  */
// -- UPDATE: update one post
routes.put(
  "/evsu-insider/post-options/:id",
  dashboardController.updateSpecificPost
);

/* --ALL DELETE REQUEST */

//-- DELETE: delete specific post
routes.delete(
  "/evsu-insider/post-options/:id",
  dashboardController.deleteSpecificPost
);

// Middleware

module.exports = routes;
