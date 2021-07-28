const loadingSpinner = document.querySelector(".password_reset__loading"),
  formResetPassword = document.querySelector(".form__reset-password"),
  passwordResetInputField = document.querySelectorAll(`input[type="password"]`),
  passwordToggleView = document.querySelector(`input[type="checkbox"]`),
  passwordResetBtn = document.querySelector(".btn__password-reset");
fetch("/q", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      loadingSpinner.classList.add("d-none");
    }
  })
  .catch((err) => console.error(err));

passwordToggleView.addEventListener("change", (e) => {
  e.preventDefault();

  if (passwordToggleView.checked) {
    passwordResetInputField.forEach((item) => {
      item.setAttribute("type", "text");
    });
  } else {
    passwordResetInputField.forEach((item) => {
      item.setAttribute("type", "password");
    });
  }
});

const el_password_checker = () => {
  const text_checker = document.createElement("p");
  text_checker.innerHTML = `Password should be at least 8 characters long.`;
  text_checker.classList.add("reset__password-checker");
  text_checker.classList.add("d-none");
  text_checker.classList.add("text-danger");
  text_checker.classList.add("fw_600");
  text_checker.classList.add("f_size-3");
  return text_checker;
};

//Append Password Checker
passwordResetInputField[0].parentNode.insertBefore(
  el_password_checker(),
  passwordResetInputField[0].nextSibling
);
passwordResetInputField[1].parentNode.insertBefore(
  el_password_checker(),
  passwordResetInputField[1].nextSibling
);

const passwordChecker = document.querySelectorAll(".reset__password-checker");
passwordResetInputField[0].addEventListener("input", (e) => {
  e.preventDefault();
  passwordChecker[0].classList.remove("d-none");
  if (e.target.value.length >= 8) {
    passwordChecker[0].classList.remove("text-danger");
    passwordChecker[0].classList.add("text-success");
    passwordChecker[0].innerHTML = `Password should be at least 8 characters long. <i class="bi bi-check-circle-fill f_size-1"></i>`;
  } else {
    passwordChecker[0].classList.remove("text-success");
    passwordChecker[0].classList.add("text-danger");
    passwordChecker[0].innerHTML = `Password should be at least 8 characters long.`;
  }
});

passwordResetInputField[1].addEventListener("input", (e) => {
  e.preventDefault();
  passwordChecker[1].classList.remove("d-none");
  if (
    e.target.value === passwordResetInputField[0].value &&
    e.target.value.length >= 8
  ) {
    passwordChecker[1].classList.remove("text-danger");
    passwordChecker[1].classList.add("text-success");
    passwordChecker[1].innerHTML = `Password matched. <i class="bi bi-check-circle-fill f_size-1"></i>`;
    passwordResetBtn.removeAttribute("disabled");
  } else {
    passwordChecker[1].classList.remove("text-success");
    passwordChecker[1].classList.add("text-danger");
    passwordChecker[1].innerHTML =
      e.target.value === passwordResetInputField[0].value
        ? `Password should be at least 8 characters long.`
        : `Password do not matched.`;
    passwordResetBtn.setAttribute("disabled", "true");
  }
});

//toggle alert box
let passwordResetBtnConfig = [
  ["type", "button"],
  ["data-bs-toggle", "modal"],
  ["data-bs-target", "dialogPasswordReset"],
];
const passwordResetStatusIcon = document.querySelectorAll(
    ".password__reset-status-icon"
  ),
  passwordResetStatusMessage = document.querySelector(
    ".password__reset-message"
  ),
  passwordResetLoading = document.querySelector(".password__reset-loading");
formResetPassword.addEventListener("submit", (e) => {
  e.preventDefault();
  passwordResetBtn.setAttribute(passwordResetBtnConfig[0][0], "button");
  passwordResetBtn.setAttribute(passwordResetBtnConfig[1][0], "modal");
  passwordResetBtn.setAttribute(
    passwordResetBtnConfig[2][0],
    "#dialogResetPasswordAlert"
  );
  passwordResetBtn.click();
  if (passwordResetInputField[0].value === passwordResetInputField[1].value) {
    const sendResetPasswordRequest = async () => {
      try {
        var urlParams = window.location.search;
        var getQuery = urlParams.split("?")[1];
        var params = getQuery.split("&");
        const url = "/reset-password";
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify({
            new_password: passwordResetInputField[0].value,
            confirm_new_password: passwordResetInputField[1].value,
            prt: params[0].replace("prt=", ""),
            prs: params[1].replace("prs=", ""),
          }),
        });
        if (response.ok) {
          const data = response.json();
          return data;
        } else if (response.status === 226) {
          const data = response.json();
          return data;
        } else if (response.status === 409) {
          const data = response.json();
          return data;
        } else {
          return;
        }
      } catch (err) {
        console.error(err);
      }
    };
    sendResetPasswordRequest()
      .then((res) => {
        if (res.success === 1) {
          passwordResetLoading.classList.add("d-none");
          passwordResetStatusIcon[0].classList.remove("d-none");
          passwordResetStatusMessage.innerHTML = res.success_message;
        }
        if (res.error === 1) {
          passwordResetLoading.classList.add("d-none");
          passwordResetStatusIcon[1].classList.remove("d-none");
          passwordResetStatusMessage.innerHTML = res.error_message;
        }
      })
      .catch((err) => console.error(err));
  } else {
    passwordChecker[1].classList.remove("text-success");
    passwordChecker[1].classList.add("text-danger");
    passwordChecker[1].innerHTML =
      e.target.value === passwordResetInputField[0].value
        ? `Password should be at least 8 characters long.`
        : `Password do not matched.`;
    passwordResetBtn.setAttribute("disabled", "true");
  }
});
