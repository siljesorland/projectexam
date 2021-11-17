const url = "https://noroffcors.herokuapp.com/http://api.open-notify.org/astros.json";


const resultsContainer = document.querySelector(".results");

async function getEvent() {
    // fetch

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.people;

    resultsContainer.innerHTML = "";

    resultsContainer.innerHTML +=
        `<div class = "number">Number of people in Space Today: ${facts.length}`;

    for (let i = 0; i < facts.length; i++) {

        resultsContainer.innerHTML +=
            `<div class = "card"> Name: ${facts[i].name }  <br> Name of Craft: ${facts[i].craft}`;


    }
}
getEvent();