// Smooth scrolling for internal links (if using # links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Auto-highlight nav based on current file (multi-page setup)
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
            link.classList.add("active");
        }
    });
});

// Optional: highlight nav based on scroll position (for single-page apps)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(section.id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Popup message on contact form submission
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        this.reset();

        const alertBox = document.createElement('div');
        alertBox.className = 'alert-popup';
        alertBox.innerText = 'Thank you! Your message has been sent.';
        document.body.appendChild(alertBox);
        alertBox.style.display = 'block';

        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    });

}
