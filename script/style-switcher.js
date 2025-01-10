const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* || STYLE SWITCHER || */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* || THEME SWITCHER */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  document.getElementById("theme-icon").classList.toggle("fa-sun");
  document.getElementById("theme-icon").classList.toggle("fa-moon");
  document.body.classList.toggle("light");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("light")) {
    document.getElementById("theme-icon").classList.add("fa-moon");
  } else {
    document.getElementById("theme-icon").classList.add("fa-sun");
  }
});
