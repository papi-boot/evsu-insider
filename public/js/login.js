window.addEventListener("DOMContentLoaded", () => {
  const loadingSignIn = document.querySelector(".loading-container");
  const btnSignIn = document.querySelector(".btn__sign-in");

  btnSignIn.addEventListener("click", (e) => {
    loadingSignIn.classList.remove("d-none");
  })
});
