const toggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});

/* ======= Remove menu Mobile ======= */
const navLink = document.querySelectorAll(".nav__link");
const linkActive = () => {
  let navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((item) => {
  item.addEventListener("click", linkActive);
});

/* ======= Scroll sections active link ======= */

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    const sectionId = current.getAttribute("id");
    const menuLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

    if (menuLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        menuLink.classList.add("active-link");
      } else {
        menuLink.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);

/* ======= change background header ======= */
function scrollHeader() {
  const nav = document.querySelector("#header");
  if (this.scrollY >= 200) nav.classList.add("scrool-header");
  else nav.classList.remove("scrool-header");
}

window.addEventListener("scroll", scrollHeader);

/* ======= show scroll top ======= */
function scrollTop() {
  const scroll = document.querySelector("#scroll-top");
  if (this.scrollY >= 560) scroll.classList.add("show-scroll");
  else scroll.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

/* ======= change theme ======= */

const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .ingredients__data, .ingredients__img,
            .app__data, .app__img,
            .reservation__data,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 100,
  }
);
