"use strict";
const verifyRegister = require("../middleware/verify.register");
const passport = require("passport");
const passportConfig = require("../middleware/passport.config.js"); //Require the passport config;
const {
  checkNotAuthenticated,
  checkAuthenticated,
} = require("../middleware/check.authenticated"); // middleware for cehcking authorization
const submitShareAnswer = require("../query/insert_data");
const {
  fetchAllPost,
  fetchOnePost,
  fetchAllSubject,
} = require("../query/fetch_data"); //Fetch all data method
const { deleteOnePost } = require("../query/delete_data"); //Delete specific data
const { updateOnePost } = require("../query/update_data");
const { formatDistanceToNow, format, add } = require("date-fns");

/* @TODO: initialize the passport */
passportConfig.initializePassport(passport);

// -- GET HTTP REQUEST: get login form
const getLoginForm = async (req, res) => {
  try {
    await res.render("authentication/login", {
      doc_title: "Sign In | EVSU Insider",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST: get register form
const getRegisterForm = async (req, res) => {
  try {
    await res.render("authentication/register", {
      doc_title: "Join EVSU Insider Today",
    });
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST : get dashboard/main page
const getHomeDashboard = async (req, res) => {
  try {
    console.log(req.user);
    if (req.user) {
      return await res.render("dashboard/index", {
        doc_title: "EVSU Insider | Dashboard",
        user: req.user,
        auth_link: {
          share_answer: "/evsu-insider/share-answer",
        },
        post: await fetchAllPost(),
        formatDistanceToNow,
        format,
        add,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST : get create/share new answer form
const getCreateAnswerForm = async (req, res) => {
  try {
    if (req.user) {
      await res.render("dashboard/create_answer", {
        doc_title: "Share Answer⭐",
        auth_link: "",
        subject: await fetchAllSubject(),
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST: get and show specific/one post
const getSpecificPost = async (req, res) => {
  try {
    if (req.user) {
      const doc_title = await fetchOnePost(req);
      console.log(doc_title[0].post_title);
      res.render("dashboard/show", {
        doc_title: doc_title[0].post_title,
        user: req.user,
        post: await fetchOnePost(req),
        auth_link: {
          share_answer: "/evsu-insider/share-answer",
        },
        formatDistanceToNow,
        format,
        add,
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

// -- GET HTTP REQUEST : get options view: Update/Delete
const getOptionForm = async (req, res) => {
  try {
    const doc_title = await fetchOnePost(req);
    if (req.user) {
      await res.render("dashboard/options", {
        doc_title: doc_title[0].post_title,
        user: req.user,
        post: await fetchOnePost(req),
        subject: await fetchAllSubject(),
        auth_link: {
          share_answer: "/evsu-insider/share-answer",
        },
        formatDistanceToNow,
        format,
        add,
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

// -- POST HTTP REQUEST: verifying account to sign up
const postRegisterForm = verifyRegister.initialize;

// -- POST HTTP REQUEST: verifying account to sign in
const postLoginForm = passport.authenticate("local", {
  successRedirect: "/evsu-insider/dashboard",
  failureRedirect: "/evsu-insider/sign-in",
  failureFlash: true,
  failureMessage: "Please provide a valid credentials",
});

// -- POST HTTP REQUEST: submit my share answer
const postShareAnswer = submitShareAnswer.submitAnswer;

// -- PUT/UPDATE REQUEST: update specific post
const updateSpecificPost = async (req, res) => {
  try {
    const post_id = await req.params.id;
    if(req.user){
      updateOnePost(req)
        .then(() => {
          req.flash("success", "Answer was successfully update.");
          return res.json({url: "/evsu-insider/dashboard", preview_url: `/evsu-insider/post-options/${post_id}`});
        })
        .catch((err) => console.error(err));
    }
  } catch (err) {
    console.error(err);
  }
};

// --DELETE HTTP REQEUST : delete specific post
const deleteSpecificPost = async (req, res) => {
  try {
    if (req.user) {
      deleteOnePost(req)
        .then(() => {
          req.flash("success", "Answer was successfully deleted.");
          return res.json({ url: "/evsu-insider/dashboard" });
        })
        .catch((err) => console.error(err));
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getRegisterForm,
  getLoginForm,
  getHomeDashboard,
  getCreateAnswerForm,
  getSpecificPost,
  getOptionForm,
  postRegisterForm,
  postLoginForm,
  postShareAnswer,
  updateSpecificPost,
  deleteSpecificPost,
};
