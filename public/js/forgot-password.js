window.addEventListener("DOMContentLoaded", () => {
  const formForgotPassword = document.querySelector(".form__forgot-password"),
    recoverEmail = document.querySelector(".recover__email"),
    loadingSpinner = document.querySelector(
      ".loading__spinner-forgot-password"
    ),
    btnSubmitPasswordReset = document.querySelector(".btn__password-reset"),
    passwordResetMessage = document.querySelector(".password__reset-message"),
    passwordResetLoading = document.querySelector(".loading-circle-other"),
    passwordResetSuccess = document.querySelector(".email__success-icon"),
    passwordResetError = document.querySelector(".email__error-icon"),
    passwordResetDialogBtnClose = document.querySelector(".btn-close");

  formForgotPassword.addEventListener("submit", (e) => {
    e.preventDefault();
    loadingSpinner.classList.remove("d-none");
    let btnConfig = [
      ["type", "button"],
      ["data-bs-toggle", "modal"],
      ["data-bs-target", "dialogForgotPasswordAlert"],
    ];
    btnSubmitPasswordReset.setAttribute(btnConfig[0][0], "button");
    btnSubmitPasswordReset.setAttribute(btnConfig[1][0], "modal");
    btnSubmitPasswordReset.setAttribute(
      btnConfig[2][0],
      "#dialogForgotPasswordAlert"
    );
    btnSubmitPasswordReset.click();
    const sendRecoverAccountRequest = async () => {
      try {
        const response = await fetch("/forgot-password", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify({ recovery_email: recoverEmail.value }),
        });
        // const total = response.headers.get("")
        if (response.ok) {
          const data = await response.json();
          return data;
        } else if (response.status === 401) {
          const data = await response.json();
          return data;
        }
      } catch (err) {
        console.error(err);
      }
    };
    sendRecoverAccountRequest()
      .then((res) => {
        loadingSpinner.classList.add("d-none");
        for (let i in btnConfig) {
          btnSubmitPasswordReset.removeAttribute(btnConfig[i][0]);
        }
        if (res.error === 1) {
          passwordResetLoading.classList.add("d-none");
          passwordResetError.classList.remove("d-none");
          passwordResetMessage.classList.replace(
            "text-black-50",
            "text-danger"
          );
          passwordResetMessage.textContent = res.error_message;
        }
        if (res.success === 1) {
          passwordResetLoading.classList.add("d-none");
          passwordResetSuccess.classList.remove("d-none");
          passwordResetMessage.classList.replace(
            "text-black-50",
            "text-success"
          );
          passwordResetMessage.textContent = res.success_message;
        }
        passwordResetDialogBtnClose.addEventListener("click", () => {
          passwordResetLoading.classList.remove("d-none");
          passwordResetSuccess.classList.add("d-none");
          passwordResetError.classList.add("d-none");
          passwordResetMessage.classList.remove("text-danger");
          passwordResetMessage.classList.remove("text-success");
          passwordResetMessage.classList.add("text-black-50");
          passwordResetMessage.textContent =
            "Sending password reset request, Please Wait";
        });
      })
      .catch((err) => console.error(err));
  });
});
