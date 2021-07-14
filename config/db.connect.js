"use strict";
require("dotenv").config({ path: "../.env" });
const { Sequelize, DataTypes, QueryTypes } = require("sequelize");

let connectionStringOption = {};
let connectionString;
const isProduction = process.env.NODE_ENV === "production";

//Check if we are on production mode or development mode
if (isProduction) {
  connectionString = process.env.DATABASE_URL;
  connectionStringOption = {
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  };
} else {
  connectionString = `postgres://${process.env.LOCAL_DATABASE_URL}`;
  connectionStringOption = {
    dialect: "postgres",
    logging: false,
  };
}
console.log(connectionStringOption);

const sequelize = new Sequelize(connectionString, connectionStringOption);

try {
  sequelize
    .authenticate()
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error(err));
} catch (err) {
  console.error(err.message);
}

module.exports = { sequelize, DataTypes, QueryTypes };
