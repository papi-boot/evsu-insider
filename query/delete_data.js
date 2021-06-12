"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");

const deleteOnePost = async (req) => {
  try {
    const post_id =  req.params.id;
    const results = await sequelize.query(
      "DELETE FROM posts WHERE post_id = $1",
      {
        type: QueryTypes.DELETE,
        bind: [post_id],
      }
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  deleteOnePost
}