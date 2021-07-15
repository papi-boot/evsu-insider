/* JAVASCRIPT */

if (document.querySelector(".user__email")) {
  require("./js/login");
}

if (document.querySelector(".reg_user_name")) {
  require("./js/register");
}

if (document.querySelector(".form__comment")) {
  require("./js/comment");
}

if (document.querySelector(".btn__delete-answer")) {
  require("./js/options_post");
}
if (document.querySelector(".btn__update-answer")) {
  require("./js/options_post");
}

require("./js/image-load");
require("./js/option_post_toggle");
require("./bootstrap/js/bootstrap.min");
require("./js/navburger.anim");
require("./js/subject_dropdown");
require("./js/copy-code");
require("./js/notification/notification_api");
require("./js/create-post");
// require("./js/tinymce.form");

/* STYLE */
require("./bootstrap/css/bootstrap.min.css");
require("./main.scss");
