const url = "https://fdo.rocketlaunch.live/json/launches/next/5";


const resultsContainer = document.querySelector(".results");

async function getDates() {

    const response = await fetch(url);

    const data = await response.json();

    const dates = data.result;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < dates.length; i++) {
        resultsContainer.innerHTML += `<div class="result">Name of Spaceship:<br>${dates[i].name}<br><br> Launching from:<br>${dates[i].pad.location.name} <br>Country:<br>${dates[i].pad.location.country} <br><br>Description:<br>${dates[i].launch_description} <br><br>Weather summary:<br>${dates[i].weather_summary}`

    }
}
getDates();