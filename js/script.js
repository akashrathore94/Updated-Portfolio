/*******************************************
 FOR NAV BAR CHANGING COLOR BASED ON POSITION
 *******************************************/

const links = document.querySelectorAll(".link");

function removeActive() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

var aboutSec = new Waypoint({
  element: document.getElementById("about"),
  handler: function (direction) {
    removeActive();
    if (direction == "down") {
      document.querySelector(".about-link").classList.add("active");
      document
        .querySelector(".h-about")
        .classList.add("animate__animated", "animate__fadeInLeft");

      document
        .querySelector(".bar-about")
        .classList.add("animate__animated", "animate__fadeInLeftBig");
    } else document.querySelector(".home-link").classList.add("active");
  },
  offset: "55%",
});

var portfolioSec = new Waypoint({
  element: document.getElementById("portfolio"),
  handler: function (direction) {
    removeActive();
    if (direction == "down") {
      document.querySelector(".portfolio-link").classList.add("active");
      document
        .querySelector(".h-portfolio")
        .classList.add("animate__animated", "animate__fadeInRight");

      document
        .querySelector(".bar-portfolio")
        .classList.add("animate__animated", "animate__fadeInRightBig");
    } else document.querySelector(".about-link").classList.add("active");
  },
  offset: "55%",
});

var contactSec = new Waypoint({
  element: document.getElementById("contact"),
  handler: function (direction) {
    removeActive();
    if (direction == "down") {
      document.querySelector(".contact-link").classList.add("active");
      document
        .querySelector(".h-contact")
        .classList.add("animate__animated", "animate__fadeInLeft");

      document
        .querySelector(".bar-contact")
        .classList.add("animate__animated", "animate__fadeInLeftBig");
    } else document.querySelector(".portfolio-link").classList.add("active");
  },
  offset: "55%",
});

/**********ANIMATIONS *************/

document
  .querySelectorAll(".del")
  .forEach((el) => el.style.setProperty("--animate-duration", "1.5s"));

var bul1 = new Waypoint({
  element: document.querySelector(".js-bul1"),
  handler: function () {
    document
      .querySelector(".js-bul1")
      .classList.add("animate__animated", "animate__flipInX");
  },
  offset: "75%",
});

var bul2 = new Waypoint({
  element: document.querySelector(".js-bul2"),
  handler: function () {
    document
      .querySelector(".js-bul2")
      .classList.add("animate__animated", "animate__flipInX");
  },
  offset: "75%",
});

var bul3 = new Waypoint({
  element: document.querySelector(".js-bul3"),
  handler: function () {
    document
      .querySelector(".js-bul3")
      .classList.add("animate__animated", "animate__flipInX");
  },
  offset: "75%",
});

var bul4 = new Waypoint({
  element: document.querySelector(".js-bul4"),
  handler: function () {
    document
      .querySelector(".js-bul4")
      .classList.add("animate__animated", "animate__flipInX");
  },
  offset: "75%",
});

var about = new Waypoint({
  element: document.querySelector(".js-about"),
  handler: function () {
    document
      .querySelector(".js-about")
      .classList.add("animate__animated", "animate__fadeIn");
  },
  offset: "70%",
});

var skills = new Waypoint({
  element: document.querySelector(".js-skills"),
  handler: function () {
    document
      .querySelector(".js-skills")
      .classList.add("animate__animated", "animate__fadeIn");
  },
  offset: "70%",
});

var backstageImg = new Waypoint({
  element: document.querySelector(".js-back-img"),
  handler: function () {
    document
      .querySelector(".js-back-img")
      .classList.add("animate__animated", "animate__fadeInLeft");
  },
  offset: "70%",
});

var backstageTxt = new Waypoint({
  element: document.querySelector(".js-back-txt"),
  handler: function () {
    document
      .querySelector(".js-back-txt")
      .classList.add("animate__animated", "animate__fadeInRight");
  },
  offset: "70%",
});

var budgetyImg = new Waypoint({
  element: document.querySelector(".js-budg-img"),
  handler: function () {
    document
      .querySelector(".js-budg-img")
      .classList.add("animate__animated", "animate__fadeInLeft");
  },
  offset: "70%",
});

var budgetyTxt = new Waypoint({
  element: document.querySelector(".js-budg-txt"),
  handler: function () {
    document
      .querySelector(".js-budg-txt")
      .classList.add("animate__animated", "animate__fadeInRight");
  },
  offset: "70%",
});

var thirdImg = new Waypoint({
  element: document.querySelector(".js-third-img"),
  handler: function () {
    document
      .querySelector(".js-third-img")
      .classList.add("animate__animated", "animate__fadeInLeft");
  },
  offset: "70%",
});

var thirdTxt = new Waypoint({
  element: document.querySelector(".js-third-txt"),
  handler: function () {
    document
      .querySelector(".js-third-txt")
      .classList.add("animate__animated", "animate__fadeInRight");
  },
  offset: "70%",
});

var highlight = new Waypoint({
  element: document.querySelector(".highlight"),
  handler: function () {
    document
      .querySelector(".highlight")
      .classList.add("animate__animated", "animate__fadeInRight");
  },
  offset: "70%",
});

var contactForm = new Waypoint({
  element: document.querySelector(".contact-form"),
  handler: function () {
    document
      .querySelector(".contact-form")
      .classList.add("animate__animated", "animate__zoomIn");
  },
  offset: "70%",
});

/****BURGER*******/
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
