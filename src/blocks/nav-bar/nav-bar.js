let burger = document.querySelector(".site-nav__burger");
let siteNav = document.querySelector(".site-nav__list");

burger.addEventListener("click", () => {
  siteNav.classList.toggle("site-nav__list--burger-active");
  burger.classList.toggle("site-nav__burger--active");
});
