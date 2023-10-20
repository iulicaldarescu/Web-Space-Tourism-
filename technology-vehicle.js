const launchingVehicleDescription = document.querySelector(
  "#launching-vehicle-description"
);
const launchingVehicleImg = document.querySelector("#launching-vehicle-img");
const firstCircleButton = document.querySelector("#first-circle");

async function getFetched(launch) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const technologies = await data.technology;
    technologies.forEach((technology) => {
      if (technology.name === launch) {
        if (window.innerWidth > 1024) {
          launchingVehicleImg.setAttribute(
            "src",
            "./assets/technology/image-launch-vehicle-portrait.jpg"
          );
        }
        launchingVehicleDescription.textContent = technology.description;
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

function updateImageSource() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1024) {
    launchingVehicleImg.setAttribute(
      "src",
      "./assets/technology/image-launch-vehicle-portrait.jpg"
    );
  } else {
    launchingVehicleImg.setAttribute(
      "src",
      "./assets/technology/image-launch-vehicle-landscape.jpg"
    );
  }
}

// Call the function initially to set the image source based on the current screen size
updateImageSource();

// Add an event listener to update the image source when the window is resized
window.addEventListener("resize", updateImageSource);

let currentPage = window.location.pathname;
console.log(currentPage);

if (currentPage.includes("vehicle.html")) {
  firstCircleButton.classList.add("white-bg");
  firstCircleButton.classList.remove("bg-transparent", "text-white");
}

getFetched("Launch vehicle");
