// ===========================
// MOBILE HAMBURGER MENU
// ===========================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active'); // optional: animate hamburger
});

// ===========================
// SCROLL ANIMATION FOR SECTIONS / CARDS
// ===========================
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
  toggleScrollTopBtn();
});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');

const toggleScrollTopBtn = () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

// Smooth scroll behavior for the button
scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function sendWhatsApp() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const url = `https://wa.me/YOURNUMBER?text=${encodeURIComponent(
        `Name: ${name}\nMessage: ${message}`
    )}`;
    window.open(url, "_blank");
}
