/*******************************************
 FOR NAV BAR CHANGING COLOR BASED ON POSITION
 *******************************************/

const links = document.querySelectorAll(".link");

function removeActive() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

var waypoint1 = new Waypoint({
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

var waypoint2 = new Waypoint({
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

var waypoint3 = new Waypoint({
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

var waypoint4 = new Waypoint({
  element: document.querySelector(".bullet"),
  handler: function () {
    document
      .querySelectorAll(".bullet")
      .forEach((el) =>
        el.classList.add("animate__animated", "animate__flipInX")
      );
  },
  offset: "70%",
});

document
  .querySelectorAll(".del")
  .forEach((el) => el.style.setProperty("--animate-duration", "1.5s"));

var waypoint5 = new Waypoint({
  element: document.querySelector(".js-back-img"),
  handler: function () {
    document
      .querySelector(".js-back-img")
      .classList.add("animate__animated", "animate__fadeInDown");
  },
  offset: "60%",
});

var waypoint6 = new Waypoint({
  element: document.querySelector(".js-back-txt"),
  handler: function () {
    document
      .querySelector(".js-back-txt")
      .classList.add("animate__animated", "animate__fadeInUp");
  },
  offset: "60%",
});
