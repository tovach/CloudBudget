let header = document.querySelector(".header");

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
};
