"use strict";
const session = require("express-session"); // starts session for stroing data on local storage
const SequelizeStore = require("connect-session-sequelize")(session.Store); // initialize session
const { sequelize } = require("./db.connect");
module.exports = {
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 2000,
  }),
  secret: process.env.SESSION_KEY,
  resave: true,
  saveUninitialized: false,
};
