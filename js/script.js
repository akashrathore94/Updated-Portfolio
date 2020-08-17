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
    if (direction == "down")
      document.querySelector(".about-link").classList.add("active");
    else document.querySelector(".home-link").classList.add("active");
  },
  offset: "55%",
});

var waypoint2 = new Waypoint({
  element: document.getElementById("portfolio"),
  handler: function (direction) {
    removeActive();
    if (direction == "down")
      document.querySelector(".portfolio-link").classList.add("active");
    else document.querySelector(".about-link").classList.add("active");
  },
  offset: "55%",
});
