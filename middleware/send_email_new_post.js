"use strict";
require("dotenv").config({ path: "../.env" }).parsed;
const ejs = require("ejs");
const path = require("path");
const nodemailer = require("nodemailer");
const { sequelize, QueryTypes } = require("../config/db.connect");
const { fetchPostForNotification } = require("../query/fetch_data");
const { format, add } = require("date-fns");

const sendEmailNewPost = async (post_details, req, res) => {
  const getAllEmail = await sequelize.query("SELECT user_email FROM users", {
    type: QueryTypes.SELECT,
  });
  const postDetails = await fetchPostForNotification(
    post_details[0][0].post_id
  );
  if (postDetails.length > 0) {
    const url = [
      `https://insiderhub.azurewebsites.net/post?post_id=${postDetails[0].post_id}&subject_id=${postDetails[0].subject_id}`,
      `http://localhost:3030/post?post_id=${postDetails[0].post_id}&subject_id=${postDetails[0].subject_id}`,
    ];
    const transporter = nodemailer.createTransport({
      host: "smtp.insiderhub.tech",
      port: 587,
      ignoreTLS: true,
      secureConnection: false,
      // secure: true,
      auth: {
        credentials: {
          user: process.env.MAILER_MAIN_USER,
          pass: process.env.MAILER_MAIN_PASSWORD,
        },
        user: process.env.MAILER_MAIN_USER,
        pass: process.env.MAILER_MAIN_PASSWORD,
      },
    });

    ejs.renderFile(
      path.resolve(__dirname, "./mails/new_post.ejs"),
      {
        doc_title: `${postDetails[0].post_title} | ${postDetails[0].post_tag}`,
        post_title: postDetails[0].post_title,
        user_fullname: postDetails[0].user_fullname,
        date_creation: postDetails[0].post_created_at,
        post_tag: postDetails[0].post_tag,
        profile_image_url: postDetails[0].profile_image_url,
        subject_name: postDetails[0].subject_name,
        post_content: postDetails[0].post_body,
        url: process.env.NODE_ENV === "production" ? url[0] : url[1],
        format,
        add
      },
      (error, data) => {
        if (error) {
          console.error(error);
        } else {
          const postFromUserOption = {
            from: `Insider Hub Digest ${process.env.MAILER_MAIN_USER}`,
            to: getArrayEmail(getAllEmail),
            subject: `${postDetails[0].user_fullname} added a new Post.`,
            html: data,
          };

          transporter.sendMail(postFromUserOption, (err, info) => {
            if (err) {
              console.error(err);
            } else {
              console.log("SEND NEW POST TO USER");
            }
          });
          req.flash("success", "Post was successfully published");
          return res.status(200).json({
            success_message: "Post was successfully published",
            success: 1,
            url: "/dashboard",
          });
        }
      }
    );
  }
};

const getArrayEmail = (getAllEmail) => {
  let arrayEmail = [];
  for (let i = 0; i < getAllEmail.length; i++) {
    arrayEmail.push(getAllEmail[i].user_email);
  }
  return arrayEmail;
};

module.exports = { sendEmailNewPost };
