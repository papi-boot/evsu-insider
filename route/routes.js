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
const { webpush_notification } = require("../middleware/web-push");
const { account_settings_routes } = require("../middleware/account_settings");
const { password_reset_routes } = require("../middleware/reset_password");
const { subject_config_route } = require("./subject_route_api");


/* -- ALL GET HTTP REQUEST -- */

// -- GET: redirect to page check authenticated or not
routes.get("/", checkAuthenticated, (req, res) => {
  try {
    res.header("Service-Worker-Allowed", "/");
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

// -- GET: forgot password form
routes.get(
  "/forgot-password",
  checkAuthenticated,
  authenticationController.getForgotPasswordForm
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

//-- GET: get profile page
routes.get("/profile", dashboardController.getProfilePage);

//--GET: subject information
routes.use(subject_config_route);

/* --ALL POST REQUEST */
// -- POST: verify and register account
routes.post("/sign-up", authenticationController.postRegisterForm);

// -- POST: sign in user and verify
routes.use(signInConfig);

// -- POST: forgot password check email
routes.use(password_reset_routes);

//-- POST: create post
routes.post("/create-post", dashboardController.postShareAnswer);

//-- POST: get search result
routes.post("/search-result", dashboardController.postSearchResult);

//-- POST: use to upload image for post
routes.use(routeImageUpload);

//-- POST: add/post a comment for specific post
routes.post("/post", dashboardController.postAddComment);

//-- POST: Web Push Notification
routes.use(webpush_notification);

/* -- ALL UPDATE REQUEST  */
// -- UPDATE: update one post
routes.put("/post-options", dashboardController.updateSpecificPost);

// -- UPDATE: pin post state
routes.put("/post-options/update", dashboardController.updatePinPost);

// -- UPDATE: update profile information and upload image if requested;
routes.use(account_settings_routes);

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
