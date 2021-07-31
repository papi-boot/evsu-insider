const btnIcon = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
</svg>`,
];

/*
  btnIcon[0] = Close Icon
  btnIcon[1] = Download Icon
 */
const KEYS =
  "sp=racwdl&st=2021-07-29T08:08:16Z&se=2025-07-29T16:08:16Z&sv=2020-08-04&sr=c&sig=l51q3fPqjBl3Ky3h897AMA83Pq%2B04m09nbq4KbMDyyI%3D";

const createZoomLayout = (src_image, ok_download) => {
  const zoomImageContainer = document.createElement("div");
  zoomImageContainer.setAttribute("class", "zoom__image-container");
  const zoomlayout = document.createElement("div");
  zoomlayout.setAttribute(
    "class",
    "zoom__layout d-flex align-items-center justify-content-center flex-column"
  );
  const zoomCloseBtnWrapper = document.createElement("div");
  zoomCloseBtnWrapper.setAttribute(
    "class",
    "zoom__close-btn-wrapper d-flex justify-content-end"
  );
  const zoomCloseBtn = document.createElement("button");
  zoomCloseBtn.setAttribute("type", "button");
  zoomCloseBtn.setAttribute("class", "zoom__close-btn");
  const zoomDownloadBtn = document.createElement("a");
  zoomDownloadBtn.setAttribute("class", `zoom__download-btn`);
  zoomDownloadBtn.href = src_image.concat("?", KEYS);
  const zoomImageWrapper = document.createElement("div");
  zoomImageWrapper.setAttribute("class", "zoom__image-wrapper");
  const zoomMainImage = document.createElement("img");
  zoomMainImage.setAttribute("class", "zoom__main-image");
  zoomMainImage.setAttribute("loading", "lazy");
  zoomImageContainer.appendChild(zoomCloseBtnWrapper); //Zoom Layout
  zoomImageContainer.appendChild(zoomlayout); //Zoom Container
  zoomCloseBtnWrapper.appendChild(zoomDownloadBtn); //Zoom close Button
  zoomCloseBtnWrapper.appendChild(zoomCloseBtn); //Zoom close Button
  zoomCloseBtn.innerHTML = btnIcon[0];
  zoomDownloadBtn.innerHTML = btnIcon[1];
  zoomlayout.appendChild(zoomImageWrapper); //Zoom Image Wrapper
  zoomImageWrapper.appendChild(zoomMainImage); //Zoom Main image
  zoomMainImage.src = src_image;
  zoomMainImage.addEventListener("click", (e) => {
    e.preventDefault();
    zoomImageContainer.classList.add("d-none");
    const blurContainer = document.querySelectorAll(".container");
    blurContainer.forEach((item) => (item.style.cssText = "filter: none"));
  });

  zoomCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    zoomImageContainer.classList.add("d-none");
    const blurContainer = document.querySelectorAll(".container");
    blurContainer.forEach((item) => (item.style.cssText = "filter: none"));
  });
  zoomDownloadBtn.addEventListener("click", (e) => {
    try {
      zoomDownloadBtn.download = `${src_image.replace(
        "https://insiderhub.blob.core.windows.net/images/",
        ""
      )}`;
    } catch (err) {
      alert(
        "Error downloading the image. Try to long press and press download image/save image"
      );
    }
  });
  return { zoomImageContainer, zoomCloseBtnWrapper };
};

module.exports = { createZoomLayout };
