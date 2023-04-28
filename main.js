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

const courses = document.getElementById("courses");
const containerCourse = document.createElement("div");

const coursesArr = [
  {
    0: "HTML",
    1: "./assets/HTML.png",
    2: "Lenguaje de marcado utilizado oara definir la estructura de una aplicación web.",
  },
  {
    0: "CSS",
    1: "./assets/CSS.png",
    2: "Lenguaje que define el estilo y la presentación visual de las páginas web escritas en HTML.",
  },
  {
    0: "JavaScript",
    1: "./assets/JavaScript.png",
    2: "JavaScript es un lenguaje de programación que agrega interactividad a las páginas web.",
  },
  {
    0: "React",
    1: "./assets/React.png",
    2: "Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables.",
  },
  {
    0: "Angular",
    1: "./assets/Angular.png",
    2: "Framework de JavaScript utilizado para construir aplicaciones web de una sola página (SPA).",
  },
  {
    0: "Vue",
    1: "./assets/Vue.png",
    2: "Framework de JavaScript utilizado para construir interfaces de usuario reactivas y progresivas.",
  },
];

for (let i = 0; i < coursesArr.length; i++) {
  const card = document.createElement("div");
  card.innerHTML = `
  <div class="card">
    <div class="card-header">
      <h2>${coursesArr[i][0]}</h2>
      <img src="${coursesArr[i][1]}" alt="Icono de la tarjeta" />
    </div>
    <div class="card-body">
      <p>${coursesArr[i][2]}</p>
      <a href="#">Leer más</a>
    </div>
  </div>
`;
  containerCourse.appendChild(card);
}
courses.appendChild(containerCourse);
