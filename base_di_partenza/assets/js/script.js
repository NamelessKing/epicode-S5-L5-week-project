// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const getStartedBtn = document.getElementById("getStartedBtn");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    // Cambia il bottone da nero a verde
    getStartedBtn.style.backgroundColor = "var(--color-secondary)";
  } else {
    header.classList.remove("scrolled");
    // Ripristina il colore originale
    getStartedBtn.style.backgroundColor = "var(--color-dark)";
  }
});

// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.getElementById("mobileToggle");
const navbar = document.querySelector(".navbar");

mobileToggle.addEventListener("click", function () {
  navbar.classList.toggle("mobile-open");
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
