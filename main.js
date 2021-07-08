"use strict";
require("dotenv").config().parsed; //parse the environment key value pairs
const express = require("express"); // starts express application
const session = require("express-session"); // starts session for stroing data on local storage
const cors = require("cors"); // enable cross origin resource sharing
const morgan = require("morgan"); // for displaying http request method
const app = express(); // creating object of express
const PORT = process.env.PORT || 3030; // initialize port
const flash = require("express-flash"); // flash incoming messages for alert
const routes = require("./route/routes"); //get all the routes
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store); // initialize session
const { sequelize } = require("./config/db.connect");

/* INITIALIZE MIDDLEWARE */
app.use(express.json()); // initialize this to enable parsing the json file request sent from the browser I.E form data
app.use(express.static("public")); // initialize this to enable using static files such as css, assets, js module/files
app.set("view engine", "ejs"); //initialize this to set template engine -- we use ejs to serve embedded html js file
app.use(express.urlencoded({ extended: false })); // parsing urlencoded bodies
app.use(cors({
  origin: "http://localhost:5000"
}));
app.use(morgan("dev")); // initialize for debugging http request method
app.use(
  session({
    store: new SequelizeStore({
      db: sequelize,
      checkExpirationInterval: 2000,
    }),
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: false,
  })
); //set cookies to save on local storage on the browser
sequelize.sync();
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Initialize all the routes
app.use(routes);

/* LISTENING TO WEB SERVER */
app.listen(PORT, () => {
  try {
    console.log(`Server starts at http://localhost:${PORT}`);
  } catch (err) {
    console.error(err);
  }
});

module.exports = app