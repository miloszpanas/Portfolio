"use strict";

// SET THE VIEWPORT HEIGHT

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", vh + "px");

// resize on viewport change
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
});

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

$(".navigation__link").on("click", function () {
  toggleMenu();
});

// Smooth scrolling to sections

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

    if (target.length) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr("tabindex", "-1");
          $target.focus();
        }
      });
    }
  }
});
