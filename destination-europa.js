const europaDescription = document.querySelector("#europa-description");
const avgDistance = document.querySelector("#avg-distance");
const travelTime = document.querySelector("#travel-time");
const europaImg = document.querySelector("#europa-img");
const europaTab = document.querySelector("#europa-tab");

async function getDataFromJson(planetName) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const destinations = await data.destinations;

    destinations.forEach((destination) => {
      if (destination.name === planetName) {
        europaImg.setAttribute("src", destination.images.png);
        europaDescription.textContent = destination.description;
        avgDistance.textContent = destination.distance.toUpperCase();
        travelTime.textContent = destination.travel.toUpperCase();
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

getDataFromJson("Europa");

let currentPage = window.location.pathname;
console.log(currentPage);
if (currentPage.includes("/destination-europa.html")) {
  europaTab.classList.add("selected-tab");
}
