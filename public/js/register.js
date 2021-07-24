window.addEventListener("DOMContentLoaded", () => {
  const regUserName = document.querySelector(".reg_user_name");
  const regUserEmail = document.querySelector(".reg_user_email");
  const regUserPassword = document.querySelector(".reg_user_password");
  const regUserConfirmPassword = document.querySelector(
    ".reg_user_confirm_password"
  );
  const formRegister = document.querySelector(".form__container-register");

  //password and confirm password checker
  const passwordChecker = document.querySelector(".password__checker");
  const confirmPasswordChecker = document.querySelector(
    ".confirm__password-checker"
  );
  const checkIcon = document.querySelectorAll(".bi-check-circle-fill");
  const showPassword = document.querySelector(".show__password");

  const SESSION_STORAGE_NAME = "register_user_name",
    SESSION_STORAGE_EMAIL = "register_user_email";

  let registerSessionStorage = sessionStorage;
  let recoverCredentials = {
    user_name: registerSessionStorage.getItem(SESSION_STORAGE_NAME),
    user_email: registerSessionStorage.getItem(SESSION_STORAGE_EMAIL),
  };
  regUserName.value = recoverCredentials.user_name;
  regUserEmail.value = recoverCredentials.user_email;
  registerSessionStorage.clear();

  //Store session email and name on session storage
  let forEmailLocalStorage = localStorage;
  formRegister.addEventListener("submit", () => {
    registerSessionStorage.setItem(SESSION_STORAGE_NAME, regUserName.value);
    registerSessionStorage.setItem(SESSION_STORAGE_EMAIL, regUserEmail.value);
    forEmailLocalStorage.setItem("user_email", regUserEmail.value);
  });

  //password listener
  regUserPassword.addEventListener("input", (e) => {
    e.preventDefault();
    passwordChecker.classList.remove("d-none");

    if (e.target.value.length >= 8) {
      passwordChecker.classList.remove("text-danger");
      passwordChecker.classList.add("text-success");
      checkIcon[0].classList.remove("d-none");
    } else {
      passwordChecker.classList.add("text-danger");
      passwordChecker.classList.remove("text-success");
      checkIcon[0].classList.add("d-none");
    }
  });

  //password confirm checker
  regUserConfirmPassword.addEventListener("input", (e) => {
    e.preventDefault();
    confirmPasswordChecker.classList.remove("d-none");

    if (e.target.value === regUserPassword.value) {
      confirmPasswordChecker.classList.remove("text-danger");
      confirmPasswordChecker.classList.add("text-success");
      confirmPasswordChecker.innerHTML = `Password matched. <i class="bi bi-check-circle-fill f_size-1"></i>`;
    } else {
      confirmPasswordChecker.classList.add("text-danger");
      confirmPasswordChecker.classList.remove("text-success");
      confirmPasswordChecker.innerHTML = `Password do not matched.`;
    }
  });

  //show password checker
  const passwordField = document.querySelectorAll("input[type=password]");
  showPassword.addEventListener("change", (e) => {
    e.preventDefault();
    passwordField.forEach((item) => {
      const type =
        item.getAttribute("type") === "password" ? "text" : "password";
      item.setAttribute("type", type);
      if (showPassword.checked) {
        item.setAttribute("type", type);
      } else {
        item.setAttribute("type", type);
      }
    });
  });
});
