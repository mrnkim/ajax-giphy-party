"use strict";

console.log("Let's get this party started!");

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const BASE_API_URL = "http://api.giphy.com/v1";


// When the user submits the form
// use axios to make a request to GIPHY for information based on that term.
$("#searchForm").on("submit", handleSubmit);
$("#removeButton").on("click", removeGifs);

async function handleSubmit(evt) {
  evt.preventDefault();

  const query = $("#searchInput").val();
  const response = await getResponse(query);

  showGif(response.data, query);
}

async function getResponse(q) {
  const response = await axios.get(BASE_API_URL + "/gifs/search", {
    params: { q, api_key: API_KEY },
  });
  return response;
}

//grab a GIF from the response data and append the GIF to the page
function showGif(response, query) {
  // NOTE: Can use a Set of indices as alternative to prevent duplicate images
  const gifIndex = $(`.${query}`).length;
  const gifUrl = response.data[gifIndex].images.original.url;

  $(".canvas").append(`<img class=${query} src=${gifUrl}/>`);
}

// Add a button next to the form which,
// when clicked, will remove all GIFs from the page.
function removeGifs() {
  $(".canvas").empty();
}
