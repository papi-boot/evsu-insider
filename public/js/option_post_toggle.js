window.addEventListener("DOMContentLoaded", () => {
  const toggleOptionBtn = document.querySelectorAll(".pin__post");
  const optionContainer = document.querySelectorAll(".option-container");

  //for delete dialog
  const deleteOptionBtn = document.querySelectorAll(".delete__option-btn");
  const deleteDialog = document.querySelectorAll(".custom__delete-dialog");
  const deleteDialogCancel = document.querySelectorAll(
    ".custom__dialog-btn-cancel"
  );
  const deleteDialogConfirm = document.querySelectorAll(
    ".custom__dialog-btn-confirm"
  );

  const pinPost = document.querySelectorAll(".pin__option-btn");
  const unPinPost = document.querySelectorAll(".unpin__option-btn");

  // Option Card open
  for (let i = 0; i < toggleOptionBtn.length; i++) {
    let optionIsOpen = false;
    toggleOptionBtn[i].addEventListener("click", (e) => {
      if (!optionIsOpen) {
        optionContainer[i].classList.remove("d-none");
        optionIsOpen = true;
      } else {
        optionContainer[i].classList.add("d-none");
        optionIsOpen = false;
      }
      toggleOptions(e, toggleOptionBtn[i].dataset.postId);
    });
  }
  const toggleOptions = (e) => {
    Array.from(toggleOptionBtn).indexOf(e.target) + 1;
  };

  //Open DELETE dialog -- Close or Confirm Delete
  for (let i = 0; i < deleteOptionBtn.length; i++) {
    deleteOptionBtn[i].addEventListener("click", (e) => {
      deleteDialog[i].classList.remove("d-none");
      deletePostOpenDialog(e);
    });
    deleteDialogCancel[i].addEventListener("click", (e) => {
      deleteDialog[i].classList.add("d-none");
      closeDialog(e);
    });
    deleteDialogConfirm[i].addEventListener("click", (e) => {
      confirmDeletePost(e, deleteDialogConfirm[i].dataset.postId);
    });
  }

  // Open dialog for delete confirmation
  const deletePostOpenDialog = (e) => {
    Array.from(deleteOptionBtn).indexOf(e.target) + 1;
  };

  //Cancel/Close dialog delete
  const closeDialog = (e) => {
    Array.from(deleteDialogCancel).indexOf(e.target) + 1;
  };

  //Delete post/answer
  const confirmDeletePost = (e, dataPostId) => {
    Array.from(deleteDialogConfirm).indexOf(e.target) + 1;

    const deleteOnePost = async () => {
      try {
        const URL_DELETE_POST = `/evsu-insider/post-options?post_id=${dataPostId}`;
        const response = await fetch(URL_DELETE_POST, {
          method: "DELETE",
          cache: "no-cache",
          mode: "cors",
        });
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
  };

  //pin options post push
  for (let i = 0; i < pinPost.length; i++) {
    pinPost[i].addEventListener("click", (e) => {
      e.preventDefault();
      initializePinPost(e, pinPost[i].dataset.postId);
    });
  }

  for (let i = 0; i < unPinPost.length; i++) {
    unPinPost[i].addEventListener("click", (e) => {
      e.preventDefault();
      initializeUnPinPost(e, unPinPost[i].dataset.postId);
    });
  }

  //Pin Post
  const initializePinPost = (e, dataPostId) => {
    Array.from(pinPost).indexOf(e.target) + 1;

    const setIsPinPost = true;
    pinOptionConfig(e, dataPostId, setIsPinPost).then((res) => {
      window.location.href = res.url;
    });
  };

  //Unpin post
  const initializeUnPinPost = (e, dataPostId) => { 
    Array.from(unPinPost).indexOf(e.target);

    const setIsPinPost = false;
    pinOptionConfig(e, dataPostId, setIsPinPost).then((res) => {
      window.location.href = res.url;
    });
  };

  const pinOptionConfig = async (e, dataPostId, setPinPost) => {
    try {
      const URL_PIN_POST = `/evsu-insider/post-options/update?post_id=${dataPostId}`;
      const response = await fetch(URL_PIN_POST, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        mode: "cors",
        body: JSON.stringify({ pin_post: setPinPost }),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        const message = {
          message: "Something went wrong on pinning the post",
        };
        return message;
      }
    } catch (err) {
      console.error(err);
    }
  };
});
