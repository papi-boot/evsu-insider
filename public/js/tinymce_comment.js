import tinymce from "tinymce";
const { imageUploadHandler } = require("./tinymce_work/image_fallback");
window.addEventListener("load", async () => {
  const loadingDialog = document.querySelector(".loading-container");
  tinymce
    .init({
      selector: "#commentField",
      content_css: "../style/prism.css",
      placeholder: "Leave a comment here...",
      menubar: false,
      plugins:
        "quickbars fullscreen blockquote anchor code emoticons charmap codesample lists advlist table pagebreak nonbreaking image autolink link  spellchecker autolink",
      height: "300px",
      toolbar:
        "undo redo fullscreen | styleselect bold italic blockquote forecolor backcolor | alignleft aligncenter bullist numlist table | image codesample emoticons charmap link",
      quickbars_selection_toolbar:
        "bold italic forecolor backcolor | formatselect | quicklink blockquote",
      quickbars_insert_toolbar: false,
      help_tabs: ["shortcuts", "keyboardnav"],
      image_caption: true,
      a11y_advanced_options: true,
      media_filter_html: true,
      images_file_types: "png,jpeg,jpg,ico,gif",
      image_title: true,
      file_picker_types: "image",
      images_upload_url: "/upload-image",
      // file_picker_callback: imageFilePicker,
      images_upload_handler: imageUploadHandler,
      automatic_uploads: true,
      toolbar_sticky: true,
      branding: false,
      resize: true,
      object_resizing: true,
      setup: (editor) => {
        editor.on("init", function (args) {
          editor = args.target;
          editor.on("NodeChange", function (e) {
            if (e && e.element.nodeName.toLowerCase() == "img") {
              e.element.setAttribute("loading", "lazy");
              let width = e.element.width;
              let height = e.element.height;
              let editorWidth = editor.container.clientWidth;
              console.log("EDITOR WIDTH: " + editorWidth);
              console.log(editorWidth);
              if (width > editorWidth) {
                height = height / (width / editorWidth);
                width = editorWidth - 27;
              }
              tinymce.DOM.setAttribs(e.element, {
                width: width,
                height: height,
              });
            }
          });
        });
      },
      //for Mobile
      mobile: {
        theme: "silver",
        menubar: false,
        plugins:
          "quickbars fullscreen blockqoute emoticons charmap wordcount codesample image lists advlist table hr autolink link fullscreen autolink",
        toolbar:
          "undo redo fullscreen | styleselect bold italic blockquote forecolor backcolor | alignleft aligncenter bullist numlist table | image codesample emoticons charmap link",
        toolbar_sticky: true,
        quickbars_selection_toolbar:
          "bold italic forecolor backcolor | formatselect | quicklink blockquote",

        quickbars_insert_toolbar: false,
        quickbars_image_toolbar: true,
        resize: true,
        object_resizing: true,
      },
    })
    .then(() => {
      loadingDialog.classList.add("close-loading");
      const toxTinyMCE = document.querySelector(".tox-tinymce");
      toxTinyMCE.style.setProperty("z-index", "3001 !important");
    })
    .catch((err) => console.error(err));
  tinymce.activeEditor.setProgressState(true, 3000);
});
