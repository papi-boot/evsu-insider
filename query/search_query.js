"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");
const searchWorker = async (search_params, search_key, res) => {
  sequelize
    .query(
      `SELECT post_id, post_title,post_author, post_subject, post_tag, post_body, post_pin, post_created_at, post_updated_at,user_fullname, user_state, subject_id, subject_name, subject_description, profile_image_url, COUNT(distinct comments) as comment_count FROM posts INNER JOIN users ON posts.post_author = users.user_id INNER JOIN subjects ON posts.post_subject = subjects.subject_id INNER JOIN user_profile_images ON users.user_id = user_profile_images.profile_image_belongs_to LEFT JOIN comments ON posts.post_id = comments.comment_from_post WHERE ${search_key} ILIKE :search_parameter GROUP BY post_id, post_title, post_author, post_subject, post_tag, post_body, post_pin, post_created_at, post_updated_at, user_fullname, user_state, subject_id, subject_name, subject_description, profile_image_url;`,
      {
        type: QueryTypes.SELECT,
        replacements: {
          search_parameter: `%${search_params}%`,
        },
      }
    )
    .then((results) => {
      if (results.length > 0) {
        return res.status(200).json({ results, found: 1 });
      } else {
        return res.status(200).json({ no_result: "No result found", found: 0 });
      }
    })
    .catch((err) => console.error(err));
};
module.exports = { searchWorker };
