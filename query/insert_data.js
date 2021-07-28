"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");
const domPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const {
  passwordResetSecretHash,
  passwordResetTokenHash,
  generateHashToken,
} = require("../middleware/encrypted_data");
const { add } = require("date-fns");
const {
  sendContentEmailResetPassword,
} = require("../middleware/send_email_reset_password");

const submitAnswer = async (req, res) => {
  //Create Post
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
          "loading",
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

const postComment = async (req, res) => {
  //post a comment
  try {
    const { comment_body, post_id, subject_id } = await req.body;
    //clean comment
    const htmlPurify = domPurify(new JSDOM().window);
    const cleanComment = htmlPurify.sanitize(comment_body, {
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
        "loading",
      ],
    });
    console.log(req.user.user_id);
    const results = await sequelize.query(
      "INSERT INTO comments(comment_from_user, comment_from_post, comment_body, comment_created_at, comment_updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      {
        type: QueryTypes.INSERT,
        bind: [
          req.user.user_id,
          post_id.trim(),
          cleanComment,
          new Date(),
          new Date(),
        ],
      }
    );
    console.log(results);
    if (results) {
      let redirect_url = `/post?post_id=${post_id}&subject_id=${subject_id}`;
      return res.json({
        url: redirect_url,
        success_message: "Comment Added",
        new_comment: `${results[0][0].comment_id}`,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const webPushSubscription = async (req, subscription) => {
  try {
    const user_id = req.user.user_id;
    const stringySubscription = JSON.stringify(subscription, null, 0);
    const results = await sequelize.query(
      "SELECT * FROM notifications WHERE subscription::text = $1",
      {
        type: QueryTypes.SELECT,
        bind: [stringySubscription],
      }
    );
    if (results.length > 0) {
      console.log("SUBSCRIPTION ALREADY REGISTERED");
    } else {
      const applySubscription = await sequelize.query(
        "INSERT INTO notifications(subscription_from_user, subscription, subscription_created_at, subscription_updated_at) VALUES ($1, $2, $3, $4)",
        {
          type: QueryTypes.INSERT,
          bind: [user_id, stringySubscription, new Date(), new Date()],
        }
      );
      if (applySubscription[1]) {
        console.log("SUBSCRIPTION SUCESSFULLY REGISTERED");
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const checkProfileImage = async (req) => {
  try {
    const results = await sequelize.query(
      "SELECT * FROM user_profile_images WHERE profile_image_belongs_to::text = $1",
      {
        type: QueryTypes.SELECT,
        bind: [req.user.user_id],
      }
    );
    if (results.length > 0) {
      console.log("User image already inserted");
    } else {
      const results = await sequelize.query(
        "INSERT INTO user_profile_images(profile_image_belongs_to, profile_image_created_at, profile_image_updated_at) VALUES ($1, $2, $3)",
        {
          type: QueryTypes.INSERT,
          bind: [req.user.user_id, new Date(), new Date()],
        }
      );
      return results;
    }
  } catch (err) {
    console.error(err);
  }
};

const forgotPasswordSendReset = async (req, res) => {
  try {
    const { recovery_email } = await req.body;
    const checkEmail = await sequelize.query(
      "SELECT * FROM users WHERE user_email = $1",
      {
        type: QueryTypes.SELECT,
        bind: [recovery_email],
      }
    );
    const htmlPurify = domPurify(new JSDOM().window);
    const cleanEmail = htmlPurify.sanitize(recovery_email);
    //check if email is exist
    if (checkEmail.length > 0) {
      const checkPasswordResetTokenRequest = await sequelize.query(
        "SELECT * FROM password_resets WHERE password_reset_for_email = $1",
        {
          type: QueryTypes.SELECT,
          bind: [cleanEmail],
        }
      );

      if (checkPasswordResetTokenRequest.length > 0) {
        return res.status(226).json({
          success_message:
            "Password reset request already pending. Wait after 30 minutes to request again",
          success: 1
        });
      } else if (
        new Date() ===
        checkPasswordResetTokenRequest.password_reset_expiration
      ) {
        const deletePasswordResetRequest = await sequelize.query(
          "DELETE FROM password_resets WHERE password_reset_for_email = $1",
          {
            type: QueryTypes.DELETE,
            bind: [cleanEmail],
          }
        );
        console.log(deletePasswordResetRequest);
      } else {
        const generateSHA1 = await generateHashToken();
        const passwordResetToken = await passwordResetTokenHash(generateSHA1);
        console.log("FIRST ROUND: ",passwordResetToken);
        console.log("SECOND ROUND: ",passwordResetToken.toString().replace(/\+/g, "j"));
        const passwordResetSecret = await passwordResetSecretHash(generateSHA1);
        const insertDataPasswordToken = await sequelize.query(
          `INSERT INTO password_resets
        (password_reset_for_email,
          password_reset_token,
          password_reset_secret,
          password_reset_expiration,
          password_reset_created_at,
          password_reset_updated_at)
        VALUES($1, $2, $3, $4, $5, $6)`,
          {
            type: QueryTypes.INSERT,
            bind: [
              cleanEmail,
              passwordResetToken.toString().replace(/\+/g, "j"),
              passwordResetSecret,
              add(new Date(), { minutes: 30 }),
              new Date(),
              new Date(),
            ],
          }
        );
        console.log(generateSHA1, passwordResetSecret)
        if (insertDataPasswordToken) {
          await sendContentEmailResetPassword(
            cleanEmail,
            passwordResetToken.toString().replace(/\+/g, "j"),
            generateSHA1,
            res
          );
        } else {
          return res.status(401).json({
            error_message:
              "Something went wrong when sending reset password authorization to this account. Please try again",
            error: 1,
          });
        }
      }
    } else {
      return res
        .status(401)
        .json({ error_message: "Email/User does not exist", error: 1 });
    }
  } catch (err) {
    console.error(err);
  }
};
module.exports = {
  submitAnswer,
  postComment,
  webPushSubscription,
  checkProfileImage,
  forgotPasswordSendReset,
};
