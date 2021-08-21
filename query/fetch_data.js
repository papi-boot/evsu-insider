"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");
const { searchWorker } = require("./search_query");
const fetchOneUser = async (user_id) => {
  try {
    const results = await sequelize.query(
      "SELECT * FROM users WHERE user_id = $1",
      {
        type: QueryTypes.SELECT,
        bind: [user_id],
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};

const fetchUserProfileImage = async (req) => {
  try {
    const results = await sequelize.query(
      "SELECT * FROM user_profile_images WHERE profile_image_belongs_to = $1",
      {
        type: QueryTypes.SELECT,
        bind: [req.user.user_id],
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};
const fetchAllPost = async () => {
  try {
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_pin, post_pin_time, post_created_at, post_updated_at, user_fullname, subject_name, subject_description, subject_id, profile_image_url, post_thumbnail_image_url FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id LEFT JOIN user_profile_images ON posts.post_author = user_profile_images.profile_image_belongs_to LEFT JOIN post_thumbnails ON posts.post_id = post_thumbnails.post_thumbnail_belongs_to ORDER BY post_created_at DESC;",
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
      `SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_pin, post_created_at, post_updated_at, user_fullname, user_state, subject_name, subject_id, subject_description, profile_image_url, post_thumbnail_image_url FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id INNER JOIN user_profile_images ON user_profile_images.profile_image_belongs_to = users.user_id LEFT JOIN post_thumbnails ON posts.post_id = post_thumbnails.post_thumbnail_belongs_to WHERE post_id = $1;`,
      {
        type: QueryTypes.SELECT,
        bind: [post_id],
      }
    );
    if (results) {
      return results;
    } else {
      return 0;
    }
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
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_pin, post_created_at, post_updated_at, user_fullname, subject_id, subject_name, subject_description FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id WHERE subject_id::text = $1 ORDER BY subject_created_at ASC;",
      {
        type: QueryTypes.SELECT,
        bind: [subject_id.toString()],
      }
    );

    return results;
  } catch (err) {
    console.error(err);
  }
};

//FETCH search request
const fetchSearchRequest = async (req, res) => {
  try {
    const { search_params, search_by } = req.body;
    console.log(req.body);
    let key = ["post_title", "user_fullname", "subject_name", "post_tag"];
    switch (search_by) {
      case "key_title":
        await searchWorker(search_params, key[0], res);
        break;
      case "key_user":
        await searchWorker(search_params, key[1], res);
        break;
      case "key_subject":
        await searchWorker(search_params, key[2], res);
        break;
      case "key_tag":
        await searchWorker(search_params, key[3], res);
        break;
    }
  } catch (err) {
    console.error(err);
  }
};

//FETCH THE NUMBER OF RESULT POST FOUND FOR EACH SUBJECT
const fetchSubjectPostResult = async (subject_id) => {
  try {
    const results = await sequelize.query(
      "SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_pin, post_created_at, post_updated_at, user_fullname, subject_id, subject_name, subject_description FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id WHERE subject_id::text = $1 ORDER BY subject_created_at DESC;",
      {
        type: QueryTypes.SELECT,
        bind: [subject_id.toString()],
      }
    );

    return results;
  } catch (err) {
    console.error(err);
  }
};

//FETCH ALL THE COMMENT ON SPECIFIC POST
const fetchCommentForOnePost = async (req) => {
  try {
    const results = await sequelize.query(
      "SELECT *, user_fullname, user_state, profile_image_url FROM comments INNER JOIN users ON comments.comment_from_user = users.user_id LEFT JOIN user_profile_images ON users.user_id = user_profile_images.profile_image_belongs_to WHERE comment_from_post::text = $1 ORDER BY comment_created_at DESC",
      {
        type: QueryTypes.SELECT,
        bind: [req.query.post_id],
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};

const fetchPostCommentCount = async (post_id) => {
  try {
    const results = await sequelize.query(
      "SELECT COUNT(*) FROM comments WHERE comment_from_post::text = $1",
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

const fetchAllSubscription = async () => {
  try {
    const results = await sequelize.query(
      "SELECT subscription FROM notifications",
      {
        type: QueryTypes.SELECT,
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};

const fetchAllComments = async () => {
  try {
    const results = await sequelize.query("SELECT * FROM comments", {
      type: QueryTypes.SELECT,
    });
    return results;
  } catch (err) {
    console.error(err);
  }
};

const fetchPasswordResetToken = async (req, res) => {
  try {
    const prt = req.query.prt;
    const checkPasswordToken = await sequelize.query(
      "SELECT * FROM password_resets WHERE password_reset_token::text = $1",
      {
        type: QueryTypes.SELECT,
        bind: [prt],
      }
    );
    return checkPasswordToken;
  } catch (err) {
    console.error(err);
  }
};

const fetchYearLevels = async () => {
  try {
    const results = await sequelize.query("SELECT * FROM year_levels", {
      type: QueryTypes.SELECT,
    });
    return results;
  } catch (err) {
    console.error(err);
  }
};

const fetchSemesterForYearLevel = async (year_level_id) => {
  try {
    const results = await sequelize.query(
      `SELECT semester_id, semester_for_year_level, semester_year_count, year_level_id FROM semesters
        INNER JOIN year_levels yl ON semesters.semester_for_year_level = yl.year_level_id
        WHERE semester_for_year_level = $1`,
      {
        type: QueryTypes.SELECT,
        bind: [year_level_id],
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};
const fetchSubjectForSemesterAndYearLevel = async (
  semester_id,
  year_level_id
) => {
  try {
    const results = await sequelize.query(
      "SELECT * FROM subjects WHERE subject_for_semester = $1 AND subject_for_year_level = $2",
      {
        type: QueryTypes.SELECT,
        bind: [semester_id, year_level_id],
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};
const fetchPostForNotification = async (post_id) => {
  try {
    const results = await sequelize.query(
      `SELECT post_id, post_title, post_subject, post_tag, post_author, post_body, post_pin, post_created_at, post_updated_at, user_fullname, user_state, subject_name, subject_id, subject_description, profile_image_url FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id INNER JOIN user_profile_images ON user_profile_images.profile_image_belongs_to = users.user_id WHERE post_id = $1;`,
      {
        type: QueryTypes.SELECT,
        bind: [post_id],
      }
    );
    if (results) {
      return results;
    } else {
      return 0;
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  fetchOneUser,
  fetchUserProfileImage,
  fetchAllPost,
  fetchOnePost,
  fetchSearchRequest,
  fetchAllSubject,
  fetchSelectedSubject,
  fetchSubjectPostResult,
  fetchCommentForOnePost,
  fetchPostCommentCount,
  fetchAllSubscription,
  fetchAllComments,
  fetchPasswordResetToken,
  fetchYearLevels,
  fetchSemesterForYearLevel,
  fetchSubjectForSemesterAndYearLevel,
  fetchPostForNotification
};
