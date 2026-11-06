// =====================================
// GREEN CAMPUS WEBSITE - JAVASCRIPT
// =====================================


// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


// 2. SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


// Select elements for animation

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .activity-card, .solar-content, .waste-card, .gallery-grid img, .contact-form"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// 3. CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();

    const message = document.getElementById("formMessage");

    message.textContent =
        "Thank you, " + name +
        "! Your message has been received successfully. 🌱";

    contactForm.reset();

});


// 4. NAVIGATION ACTIVE EFFECT

const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// 5. CONSOLE MESSAGE

console.log(
    "🌱 Green Campus Website Loaded Successfully!"
);

console.log(
    "Creating a cleaner and greener future!"
);