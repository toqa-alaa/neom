/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener("scroll", scrollHeader);
function scrollHeader() {
  const HEADER = document.getElementById("header");
  this.scrollY >= 50
    ? HEADER.classList.add("scroll-header")
    : HEADER.classList.remove("scroll-header");
}
/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      spaceBetween: 72,
    },
  },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        `.nav__menu a[href*="${sectionId}"]`
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
/*=============== CURRENT YEAR ===============*/
let yearSpan = document.querySelectorAll("#current-year");
yearSpan.forEach((span) => (span.innerHTML = new Date().getFullYear()));
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const sunIcon = "ri-sun-line";
const currentTheme = localStorage.getItem("current-theme");

// Function to get the current theme (dark or light)
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

// Check and apply the current theme and icon on page load
if (currentTheme === "dark") {
  document.body.classList.add(darkTheme);
  themeButton.classList.add(sunIcon);
} else {
  document.body.classList.remove(darkTheme);
  themeButton.classList.remove(sunIcon);
}
// Event listener to toggle the theme and icon when the button is clicked
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(sunIcon);

  // Save the theme in local storage
  localStorage.setItem("current-theme", getCurrentTheme());
});

//localStorage.clear()

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
  //reset:true
});
sr.reveal(".home__data , .products__container, .footer__container,data__container");
sr.reveal(".home__images", { delay: 600, origin: "bottom" });
sr.reveal(".new__card , .brand__img", { interval: 100 });
sr.reveal(".collection__explore:nth-child(1)", { origin: "right" });
sr.reveal(".collection__explore:nth-child(2)", { origin: "left" });
