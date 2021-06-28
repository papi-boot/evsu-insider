window.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.querySelector(".btn__delete-answer");
  const dataPostId_delete = deleteButton.dataset.postId;
  const loadingSpinner = document.querySelectorAll(".loading-spinner");

  // Update form
  const updateForm = document.querySelector(".update__form");
  const updateTitle = document.querySelector(".update__title");
  const updateTag = document.querySelector(".update__tag");
  const updateBody = document.querySelector(".update__body");
  const updateBtn = document.querySelector(".btn__update-answer");
  const dataPostId_update = updateBtn.dataset.postId;

  //click event to trigger delete request
  deleteButton.addEventListener("click", () => {
    //send Delete Http Request
    loadingSpinner.forEach((item) => item.classList.remove("d-none"));
    const deleteOnePost = async () => {
      try {
        const response = await fetch(
          `/post-options?post_id=${dataPostId_delete}`,
          {
            method: "DELETE",
            cache: "no-cache",
            mode: "cors",
          }
        );
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          const message = {
            error: "Something went wrong on deleting the content.",
          };
          return message;
        }
      } catch (err) {
        console.error(err);
      }
    };

    //DELETE REQUEST PROMISE
    deleteOnePost()
      .then((res) => {
        window.location.href = res.url;
      })
      .catch((err) => console.error(err));
  });

  //click event to trigger put request
  updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loadingSpinner.forEach((item) => item.classList.remove("d-none"));

    const postUpdatedContent = {
      post_title: updateTitle.value,
      post_tag: updateTag.value,
      // eslint-disable-next-line no-undef
      post_body: tinymce.get("shareAnswerForm").getContent(),
    };
    const updateOnePost = async () => {
      try {
        const response = await fetch(
          `/post-options?post_id=${dataPostId_update}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-cache",
            mode: "cors",
            body: JSON.stringify(postUpdatedContent),
          }
        );
        const data = await response.json();

        if (response.ok) {
          return data;
        } else {
          const message = {
            message:
              "Something went wrong when attempted to update the answer.",
          };
          return message;
        }
      } catch (err) {
        console.error(err);
      }
    };

    //UPDATE REQUEST PROMISE
    updateOnePost()
      .then((res) => {
        window.location.href = res.url;
      })
      .catch((err) => console.error(err));
  });
});
