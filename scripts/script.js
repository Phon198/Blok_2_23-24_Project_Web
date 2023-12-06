// Hamburger Menu Styles
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