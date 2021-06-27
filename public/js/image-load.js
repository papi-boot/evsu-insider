import logoImage from "../assets/logo/insider-hub.png";

window.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelectorAll(".logo");
  logo.forEach((item) => (item.src = logoImage));
});
