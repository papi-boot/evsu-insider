"use strict";
const {
  checkNotAuthenticated,
  checkAuthenticated,
} = require("../middleware/check.authenticated"); // middleware for cehcking authorization
const submitShareAnswer = require("../query/insert_data");
const {
  fetchAllPost,
  fetchOnePost,
  fetchAllSubject,
  fetchSelectedSubject,
} = require("../query/fetch_data"); //Fetch all data method
const { send404_PageNotFound } = require("../middleware/page_not_found");
const { deleteOnePost } = require("../query/delete_data"); //Delete specific data
const { updateOnePost } = require("../query/update_data");
const { formatDistanceToNow, format, add } = require("date-fns");

// -- GET HTTP REQUEST: get login form

// -- GET HTTP REQUEST: get register form

// -- GET HTTP REQUEST : get dashboard/main page
const getHomeDashboard = async (req, res) => {
  try {
    const sliceRecentPost = await (await fetchAllPost()).slice(0, 12);
    console.log(req.user);
    if (req.user) {
      return await res.render("dashboard/index", {
        doc_title: "EVSU Insider | Dashboard",
        user: req.user,
        auth_link: {
          share_answer: "/evsu-insider/share-answer",
        },
        post: sliceRecentPost,
        subject: await fetchAllSubject(),
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
  console.log(req.query);
  try {
    if (req.user) {
      const one_post = await fetchOnePost(req);
      if (one_post.length > 0) {
        const filterRelatedPost = (await fetchSelectedSubject(req)).filter(
          (item) => item.post_id !== req.query.post_id
        );
        const sliceRelatedPost = filterRelatedPost.slice(0, 3);
        res.render("dashboard/show", {
          doc_title: one_post[0].post_title,
          user: req.user,
          req: req,
          post: await fetchOnePost(req),
          related_post: sliceRelatedPost,
          auth_link: {
            share_answer: "/evsu-insider/share-answer",
          },
          formatDistanceToNow,
          format,
          add,
        });
      } else {
        await send404_PageNotFound(req, res);
      }
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

// -- GET HTTP REQUEST: get the specific subject and it's post/answer
const getSpecificSubjectAndPost = async (req, res) => {
  try {
    if (req.user) {
      const subject_title = await fetchAllSubject(req.params.id);
      const filterRelatedPost = (await fetchSelectedSubject(req)).filter(
        (item) => item.post_subject === req.query.subject_id
      );
      await res.render("dashboard/show_subject", {
        user: req.user,
        req: req,
        doc_title: `${subject_title[req.query.subject_id - 1].subject_name} | ${
          subject_title[req.query.subject_id - 1].subject_description
        }`,
        auth_link: {
          share_answer: "/evsu-insider/share-answer",
        },
        subject_header: {
          title: subject_title[req.query.subject_id - 1].subject_name,
          description:
            subject_title[req.query.subject_id - 1].subject_description,
        },
        related_post: filterRelatedPost,
        formatDistanceToNow,
        format
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

// -- POST HTTP REQUEST: submit my share answer
const postShareAnswer = submitShareAnswer.submitAnswer;

// -- PUT/UPDATE REQUEST: update specific post
const updateSpecificPost = async (req, res) => {
  try {
    const post_id = await req.params.id;
    if (req.user) {
      updateOnePost(req)
        .then(() => {
          req.flash("success", "Answer was successfully update.");
          return res.json({
            url: "/evsu-insider/dashboard",
            preview_url: `/evsu-insider/post-options/${post_id}`,
          });
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
  getHomeDashboard,
  getCreateAnswerForm,
  getSpecificPost,
  getOptionForm,
  getSpecificSubjectAndPost,
  postShareAnswer,
  updateSpecificPost,
  deleteSpecificPost,
};
