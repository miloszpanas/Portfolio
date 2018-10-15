// SET THE VIEWPORT HEIGHT

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

// resize on viewport change
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// NAVIGATION

// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navigation");
const menuList = document.querySelector(".navigation__menu");
const menuAuthor = document.querySelector(".navigation__author");
const menuBtnBackground = document.querySelector(".menu-button-background");

const navItems = document.querySelectorAll(".navigation__item");

// Set initial state of the menu

let showMenu = false;

menuBtnBackground.addEventListener("click", toggleMenu);
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuAuthor.classList.add("show");
    menuList.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    menuBtnBackground.classList.add("hide");

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuAuthor.classList.remove("show");
    menuList.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    menuBtnBackground.classList.remove("hide");

    // Set menu state
    showMenu = false;
  }
}
