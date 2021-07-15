"use strict";

const express = require("express");
const routes = express.Router();
const passport = require("passport");

//sign in config with keep me sign in function initialzie
// -- POST: sign in user and verify
routes.post(
  "/sign-in",
  passport.authenticate("local", {
    failureFlash: true,
    failureMessage: "Please provide a valid credentials",
  }),
  async (req, res) => {
    const { remember_me } = req.body;
    if (remember_me === true) {
      req.session.cookie.maxAge = 360 * 24 * 60 * 60 * 1000;
      // console.log(req.session);
      req.session.touch();
      req.session.save();
    }
    if (req.user) {
      res.json({ authenticate_url: "/dashboard" });
    } else {
      res.status(401).json({ authenticate_url: "/sign-in" });
    }
  }
);

module.exports = routes;
