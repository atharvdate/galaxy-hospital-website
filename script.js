// Enhanced Mobile Menu Toggle with Apple-like animations
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-overlay"></div>
        <div class="mobile-menu-content">
            <div class="mobile-menu-header">
                <h3>Galaxy Hospitals</h3>
                <button class="mobile-menu-close">&times;</button>
            </div>
            <nav class="mobile-nav"></nav>
        </div>
    `;

    // Create mobile menu links with enhanced styling
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileNav = mobileMenu.querySelector('.mobile-nav');

    navLinks.forEach((link, index) => {
        const mobileLink = link.cloneNode(true);
        mobileLink.style.animationDelay = `${index * 0.1}s`;
        mobileNav.appendChild(mobileLink);
    });

    document.body.appendChild(mobileMenu);

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    };

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay or close button
    mobileMenu.querySelector('.mobile-menu-overlay').addEventListener('click', toggleMenu);
    mobileMenu.querySelector('.mobile-menu-close').addEventListener('click', toggleMenu);

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// Smooth Scrolling
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

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scrolled')) {
        navbar.classList.add('scrolled');
    }

    lastScroll = currentScroll;
});

// Enhanced Scroll Animations with Apple-like timing
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');

            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.feature-card, .stat-item, .service-card');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.animationDelay = `${index * 0.1}s`;
                    child.classList.add('animate-on-scroll', 'animated');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section, .feature-card, .stat-item, .contact-section').forEach(el => {
    el.classList.add('animate-on-scroll');
    animateOnScroll.observe(el);
});

// Testimonial Slider
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonialSlider.classList.add('active');
        startX = e.pageX - testimonialSlider.offsetLeft;
        scrollLeft = testimonialSlider.scrollLeft;
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        isDown = false;
        testimonialSlider.classList.remove('active');
    });

    testimonialSlider.addEventListener('mouseup', () => {
        isDown = false;
        testimonialSlider.classList.remove('active');
    });

    testimonialSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialSlider.scrollLeft = scrollLeft - walk;
    });
}

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to your server
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Clean hero section without parallax issues

// Intersection Observer for Section Animations
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth Button Interactions
document.querySelectorAll('.cta-button, .whatsapp-button, .email-button, .location-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
        this.style.transition = 'all 0.2s ease';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(1px)';
    });

    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-1px)';
    });
});

// Smooth Page Loading
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add entrance animations to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Remove problematic parallax effects - keeping it clean and smooth

// Subtle and smooth hover effects for cards
document.querySelectorAll('.feature-card, .stat-item, .contact-section').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});