"use strict";
require("dotenv").config({ path: "../.env" }).parsed;
const nodemailer = require("nodemailer");

const sendContentEmailResetPassword = async (
  this_email,
  password_reset_token,
  password_reset_secret,
  res
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.insiderhub.tech",
      port: 587,
      ignoreTLS: true,
      secureConnection: false,
      // secure: true,
      auth: {
        credentials: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASSWORD,
        },
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,
      },
    });
    const reset_password_url = [
      `https://insiderhub.azurewebsites.net/reset-password?prt=${password_reset_token}&prs=${password_reset_secret}`,
      `http://localhost:3030/reset-password?prt=${password_reset_token}&prs=${password_reset_secret}`,
    ];
    const body_message = {
      from:`Insider Hub Reset password ${process.env.MAILER_USER}`,
      to: this_email,
      subject: "Reset Password - Insider Hub",
      headers: {
        "prs": password_reset_secret 
      },
      html: `
    <h3>Reset your password account for ${this_email}</h3>
    <br/>
    <p>Hello there, you request to reset your account password in Insider Hub. In order to proceed, please click the URL address below:</p>
    <br/>
    ${
      process.env.NODE_ENV === "production"
        ? reset_password_url[0]
        : reset_password_url[1]
    }
    <br/>
    <p>If you dont request this, you can safely ignore this message and the link will expire soon</p>
    <br/>
    <p><strong>Thanks</strong>
    `,
    };

    transporter.sendMail(body_message, (err, info) => {
      if (err) {
        console.log(err);
        return res.json({ error_message: err.message, error: 1 });
      } else {
        return res.status(200).json({
          success_message:
            "Password Reset URL was successfully sent. Check your email provider",
          success: 1
        });
      }
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { sendContentEmailResetPassword };
