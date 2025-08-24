
// Typing effect
var typed = new Typed('#typed', {
    strings: [
        "🚀 Software Engineer",
        "Data Science & AI Enthusiast",
        "Machine Learning",
        "Data Analytics",
        "Quality Assurance",
        "Research & Innovation"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Scroll change header background
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
