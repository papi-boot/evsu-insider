window.addEventListener("DOMContentLoaded", () => {
  const subjectDropdown = document.querySelectorAll(".subject__dropdown");
  const subjectDropdownGroup = document.querySelectorAll(".subject__dropdown-group");
  const subjectDropdownIcon = document.querySelectorAll(".fa-chevron-right");
  const scrollHere = document.querySelectorAll(".scroll-here");

  for (let i = 0; i < subjectDropdownGroup.length; i++) {
    let subjectDropdownOpen = false;
    subjectDropdownGroup[i].addEventListener("click", (e) => {
      if (!subjectDropdownOpen) {
        subjectDropdown[i].classList.add("subject__dropdown-open");
        subjectDropdownIcon[i].classList.add("icon-rotate");
        window.scrollTo({ behavior: "smooth", top: subjectDropdownGroup[i].getBoundingClientRect().bottom, left: 0 });
        subjectDropdownOpen = true;
      } else {
        subjectDropdown[i].classList.remove("subject__dropdown-open");
        subjectDropdownIcon[i].classList.remove("icon-rotate");
        subjectDropdownOpen = false;
      }
      arrayIndexFinder(e);
    });
  }

  const arrayIndexFinder = (e) => {
    Array.from(subjectDropdown).indexOf(e.target);
  };
});
