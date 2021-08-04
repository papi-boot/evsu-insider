import tinymce from "tinymce";
const { imageUploadHandler } = require("./tinymce_work/image_fallback");

window.addEventListener("load", async () => {
  const loadingDialog = document.querySelector(".loading-container");

  tinymce
    .init({
      selector: "#shareAnswerForm",
      content_css: "../style/prism.css, ../style/tinymce_field.css",
      plugins:
        "quickbars autosave autoresize blockquote anchor code emoticons charmap wordcount codesample lists advlist table hr pagebreak nonbreaking print image media imagetools autolink link preview fullscreen visualblocks spellchecker visualchars autolink help searchreplace",
      menubar: "file insert view format",
      menu: {
        file: { title: "File", items: "newdocument restoredraft" },
        view: {
          title: "View",
          items:
            "code | visualaid visualchars visualblocks | preview fullscreen",
        },
        insert: {
          title: "Insert",
          items:
            "image link media codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor",
        },
        format: {
          title: "Format",
          items:
            "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontsizes align lineheight | forecolor backcolor | removeformat",
        },
      },
      autosave_restore_when_empty: true,
      min_height: 600,
      max_width: "50%",
      toolbar:
        "fullscreen undo redo restoredraft | bold italic blockquote forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify bullist numlist table outdent indent image media codesample emoticons charmap link anchor hr pagebreak nonbreaking help addTab",
      toolbar_mode: "sliding",
      quickbars_selection_toolbar:
        "bold italic forecolor backcolor formatselect quicklink blockquote",
      quickbars_insert_toolbar: false,
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
      resize: false,
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
        menubar: true,
        plugins:
          "quickbars autosave autoresize blockquote fullscreen emoticons charmap wordcount codesample image lists advlist table hr link fullscreen",
        toolbar:
          "undo redo restoredraft fullscreen styleselect bold italic blockquote forecolor backcolor fontsizeselect alignleft aligncenter alignright alignjustify bullist numlist table indent codesample image emoticons charmap link hr",
        quickbars_insert_toolbar: false,
        autosave_restore_when_empty: true,
        toolbar_sticky: true,
        resize: false,
        object_resizing: true,
      },
    })
    .then(() => {
      loadingDialog.classList.add("close-loading");
      tinymce.get("shareAnswerForm").getContent();
    })
    .catch((err) => console.error(err));
});
