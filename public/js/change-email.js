//send email change request
const profileSettingsEmail = document.querySelector(".profile__settings-email");
const loadingEmailSpinner = document.querySelector(
  ".change__email-loading-spinner"
);
const formChangeEmail = document.querySelector(".form__update-email");
const alertChangeEmail = document.querySelectorAll(".alert__change-email");
const alertChangeEmailMessage = document.querySelectorAll(
  ".change__email-alert-message"
);
formChangeEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  loadingEmailSpinner.classList.remove("d-none");
  const sendChangeEmailRequest = async () => {
    const response = await fetch("/change-email", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify({ email: profileSettingsEmail.value }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 409) {
      const data = response.json();
      return data;
    } else {
      return;
    }
  };
  sendChangeEmailRequest()
    .then((res) => {
      if (res.success === 1) {
        alertChangeEmail[0].classList.remove("d-none");
        alertChangeEmailMessage[0].innerHTML = res.success_message;
        loadingEmailSpinner.classList.add("d-none");
        setTimeout(() => {
          alertChangeEmail[0].classList.add("d-none");
        }, 5000);
      }
      if (res.error === 1) {
        alertChangeEmail[1].classList.remove("d-none");
        alertChangeEmailMessage[1].innerHTML = res.error_message;
        loadingEmailSpinner.classList.add("d-none");
        setTimeout(() => {
          alertChangeEmail[1].classList.add("d-none");
        }, 5000);
      }
    })
    .catch((err) => console.error(err));
});
