window.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.querySelector(".quote__text");
  const quoteAuthor = document.querySelector(".quote__author");
  const randomQuote = async () => {
    const response = await fetch(
      "https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=motivational",
      {
        method: "GET",
      }
    );
    const data = await response.json();

    if (response.ok) {
      return await data;
    } else {
      const message = {
        message: "Something went wrong on fetching daily quote",
      };
      return message;
    }
  };

  randomQuote()
    .then((quotes) => {
      const randomNumber = Math.floor(Math.random() * 112);
      console.log(randomNumber);
      console.log(quotes.quotes);
      quoteText.innerHTML =`<em>"${quotes.quotes[randomNumber].text}"</em>`;
      quoteAuthor.innerHTML = quotes.quotes[randomNumber].author;
    })
    .catch((err) => console.error(err));
});
