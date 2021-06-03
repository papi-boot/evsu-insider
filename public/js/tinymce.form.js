import tinymce from "tinymce";

window.addEventListener("load", () => {
  tinymce.init({
    selector: "#shareAnswerForm",
    content_css: "document",
    content_style:
      'body { font-family: "Palanquin",sans-serif; font-size: 0.9rem } pre { font-family: "Palanquin",sans-serif; font-size: 0.7rem } code[class*="language-"], pre[class*="language-"]{ } ',
    plugins:
      "anchor code emoticons charmap wordcount  codesample lists advlist table hr pagebreak nonbreaking print image media imagetools autolink link preview fullscreen visualblocks spellchecker visualchars autolink help searchreplace",
    height: "90vh",
    toolbar:
      "insertfile undo redo | styleselect | bold italic forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify bullist numlist table outdent indent | image media codesample emoticons charmap link  | anchor hr pagebreak nonbreaking | print help addTab",
    help_tabs: ["shortcuts", "keyboardnav"],

    a11y_advanced_options: true,
    media_filter_html: true,
    image_advtab: true,
    image_title: true,
    //for Mobile
    mobile: {
      menubar: true,
      toolbar_mode: false,
      toolbar_sticky: true,
      resize: true,
      object_resizing: true,
    },
    toolbar_sticky: true,
    branding: false,
    object_resizing: true,
  });
});