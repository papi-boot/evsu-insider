"use strict";
require("dotenv").config({ path: "../.env" }).parsed;
const express = require("express");
const webpush = require("web-push");
const webpush_notification = express.Router();
const { webPushSubscription } = require("../query/insert_data");
const { fetchAllSubscription } = require("../query/fetch_data");

const publicKey = process.env.VAPID_PUBLIC_KEY,
  privateKey = process.env.VAPID_PRIVATE_KEY;

webpush.setVapidDetails(
  "mailto:support.team@insiderhub.tech",
  publicKey,
  privateKey
);

webpush_notification.post("/subscription", async (req, res) => {
  try {
    const subscription = req.body;
    await webPushSubscription(req, subscription);
    // console.log(subscription);
    res.status(201).json({});
  } catch (err) {
    console.error(err);
  }
});

webpush_notification.get("/send-notification", async (req, res) => {
  try {
    const payload = JSON.stringify({ title: "Insider Hub Notification", from_user: "Jason Evangelista" });
    const loadSubscription = await fetchAllSubscription();
    for (let i = 0; i < loadSubscription.length; i++) {
      let parseSubscription = JSON.parse(loadSubscription[i].subscription);
      webpush
        .sendNotification(parseSubscription, payload)
        .then((res) => {})
        .catch((err) => {
          throw err;
        });
    }
    req.flash("success", "Answer successfully shared.");
    res.json({ message: "notification sent", url: "/dashboard" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = { webpush_notification };
