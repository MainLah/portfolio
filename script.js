const navbar = document.getElementById("navbar-id");
const splash = document.getElementById("splash");

window.addEventListener("scroll", scrollAnim);

window.onload = () => {
  if (window.scrollY == 0) {
    splash.classList.remove("hidden");
    setTimeout(() => {
      splash.classList.add("hidden");
    }, 2950);
  }
};

function scrollAnim() {
  navbar.classList.remove("navbar-pc");
  navbar.classList.add("navbar-animate");
  setTimeout(() => {
    navbar.classList.remove("navbar-animate");
  }, 150);
  window.removeEventListener("scroll", scrollAnim);
}

if (screen.width < 1000 || window.scrollY > 0) {
  navbar.classList.remove("navbar-pc");
  window.removeEventListener("scroll", scrollAnim);
}
