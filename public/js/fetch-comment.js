const renderComments = () => {
  const fetchAllCommentForPost = async () => {
    try {
      const response = await fetch("/comments", {
        method: "GET",
        cache: "no-cache",
        mode: "cors",
      });

      if (response.ok) {
        let data = response.json();
        return data;
      } else {
        const message = {
          error_message: "Unabled to fetch comment, Please refresh the page",
        };
        return message;
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchAllCommentForPost()
    .then((res) => {
      
    })
    .catch((err) => console.error(err));
};
export default renderComments;
