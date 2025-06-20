document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebar nav a');
  const sections = document.querySelectorAll('.section');

  function updateActive() {
    let idx = sections.length;
    while (--idx && window.scrollY + 60 < sections[idx].offsetTop) {}
    links.forEach(link => link.parentElement.classList.remove('active'));
    links[idx].parentElement.classList.add('active');
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', updateActive);
  updateActive();
});
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Aspiring Software Developer,",
  "Junior FullStack Developer,",
  "IT Enthusiast,"
];
const typingDelay = 100;
const erasingDelay = 40;
const newTextDelay = 1900; // Pause between phrases
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 800);
});

  function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.classList.toggle("show");
  }

  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('#mobileNav a');

    hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    });
  });
  });

  