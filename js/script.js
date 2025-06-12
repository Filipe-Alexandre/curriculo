// HEADER
// Menu
const navbar = document.querySelector("nav");
const navbarOpen = document.querySelector(".fa-bars");
const navbarClose = document.querySelector(".fa-xmark");
const modes = document.querySelector(".switch")

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

//MAIN
//SOBRE
// Idade
const idade = document.querySelector(".idade");
const ano = new Date().getFullYear();

idade.textContent = ano - 2002;
