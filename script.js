 function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');  // Use `.show` not `.active` (as per your CSS)
  }
// Ensure Typed class is spelled correctly
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Core Java", "Fullstack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// Animate radial progress
document.querySelectorAll('.radial-skill').forEach(skill => {
    const percent = skill.getAttribute('data-percent');
    const circle = skill.querySelector('.progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    circle.style.strokeDashoffset = offset;
});
// Smooth Scroll (optional if you already use CSS `scroll-behavior`)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active link highlight based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Scroll to top button
const topBtn = document.querySelector('.top');

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbzBJzuqrpys7pgXh6dWETVNnQvTRLU3x7uqfShtNZxcbHHy8wSMBLcTtScFxtk557_D/exec", {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(msg => {
        alert("Form submitted successfully!");
        form.reset();
    })
    .catch(err => {
        console.error("Error submitting form:", err);
        alert("There was an error. Please try again.");
    });
});




