const {
  formatDistanceToNow,
  add,
  parseISO,
  formatRelative,
} = require("date-fns");
window.addEventListener("DOMContentLoaded", () => {
  const searchToggleBtn = document.querySelector(".search__toggle-btn");
  const searchFieldContainer = document.querySelector(
    ".search__field-container"
  );
  const searchFieldCloseBtn = document.querySelector(".search__btn-close");
  const searchByDialogBtn = document.querySelector(".search__by-btn");
  const searchByDialog = document.querySelector(".search-by-dialog");
  const searchInputField = document.querySelector(".search__input-field");
  const searchPostContainer = document.querySelector(
    ".post__results-container"
  );
  searchPostContainer.innerHTML = `<div class="loading__search-result loading-content d-none"></div>`;
  const loadingSearchResult = document.querySelector(".loading__search-result");

  let isOpen = false;
  let isOpenTwo = false;
  searchToggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.key);
    if (!isOpen) {
      searchFieldContainer.classList.remove("close");
      searchFieldContainer.classList.add("open");
      isOpen = false;
    } else {
      searchFieldContainer.classList.remove("open");
      searchFieldContainer.classList.add("close");
      isOpen = true;
    }
  });
  searchFieldCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchFieldContainer.classList.remove("open");
    searchFieldContainer.classList.add("close");
  });

  searchByDialogBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isOpenTwo) {
      searchByDialog.classList.remove("d-none");
      isOpenTwo = true;
    } else {
      searchByDialog.classList.add("d-none");
      isOpenTwo = false;
    }
  });
  window.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      searchByDialog.classList.remove("d-none");
      e.preventDefault();
    }
  });

  const searchByTitle = document.querySelector(".search__by-title");
  const searchByUser = document.querySelector(".search__by-user");
  const searchBySubject = document.querySelector(".search__by-subject");
  const searchByTag = document.querySelector(".search__by-tag");

  //for Title
  searchByTitle.addEventListener("click", async (e) => {
    e.preventDefault();
    loadingSearchResult.classList.remove("d-none");
    searchByDialog.classList.add("d-none");
    isOpenTwo = false;
    searchPostContainer.innerHTML = `<div class="loading__search-result loading-content"></div>`;
    const key_search = "key_title";
    SearchRequest(searchInputField.value, key_search)
      .then((result) => {
        const keyword = "Title";
        searchWorker(result, keyword);
      })
      .catch((err) => console.error(err));
  });

  //for User
  searchByUser.addEventListener("click", async (e) => {
    e.preventDefault();
    loadingSearchResult.classList.remove("d-none");
    searchByDialog.classList.add("d-none");
    isOpenTwo = false;
    searchPostContainer.innerHTML = `<div class="loading__search-result loading-content"></div>`;
    const key_search = "key_user";
    SearchRequest(searchInputField.value, key_search)
      .then((result) => {
        const keyword = "Person";
        searchWorker(result, keyword);
      })
      .catch((err) => console.error(err));
  });

  //for Subject
  searchBySubject.addEventListener("click", async (e) => {
    e.preventDefault();
    loadingSearchResult.classList.remove("d-none");
    searchByDialog.classList.add("d-none");
    isOpenTwo = false;
    searchPostContainer.innerHTML = `<div class="loading__search-result loading-content"></div>`;
    const key_search = "key_subject";
    SearchRequest(searchInputField.value, key_search)
      .then((result) => {
        const keyword = "Subject";
        searchWorker(result, keyword);
      })
      .catch((err) => console.error(err));
  });

  //for Tag
  searchByTag.addEventListener("click", async (e) => {
    e.preventDefault();
    loadingSearchResult.classList.remove("d-none");
    searchByDialog.classList.add("d-none");
    isOpenTwo = false;
    searchPostContainer.innerHTML = `<div class="loading__search-result loading-content"></div>`;
    const key_search = "key_tag";
    SearchRequest(searchInputField.value, key_search)
      .then((result) => {
        const keyword = "Tag";
        searchWorker(result, keyword);
      })
      .catch((err) => console.error(err));
  });

  //Process Search on server
  const SearchRequest = async (search_params, search_by_key) => {
    const response = await fetch("/search-result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        search_params: search_params,
        search_by: search_by_key,
      }),
    });
    if (response.ok) {
      const data = response.json();
      return data;
    }
  };

  const svgIcon = [
    `<svg id="Capa_1" enable-background="new 0 0 511.096 511.096" height="16" viewBox="0 0 511.096 511.096" width="16"
        xmlns="http://www.w3.org/2000/svg" fillColor="#ff0000">
        <g id="Speech_Bubble_48_">
          <g>
            <path style="fill: #730000"
              d="m74.414 480.548h-36.214l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-59.127-38.802-88.554-95.014-88.554-153.944 0-108.719 99.923-219.203 256.414-219.203 165.785 0 254.682 101.666 254.682 209.678 0 108.724-89.836 210.322-254.682 210.322-28.877 0-59.01-3.855-85.913-10.928-25.467 26.121-59.973 40.928-96.087 40.928z" />
          </g>
        </g>
      </svg>`,
  ];
  /*
    svgIcon[0] - comment_count 
   */
  //Process search to be onclick
  const searchWorker = (result, keyword) => {
    if (result.found === 1) {
      searchPostContainer.innerHTML = `<div class="loading__search-result loading-content d-none"></div>`;
      const resultFound = document.createElement("h6");
      resultFound.setAttribute("class", "text-white");
      resultFound.innerText = `Result found (${result.results.length}), Search related by ${keyword}`;
      searchPostContainer.appendChild(resultFound);
      for (let i = 0; i < result.results.length; i++) {
        const post = document.createElement("div");
        const dateOption = {
          ADD_SUFFIX: {
            addSuffix: true,
          },
        };

        const isPin = () => {
          if (result.results[i].post_pin) {
            return `<sup class="badge bg-primary f_size-5 mx-1">Pinned<i class="bi bi-pin-angle-fill ms-1"></i></sup>`;
          } else {
            return ``;
          }
        };
        const isUpdated = () => {
          if (
            result.results[i].post_created_at !==
            result.results[i].post_updated_at
          ) {
            return `<sup class="badge bg-danger f_size-5 mx-1">Updated<i class="bi bi-star-fill ms-1"></i></sup>`;
          } else {
            return ``;
          }
        };
        const isAdmin = () => {
          if (result.results[i].user_state == 2) {
            return `<sup class="post__result-admin-tag badge bg-success">Admin</sup>`;
          } else {
            return ``;
          }
        };
        const haveComment = () => {
          if (parseInt(result.results[i].comment_count) > 0) {
            return `<div class="post__result-comment-count fw_600 mx-1 f_size-3">${svgIcon[0]}&nbsp;(${result.results[i].comment_count})</div>`;
          } else {
            return ``;
          }
        };
        post.innerHTML = `
        <article class="post__result-article post__result-float" data-post-id="${
          result.results[i].post_id
        }" data-subject-id="${result.results[i].subject_id}">
          <h5 class="fw_600 m-0">${
            result.results[i].post_title
          }${isPin()}${isUpdated()}</h5>
          <div class="d-flex align-items-center flex-wrap">
            <div class="post__result-image-container">
              <img class="post__result-user-image" src="${
                result.results[i].profile_image_url
              }" loading="lazy">
            </div>
            <h6 class="post__result-user-name f_size-3 fw_500 mx-1 m-0">${
              result.results[i].user_fullname
            }<span>${isAdmin()}</span></h6>•<h6 class="f_size-3 fw_500 mx-1 m-0">${formatDistanceToNow(
          parseISO(result.results[i].post_created_at),
          dateOption.ADD_SUFFIX
        )}</h6>•<h6 class="f_size-3 fw_500 mx-1 m-0">${formatRelative(
          add(parseISO(result.results[i].post_created_at)),
          new Date()
        )}</h6>
          </div>
          <div class="post__result-sub-header d-flex align-items-center flex-wrap">
            <div class="post__result-tag fw_600 mx-1 f_size-3">${
              result.results[i].post_tag
            }</div>
            <div class="post__result-subject fw_600 border mx-1 f_size-3">${
              result.results[i].subject_name
            }</div>
            ${haveComment()}
          </div
        </article>`;
        // loadingSearchResult.classList.add("d-none")
        searchPostContainer.appendChild(post);
      }
      const postResultArticle = document.querySelectorAll(
        ".post__result-article"
      );
      for (let i = 0; i < postResultArticle.length; i++) {
        postResultArticle[i].addEventListener("click", (e) => {
          Array.from(postResultArticle).indexOf(e.target);
          const postID = postResultArticle[i].dataset.postId;
          const subjectID = postResultArticle[i].dataset.subjectId;
          window.location.href = `/post?post_id=${postID}&subject_id=${subjectID}`;
        });
      }
    }
    if (result.found === 0) {
      searchPostContainer.innerHTML = `<div class="loading__search-result loading-content d-none"></div>`;
      const no_found = document.createElement("h3");
      no_found.textContent = `Result found (0), Search by ${keyword}`;
      no_found.setAttribute("class", "text-center text-white my-3");
      searchPostContainer.appendChild(no_found);
    }
  };
});
