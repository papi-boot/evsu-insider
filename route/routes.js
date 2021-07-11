"use strict";
require("dotenv").config({ path: "../.env" }).parsed;
const express = require("express");
const routes = express();

const { routeImageUpload } = require("../middleware/image_upload");
const dashboardController = require("../controller/dashboard_controller");
const authenticationController = require("../controller/authentication_controller");
const {
  checkAuthenticated,
  signOutUser,
  checkNotAuthenticated,
} = require("../middleware/check.authenticated.js");
const signInConfig = require("./sign-in_route");
const { notification_api } = require("./notification_api"); // notification process

/* -- ALL GET HTTP REQUEST -- */

// -- GET: redirect to page check authenticated or not
routes.get("/", checkAuthenticated, (req, res) => {
  try {
    return res.redirect("/sign-in");
  } catch (err) {
    console.error(err);
  }
});

// -- GET: login form
routes.get(
  "/sign-in",
  checkAuthenticated,
  authenticationController.getLoginForm
);

// -- GET: register form
routes.get(
  "/sign-up",
  checkAuthenticated,
  authenticationController.getRegisterForm
);

// -- GET: dashboard when authenticated
routes.get(
  "/dashboard",
  checkNotAuthenticated,
  dashboardController.getHomeDashboard
);

// -- GET: create new answer from
routes.get("/create-post", dashboardController.getCreateAnswerForm);

//-- GET: sign out request for user;
routes.get("/sign-out", signOutUser);

//-- GET: get the specific one post/answer
routes.get("/post", dashboardController.getSpecificPost);

//-- GET: get the option page for specific post/answer
routes.get("/post-options", dashboardController.getOptionForm);

//-- GET: get specific subject and its all post/answer
routes.get("/subjects", dashboardController.getSpecificSubjectAndPost);

//-- GET: get all post for notification process
routes.use(notification_api);

/* --ALL POST REQUEST */
// -- POST: verify and register account
routes.post("/sign-up", authenticationController.postRegisterForm);

// -- POST: sign in user and verify
routes.use(signInConfig);

//-- POST: create post
routes.post("/create-post", dashboardController.postShareAnswer);

//-- POST: use to upload image for post
routes.use(routeImageUpload);

//-- POST: add/post a comment for specific post
routes.post("/post", dashboardController.postAddComment);

/* -- ALL UPDATE REQUEST  */
// -- UPDATE: update one post
routes.put("/post-options", dashboardController.updateSpecificPost);

// -- UPDATE: pin post state
routes.put("/post-options/update", dashboardController.updatePinPost);
/* --ALL DELETE REQUEST */

//-- DELETE: delete specific post
routes.delete("/post-options", dashboardController.deleteSpecificPost);

// Middleware
routes.use(async (req, res) => {
  try {
    if (req.user) {
      res.status(200).redirect("/dashboard");
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = routes;
