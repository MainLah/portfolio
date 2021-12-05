const navbar = document.getElementById("navbar-id");

window.addEventListener("scroll", scrollAnim);

function scrollAnim() {
  navbar.classList.remove("navbar-pc");
  navbar.classList.add("navbar-animate");
  setInterval(() => {
    navbar.classList.remove("navbar-animate");
  }, 500);
  window.removeEventListener("scroll", scrollAnim);
}

if (screen.width < 1000 || window.scrollY > 0) {
  navbar.classList.remove("navbar-pc");
  window.removeEventListener("scroll", scrollAnim);
}
