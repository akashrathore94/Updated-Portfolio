/***TO HIDE LEFT BAR ***/
function navToggle() {
  document.querySelector(".nav-head").classList.toggle("toggle");
  document.querySelector(".toggle-btn").classList.toggle("toggle");
  document.querySelector(".nav-toggle").classList.toggle("toggle");
}

/***TO HIDE RIGHT BAR */
function asideToggle() {
  document.querySelector(".aside-head").classList.toggle("toggle");
  document.querySelector(".aside-toggle-btn").classList.toggle("toggle");
  document.querySelector(".aside-nav-toggle").classList.toggle("toggle");
}

/*****AS SOON AS THE WINDOW REACHES 885PX sidebars will collapse automatically*****/

window.addEventListener("resize", myFunction);

function myFunction() {
  let w = document.body.offsetWidth;
  if (w <= 885) hide();
}
myFunction();

function hide() {
  document.querySelector(".nav-head").classList.add("toggle");
  document.querySelector(".toggle-btn").classList.add("toggle");
  document.querySelector(".nav-toggle").classList.add("toggle");
  document.querySelector(".aside-head").classList.add("toggle");
  document.querySelector(".aside-toggle-btn").classList.add("toggle");
  document.querySelector(".aside-nav-toggle").classList.add("toggle");
}

/**VERTICAL SIDEBAR LIST FUNCTIONING**/
document.querySelector(".pro-btn").addEventListener("click", function () {
  document.querySelector(".pro-show").classList.toggle("show");
  document.querySelector(".first").classList.toggle("rotate");
});

document.querySelector(".nsm-btn").addEventListener("click", function () {
  document.querySelector(".nsm-show").classList.toggle("show");
  document.querySelector(".second").classList.toggle("rotate");
});

document.querySelector(".jour-btn").addEventListener("click", function () {
  document.querySelector(".jour-show").classList.toggle("show");
  document.querySelector(".third").classList.toggle("rotate");
});

document.querySelector(".tax-btn").addEventListener("click", function () {
  document.querySelector(".tax-show").classList.toggle("show");
  document.querySelector(".fourth").classList.toggle("rotate");
});

document.querySelector(".taxmann-btn").addEventListener("click", function () {
  document.querySelector(".taxmann-show").classList.toggle("show");
  document.querySelector(".fifth").classList.toggle("rotate");
});

document.querySelector(".web-btn").addEventListener("click", function () {
  document.querySelector(".web-show").classList.toggle("show");
  document.querySelector(".sixth").classList.toggle("rotate");
});

document.querySelector(".services-btn").addEventListener("click", function () {
  document.querySelector(".services-show").classList.toggle("show");
  document.querySelector(".seventh").classList.toggle("rotate");
});

document.querySelector(".diploma-btn").addEventListener("click", function () {
  document.querySelector(".diploma-show").classList.toggle("show");
  document.querySelector(".eighth").classList.toggle("rotate");
});
