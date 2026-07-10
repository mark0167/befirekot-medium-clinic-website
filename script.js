// ==========================
// MOBILE MENU
// ==========================

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// ==========================
// SMOOTH CLOSE MENU
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ==========================
// HEADER SHADOW
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow = "none";

    }

});


// ==========================
// APPOINTMENT FORM
// ==========================

const appointmentForm = document.getElementById("appointmentForm");

if(appointmentForm){

appointmentForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your appointment request has been received. Our team will contact you shortly.");

appointmentForm.reset();

});

}


// ==========================
// NEWSLETTER
// ==========================

const newsletterButton = document.querySelector("footer button");

if(newsletterButton){

newsletterButton.addEventListener("click",()=>{

alert("Thank you for subscribing!");

});

}


// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});


document.querySelectorAll("section,.service-card,.doctor-card,.testimonial-card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .7s ease";

observer.observe(el);

});


// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll(".main-btn,.nav-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-3px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// ==========================
// CURRENT YEAR
// ==========================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright p");

if(copyright){

copyright.innerHTML = `© ${year} Befirekot Medium Clinic. All Rights Reserved.`;

}
