"use strict";
const {
  fetchOneUser,
  fetchUserProfileImage,
  fetchAllPost,
  fetchOnePost,
  fetchAllSubject,
  fetchSelectedSubject,
  fetchSubjectPostResult,
  fetchCommentForOnePost,
  fetchPostCommentCount,
  fetchAllComments,
  fetchPasswordResetToken,
} = require("../query/fetch_data");
const { checkProfileImage } = require("../query/insert_data");

const data_fetchOneUser = async (user_id) => {
  const results = await fetchOneUser(user_id);
  return results;
};

const data_checkUserProfileImage = async (req) => {
  const results = await checkProfileImage(req);
  return results;
};

const data_fetchUserProfileImage = async (req) => {
  const results = await fetchUserProfileImage(req);
  return results;
};

const data_sliceRecentPost = async () => {
  const results = (await fetchAllPost()).slice(0, 8);

  return results;
};
const data_allPost = async () => {
  const results = await fetchAllPost();
  return results;
};

const data_filterPinPost = async () => {
  const results = (await fetchAllPost()).filter(
    (post) => post.post_pin === true
  );
  return results;
};

const data_allSubject = async () => {
  const results = await fetchAllSubject();
  return results;
};

const data_fetchSubjectPostResult = async (subject_id) => {
  const results = await fetchSubjectPostResult(subject_id);
  return results;
};

const data_firstSemester = async () => {
  const results = await fetchAllSubject();
  const first_sem = results.filter((item) => item.subject_quarter === 1);
  return first_sem;
};

const data_secondSemester = async () => {
  const results = await fetchAllSubject();
  const second_sem = results.filter((item) => item.subject_quarter === 2);
  return second_sem;
};

const data_fetchPostCommentCount = async (post_id) => {
  const results = await fetchPostCommentCount(post_id);
  return results;
};

const data_fetchAllComments = async () => {
  const results = await fetchAllComments();
  return results;
};

const data_fetchPasswordToken = async (req, res) => {
  const results = await fetchPasswordResetToken(req, res);
  return results;
};

module.exports = {
  data_fetchOneUser,
  data_checkUserProfileImage,
  data_fetchUserProfileImage,
  data_allPost,
  data_fetchPostCommentCount,
  data_fetchSubjectPostResult,
  data_filterPinPost,
  data_firstSemester,
  data_secondSemester,
  data_sliceRecentPost,
  data_allSubject,
  data_fetchAllComments,
  data_fetchPasswordToken,
};
