window.addEventListener("DOMContentLoaded", () => {
  const loadingContainer = document.querySelector(".loading-container");
  const btnSignIn = document.querySelector(".btn__sign-in");
  const rememberMe = document.querySelector(".remember-me");
  const formLogin = document.querySelector(".form__container-login");

  //input for credentials save to session storage
  const inputEmail = document.querySelector(".user__email");
  const inputPassword = document.querySelector(".user__password");
  let loginStorage = localStorage; // Set LocalStorage for email only and not inlcuding password Storage

  let user_email = loginStorage.getItem("user_email");
  inputEmail.value = user_email;

  let rememberMeState = loginStorage.getItem("remember_me_state");
  if (rememberMeState === "true") {
    rememberMe.checked = true;
  } else {
    rememberMe.checked = false;
  }

  rememberMe.addEventListener("change", (e) => {
    e.preventDefault();
    if (rememberMe.checked) {
      let setRememberMe = true;
      loginStorage.setItem("remember_me_state", setRememberMe);
    } else {
      let setRememberMe = false;
      loginStorage.setItem("remember_me_state", setRememberMe);
    }
  });

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    loadingContainer.classList.remove("d-none");
    const sendLoginRequest = async () => {
      
      const response = await fetch("/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        body: JSON.stringify({
          remember_me: rememberMe.checked ? true : false,
          email: inputEmail.value,
          password: inputPassword.value,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status >= 400 && response.status <= 499) {
        window.location.reload();
      }
    };

    sendLoginRequest()
      .then((res) => {
        window.location.href = res.authenticate_url;
      })
      .catch((err) => console.error(err));
  });

  btnSignIn.addEventListener("click", () => {
    const loginCredentials = {
      user_email: inputEmail.value,
    };

    loginStorage.setItem("user_email", loginCredentials.user_email);
  });
});
