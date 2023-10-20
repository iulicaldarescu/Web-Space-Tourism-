const ansariPic = document.querySelector("#ansari-pic");
const ansariJob = document.querySelector("#ansari-job");
const ansariBio = document.querySelector("#ansari-bio");

const douglasPic = document.querySelector("#douglas-pic");
const douglasJob = document.querySelector("#douglas-job");
const douglasBio = document.querySelector("#douglas-bio");

const markPic = document.querySelector("#mark-pic");
const markJob = document.querySelector("#mark-job");
const markBio = document.querySelector("#mark-bio");

const victorPic = document.querySelector("#victor-pic");
const victorJob = document.querySelector("#victor-job");
const victorBio = document.querySelector("#victor-bio");

async function getData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const getCrew = await data.crew;

    getCrew.forEach((member) => {
      if (member.name === "Anousheh Ansari") {
        ansariPic.setAttribute("src", member.images.webp);
        ansariJob.textContent = member.role;
        ansariBio.textContent = member.bio;
      } else if (member.name === "Douglas Hurley") {
        douglasPic.setAttribute("src", member.images.png);
        douglasJob.textContent = member.role;
        douglasBio.textContent = member.bio;
      } else if (member.name === "Victor Glover") {
        victorPic.setAttribute("src", member.images.png);
        victorJob.textContent = member.role;
        victorBio.textContent = member.bio;
      } else if (member.name === "Mark Shuttleworth") {
        markPic.setAttribute("src", member.images.png);
        markJob.textContent = member.role;
        markBio.textContent = member.bio;
      }
    });
  } catch (error) {
    console.log("Error ", error);
  }
}

getData();
