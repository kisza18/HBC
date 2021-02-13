let body = document.querySelector("body");
let navList = document.querySelector(".site-nav-list");
let hamTop = document.querySelector(".mobile-menu-top");
let hamBottom = document.querySelector(".mobile-menu-bottom");

function toggleNav() {
  body.classList.toggle("scrollDisable");
  navList.classList.toggle("show");
  hamTop.classList.toggle("active");
  hamBottom.classList.toggle("active");
}
