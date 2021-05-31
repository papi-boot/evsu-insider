"use strict";
require("dotenv").config({ path: __dirname + "/.env" });
module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
  },
  production: {
    username: process.env._USER,
    password: process.env._PASS,
    database: process.env._DB,
    host: process.env._HOST,
    port: process.env._PORT,
    dialect: "postgres",
  },
};
