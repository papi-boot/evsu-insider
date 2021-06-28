"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");
const domPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const submitAnswer = async (req, res) => {
  try {
    const { post_title, post_subject, post_tag, post_body } = await req.body;
    // -- cleaning the html input to prevent XSS
    if (!post_title && !post_subject && !post_tag && !post_body) {
      req.flash("error", "All fields must be fulfilled with content");
      console.log("No data");
    } else if (!post_body) {
      req.flash("error", "You don't have any post content.");
      return res.redirect("/create-post");
    } else {
      const htmlPurify = domPurify(new JSDOM().window);
      const cleanTitle = htmlPurify.sanitize(post_title);
      const cleanSubject = htmlPurify.sanitize(post_subject);
      const cleanTag = htmlPurify.sanitize(post_tag);
      const cleanBody = htmlPurify.sanitize(post_body, {
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
        "INSERT INTO posts(post_title, post_author, post_subject, post_tag, post_body, post_created_at, post_updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        {
          type: QueryTypes.INSERT,
          bind: [
            cleanTitle,
            req.user.user_id,
            cleanSubject,
            cleanTag,
            cleanBody.trim(),
            new Date(),
            new Date(),
          ],
        }
      );
      if (results) {
        req.flash("success", "Answer successfully shared.");
        res.redirect("/dashboard");
      }
      return results[1];
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  submitAnswer,
};
