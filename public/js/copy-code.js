const checkSnippetCode = document.querySelectorAll('pre[class^="language"]');
checkSnippetCode.forEach((item, index) => {
  const copyCodeBtn = document.createElement("button");
  checkSnippetCode[index].style.setProperty("position", "relative !important");
  copyCodeBtn.setAttribute("class", "copy__snippet-code");
  copyCodeBtn.textContent = "Copy Snippet";
  copyCodeBtn.classList.add("copy__code-snippet");
  item.appendChild(copyCodeBtn);
});

const copyCode = document.querySelectorAll(".copy__snippet-code");

for (let i = 0; i < copyCode.length; i++) {
  copyCode[i].addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    initializeCopyCodeBtn(e, i);
  });
}

const initializeCopyCodeBtn = (e, i) => {
  Array.from(copyCode).indexOf(e.target);
  copyCode[i].style.setProperty("background", "#119000");
  copyCode[i].style.setProperty("color", "#fff");
  copyCode[i].innerHTML = "Copy &check;";
  let snippetContent = checkSnippetCode[i].textContent.replace("Copy ✓", "");

  const dummyTextArea = document.createElement("textarea");
  dummyTextArea.value = snippetContent;
  dummyTextArea.style.position = "absolute";
  dummyTextArea.style.left = "-100%";
  document.body.appendChild(dummyTextArea);
  dummyTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(dummyTextArea);
};
