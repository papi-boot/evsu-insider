"use strict";
require("dotenv").config({ path: "../.env" }).parsed;
const express = require("express");
const webpush = require("web-push");
const webpush_notification = express.Router();
const { webPushSubscription } = require("../query/insert_data");
const { fetchAllSubscription } = require("../query/fetch_data");

const publicKey = process.env.VAPID_PUBLIC_KEY,
  privateKey = process.env.VAPID_PRIVATE_KEY;

webpush_notification.post("/subscription", async (req, res) => {
  try {
    const subscription = req.body;
    await webPushSubscription(req, subscription);
    console.log(subscription);
    res.status(201).json({});
  } catch (err) {
    console.error(err);
  }
});

webpush_notification.get("/send-notification", async (req, res) => {
  try {
    const vapidOption = {
      vapidDetails: {
        subject: "mailto:support.team@insiderhub.tech",
        publicKey: publicKey,
        privateKey: privateKey,
      },
    };
    console.log(req.user);
    const payload = JSON.stringify({
      title: "Insider Hub Notification",
    });
    const loadSubscription = await fetchAllSubscription();
    for (let i = 0; i < loadSubscription.length; i++) {
      let parseSubscription = JSON.parse(loadSubscription[i].subscription);
      console.log(parseSubscription);
      webpush
        .sendNotification(parseSubscription, payload, vapidOption)
        .then((res) => {
          res.statusCode = 200;
        })
        .catch((err) => {
          console.error(err);
        });
      res.json({ message: "notification sent", url: "/dashboard" });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = { webpush_notification };
