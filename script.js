
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



// for responsive

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('primary-nav');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when clicking any link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}



