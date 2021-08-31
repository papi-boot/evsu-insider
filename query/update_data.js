"use strict";
const { sequelize, QueryTypes } = require("../config/db.connect");
const domPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const bcrypt = require("bcrypt");

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
      return res.redirect(`/post-options/${post_id}`);
    } else {
      let allowScriptTag = "NO";
      if (req.user.user_state == "2") {
        allowScriptTag = "script";
      }
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
          allowScriptTag,
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
    if (pin_post === true) {
      const results = await sequelize.query(
        "UPDATE posts SET post_pin = $1, post_pin_time = $2 WHERE post_id = $3",
        {
          type: QueryTypes.UPDATE,
          bind: [pin_post, new Date(), post_id],
        }
      );
      return results[1];
    } else {
      const results = await sequelize.query(
        "UPDATE posts SET post_pin = $1, post_pin_time = DEFAULT WHERE post_id = $2",
        {
          type: QueryTypes.UPDATE,
          bind: [pin_post, post_id],
        }
      );
      return results[1];
    }
  } catch (err) {
    console.error(err);
  }
};

const updateProfileInformation = async (req, res) => {
  try {
    const date = new Date();
    const addTwoWeeks = date.setDate(date.getDate() + 7);
    const { fullname } = req.body;
    const htmlPurify = domPurify(new JSDOM().window);
    const cleanFullname = htmlPurify.sanitize(fullname);
    const checkInfo = await sequelize.query(
      "SELECT * FROM users WHERE user_id = $1",
      { type: QueryTypes.SELECT, bind: [req.user.user_id] }
    );

    const resultsProfileInformation = await sequelize.query(
      "UPDATE users SET user_fullname = $1, user_updated_at = $2 WHERE user_id = $3;",
      {
        type: QueryTypes.UPDATE,
        bind: [
          checkInfo.user_fullname === cleanFullname
            ? checkInfo.user_fullname
            : cleanFullname,
          new Date(addTwoWeeks),
          req.user.user_id,
        ],
      }
    );
    if (resultsProfileInformation[1]) {
      if (req.files.length > 0) {
        const DEFAULT_IMAGE =
          "https://insiderhub.blob.core.windows.net/profile-image/male_predef_image.jpg";
        const resultsImageUpload = await sequelize.query(
          "UPDATE user_profile_images SET profile_image_url = $1 WHERE profile_image_belongs_to = $2;",
          {
            type: QueryTypes.UPDATE,
            bind: [
              req.files[0].url ? req.files[0].url : DEFAULT_IMAGE,
              req.user.user_id,
            ],
          }
        );
        return resultsImageUpload;
      } else {
        return resultsProfileInformation;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const updateRequestChangePassword = async (req, res) => {
  try {
    const { current_password, new_password, confirm_new_password } =
      await req.body;
    const htmlPurify = domPurify(new JSDOM().window);
    const cleanCurrentPassword = htmlPurify.sanitize(current_password),
      cleanNewPassword = htmlPurify.sanitize(new_password),
      cleanConfirmNewPassword = htmlPurify.sanitize(confirm_new_password);
    const checkUserInfo = await sequelize.query(
      "SELECT * FROM users WHERE user_id = $1",
      {
        type: QueryTypes.SELECT,
        bind: [req.user.user_id],
      }
    );

    //check if info is present
    if (checkUserInfo.length > 0) {
      if (new_password.length > 8) {
        //compare the current password
        bcrypt.compare(
          cleanCurrentPassword,
          checkUserInfo[0].user_password,
          async (error, passwordMatched) => {
            if (error) {
              return res.status(401).json({ error_message: error.message });
            }
            if (passwordMatched) {
              const hashNewPassword = await bcrypt.hash(cleanNewPassword, 10);
              if (cleanNewPassword === cleanConfirmNewPassword) {
                const resultsChangePassword = await sequelize.query(
                  "UPDATE users SET user_password = $1 WHERE user_id = $2",
                  {
                    type: QueryTypes.UPDATE,
                    bind: [hashNewPassword, req.user.user_id],
                  }
                );
                if (resultsChangePassword[1]) {
                  return res.status(200).json({
                    success_message: "Password was successfully changed.",
                    success: 1,
                  });
                } else {
                  return res.status(401).json({
                    error_message:
                      "Something went wrong when changing your password, Please try again",
                    error: 1,
                  });
                }
              } else {
                return res.status(401).json({
                  error_message:
                    "New password and confirm password do not matched. Please tyr again.",
                  error: 1,
                });
              }
            } else {
              return res.status(401).json({
                error_message: "Current Password was incorrect.",
                error: 1,
              });
            }
          }
        );
      } else {
        return res.status(226).json({
          error_message: "Password lenght should be 8 characters long.",
          error: 1,
        });
      }
    } else {
      return res.status(401).json({
        error_message: "Something went wrong. Please reload the page",
        error: 1,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const updatePasswordResetRequest = async (req, res) => {
  try {
    const { new_password, confirm_new_password, prt, prs } = req.body;
    const checkPRT = await sequelize.query(
      "SELECT * FROM password_resets WHERE password_reset_token = $1",
      {
        type: QueryTypes.SELECT,
        bind: [prt],
      }
    );
    //Check if Password Reset Token is present
    if (checkPRT.length > 0) {
      //check if password match
      if (new_password.length >= 8 && new_password === confirm_new_password) {
        //check the bcrypt and prs
        bcrypt.compare(
          prs,
          checkPRT[0].password_reset_secret,
          async (error, passwordMatched) => {
            if (error) {
              return res.status(401).json({ error });
            }
            if (passwordMatched) {
              const htmlPurify = domPurify(new JSDOM().window);
              const cleanPassword = htmlPurify.sanitize(new_password);
              const hashNewPassword = await bcrypt.hash(cleanPassword, 10);

              const updateResetPassword = await sequelize.query(
                "UPDATE users SET user_password = $1 WHERE user_email = $2",
                {
                  type: QueryTypes.UPDATE,
                  bind: [hashNewPassword, checkPRT[0].password_reset_for_email],
                }
              );
              if (updateResetPassword[1]) {
                const deletePRT = await sequelize.query(
                  "DELETE FROM password_resets WHERE password_reset_token = $1",
                  {
                    type: QueryTypes.DELETE,
                    bind: [checkPRT[0].password_reset_token],
                  }
                );
                if (deletePRT) {
                  res.status(200).json({
                    success_message: "Password has been successfully reset.",
                    url: "/sign-in",
                    success: 1,
                  });
                }
              }
            } else {
              return res.status(404).render("not_found/password_reset_404", {
                doc_title: "Reset Password Token Expired",
              });
            }
          }
        );
      } else {
        return res.status(409).json({
          error_message:
            "Something wrong with your password. Please fill it up again.",
          error: 1,
        });
      }
    } else {
      return res.status(404).render("not_found/password_reset_404", {
        doc_title: "Reset Password Token Expired",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const updateChangeEmailRequest = async (req, res) => {
  try {
    const { email } = req.body;
    const checkEmail = await sequelize.query(
      "SELECT * FROM users WHERE user_email = $1",
      {
        type: QueryTypes.SELECT,
        bind: [email],
      }
    );
    if (checkEmail.length > 0) {
      return res
        .status(409)
        .json({ error_message: "Email was already taken", error: 1 });
    } else {
      const htmlPurify = domPurify(new JSDOM().window);
      const cleanEmail = htmlPurify.sanitize(email);
      const updateEmail = await sequelize.query(
        "UPDATE users SET user_email = $1 WHERE user_id = $2",
        {
          type: QueryTypes.UPDATE,
          bind: [cleanEmail, req.user.user_id],
        }
      );
      if (updateEmail[1]) {
        return res.status(200).json({
          success_message: "Email was successfully change.",
          success: 1,
        });
      } else {
        return res.status(409).json({
          error_message: "Something went wrong, Please try again",
          error: 1,
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const updateUserStatusOffline = async (user_id, line_status) => {
  try {
    const updateLineStatus = await sequelize.query(
      "UPDATE user_status SET user_status_line = $1 WHERE user_status_belongs_to = $2",
      {
        type: QueryTypes.UPDATE,
        bind: [line_status, user_id],
      }
    );
    return updateLineStatus;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateOnePost,
  updatePostPin,
  updateProfileInformation,
  updateRequestChangePassword,
  updatePasswordResetRequest,
  updateChangeEmailRequest,
  updateUserStatusOffline,
};
