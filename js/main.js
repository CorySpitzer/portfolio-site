// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    // Check if the screen width is greater than 768px (tablet/desktop)
    if (window.innerWidth > 768) {
        const parallaxSections = document.querySelectorAll('.parallax-section');
        
        parallaxSections.forEach(section => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            section.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
});

// Also reset transform when screen is resized below threshold
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        const parallaxSections = document.querySelectorAll('.parallax-section');
        parallaxSections.forEach(section => {
            section.style.transform = 'none';
        });
    }
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
