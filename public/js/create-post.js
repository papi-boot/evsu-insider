/* eslint-disable no-useless-escape */

const btnSubmitPost = document.querySelector(".btn__submit-post");

btnSubmitPost.addEventListener("click", (e) => {
  fetch("/send-notification", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        window.location.href = data.url;
      }
    })
    .catch((err) => console.error(err));
});
