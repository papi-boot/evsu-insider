import tinymce from "tinymce";

window.addEventListener("load", () => {
  tinymce.init({
    selector: "#shareAnswerForm",
    content_css: "document",
    content_style:
      'body { font-family: "Palanquin",sans-serif; font-size: 0.9rem } pre { font-family: "Palanquin",sans-serif; font-size: 0.7rem } code[class*="language-"], pre[class*="language-"]{ } ',
    plugins:
      "anchor code emoticons charmap wordcount  codesample lists advlist table hr pagebreak nonbreaking print image media imagetools autolink link preview fullscreen visualblocks spellchecker visualchars autolink paste help searchreplace",
      height: "80vh",
      toolbar:
      "insertfile undo redo | styleselect | bold italic forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify bullist numlist table outdent indent | image media codesample emoticons charmap link  | anchor hr pagebreak nonbreaking paste | print help addTab",
    help_tabs: ["shortcuts", "keyboardnav"],

    a11y_advanced_options: true,
    media_filter_html: true,
    image_advtab: true,
    images_file_types: "png,jpeg,jpg,ico,svg,gif",
    image_title: true,
    //for Mobile
    mobile: {
      theme: "mobile",
      plugins: "emoticons charmap wordcount  codesample lists advlist table hr pagebreak autolink link preview fullscreen visualblocks spellchecker visualchars autolink paste help searchreplace",
      toolbar: "insertfile undo redo | styleselect | bold italic forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify bullist numlist table outdent indent codesample emoticons charmap link",
      menubar: true,
      toolbar_mode: false,
      toolbar_sticky: true,
      resize: true,
      object_resizing: true,
    },
    toolbar_sticky: true,
    branding: false,
    resize: true,
    object_resizing: true,
  });
});