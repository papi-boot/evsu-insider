/*
    <zoomImageContainer>
      <zoomLayout>
        <zoomCloseBtnWrapper>
          <zoomDownloadBtn/>
          <zoomCloseButton/>
        </zoomCloseBtnWrapper>
        </zoomImageWrapper>
          <zoomMainImage/>
        </zoomImageWrapper>
      </zoomLayout>
    </zoomImageContainer>
   */
const { createZoomLayout } = require("./zoom-image-container");
//Build Element

const KEYS =
  "sp=racwdl&st=2021-07-29T08:08:16Z&se=2025-07-29T16:08:16Z&sv=2020-08-04&sr=c&sig=l51q3fPqjBl3Ky3h897AMA83Pq%2B04m09nbq4KbMDyyI%3D";

//Get image from respective image with the class assign
const imgConfig = document.querySelectorAll("img");
imgConfig.forEach((item) => {
  item.classList.add("zoom__image-able");
  item.setAttribute("loading", "lazy");
});
const zoomable = document.querySelectorAll(".zoom__image-able");
for (let i = 0; i < zoomable.length; i++) {
  zoomable[i].addEventListener("click", (e) => {
    Array.from(zoomable).indexOf(e.target);
    const src_image = zoomable[i].getAttribute("src");
    const blurContainer = document.querySelectorAll(".container");
    blurContainer.forEach((item) => (item.style.cssText = "filter: blur(5px)"));
    // console.log(src_image.match(/(png|jpeg|jpg|gif|svg|webp|ico)/g));
    putRequestImageDownload(src_image.trim());
    document.body.appendChild(
      createZoomLayout(src_image.trim()).zoomImageContainer
    );
  });
}

const putRequestImageDownload = (src_img) => {
  const fileName = src_img.replace(
    "https://insiderhub.blob.core.windows.net/images/",
    ""
  );
  const URL = `${src_img}?comp=properties&${KEYS}`;
  const fileType = src_img.match(/(png|jpeg|jpg|gif|svg|webp|ico)/g);
  console.log(URL);
  const putRequestBlob = async () => {
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": `image/${fileType[0]}`,
          "x-ms-blob-content-type": `image/${fileType[0]}`,
          "x-ms-blob-content-disposition": `attachment; filename="${fileName}"`,
          "x-ms-blob-type": "BlockBlob",
        },
        mode: "cors",
      });

      if (response.status === 200) {
        const ok = { ok: 1 };
        return ok;
      } else {
        throw Error("Error when downloading the image");
      }
    } catch (err) {
      console.error(err);
    }
  };
  putRequestBlob()
    .then((ok) => {
      createZoomLayout(src_img.trim(), ok).zoomCloseBtnWrapper.innerHTML = "<h1>HELLO WORLD</h1>";
    })
    .catch((err) => {
      alert(err.message);
    });
};
