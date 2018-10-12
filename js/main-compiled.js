"use strict";

// SET THE VIEWPORT HEIGHT

// get the viewport height and we multiple it by 1% to get a value for a vh unit

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", vh + "px");

// NAVIGATION

// Select DOM Items

var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".navigation");
var menuList = document.querySelector(".navigation__menu");
var menuAuthor = document.querySelector(".navigation__author");
var menuBtnBackground = document.querySelector(".menu-button-background");

var navItems = document.querySelectorAll(".navigation__item");

// Set initial state of the menu

var showMenu = false;

menuBtnBackground.addEventListener("click", toggleMenu);
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuAuthor.classList.add("show");
    menuList.classList.add("show");
    navItems.forEach(function (item) {
      return item.classList.add("show");
    });
    menuBtnBackground.classList.add("hide");

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuAuthor.classList.remove("show");
    menuList.classList.remove("show");
    navItems.forEach(function (item) {
      return item.classList.remove("show");
    });
    menuBtnBackground.classList.remove("hide");

    // Set menu state
    showMenu = false;
  }
}
