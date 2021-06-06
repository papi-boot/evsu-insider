"use strict";
require("dotenv").config({ path: __dirname + "/.env" });
const { Sequelize, DataTypes, QueryTypes } = require("sequelize");

let connectionStringOption = {};
const isProduction = process.env.NODE_ENV === "production";

//Check if we are on production mode or development mode
if (isProduction) {
  connectionStringOption = {
    connectionString: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  };
} else {
  connectionStringOption = {
    connectionString: `postgres://${process.env.LOCAL_DATABASE_URL}`,
    dialect: "postgres",
    logging: false,
  };
}
console.log(connectionStringOption);

const sequelize = new Sequelize(connectionStringOption);

try {
  sequelize
    .authenticate()
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error(err));
} catch (err) {
  console.error(err.message);
}

module.exports = { sequelize, DataTypes, QueryTypes };
