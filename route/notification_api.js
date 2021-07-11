"use strict";
const express = require("express");
const notification_api = express();
const http = require("http"), server = http.createServer(notification_api);
const io = require("socket.io")(server);
const { fetchAllPost } = require("../query/fetch_data");

notification_api.get("/new-post", async (req, res) => {
  try {
    const checkForNewPost = await fetchAllPost();
    res.header("Cache-Control", "no-cache");
    res.status(200).send(JSON.stringify(checkForNewPost.length));
  } catch (err) {
    console.error(err);
  }
});

io.on("connection", (socket) => {
  
})

module.exports = { notification_api };
