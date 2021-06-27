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
routes.get("/", checkAuthenticated, (req, res) => {
  try {
    return res.redirect("/insider-hub/sign-in");
  } catch (err) {
    console.error(err);
  }
});

// -- GET: login form
routes.get(
  "/insider-hub/sign-in",
  checkAuthenticated,
  authenticationController.getLoginForm
);

// -- GET: register form
routes.get(
  "/insider-hub/sign-up",
  checkAuthenticated,
  authenticationController.getRegisterForm
);

// -- GET: dashboard when authenticated
routes.get(
  "/insider-hub/dashboard",
  checkNotAuthenticated,
  dashboardController.getHomeDashboard
);

// -- GET: create new answer from
routes.get(
  "/insider-hub/create-post",
  dashboardController.getCreateAnswerForm
);

//-- GET: sign out request for user;
routes.get("/insider-hub/sign-out", signOutUser);

//-- GET: get the specific one post/answer
routes.get("/insider-hub/post", dashboardController.getSpecificPost);

//-- GET: get the option page for specific post/answer
routes.get("/insider-hub/post-options", dashboardController.getOptionForm);

//-- GET: get specific subject and its all post/answer
routes.get(
  "/insider-hub/subjects",
  dashboardController.getSpecificSubjectAndPost
);

/* --ALL POST REQUEST */
// -- POST: verify and register account
routes.post("/insider-hub/sign-up", authenticationController.postRegisterForm);

// -- POST: sign in user and verify
routes.post("/insider-hub/sign-in", authenticationController.postLoginForm);

routes.post("/insider-hub/share-answer", dashboardController.postShareAnswer);

/* -- ALL UPDATE REQUEST  */
// -- UPDATE: update one post
routes.put(
  "/insider-hub/post-options",
  dashboardController.updateSpecificPost
);
routes.put("/insider-hub/post-options/update", dashboardController.updatePinPost);
/* --ALL DELETE REQUEST */

//-- DELETE: delete specific post
routes.delete(
  "/insider-hub/post-options",
  dashboardController.deleteSpecificPost
);

// Middleware

module.exports = routes;
