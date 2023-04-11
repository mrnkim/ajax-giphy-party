"use strict";

console.log("Let's get this party started!");

// When the user submits the form, use axios to make a request to GIPHY for information based on that term.
$("#searchForm").on("submit", getGiphyResponse);

async function getGiphyResponse(evt) {
  evt.preventDefault();

  const q = $("#searchInput").val();
  const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

  const response = await axios.get(
    " http://api.giphy.com/v1/gifs/search",
    { params: { q, api_key } });

    // After receiving the response, console.log the response data to make sure you’re getting back what you expect.
    console.log("response.data=", response.data);
}
