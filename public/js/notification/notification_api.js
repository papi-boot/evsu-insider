/* window.addEventListener("load", () => {
  const checkNewPost = async () => {
    const response = await fetch("/new-post", {
      method: "GET",
      cache: "no-cache",
      keepalive: true,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };

  let postLengthChecker = 0; //for post length checker
  let currentPostLength = 0; //fetch one and get current post value

  //Get the current post length
  checkNewPost()
    .then((res) => {
      currentPostLength = res;
    })
    .catch((err) => console.info(err));

  //Check for new post
  setInterval(() => {
    checkNewPost()
      .then((res) => {
        postLengthChecker = res;
        if (postLengthChecker > currentPostLength) {
          window.alert("NEW POST!");
          currentPostLength++;
        }
      })
      .catch((err) => console.info(err));
  }, 10000);
  console.log(postLengthChecker);
  console.log(currentPostLength);
});
 */