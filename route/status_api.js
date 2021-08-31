"use strict";
const data = require("../db_api/data_config");

const express = require("express");
const insiderhub_status = express.Router();

insiderhub_status.post("/user-list", async (req, res) => {
  await data.data_fetchAllUser(req, res);
});

module.exports = { insiderhub_status };
