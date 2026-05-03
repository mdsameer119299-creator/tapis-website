// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && navLinks && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Hero Section Reveal Animation
    const heroContent = document.querySelector('.hero-content');
    const enquiryForm = document.querySelector('.enquiry-form');
    
    if (heroContent && enquiryForm) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        enquiryForm.style.opacity = '0';
        enquiryForm.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease-out';
            enquiryForm.style.transition = 'all 0.8s ease-out 0.2s';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
            enquiryForm.style.opacity = '1';
            enquiryForm.style.transform = 'translateX(0)';
        }, 100);
    }

    // Form Handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showMessage('Please fill in all required fields', 'error');
                return;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(data.email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            // Show success message (in real application, would send to server)
            showMessage('Thank you! We will get back to you soon.', 'success');
            this.reset();

            // Log form data (for demonstration)
            console.log('Form submitted:', data);
        });
    });

    // Message Display Function
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            padding: 1rem 2rem;
            background-color: ${type === 'success' ? 'rgba(76, 175, 80, 0.95)' : 'rgba(244, 67, 54, 0.95)'};
            color: white;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
            animation: slideIn 0.4s ease-out;
            border: 1px solid ${type === 'success' ? 'rgba(76, 175, 80, 1)' : 'rgba(244, 67, 54, 1)'};
            backdrop-filter: blur(10px);
        `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(-50%) translateY(-20px);
                    opacity: 0;
                }
                to {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(messageDiv);

        // Remove message after 4 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => messageDiv.remove(), 300);
        }, 4000);
    }

    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add scroll animation for elements with stagger effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }, index * 50); // Stagger effect
            }
        });
    }, observerOptions);

    // Add fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Observe product and project cards
    document.querySelectorAll('.product-card, .project-card').forEach(card => {
        observer.observe(card);
    });
});

// Mobile viewport height fix
function handleViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

handleViewportHeight();
window.addEventListener('resize', handleViewportHeight);
