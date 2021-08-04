/* eslint-disable no-useless-escape */
const checkSnippetCode = document.querySelectorAll('pre[class^="language"]');
checkSnippetCode.forEach((item, index) => {
  const copyCodeBtn = document.createElement("button");
  const zoomSnippet = document.createElement("button");
  checkSnippetCode[index].style.setProperty("position", "relative !important");
  copyCodeBtn.setAttribute("class", "copy__snippet-code f_size-3");
  copyCodeBtn.textContent = "Copy";
  copyCodeBtn.classList.add("copy__code-snippet");
  zoomSnippet.setAttribute("class", "zoom__code-snippet f_size-3");
  zoomSnippet.textContent = "Zoom";
  zoomSnippet.classList.add("zoom__code-snippet");
  item.appendChild(zoomSnippet);
  item.appendChild(copyCodeBtn);
});

const copyCode = document.querySelectorAll(".copy__snippet-code");
const zoomSnippetCode = document.querySelectorAll(".zoom__code-snippet");
for (let i = 0; i < copyCode.length; i++) {
  copyCode[i].addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    initializeCopyCodeBtn(e, i);
  });
}
for (let i = 0; i < zoomSnippetCode.length; i++) {
  zoomSnippetCode[i].addEventListener("click", (e) => {
    e.preventDefault();
    zoomSnippetCodeToggle(e, i);
  });
}

const initializeCopyCodeBtn = (e, i) => {
  Array.from(copyCode).indexOf(e.target);
  copyCode[i].style.setProperty("background", "#119000");
  copyCode[i].style.setProperty("color", "#fff");
  copyCode[i].innerHTML = "Copy &check;";
  let snippetContent = checkSnippetCode[i].textContent.replace(
    "ZoomCopy ✓",
    ""
  );

  const dummyTextArea = document.createElement("textarea");
  dummyTextArea.value = snippetContent;
  dummyTextArea.style.position = "absolute";
  dummyTextArea.style.left = "-100%";
  document.body.appendChild(dummyTextArea);
  dummyTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(dummyTextArea);
};

const zoomSnippetCodeToggle = (e, i) => {
  document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  const zoomCodeWrapper = document.createElement("div");
  const zoomCodeSnippet = document.createElement("pre");
  const zoomCodeItem = document.createElement("div");
  const zoomWrapperBtnOption = document.createElement("div");
  zoomCodeSnippet.innerHTML = checkSnippetCode[i].innerHTML.replace(
    `<button class="zoom__code-snippet f_size-3">Zoom</button><button class="copy__snippet-code f_size-3 copy__code-snippet">Copy</button>`,
    ""
  );

  zoomCodeWrapper.setAttribute("class", "zoom__code-wrapper");
  zoomCodeWrapper.classList.add("zoom__code-wrapper");
  zoomCodeItem.classList.add("zoom__code-item");
  zoomWrapperBtnOption.setAttribute(
    "class",
    "d-flex align-items-center justify-content-center position-fixed bottom-0 w-100 p-2 my-2"
  );
  const btnClassName = [
    "zoom__btn-zoom-out f_size-2 mx-1",
    "font__size-add f_size-2 mx-1",
    "font__size-subtract f_size-2 mx-1",
    "fix__code f_size-2 mx-1",
  ];
  const btnTextContent = ["Zoom out", "A+", "A-", "Wrap"];
  for (let i = 0; i < 4; i++) {
    const zoomOptionbtn = document.createElement("button");
    zoomOptionbtn.setAttribute("class", btnClassName[i]);
    zoomOptionbtn.textContent = btnTextContent[i];
    zoomWrapperBtnOption.appendChild(zoomOptionbtn);
  }
  zoomCodeItem.appendChild(zoomWrapperBtnOption);
  zoomCodeItem.appendChild(zoomCodeSnippet);
  zoomCodeWrapper.appendChild(zoomCodeItem);
  document.body.appendChild(zoomCodeWrapper);

  const zoomMainbtn = document.querySelectorAll(".zoom__code-snippet");
  const copyMainbtn = document.querySelectorAll(".copy__snippet-code");
  const zoomOut = document.querySelector(".zoom__btn-zoom-out");
  const fixCode = document.querySelector(".fix__code");
  const addFontSize = document.querySelector(".font__size-add");
  const subtractFontSize = document.querySelector(".font__size-subtract");
  //ZOOM OUT
  zoomOut.addEventListener("click", (e_zoom_out) => {
    zoomMainbtn.forEach((item) => item.classList.remove("d-none"));
    copyMainbtn.forEach((item) => item.classList.remove("d-none"));
    document.getElementsByTagName("html")[0].style.overflowY = "auto";
    e_zoom_out.preventDefault();
    document.body.style.overflowY = "auto";
    const zoomWrapper = document.querySelector(".zoom__code-wrapper");
    document.body.removeChild(zoomWrapper);
  });

  //WRAP CODE
  fixCode.addEventListener("click", (e_fix_code) => {
    addFontSize.classList.add("d-none");
    subtractFontSize.classList.add("d-none");
    let fixCode = (zoomCodeSnippet.innerHTML = checkSnippetCode[
      i
    ].innerHTML.replace(
      '<button class="zoom__code-snippet f_size-3">Zoom</button><button class="copy__snippet-code f_size-3 copy__code-snippet">Copy</button>',
      ""
    ));
    zoomCodeSnippet.outerHTML = `<div>${fixCode}</div>`;
  });

  let size = 14;
  //Add font size
  addFontSize.addEventListener("click", (e_add_size_font) => {
    e_add_size_font.preventDefault();
    // const codeLanguage = document.
    if (size <= 25) {
      size += 2;
      zoomCodeSnippet.children[0].style.setProperty("font-size", `${size}px`);
    }
  });

  //Subtract font size
  subtractFontSize.addEventListener("click", (e_subtract_font_size) => {
    e_subtract_font_size.preventDefault();
    if (size >= 8) {
      size -= 2;
      zoomCodeSnippet.children[0].style.setProperty("font-size", `${size}px`);
    }
  });
  zoomMainbtn.forEach((item) => item.classList.add("d-none"));
  copyMainbtn.forEach((item) => item.classList.add("d-none"));
};
