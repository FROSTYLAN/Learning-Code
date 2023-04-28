const img = document.getElementById("logo-nav");
const menu = document.getElementById("menu");
const options = document.getElementById("options-nav");
const navRight = document.querySelector(".nav-right");

img.addEventListener("click", () => {
  if (window.innerWidth > 669) {
    options.classList.toggle("hidden");
  } else {
    navRight.classList.toggle("hidden");
  }
});

menu.addEventListener("click", () => {
  options.classList.toggle("hidden");
});
