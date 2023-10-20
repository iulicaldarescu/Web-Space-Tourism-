const closeSideMenu = document.querySelector("#close-img");
const sideBarMenu = document.querySelector("#sidebar-menu");
const hamburger = document.querySelector("#hamburger-img");
let menuOpened = true;
function closeSideBarMenu() {
  if (menuOpened === true) {
    closeSideMenu.addEventListener("click", () => {
      sideBarMenu.classList.remove("width-200", "height-200");
      sideBarMenu.classList.add("width-0", "hidden");

      hamburger.classList.remove("hidden");
      hamburger.classList.add("block");
    });
  }
  menuOpened = false;
}
function openSideMenu() {
  if (menuOpened === false) {
    hamburger.addEventListener("click", () => {
      sideBarMenu.classList.remove("width-0", "hidden");
      hamburger.classList.add("hidden");
    });
    menuOpened = true;
  }
}
closeSideBarMenu();
openSideMenu();
