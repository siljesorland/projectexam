const url = "https://api.nasa.gov/planetary/apod?api_key=LgqIUaK6sbenHXiUv6kEdfRLEQFsgt11evSbYrEc";

const resultsContainer = document.querySelector(".events");

const mediaContainer = document.querySelector(".mediafiles");

async function getInfo() {
    const response = await fetch(url);
    const json = await response.json();


    let mediaHtml = "";

    if (mediaHtml === "video") {
        mediaHtml = `<iframe width="600" height="600" "${json.url}"> < /iframe>`

    } else {
        mediaHtml = `<img width="600" height="600" src="${json.url}" alt="Nature" class="responsive"/> `
    }
    mediaContainer.innerHTML += mediaHtml;


    resultsContainer.innerHTML += `<div class = "events">

        Title: <p> ${json.title} </p>
    Date:  <p> ${json.date } </p> <br>

    <p> ${json.explanation} </p>
    Author & Copyright: <h3> ${json.copyright} </h3>
    `




};
getInfo();