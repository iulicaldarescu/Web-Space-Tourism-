const spaceportDescription = document.querySelector("#spaceport-description");
const spaceportImg = document.querySelector("#spaceport-img");
const thirdCircleButton = document.querySelector("#third-circle");

async function getFetched(tech) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const technologies = await data.technology;
    technologies.forEach((technology) => {
      if (technology.name === tech) {
        spaceportDescription.textContent = technology.description;
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

function updateImageSource() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1024) {
    spaceportImg.setAttribute(
      "src",
      "./assets/technology/image-spaceport-portrait.jpg"
    );
  } else {
    spaceportImg.setAttribute(
      "src",
      "./assets/technology/image-spaceport-landscape.jpg"
    );
  }
}

// Call the function initially to set the image source based on the current screen size
updateImageSource();

// Add an event listener to update the image source when the window is resized
window.addEventListener("resize", updateImageSource);

let currentPage = window.location.pathname;
console.log(currentPage);

if (currentPage.includes("spaceport.html")) {
  thirdCircleButton.classList.add("white-bg");
  thirdCircleButton.classList.remove("bg-transparent", "text-white");
}

getFetched("Spaceport");
