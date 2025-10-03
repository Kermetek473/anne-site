// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll Animation (Fade-in Effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.featured-card, .book-card, .press-item').forEach(el => {
    observer.observe(el);
});

// Form Validation (iletisim.html için)
const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popup');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Reset errors
        document.querySelectorAll('.error').forEach(err => err.style.display = 'none');

        // Validate name
        if (name.value.trim() === '') {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        // Validate message
        if (message.value.trim() === '') {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Show success popup
            popup.style.display = 'flex';
            
            // Clear form
            contactForm.reset();

            // Hide popup after 3 seconds
            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);
        }
    });

    // Close popup on click
    if (popup) {
        popup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }
}