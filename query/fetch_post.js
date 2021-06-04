"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");

const getAllPost = async () => {
  try {
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_tag, post_author, post_body, created_at, user_fullname FROM posts INNER JOIN users ON posts.post_author = users.user_id ORDER BY created_at DESC;",
      {
        type: QueryTypes.SELECT,
      }
    );

    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllPost };
