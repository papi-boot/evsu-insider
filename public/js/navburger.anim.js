window.addEventListener("DOMContentLoaded", () => {
  const navToggler = document.querySelector(".burger-toggler");
  const navbarContainer = document.querySelector(".--nav-list-container");
  let navIsOpen = false;

  navToggler.addEventListener("click", () => {
    if (!navIsOpen) {
      navToggler.classList.add("open");
      navbarContainer.classList.add("open-navbar");
      navIsOpen = true;
    } else {
      navToggler.classList.remove("open");
      navbarContainer.classList.remove("open-navbar");
      navIsOpen = false;
    }
  });
});
