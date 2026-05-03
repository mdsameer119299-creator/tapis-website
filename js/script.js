// TAPIS GLOBAL INTERNATIONAL PVT LTD
// Lightweight interactions for premium navigation, animations, and forms.

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header') || document.querySelector('body > nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    setupStickyHeader(header);
    setupLogoFallbacks();
    setupMobileNavigation(hamburger, navLinks);
    setupRevealAnimations();
    setupSmoothScroll();
    setupForms();
    handleViewportHeight();
});

window.addEventListener('resize', handleViewportHeight);

function setupLogoFallbacks() {
    document.querySelectorAll('.brand-logo, .footer-logo img').forEach((logo) => {
        const fallback = logo.nextElementSibling;
        if (!fallback || !fallback.classList.contains('brand-fallback')) return;

        const showFallback = () => {
            logo.hidden = true;
            fallback.hidden = false;
        };

        const showLogo = () => {
            logo.hidden = false;
            fallback.hidden = true;
        };

        if (logo.complete && logo.naturalWidth === 0) {
            showFallback();
            return;
        }

        if (logo.complete && logo.naturalWidth > 0) {
            showLogo();
            return;
        }

        logo.addEventListener('load', showLogo, { once: true });
        logo.addEventListener('error', showFallback, { once: true });
    });
}

function setupStickyHeader(header) {
    if (!header) return;

    const updateHeader = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 16);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
}

function setupMobileNavigation(hamburger, navLinks) {
    if (!hamburger || !navLinks) return;

    const closeMenu = () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    };

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}

function setupRevealAnimations() {
    const animatedItems = document.querySelectorAll(
        'main > section, .serve-grid article, .product-showcase-grid article, .project-grid-home article, .solution-grid article, .cert-grid div'
    );

    if (!('IntersectionObserver' in window)) {
        animatedItems.forEach((item) => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px'
    });

    animatedItems.forEach((item, index) => {
        item.classList.add('reveal-section');
        item.style.transitionDelay = `${Math.min(index % 8, 6) * 55}ms`;
        observer.observe(item);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function setupForms() {
    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const requiredFields = form.querySelectorAll('[required]');
            const hasEmptyField = Array.from(requiredFields).some((field) => !field.value.trim());

            if (hasEmptyField) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            if (emailInput && !isValidEmail(emailInput.value.trim())) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            showMessage('Thank you. Our team will contact you shortly.', 'success');
            form.reset();
        });
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(message, type) {
    const existingMessage = document.querySelector('.toast-message');
    if (existingMessage) existingMessage.remove();

    const messageBox = document.createElement('div');
    messageBox.className = `toast-message toast-message--${type}`;
    messageBox.textContent = message;
    document.body.appendChild(messageBox);

    window.setTimeout(() => {
        messageBox.classList.add('is-leaving');
        window.setTimeout(() => messageBox.remove(), 280);
    }, 3600);
}

function handleViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
