"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");

// FETCH ALL POST/ANSWER
const fetchAllPost = async () => {
  try {
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_created_at, user_fullname, subject_name, subject_id FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id ORDER BY post_created_at DESC;",
      {
        type: QueryTypes.SELECT,
      }
    );

    return results;
  } catch (err) {
    console.error(err);
  }
};

//FETCH ONE/SPECIFIC POST/ANSWER IN DATABASE
const fetchOnePost = async (req) => {
  try {
    const post_id = req.query.post_id;
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_created_at, post_updated_at, user_fullname, subject_name, subject_id FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id WHERE post_id = $1;",
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

// FETCH ALL SUBJECT IN DATABASE
const fetchAllSubject = async () => {
  try {
    const results = await sequelize.query("SELECT * FROM subjects", {
      type: QueryTypes.SELECT,
    });
    return results;
  } catch (err) {
    console.error(err);
  }
};

//FETCH SUBJECT AND RELATED TOPICS/POST

const fetchSelectedSubject = async (req) => {
  try {
    const { subject_id } = req.query;
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_created_at, post_updated_at, user_fullname, subject_id, subject_name, subject_description, subject_quarter FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id WHERE subject_id = $1;",
      {
        type: QueryTypes.SELECT,
        bind: [subject_id],
      }
    );

    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  fetchAllPost,
  fetchOnePost,
  fetchAllSubject,
  fetchSelectedSubject,
};
