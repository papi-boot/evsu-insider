"use strict";
require("dotenv").config({ path: "../.env" });
const { Sequelize, DataTypes, QueryTypes } = require("sequelize");

let connectionString;
const isProduction = process.env.NODE_ENV === "production";

//Check if we are on production mode or development mode
if (isProduction) {
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = `postgres://${process.env.LOCAL_DATABASE_URL}`;
}
console.log(connectionString);

const sequelize = new Sequelize(connectionString, {
  logging: false,
});


try {
  sequelize
    .authenticate()
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error(err));
} catch (err) {
  console.error(err);
}

module.exports = { sequelize, DataTypes, QueryTypes };
