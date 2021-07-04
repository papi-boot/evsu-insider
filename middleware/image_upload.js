"use strict";
require("dotenv").config({ path: "../.env" }).parsed;

const express = require("express");
const routeImageUpload = express.Router();
const multer = require("multer");
// const inMemoryStorage = multer.memoryStorage();
const MulterAzureStorage = require("multer-azure-storage");
const uploadStrategy = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    containerName: "images",
    containerSecurity: "blob",
  }),
}).single("file");


routeImageUpload.post("/upload-image", async (req, res) => {
  try {
    uploadStrategy(req, res, async (err) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Something went wrong when uploading the image" });
      } else {
        console.log(req.file);
        res.status(200).json({ location: req.file.url });
      }
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = { routeImageUpload };
