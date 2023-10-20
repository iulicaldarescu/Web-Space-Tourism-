const moonDescription = document.querySelector("#moon-description");
const avgDistance = document.querySelector("#avg-distance");
const travelTime = document.querySelector("#travel-time");
const moonImg = document.querySelector("#moon-img");
const moonTab = document.querySelector("#moon-tab");

async function getDataFromJson(planetName) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const destinations = await data.destinations;
    console.log(destinations);

    destinations.forEach((destination) => {
      if (destination.name === planetName) {
        moonImg.setAttribute("src", destination.images.png);
        moonDescription.textContent = destination.description;
        avgDistance.textContent = destination.distance.toUpperCase();
        travelTime.textContent = destination.travel.toUpperCase();
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

let currentPage = window.location.pathname;
if (currentPage.includes("/destination-moon.html")) {
  moonTab.classList.add("selected-tab");
}

getDataFromJson("Moon");
