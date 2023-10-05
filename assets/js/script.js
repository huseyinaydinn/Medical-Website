const magnifier = document.getElementById("magnifier");
const inputBox = document.getElementById("search-input");

magnifier.addEventListener("click", () => {
  inputBox.classList.toggle("active");
});

// Scroll aşağı kaydığında navbarıma scrolled classını ekleyerek arka planını beyaza çevirdim.
const navbarScroll = document.querySelector("#nav-down");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    navbarScroll.classList.add("scrolled");
  } else {
    navbarScroll.classList.remove("scrolled");
  }
});
