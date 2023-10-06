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

// Hamburger menü açıldığı zaman menüye bir class eklemek için açık kapalı olma durumunu izledim. Menü açıkken sayfayı kaplasın ve scroll çıksın istiyorum.
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar");

navbarToggler.addEventListener("click", () => {
  if (navbarToggler.classList.toString().includes("collapse")) {
    navbarMenu.classList.remove("open");
  } else {
    navbarMenu.classList.add("open");
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
