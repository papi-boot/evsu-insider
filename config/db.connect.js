"use strict";
require("dotenv").config({ path: __dirname + "/.env" });
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
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

try {
  sequelize
    .authenticate()
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error(err));
} catch (err) {
  console.error(err.message);
}

module.exports = { sequelize, DataTypes, QueryTypes };
