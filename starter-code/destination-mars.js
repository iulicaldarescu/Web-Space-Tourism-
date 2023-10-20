const marsDescription = document.querySelector("#mars-description");
const avgDistance = document.querySelector("#avg-distance");
const travelTime = document.querySelector("#travel-time");
const marsImg = document.querySelector("#mars-img");
const marsTab = document.querySelector("#mars-tab");

async function getDataFromJson(planetName) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const destinations = await data.destinations;
    console.log(destinations);

    destinations.forEach((destination) => {
      if (destination.name === planetName) {
        marsImg.setAttribute("src", destination.images.png);
        marsDescription.textContent = destination.description;
        avgDistance.textContent = destination.distance.toUpperCase();
        travelTime.textContent = destination.travel.toUpperCase();
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

let currentPage = window.location.pathname;
if (currentPage.includes("/destination-mars.html")) {
  marsTab.classList.add("selected-tab");
}

getDataFromJson("Mars");
