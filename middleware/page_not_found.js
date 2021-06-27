"use strict";

const send404_PageNotFound = async (req, res) => {
  try {
    res.status(404).render("not_found/404", {
      user: req.user,
      doc_title: "Page was not Found | 404 status",
      auth_link: {
        share_answer: "/insider-hub/share-answer",
      },
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { send404_PageNotFound };
