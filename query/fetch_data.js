"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");

const fetchAllPost = async () => {
  try {
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_created_at, user_fullname, subject_name FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id ORDER BY post_created_at DESC;",
      {
        type: QueryTypes.SELECT,
      }
    );

    return results;
  } catch (err) {
    console.error(err);
  }
};

const fetchOnePost = async (req) => {
  try {
    const post_id = req.params.id;
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_created_at, post_updated_at, user_fullname, subject_name FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id WHERE post_id = $1;",
      {
        type: QueryTypes.SELECT,
        bind: [post_id],
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};

const fetchAllSubject = async () => {
  try {
    const results = await sequelize.query("SELECT * FROM subjects", {
      type: QueryTypes.SELECT,
    });
    console.log(results);
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { fetchAllPost, fetchOnePost, fetchAllSubject };
