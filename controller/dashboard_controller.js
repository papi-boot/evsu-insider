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
  fetchSubjectPostResult,
} = require("../query/fetch_data"); //Fetch all data method
const { send404_PageNotFound } = require("../middleware/page_not_found");
const { deleteOnePost } = require("../query/delete_data"); //Delete specific data
const { updateOnePost, updatePostPin } = require("../query/update_data");
const { formatDistanceToNow, format, add } = require("date-fns");

// -- GET HTTP REQUEST : get dashboard/main page
const getHomeDashboard = async (req, res) => {
  try {
    const sliceRecentPost = (await fetchAllPost()).slice(0, 8); //slice post -- show only 9 post on dashboard
    const allPost = await fetchAllPost();
    console.log(req.user);
    const filterPinPost = await (
      await fetchAllPost()
    ).filter((post) => post.post_pin === true);
    const subject = await fetchAllSubject();
    let resultPostFound = [];
    for (let i = 0; i < subject.length; i++) {
      resultPostFound.push(
        (await fetchSubjectPostResult(subject[i].subject_id)).length
      );
    }
    const firstSemester = (await fetchAllSubject()).filter(
      (item) => item.subject_quarter === 1
    );
    const secondSemester = (await fetchAllSubject()).filter(
      (item) => item.subject_quarter === 2
    );
    if (req.user) {
      await res.render("dashboard/index", {
        doc_title: "Insider Hub | Dashboard",
        user: req.user,
        auth_link: {
          share_answer: "/create-post",
        },
        post: sliceRecentPost,
        all_pin_post: filterPinPost,
        slice_pin_post: filterPinPost.slice(0, 6),
        all_post: allPost,
        subject: await fetchAllSubject(),
        results_post_subject: resultPostFound,
        firstSemester: firstSemester,
        secondSemester: secondSemester,
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
        req: req,
        user: req.user,
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
    const firstSemester = (await fetchAllSubject()).filter(
      (item) => item.subject_quarter === 1
    );
    const secondSemester = (await fetchAllSubject()).filter(
      (item) => item.subject_quarter === 2
    );
    if (req.user) {
      const one_post = await fetchOnePost(req);
      if (one_post) {
        const filterRelatedPost = (await fetchSelectedSubject(req)).filter(
          (item) => item.post_id !== req.query.post_id
        );
        const sliceRelatedPost = filterRelatedPost.slice(0, 3);
        res.render("dashboard/show", {
          doc_title: one_post[0].post_title,
          user: req.user,
          req: req,
          post: await fetchOnePost(req),
          subject: await fetchAllSubject(),
          related_post: sliceRelatedPost,
          firstSemester: firstSemester,
          secondSemester: secondSemester,
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
          share_answer: "/create-post",
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
      const subject = await (
        await fetchAllSubject()
      ).filter((item) => item.subject_id === req.query.subject_id);
      const filterRelatedPost = (await fetchSelectedSubject(req)).filter(
        (item) => item.post_subject === req.query.subject_id
      );
      if (subject.length > 0) {
        await res.render("dashboard/show_subject", {
          user: req.user,
          req: req,
          doc_title: `${subject[0].subject_name} | ${subject[0].subject_description}`,
          auth_link: {
            share_answer: "/create-post",
          },
          subject_header: {
            title: subject[0].subject_name,
            description: subject[0].subject_description,
          },
          related_post: filterRelatedPost.sort(
            (post_one, post_two) =>
              post_two.post_created_at - post_one.post_created_at
          ),
          formatDistanceToNow,
          format,
        });
      } else {
        send404_PageNotFound(req, res);
      }
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
            url: "/dashboard",
            preview_url: `/post-options/${post_id}`,
          });
        })
        .catch((err) => console.error(err));
    }
  } catch (err) {
    console.error(err);
  }
};

// -- PUT/UPDATE REQUEST: update if the post were pin or not

const updatePinPost = async (req, res) => {
  try {
    if (req.user) {
      const isPostPin = await updatePostPin(req);
      if (isPostPin) {
        const { pin_post } = req.body;
        pin_post ? req.flash("success", "Post was successfully Pinned") : req.flash("success", "Post was successfully Unpinned");
        return res.status(200).json({ url: "/dashboard" });
      }
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.log(err);
  }
};

// --DELETE HTTP REQEUST : delete specific post
const deleteSpecificPost = async (req, res) => {
  try {
    if (req.user) {
      deleteOnePost(req)
        .then(() => {
          req.flash("success", "Answer was successfully deleted.");
          return res.json({ url: "/dashboard" });
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
  updatePinPost,
  deleteSpecificPost,
};
