window.addEventListener("DOMContentLoaded", () => {
  const subjectDropdown = document.querySelectorAll(".subject__dropdown");
  const subjectDropdownGroup = document.querySelectorAll(
    ".subject__dropdown-group"
  );
  const subjectDropdownBtn = document.querySelectorAll(
    ".subject__dropdown-btn"
  );
  const subjectDropdownIcon = document.querySelectorAll(".fa-chevron-right");

  for (let i = 0; i < subjectDropdownGroup.length; i++) {
    let subjectDropdownOpen = false;
    subjectDropdownBtn[i].addEventListener("click", (e) => {
      if (!subjectDropdownOpen) {
        subjectDropdownGroup[i].classList.add("subject__dropdown-open");
        subjectDropdown[i].classList.add("subject__dropdown-open");
        subjectDropdownIcon[i].classList.add("icon-rotate");
        subjectDropdownOpen = true;
      } else {
        subjectDropdownGroup[i].classList.remove("subject__dropdown-open");
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
