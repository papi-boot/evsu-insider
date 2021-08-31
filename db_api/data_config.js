"use strict";
const {
  fetchAllUser,
  fetchOneUser,
  fetchUserProfileImage,
  fetchAllPost,
  fetchOnePost,
  fetchSearchRequest,
  fetchAllSubject,
  fetchSelectedSubject,
  fetchSubjectPostResult,
  fetchCommentForOnePost,
  fetchPostCommentCount,
  fetchAllComments,
  fetchPasswordResetToken,
  fetchYearLevels,
  fetchSemesterForYearLevel,
  fetchSubjectForSemesterAndYearLevel,
} = require("../query/fetch_data");
const { checkProfileImage } = require("../query/insert_data");

const data_fetchAllUser = async (req, res) => {
  const results = await fetchAllUser(req, res);
  return results;
}

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

const data_fetchSearchRequest = async (req, res) => {
  const result = await fetchSearchRequest(req, res);
  return result;
};

const data_allSubject = async () => {
  const results = await fetchAllSubject();
  return results;
};

const data_fetchSubjectPostResult = async (subject_id) => {
  const results = await fetchSubjectPostResult(subject_id);
  return results;
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

const data_fetchYearLevels = async () => {
  const results = await fetchYearLevels();
  return results;
};
const data_fetcheSemesterForYearLevel = async (year_level_id) => {
  const results = await fetchSemesterForYearLevel(year_level_id);
  return results;
};

const data_fetchSubjectForSemesterAndYearLevel = async (
  semester_id,
  year_level_id
) => {
  try {
    const results = await fetchSubjectForSemesterAndYearLevel(
      semester_id,
      year_level_id
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  data_fetchAllUser,
  data_fetchOneUser,
  data_checkUserProfileImage,
  data_fetchUserProfileImage,
  data_allPost,
  data_fetchPostCommentCount,
  data_fetchSubjectPostResult,
  data_fetchSearchRequest,
  data_filterPinPost,
  data_sliceRecentPost,
  data_allSubject,
  data_fetchAllComments,
  data_fetchPasswordToken,
  data_fetchYearLevels,
  data_fetcheSemesterForYearLevel,
  data_fetchSubjectForSemesterAndYearLevel
};
