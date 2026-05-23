// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// CLOSE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// STICKY HEADER

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ACTIVE NAVIGATION LINKS

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }

  });

});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".hero-text, .hero-image, .about, .skill-card, .cert-card, .experience-card, .contact-container"
);

function revealOnScroll() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// TYPING EFFECT

const typingText = [
  "Digital Marketer",
  "SEO Specialist",
  "Copywriter",
  "Social Media Marketer"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-text h2");

function typeEffect() {

  if (charIndex < typingText[textIndex].length) {

    typingElement.textContent += typingText[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect() {

  if (charIndex > 0) {

    typingElement.textContent =
      typingText[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    textIndex++;

    if (textIndex >= typingText.length) {
      textIndex = 0;
    }

    setTimeout(typeEffect, 300);

  }

}

typingElement.textContent = "";

typeEffect();

// SCROLL TO TOP BUTTON

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    scrollBtn.classList.add("show-scroll");
  } else {
    scrollBtn.classList.remove("show-scroll");
  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// PARALLAX EFFECT

window.addEventListener("scroll", () => {

  const heroImage = document.querySelector(".hero-image");

  let offset = window.pageYOffset;

  heroImage.style.transform =
    `translateY(${offset * 0.1}px)`;

});
