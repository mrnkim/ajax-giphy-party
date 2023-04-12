"use strict";

console.log("Let's get this party started!");

// When the user submits the form, use axios to make a request to GIPHY for information based on that term.
$("#searchForm").on("submit", getGiphyResponse);
$("#removeButton").on("click", removeGifs);

async function getGiphyResponse(evt) {
  evt.preventDefault();

  const q = $("#searchInput").val();
  const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

  const response = await axios.get(" http://api.giphy.com/v1/gifs/search", {
    params: { q, api_key },
  });

  // After receiving the response, console.log the response data to make sure you’re getting back what you expect.
  console.log("response.data=", response.data);
  showGif(response.data, q);
}

//grab a GIF from the response data and append the GIF to the page
function showGif(response, q) {
  const gifIndex = $(`.${q}`).length;
  const gifUrl = response.data[gifIndex].url;
  const $gifDiv = $().add(`<div class=${q}></div>`)
    .css("background-image", `url(${gifUrl})`);
  console.log($gifDiv.get())
  $(".canvas").append($gifDiv);
}

// Add a button next to the form which,
// when clicked, will remove all GIFs from the page.
function removeGifs() {
  $(".canvas").empty();
}

