"use strict";
require("dotenv").config().parsed; //parse the environment key value pairs
const express = require("express"); // starts express application
const session = require("express-session"); // starts session for stroing data on local storage
const cors = require("cors"); // enable cross origin resource sharing
const morgan = require("morgan"); // for displaying http request method
const app = require("express")(); // creating object of express
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3030; // initialize port
const flash = require("express-flash"); // flash incoming messages for alert
const routes = require("./route/routes"); //get all the routes
const passport = require("passport");
const sessionConfig = require("./config/session.config");
const { sequelize } = require("./config/db.connect");
const data = require("./db_api/data_config");
const user_status = require("./route/socket_user_status").User_Status;

/* INITIALIZE MIDDLEWARE */
app.use(express.static("public")); // initialize this to enable using static files such as css, assets, js module/files
app.use(express.json()); // initialize this to enable parsing the json file request sent from the browser I.E form data
app.set("view engine", "ejs"); //initialize this to set template engine -- we use ejs to serve embedded html js file
app.use(express.urlencoded({ extended: false })); // parsing urlencoded bodies
app.use(cors());
app.use(morgan("dev")); // initialize for debugging http request method
const sessionMiddleWare = session(sessionConfig);
app.use(sessionMiddleWare); //set cookies to save on local storage on the browser
sequelize.sync();
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Initialize all the routes
app.use(routes);

//Config sockets cookie
io.use((socket, next) => {
  sessionMiddleWare(socket.request, {}, next);
});
user_status.prototype.socket_init(io);

/* LISTENING TO WEB SERVER */
server.listen(PORT, () => {
  try {
    console.log(`Server starts at http://localhost:${PORT}`);
  } catch (err) {
    console.error(err);
  }
});

module.exports = app;
