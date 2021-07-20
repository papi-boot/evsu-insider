"use strict";
const {
  checkNotAuthenticated,
  checkAuthenticated,
} = require("../middleware/check.authenticated"); // middleware for cehcking authorization
const { submitAnswer, postComment } = require("../query/insert_data");
const {
  fetchOnePost,
  fetchSelectedSubject,
  fetchCommentForOnePost,
} = require("../query/fetch_data"); //Fetch all data method
const { send404_PageNotFound } = require("../middleware/page_not_found");
const { deleteOnePost } = require("../query/delete_data"); //Delete specific data
const { updateOnePost, updatePostPin } = require("../query/update_data");
const { formatDistanceToNow, format, add } = require("date-fns");
const data = require("../db_api/data_config"); //COVERS A LOT OF DATA MANIPULATION.

// -- GET HTTP REQUEST : get dashboard/main page
const getHomeDashboard = async (req, res) => {
  try {
    await data.data_checkUserProfileImage(req);
    const sliceRecentPost = await data.data_sliceRecentPost(); //slice post -- show only 9 post on dashboard
    const allPost = await data.data_allPost();
    console.log(req.user);
    const filterPinPost = await data.data_filterPinPost();
    const subject = await data.data_allSubject();
    let resultPostFound = []; //post found for each subject
    for (let i = 0; i < subject.length; i++) {
      resultPostFound.push(
        (await data.data_fetchSubjectPostResult(subject[i].subject_id)).length
      );
    }
    // SUBJECT Config
    const firstSemester = await data.data_firstSemester();
    const secondSemester = await data.data_secondSemester();

    let postCommentResultFound = []; // comment/discussion found
    for (let i = 0; i < allPost.length; i++) {
      postCommentResultFound.push(
        await data.data_fetchPostCommentCount(allPost[i].post_id)
      );
    }
    let pinPostCommentResultFound = [];
    for (let i = 0; i < filterPinPost.length; i++) {
      let pinCommentCount = await data.data_fetchPostCommentCount(
        filterPinPost[i].post_id
      );
      pinPostCommentResultFound.push({
        pin_comment_count: pinCommentCount[0].count,
        pin_post_id: filterPinPost[i].post_id,
        post_pin_title: filterPinPost[i].post_title,
      });
    }
    // Comment Config
    if (req.user) {
      res.header("Service-Worker-Allowed", "/");
      await res.render("dashboard/index", {
        doc_title: "Insider Hub | Dashboard",
        user: req.user,
        user_profile_image: await data.data_fetchUserProfileImage(req),
        auth_link: {
          share_answer: "/create-post",
        },
        post: sliceRecentPost,
        all_pin_post: filterPinPost,
        slice_pin_post: filterPinPost
          .slice(0, 6)
          .sort((a, b) => b.post_pin_time - a.post_pin_time),
        all_post: allPost,
        subject: await data.data_allSubject(),
        results_post_subject: resultPostFound,
        firstSemester: firstSemester,
        secondSemester: secondSemester,
        comment_count: postCommentResultFound,
        pin_post_comment_count: pinPostCommentResultFound,
        formatDistanceToNow,
        format,
        add,
      });
    } else {
      // checkAuthenticated(req, res);
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
        subject: await data.data_allSubject(),
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
    const firstSemester = (await data.data_allSubject()).filter(
      (item) => item.subject_quarter === 1
    );
    const secondSemester = (await data.data_allSubject()).filter(
      (item) => item.subject_quarter === 2
    );
    if (req.user) {
      const one_post = await fetchOnePost(req);
      if (one_post && one_post.length > 0) {
        const filterRelatedPost = (await fetchSelectedSubject(req)).filter(
          (item) => item.post_id !== req.query.post_id
        );
        const sliceRelatedPost = filterRelatedPost.slice(0, 3);
        res.header("Service-Worker-Allowed", "/");
        await res.render("dashboard/show", {
          doc_title: `${one_post[0].post_title} | ${one_post[0].post_tag} - ${one_post[0].subject_name}`,
          user: req.user,
          req: req,
          user_profile_image: await data.data_fetchUserProfileImage(req),
          post: await fetchOnePost(req),
          subject: await data.data_allSubject(),
          comments: await fetchCommentForOnePost(req),
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
        subject: await data.data_allSubject(),
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
        await data.data_allSubject()
      ).filter((item) => item.subject_id === req.query.subject_id);
      const filterRelatedPost = (await fetchSelectedSubject(req)).filter(
        (item) => item.post_subject === req.query.subject_id
      );
      let postCommentResultFound = []; // comment/discussion found
      for (let i = 0; i < filterRelatedPost.length; i++) {
        postCommentResultFound.push(
          await data.data_fetchPostCommentCount(filterRelatedPost[i].post_id)
        );
      }
      console.log(postCommentResultFound);
      if (subject.length > 0) {
        res.header("Service-Worker-Allowed", "/");
        await res.render("dashboard/show_subject", {
          user: req.user,
          req: req,
          user_profile_image: await data.data_fetchUserProfileImage(req),
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
          comment_count: postCommentResultFound,
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

// -- GET HTTP REQUEST: get profile page
const getProfilePage = async (req, res) => {
  try {
    if (req.user) {
      const getMyAllPost = (await data.data_allPost()).filter((item) => {
        if (item.post_author === req.user.user_id) {
          return item;
        }
      });
      const getMyAllComment = await (
        await data.data_fetchAllComments()
      ).filter((item) => {
        if (item.comment_from_user === req.user.user_id) {
          return item;
        }
      });
      res.render("dashboard/profile", {
        user: req.user,
        doc_title: `Profile | ${req.user.user_fullname}`,
        user_profile_image: await data.data_fetchUserProfileImage(req),
        current_user: req.user.user_id,
        my_all_post: getMyAllPost,
        my_all_comment: getMyAllComment,
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

// -- POST HTTP REQUEST: submit my share answer
const postShareAnswer = submitAnswer;

// -- POST HTTP REQUEST: add comment to specific post;
const postAddComment = postComment;

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
        pin_post
          ? req.flash("success", "Post was successfully Pinned")
          : req.flash("success", "Post was successfully Unpinned");
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
  getProfilePage,
  postShareAnswer,
  postAddComment,
  updateSpecificPost,
  updatePinPost,
  deleteSpecificPost,
};
