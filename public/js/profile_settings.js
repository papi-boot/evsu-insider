window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".show__password")) {
    require("./change-password");
  }
  require("./change-email");
  const profileInformationBtnDropDown = document.querySelectorAll(
    ".dropdown__profile-info-option-toggler"
  );
  const changePasswordContainer = document.querySelector(
    ".change__password-option"
  );
  const changeEmailContainer = document.querySelector(".change__email-option");
  const btnUpdateProfileSettings = document.querySelector(
    ".btn__update-profile-info"
  ); //btn to update information not password
  let imageFile;
  let isOpen = false;

  //for Email option dropdown
  profileInformationBtnDropDown[0].addEventListener("click", () => {
    if (!isOpen) {
      changeEmailContainer.classList.add("open");
      btnUpdateProfileSettings
        ? btnUpdateProfileSettings.classList.add("d-none")
        : "";
      isOpen = true;
    } else {
      changeEmailContainer.classList.remove("open");
      btnUpdateProfileSettings
        ? btnUpdateProfileSettings.classList.remove("d-none")
        : "";
      isOpen = false;
    }
  });

  //for Password Options Dropdown
  profileInformationBtnDropDown[1].addEventListener("click", () => {
    if (!isOpen) {
      changePasswordContainer.classList.add("open");
      btnUpdateProfileSettings
        ? btnUpdateProfileSettings.classList.add("d-none")
        : "";
      isOpen = true;
    } else {
      changePasswordContainer.classList.remove("open");
      btnUpdateProfileSettings
        ? btnUpdateProfileSettings.classList.remove("d-none")
        : "";
      isOpen = false;
    }
  });

  //PREVIEW UPLOADED FILES AND WORKLOADS
  const uploadProfileImgPicker = document.querySelector(
    ".upload__profile-image-picker"
  );
  const alertProfileSettings = document.querySelector(
    ".profile__settings-alert"
  );
  const alertTextProfileSettings = document.querySelector(
    ".profile__settings-alert-text"
  );

  uploadProfileImgPicker.addEventListener("change", () => {
    const file = uploadProfileImgPicker.files[0];
    const uploadProfileImgPreview = document.querySelector(
      ".preview__profile-image"
    );
    const imageReader = new FileReader();

    imageReader.addEventListener(
      "load",
      async () => {
        try {
          const STANDARD_SIZE = 3145728;
          if (file.size < STANDARD_SIZE) {
            uploadProfileImgPreview.src = imageReader.result;
            imageFile = () => {
              return file;
            };
          } else {
            alertProfileSettings.classList.remove("d-none");
            alertProfileSettings.classList.add("error__shake");
            setTimeout(() => {
              alertProfileSettings.classList.add("d-none");
            }, 6000);
            throw new Error(`Image size is too large`);
          }
        } catch (err) {
          alertTextProfileSettings.textContent = err.message;
        }
      },
      false
    );
    if (file) {
      imageReader.readAsDataURL(file);
    }
  });

  //HANDLE UPLOAD FILES, FULLNAME AND EMAIL CHANGES
  const formProfileSettings = document.querySelector(".form__profile-settings"),
    profileSettingsFullname = document.querySelector(
      ".profile__settings-fullname"
    ),
    loadingSpinner = document.querySelector(".loading-spinner"),
    loadingProfileSettings = document.querySelector(
      ".loading__profile-settings"
    );

  formProfileSettings.addEventListener("submit", (e) => {
    e.preventDefault();
    loadingSpinner.classList.remove("d-none");
    loadingProfileSettings.classList.remove("d-none");
    btnUpdateProfileSettings.removeAttribute("for");
    btnUpdateProfileSettings.removeAttribute("role");
    const profileSettingsFormData = new FormData(formProfileSettings),
      PROFILE_IMAGE = "profile_image";
    profileSettingsFormData.append(PROFILE_IMAGE, imageFile);
    profileSettingsFormData.append("fullname", profileSettingsFullname.value);

    const updateProfileInformation = async () => {
      const UPDATE_INFO_URL = "/profile-info-update";
      const response = await fetch(UPDATE_INFO_URL, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        body: profileSettingsFormData,
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    };
    updateProfileInformation()
      .then((res) => {
        window.location.href = res.url;
      })
      .catch((err) => console.error(err));
  });
});
