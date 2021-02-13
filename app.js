document
  .querySelector("#menu-btn")
  .addEventListener("click", () =>
    document.querySelector("body").classList.toggle("scrollDisable")
  );

document
  .querySelector("#menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".site-nav-list").classList.toggle("show")
  );
