// Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
    var openButton = document.getElementById("menu-toggle");
    var closeButton = document.getElementById("close-menu");
    var nav = document.querySelector("nav");

    openButton.addEventListener("click", function () {
        nav.classList.add("show-menu");
    });

    closeButton.addEventListener("click", function () {
        nav.classList.remove("show-menu");
    });
});

//Scearch Bar 
// https://codepen.io/shooft/pen/JjxmvrL
const searchButton = document.querySelector("header > button:nth-of-type(2)");
const searchSection = document.querySelector("header > search");

searchButton.onclick = toggleSearch;

function toggleSearch() {
	searchSection.classList.toggle("open");
}