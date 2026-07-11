// ===============================
// BEFIREKOT MEDIUM CLINIC
// script.js
// ===============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Sticky Header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Appointment Form
const appointmentForm = document.querySelector(".appointment-form");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your appointment request has been received.");

        appointmentForm.reset();

    });

}

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🎉 Thank you for subscribing!");

        newsletterForm.reset();

    });

}

// Fade In Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
".service-card, .team-card, .testimonial-card, .why-card, .about-content, .about-image"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});
