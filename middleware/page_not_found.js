"use strict";
const data = require("../db_api/data_config");
const send404_PageNotFound = async (req, res) => {
  try {
    res.status(404).render("not_found/404", {
      user: req.user,
      user_profile_image: await data.data_fetchUserProfileImage(req),
      doc_title: "Page was not Found | 404 status",
      auth_link: {
        share_answer: "/create-post",
      },
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { send404_PageNotFound };
