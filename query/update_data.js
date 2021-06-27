"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");
const domPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const updateOnePost = async (req, res) => {
  try {
    const post_id = req.query.post_id;
    const { post_title, post_tag, post_body } = await req.body;
    // -- cleaning the html input to prevent XSS
    if (!post_title && !post_tag && !post_body) {
      req.flash("error", "All fields must be fulfilled with content");
      console.log("No data");
    } else if (!post_body) {
      req.flash("error", "You don't have any post content.");
      return res.redirect(`/insider-hub/post-options/${post_id}`);
    } else {
      const htmlPurify = domPurify(new JSDOM().window);
      const cleanUpdateTitle = htmlPurify.sanitize(post_title);
      const cleanUpdateTag = htmlPurify.sanitize(post_tag);
      const cleanUpdateBody = htmlPurify.sanitize(post_body, {
        ALLOWED_TAGS: [
          "iframe",
          "img",
          "p",
          "strong",
          "em",
          "blockquote",
          "underline",
          "span",
          "del",
          "sup",
          "sub",
          "code",
          "pre",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "ol",
          "ul",
          "li",
          "a",
          "video",
          "table",
          "tbody",
          "tr",
          "td",
          "br",
        ],
        ALLOWED_ATTR: [
          "src",
          "title",
          "frameborder",
          "allow",
          "allowfullscreen",
          "style",
          "alt",
          "href",
          "id",
          "target",
          "class",
          "width",
          "height",
        ],
      });

      // @TODO: after the cleaning -- proceed to query to add the content in database
      const results = await sequelize.query(
        "UPDATE posts SET post_title = $1, post_tag = $2, post_body = $3, post_updated_at = $4 WHERE post_id = $5",
        {
          type: QueryTypes.UPDATE,
          bind: [
            cleanUpdateTitle,
            cleanUpdateTag,
            cleanUpdateBody,
            new Date(),
            post_id,
          ],
        }
      );

      return results[1];
    }
  } catch (err) {
    console.error(err);
  }
};

const updatePostPin = async (req) => {
  try {
    const post_id = req.query.post_id;
    const { pin_post } = req.body;
    const results = await sequelize.query(
      "UPDATE posts SET post_pin = $1 WHERE post_id = $2",
      {
        type: QueryTypes.UPDATE,
        bind: [pin_post, post_id],
      }
    );
    return results[1];
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  updateOnePost,
  updatePostPin,
};
