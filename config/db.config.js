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
    use_env_variable: "AZURE_DATABASE",
    username: process.env.P_USER,
    password: process.env.P_PASS,
    database: process.env.P_DB,
    host: process.env.P_HOST,
    port: process.env.P_PORT,
    dialect: "postgres",
    ssl: true,
    dialectOptions:{
      ssl: {
        require: true,
      },
      encryption: true,
    }
  },
};
