import tinymce from "tinymce";
const { imageUploadHandler } = require("./tinymce_work/image_fallback");

window.addEventListener("load", async () => {
  const loadingDialog = document.querySelector(".loading-container");

  tinymce
    .init({
      selector: "#shareAnswerForm",
      content_css: "../style/prism.css, ../style/tinymce_field.css",
      content_style:
        'body { font-family: "Segoe UI",sans-serif, Consolas, sans-serif; font-size: 1rem, overflow-x: hidden; } pre { font-family: "Palanquin",sans-serif; font-size: 0.7rem } code[class*="language-"], pre[class*="language-"]{ } ',
      plugins:
        "autosave anchor code emoticons charmap wordcount codesample lists advlist table hr pagebreak nonbreaking print image media imagetools autolink link preview fullscreen visualblocks spellchecker visualchars autolink paste help searchreplace",
      height: "70vh",
      toolbar:
        "undo redo | styleselect | bold italic forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify bullist numlist table outdent indent | image media codesample emoticons charmap link | anchor hr pagebreak nonbreaking paste | print help addTab",
      help_tabs: ["shortcuts", "keyboardnav"],
      image_advtab: true,
      image_caption: true,
      a11y_advanced_options: true,
      media_filter_html: true,
      images_file_types: "png,jpeg,jpg,ico,gif",
      image_title: true,
      imagetools_toolbar:
        "rotateleft rotateright | flipv fliph | editimage imageoptions",
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
              let editorWidth = 800;
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
        menubar: true,
        plugins:
          "emoticons charmap wordcount codesample image lists advlist table hr autolink link fullscreen autolink",
        toolbar:
          "insertfile undo redo | styleselect | bold italic forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify bullist numlist table indent | codesample image emoticons charmap link hr",
        // plugins: ["autosave", "lists", "autolink", "forecolor", "fontsizeselect"],
        // toolbar: [
        //   "undo",
        //   "redo",
        //   "bold",
        //   "underline",
        //   "italic",
        //   "styleselect",
        //   "forecolor",
        //   "fontsizeselect",
        //   "bullist",
        //   "numlist",
        //   "link",
        //   "unlink"
        // ],
        toolbar_sticky: true,
        resize: true,
        object_resizing: true,
      },
    })
    .then(() => {
      loadingDialog.classList.add("close-loading");
      tinymce.get("shareAnswerForm").getContent();
    })
    .catch((err) => console.error(err));
});
