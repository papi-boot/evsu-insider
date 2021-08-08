"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");
const fetch = require("node-fetch");

const deleteOnePost = async (req) => {
  const KEYS =
    "sp=racwdl&st=2021-07-29T08:08:16Z&se=2025-07-29T16:08:16Z&sv=2020-08-04&sr=c&sig=l51q3fPqjBl3Ky3h897AMA83Pq%2B04m09nbq4KbMDyyI%3D";
  try {
    const getPhotoThumbnail = await sequelize.query(
      "SELECT post_thumbnail_image_url FROM post_thumbnails WHERE post_thumbnail_belongs_to = $1",
      {
        type: QueryTypes.SELECT,
        bind: [req.query.post_id],
      }
    );
    if (getPhotoThumbnail.length > 0) {
      const url = `${getPhotoThumbnail[0].post_thumbnail_image_url}?${KEYS}`;
      fetch(url, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
      })
        .then()
        .then(async () => {
          console.error("BLOB SUCCESSFULLY DELETE");
        })
        .catch((err) => console.error(err));
      const post_id = req.query.post_id;
      const results = await sequelize.query(
        "DELETE FROM posts WHERE post_id = $1",
        {
          type: QueryTypes.DELETE,
          bind: [post_id],
        }
      );
    } else {
      const post_id = req.query.post_id;
      const results = await sequelize.query(
        "DELETE FROM posts WHERE post_id = $1",
        {
          type: QueryTypes.DELETE,
          bind: [post_id],
        }
      );
      return results;
    }
    console.log(getPhotoThumbnail);
  } catch (err) {
    console.error(err);
  }
};

setInterval(async () => {
  const deletePasswordResetToken = await sequelize.query(
    "DELETE FROM password_resets WHERE $1 > password_reset_expiration",
    {
      type: QueryTypes.DELETE,
      bind: [new Date()],
    }
  );
}, 1000);

module.exports = {
  deleteOnePost,
};
