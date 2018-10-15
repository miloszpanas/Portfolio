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
const navLink = document.querySelector(".navigation__link");

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

// close menu

// Smooth scrolling to sections

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
