// HEADER
// Menu
const navbar = document.querySelector("nav");
const navbarOpen = document.querySelector(".fa-bars");
const navbarClose = document.querySelector(".fa-xmark");
const themes = document.querySelector(".check")

navbarOpen.addEventListener("click", () => {
  navbar.style.display = "flex"
  navbarOpen.style.display = "none"
}
);
navbarClose.addEventListener("click", () => {
  navbar.style.display = "none"
  navbarOpen.style.display = "block"
}
);


themes.addEventListener("change", () => {
  if (themes.checked) {
    // Adiciona a classe light, removendo a dark
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  } else {
    // Adiciona a classe dark, removendo a light
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }
});

// MAIN
// SOBRE
// Front
  document.addEventListener("DOMContentLoaded", function () {
    new Typed("#DevFront", {
      strings: ["Front-end"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true
    });
  });

// Idade
const idade = document.querySelector(".idade");
const ano = new Date().getFullYear();

idade.textContent = ano - 2002;


// SOCIAL
// Links
document.querySelector(".fa-whatsapp").addEventListener("click", function () {
  window.open("https://web.whatsapp.com", "_blank");

});
document.querySelector(".fa-instagram").addEventListener("click", function () {
  window.open("https://instagram.com", "_blank");

});
document.querySelector(".fa-github").addEventListener("click", function () {
  window.open("https://github.com", "_blank");

});
document.querySelector(".fa-linkedin").addEventListener("click", function () {
  window.open("https://linkedin.com", "_blank");

});
