const formProfileChangePassword = document.querySelector(
    ".form__profile-change-password"
  ),
  changePasswordBtn = document.querySelector(".change__password-btn"),
  toggleShowPassword = document.querySelector(".show__password"),
  passwordInputField = document.querySelectorAll(".change__password-field"),
  passwordCheckerInfo = document.querySelectorAll(".password__checker"),
  cirlceCheckIcon = document.querySelectorAll(".bi-check-circle-fill"),
  loadingSpinnerChangePassword = document.querySelector(
    ".change__password-loading-spinner"
  ),
  alertBoxChangePassword = document.querySelectorAll(".alert__change-password"),
  alertMessageChangePassword = document.querySelectorAll(
    ".change__password-alert-message"
  );

/* Password input field in array 
1. input[0] = Current Password
2. input[1] = New Password
3. input[2] = Confirm New Password
 */

//toggle show password for all password input field
toggleShowPassword.addEventListener("change", (e) => {
  e.preventDefault();
  passwordInputField.forEach((item) => {
    const type = item.getAttribute("type") === "password" ? "text" : "password";
    item.setAttribute("type", type);
    if (toggleShowPassword.checked) {
      item.setAttribute("type", type);
    } else {
      item.setAttribute("type", type);
    }
  });
});

//password checker pasword length should be 8 characters long
passwordInputField[1].addEventListener("input", (e) => {
  e.preventDefault();
  passwordCheckerInfo[0].classList.remove("d-none");
  if (e.target.value.length >= 8) {
    passwordCheckerInfo[0].classList.remove("text-danger");
    passwordCheckerInfo[0].classList.add("text-success");
    cirlceCheckIcon[0].classList.remove("d-none");
  } else {
    passwordCheckerInfo[0].classList.remove("text-success");
    passwordCheckerInfo[0].classList.add("text-danger");
    cirlceCheckIcon[0].classList.add("d-none");
  }
});

//confirm password to check if this confirm password are equals to new password
passwordInputField[2].addEventListener("input", (e) => {
  e.preventDefault();
  passwordCheckerInfo[1].classList.remove("d-none");

  if (e.target.value === passwordInputField[1].value) {
    passwordCheckerInfo[1].classList.remove("text-danger");
    passwordCheckerInfo[1].classList.add("text-success");
    passwordCheckerInfo[1].innerHTML = `Password matched. <i class="bi bi-check-circle-fill f_size-1"></i>`;
    changePasswordBtn.removeAttribute("disabled");
  } else {
    passwordCheckerInfo[1].classList.remove("text-success");
    passwordCheckerInfo[1].classList.add("text-danger");
    passwordCheckerInfo[1].innerHTML = `Password matched.`;
    changePasswordBtn.setAttribute("disabled", "true");
  }
});

//submit change password request
formProfileChangePassword.addEventListener("submit", (e) => {
  e.preventDefault();
  loadingSpinnerChangePassword.classList.remove("d-none");
  changePasswordBtn.setAttribute("disabled", "true");
  const sendChangePasswordRequest = async () => {
    const changePasswordURL = "/change-password";
    try {
      if (passwordInputField[1].value === passwordInputField[2].value) {
        const response = await fetch(changePasswordURL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify({
            current_password: passwordInputField[0].value,
            new_password: passwordInputField[1].value,
            confirm_new_password: passwordInputField[2].value,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          return data;
        } else if (response.status === 401) {
          const data = await response.json();
          return data;
        } else {
          return;
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  sendChangePasswordRequest()
    .then((res) => {
      loadingSpinnerChangePassword.classList.add("d-none");
      if (res.error) {
        alertBoxChangePassword[1].classList.remove("d-none");
        alertBoxChangePassword[1].classList.add("error__shake");
        alertMessageChangePassword[1].textContent = res.error_message;
        passwordCheckerInfo.forEach((item) => item.classList.add("d-none"));
        passwordInputField.forEach((item) => (item.value = ""));
        changePasswordBtn.setAttribute("disabled", "true");
        setTimeout(() => {
          alertBoxChangePassword[1].classList.add("d-none");
        }, 6000);
      }
      if (res.success) {
        alertBoxChangePassword[0].classList.remove("d-none");
        alertMessageChangePassword[0].textContent = res.success_message;
        passwordCheckerInfo.forEach((item) => item.classList.add("d-none"));
        passwordInputField.forEach((item) => (item.value = ""));
        changePasswordBtn.setAttribute("disabled", "true");
        setTimeout(() => {
          alertBoxChangePassword[0].classList.add("d-none");
        }, 6000);
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
