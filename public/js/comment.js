/* eslint-disable no-undef */
import renderComments from "./fetch-comment";
window.addEventListener("load", async () => {
  const btnComment = document.querySelector(".btn__comment");
  const commentForm = document.querySelector(".form__comment");
  const loadingSpinner = document.querySelector(".loading-spinner");
  const sessionTriggerFocusStorage = sessionStorage;
  const NEW_COMMENT = "new_comment";
  const comment_body = document.querySelectorAll(".comment__body");

  //comment enable button

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loadingSpinner.classList.remove("d-none");
    renderComments;

    const postComment = async () => {
      const response = await fetch("/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          comment_body: tinymce.get("commentField").getContent(),
          post_id: btnComment.dataset.postId,
          subject_id: btnComment.dataset.subjectId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    };
    postComment()
      .then((res) => {
        console.log("Comment Success", res);
        tinymce.get("commentField").setContent("".trim());
        sessionTriggerFocusStorage.setItem(NEW_COMMENT, res.new_comment);

        window.location.href = res.url;
      })
      .catch((err) => console.error(err));
  });

  //comment autofocus
  const focusToNewComment = () => {
    const commentToFocus = sessionTriggerFocusStorage.getItem(NEW_COMMENT);

    for (let i = 0; i < comment_body.length; i++) {
      Array.from(comment_body).indexOf(comment_body[i]);
      const commentBodyFocus = comment_body[i].getAttribute("id");
      if (commentBodyFocus === commentToFocus) {
        window.location.hash = `#${commentToFocus}`; 
        comment_body[i].classList.add("new__comment");
        setTimeout(() => {
          comment_body[i].classList.add("fade__new-comment");
        }, 4000);
      }
    }
    sessionTriggerFocusStorage.clear();
  };
  focusToNewComment();
});
