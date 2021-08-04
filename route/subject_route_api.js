"use strict";
const express = require("express");
const subject_config_route = express();
const { checkNotAuthenticated } = require("../middleware/check.authenticated");
const data = require("../db_api/data_config");

/* FETCH YEAR LEVEL */
subject_config_route.get("/get-year-level", async (req, res) => {
  try {
    if (req.user) {
      return res
        .status(200)
        .json({ year_level: await data.data_fetchYearLevels(), success: 1 });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    return res.status(400).json({
      error_message: "Error fetching year level. Please try again",
      error: 1,
    });
  }
});

subject_config_route.post("/get-sem-for-year-level", async (req, res) => {
  try {
    const { year_level_id } = req.body;
    console.log(year_level_id);
    if (req.user) {
      return res.status(200).json({
        semester: await data.data_fetcheSemesterForYearLevel(year_level_id),
        success: 1,
      });
    } else {
      checkNotAuthenticated(req, res);
    }
  } catch (err) {
    return res.status(400).json({
      error_message: "Error fetching Semesters. Please try again",
      error: 1,
    });
  }
});

subject_config_route.post(
  "/get-subject-for-semester-and-year-level",
  async (req, res) => {
    try {
      const { semester_id, year_level_id } = req.body;
      if (req.user) {
        return res.status(200).json({
          subjects: await data.data_fetchSubjectForSemesterAndYearLevel(
            semester_id,
            year_level_id
          ),
          success: 1,
        });
      } else {
        checkNotAuthenticated(req, res);
      }
    } catch (err) {
      return res.status(400).json({
        error_message: "Error fetching Semesters. Please try again",
        error: 1,
      });
    }
  }
);

module.exports = { subject_config_route };
