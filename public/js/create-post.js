/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
window.addEventListener("DOMContentLoaded", () => {
  let recoverTitle = localStorage,
    recoverSubject = localStorage,
    recoverTag = localStorage,
    recoverPostContent = localStorage,
    RECOVER_POST_TITLE = "recover_post_title",
    RECOVER_POST_TAG = "recover_post_tag",
    RECOVER_POST_CONTENT = "recover_post_content";
  const formCreatePost = document.querySelector(".form__create-post");
  const createPostTitleField = document.querySelector(
      ".create__post-title-field"
    ),
    createPostSubjectField = document.querySelector(
      ".create__post-subject-field"
    ),
    createPostTagField = document.querySelector(".create__post-tag-field"),
    subjectDialogToggler = document.querySelector(
      ".create__post-subject-dialog-toggler"
    ),
    messageIndicator = document.querySelectorAll(".message__indicator"),
    messageIndicatorSpinner = document.querySelectorAll(
      ".message__indicator-spinner"
    ),
    confirmSubjectNameBtn = document.querySelector(".confirm__subject-name"),
    publishPostBtnLoadingSpinner = document.querySelector(
      ".publish__post-spinner"
    ),
    postThumbnailPicker = document.querySelector(
      ".create__post-thumbnail-picker"
    ),
    postThumbnailPreview = document.querySelector(
      ".create__post-thumbnail-preview"
    ),
    postThumbnailPreviewWrapper = document.querySelector(
      ".create__post-thumbnail-wrapper"
    );
  let postThumbNailImage;
  //Retrieve lost title and tag when accidentally leave/back
  createPostTitleField.value = recoverTitle.getItem(RECOVER_POST_TITLE);
  createPostTagField.value = recoverTag.getItem("recover_post_tag");
  createPostSubjectField.value = ""; // Set to null whenever page was loaded

  /* SAVE POST CONTENT: TITLE, TAG , CONTENT WHEN ACCIDENTALLY PRESS BACK */
  createPostTitleField.addEventListener("input", (e) => {
    e.preventDefault();
    recoverTitle.setItem(RECOVER_POST_TITLE, e.target.value);
  });
  createPostSubjectField.addEventListener("focus", (e) => {
    e.preventDefault();
    subjectDialogToggler.click();
  });
  createPostSubjectField.addEventListener("keypress", (e) => {
    e.preventDefault();
  });
  createPostTagField.addEventListener("input", (e) => {
    e.preventDefault();
    recoverTitle.setItem(RECOVER_POST_TAG, e.target.value);
  });

  // Pick image thumbnail
  postThumbnailPicker.addEventListener("change", (e) => {
    const file = postThumbnailPicker.files[0];
    const imageReader = new FileReader();

    imageReader.addEventListener(
      "load",
      async (e) => {
        postThumbnailPreviewWrapper.classList.add("preview__thumbnail");
        postThumbnailPreview.src = imageReader.result;
        postThumbNailImage = file;
      },
      false
    );
    if (file) {
      imageReader.readAsDataURL(file);
    }
  });

  /* FETCH AND SERVE ON SELECT */
  const subjectSelectYear = document.querySelector(".create__post-select-year");
  const subjectSelectSemester = document.querySelector(
    ".create__post-select-semester"
  );
  const subjectSelectSubject = document.querySelector(
    ".create__post-select-subject"
  );
  subjectSelectYear.innerHTML = `<option disabled selected>----</option>`;
  subjectSelectSemester.innerHTML = `<option disabled selected>----</option>`;
  subjectSelectSubject.innerHTML = `<option disabled selected>----</option>`;
  const getYearLevel = async () => {
    const response = await fetch("/get-year-level", {
      method: "GET",
      cache: "no-cache",
      mode: "cors",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 403) {
      const data = await response.json();
      return data;
    }
  };

  getYearLevel()
    .then((res) => {
      if (res.success === 1) {
        const suffix = ["st", "nd", "rd", "th"];
        const sortedYearNumber = res.year_level.sort(
          (a, b) => a.year_level_number - b.year_level_number
        );
        console.log(sortedYearNumber);
        for (let i = 0; i < sortedYearNumber.length; i++) {
          const selectOptionYear = document.createElement("option");
          selectOptionYear.setAttribute("class", "option__year");
          selectOptionYear.value = sortedYearNumber[i].year_level_id;
          selectOptionYear.innerHTML = `${sortedYearNumber[i].year_level_number}${suffix[i]}`;
          subjectSelectYear.appendChild(selectOptionYear);
        }
      }
    })
    .catch((err) => console.error(err));

  // LISTENER FOR YEAR SELECT
  subjectSelectYear.addEventListener("change", (e_select_year) => {
    messageIndicator[0].classList.remove("d-none");
    messageIndicatorSpinner[0].classList.remove("d-none");
    const year_level_id = e_select_year.target.value;
    requestForSemester(year_level_id)
      .then((res) => {
        if (res.semester.length > 0) {
          if (res.success === 1) {
            messageSuccess("Semester was found", 0);
            for (let i = 0; i < res.semester.length; i++) {
              const selectOptionSemester = document.createElement("option");
              selectOptionSemester.setAttribute("class", "option__semester");
              selectOptionSemester.value = res.semester[i].semester_id;
              selectOptionSemester.innerHTML = `${res.semester[i].semester_year_count} Semester`;
              selectOptionSemester.setAttribute(
                "data-year-level",
                res.semester[i].year_level_id
              );
              subjectSelectSemester.appendChild(selectOptionSemester);
            }
          }
        } else {
          messageFailed("No Semester was found", 0);
          messageIndicator[1].classList.add("d-none");
          subjectSelectSemester.innerHTML = `<option disabled selected>----</option>`;
          subjectSelectSubject.innerHTML = `<option disabled selected>----</option>`;
        }
      })
      .catch((err) => console.error(err));
  });

  //LISTENER FOR SEMESTER SELECT
  subjectSelectSemester.addEventListener("change", (e_select_semester) => {
    messageIndicator[1].classList.remove("d-none");
    messageIndicatorSpinner[1].classList.remove("d-none");
    const optionSemesterYearLevelId =
      e_select_semester.target.options[e_select_semester.target.selectedIndex]
        .dataset.yearLevel;
    const optionSemesterId = e_select_semester.target.value;
    requestForSubject(optionSemesterId, optionSemesterYearLevelId)
      .then((res) => {
        if (res.subjects.length > 0) {
          if (res.success === 1) {
            messageSuccess("Subject was found", 1);
            for (let i = 0; i < res.subjects.length; i++) {
              const optionSubject = document.createElement("option");
              optionSubject.setAttribute("class", "option__subjects");
              optionSubject.value = res.subjects[i].subject_id;
              optionSubject.innerHTML = `${res.subjects[i].subject_name} - ${res.subjects[i].subject_description}`;
              subjectSelectSubject.appendChild(optionSubject);
            }
          }
        } else {
          messageFailed("No subject was found", 1);
          subjectSelectSubject.innerHTML = `"<option disabled selected>----</option>"`;
        }
      })
      .catch((err) => console.error(err));
  });

  //LISTENER OFR SUBJECT NAME;
  subjectSelectSubject.addEventListener("change", (e_select_subject_name) => {
    const subject_info = [
      e_select_subject_name.target.options[
        e_select_subject_name.target.selectedIndex
      ],
    ];
    VALUE_AND_ID(subject_info[0].textContent, subject_info[0].value);
    confirmSubjectNameBtn.addEventListener("click", (e) => {
      createPostSubjectField.value = subject_info[0].textContent;
      createPostSubjectField.setAttribute(
        "data-subject-id",
        subject_info[0].value
      );
      subjectDialogToggler.setAttribute("data-bs-dismiss", "modal");
      subjectDialogToggler.click();
    });
  });

  //FORM CREATE POST
  formCreatePost.addEventListener("submit", (e) => {
    e.preventDefault();
    publishPostBtnLoadingSpinner.classList.remove("d-none");
    const createPostFormData = new FormData(formCreatePost);
    createPostFormData.append("post_title", createPostTitleField.value);
    createPostFormData.append(
      "post_subject",
      createPostSubjectField.dataset.subjectId
    );
    createPostFormData.append("post_tag", createPostTagField.value);
    createPostFormData.append(
      "post_body",
      tinymce.get("shareAnswerForm").getContent()
    );
    createPostFormData.append("post_thumbnail", postThumbNailImage);
    const sendCreatePost = async () => {
      const response = await fetch("/create-post", {
        method: "POST",
        body: createPostFormData,
        mode: "cors",
        cache: "no-cache",
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 400) {
        const data = await response.json();
        return data;
      }
    };
    sendCreatePost()
      .then((res) => {
        if (res.success === 1) {
          const USER_EMAIL = localStorage.getItem("user_email");
          const NOTIF_STATE = localStorage.getItem("notif_state");
          localStorage.clear();
          localStorage.setItem("user_email", USER_EMAIL);
          localStorage.setItem("notif_state", NOTIF_STATE);
          window.location.href = res.url;
        }
        if (res.error === 1) {
          alert(res.error_message);
          window.location.reload();
        }
      })
      .catch((err) => console.error(err));
  });

  const requestForSemester = async (year_level_id) => {
    const response = await fetch("/get-sem-for-year-level", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify({ year_level_id: year_level_id }),
    });
    if (response.ok) {
      const data = response.json();
      return data;
    } else if (response.status === 403) {
      const data = await response.json();
      return data;
    }
  };
  const requestForSubject = async (semester_id, year_level_id) => {
    const response = await fetch("/get-subject-for-semester-and-year-level", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify({
        semester_id: semester_id,
        year_level_id: year_level_id,
      }),
    });
    if (response.ok) {
      const data = response.json();
      return data;
    } else if (response.status === 403) {
      const data = await response.json();
      return data;
    }
  };

  const messageSuccess = (message_here, index) => {
    messageIndicatorSpinner[index].classList.add("d-none");
    messageIndicator[index].classList.remove("text-danger");
    messageIndicator[index].classList.add("text-success");
    messageIndicator[index].textContent = message_here;
  };
  const messageFailed = (message_here, index) => {
    messageIndicatorSpinner[index].classList.add("d-none");
    messageIndicator[index].classList.remove("text-success");
    messageIndicator[index].classList.add("text-danger");
    messageIndicator[index].textContent = message_here;
  };
  const VALUE_AND_ID = (subject_name, subject_id) => {
    console.log(subject_name, subject_id);
    return { subject_name, subject_id };
  };
});
