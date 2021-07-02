/* eslint-disable no-undef */
const imageUploadHandler = (blobInfo, success, failure, progress) => {
  var image_size = blobInfo.blob().size / 1000; // image size in kbytes
  var max_size = 3000; // max size in kbytes
  if (image_size > max_size) {
    failure(
      `Image size was too large ${image_size.toFixed(1)}KB, the maximum image size is 3000kb = 3MB`
    );
    return;
  } else {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "/upload-image");

    xhr.upload.onprogress = function (e) {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function () {
      var json;

      if (xhr.status === 403) {
        failure("HTTP Error: " + xhr.status, { remove: true });
        return;
      }

      if (xhr.status === 500) {
        error = JSON.parse(xhr.responseText);
        failure("HTTP Error: " + error.error);
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        failure("HTTP Error: " + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != "string") {
        failure("Invalid JSON: " + xhr.responseText);
        return;
      }

      success(json.location);
    };

    xhr.onerror = function () {
      failure(
        "Image upload failed due to a XHR Transport error. Code: " + xhr.status
      );
    };

    formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    console.dir(blobInfo);
    bodyImageField = { formData };

    xhr.send(formData);
  }
};

module.exports = {
  imageUploadHandler,
};
