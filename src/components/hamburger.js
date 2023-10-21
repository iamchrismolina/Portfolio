const toggleHamburger = () => {
  hamburger.classList.toggle("is-active");
  headerMenu.classList.toggle("header__menu-links--toggle");
}

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleHamburger);

const headerMenu = document.getElementById("headerMenu");

const menuLinks = document.querySelectorAll(".menu--links");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", toggleHamburger);
})


