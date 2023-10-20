const capsuleDescription = document.querySelector("#capsule-description");
const capsuleImg = document.querySelector("#capsule-img");
const secondCircleButton = document.querySelector("#second-circle");

async function getFetched(capsule) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const technologies = await data.technology;
    technologies.forEach((technology) => {
      if (technology.name === capsule) {
        capsuleDescription.textContent = technology.description;
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

function updateImageSource() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1024) {
    capsuleImg.setAttribute(
      "src",
      "./assets/technology/image-space-capsule-portrait.jpg"
    );
  } else {
    capsuleImg.setAttribute(
      "src",
      "./assets/technology/image-space-capsule-landscape.jpg"
    );
  }
}

// Call the function initially to set the image source based on the current screen size
updateImageSource();

// Add an event listener to update the image source when the window is resized
window.addEventListener("resize", updateImageSource);

let currentPage = window.location.pathname;
console.log(currentPage);

if (currentPage.includes("capsule.html")) {
  secondCircleButton.classList.add("white-bg");
  secondCircleButton.classList.remove("bg-transparent", "text-white");
}

getFetched("Space capsule");
