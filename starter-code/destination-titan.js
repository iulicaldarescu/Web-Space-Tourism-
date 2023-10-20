const titanDescription = document.querySelector("#titan-description");
const avgDistance = document.querySelector("#avg-distance");
const travelTime = document.querySelector("#travel-time");
const titanImg = document.querySelector("#titan-img");
const titanTab = document.querySelector("#titan-tab");

async function getDataFromJson(planetName) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const destinations = await data.destinations;
    console.log(destinations);

    destinations.forEach((destination) => {
      if (destination.name === planetName) {
        titanImg.setAttribute("src", destination.images.png);
        titanDescription.textContent = destination.description;
        avgDistance.textContent = destination.distance.toUpperCase();
        travelTime.textContent = destination.travel.toUpperCase();
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

let currentPage = window.location.pathname;

if (currentPage.includes("/destination-titan.html")) {
  titanTab.classList.add("selected-tab");
}

getDataFromJson("Titan");
