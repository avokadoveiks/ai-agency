/**
 * AI Agency Landing Page JavaScript
 * Enhanced interactivity and user experience
 */

(function() {
    'use strict';

    // =======================================================================
    // DOM Elements
    // =======================================================================
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.querySelector('#backToTop');
    const header = document.querySelector('.header');
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    const statNumbers = document.querySelectorAll('.stat-number');

    // =======================================================================
    // Navigation Functions
    // =======================================================================
    
    /**
     * Toggle mobile navigation menu
     */
    function toggleMobileMenu() {
        const isActive = navMenu.classList.contains('active');
        
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', !isActive);
        
        // Animate hamburger
        const hamburgers = navToggle.querySelectorAll('.hamburger');
        hamburgers.forEach((line, index) => {
            if (!isActive) {
                if (index === 0) line.style.transform = 'rotate(45deg) translate(6px, 6px)';
                if (index === 1) line.style.opacity = '0';
                if (index === 2) line.style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                line.style.transform = '';
                line.style.opacity = '';
            }
        });
    }

    /**
     * Close mobile menu when clicking outside
     */
    function closeMobileMenuOnClickOutside(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            
            // Reset hamburger animation
            const hamburgers = navToggle.querySelectorAll('.hamburger');
            hamburgers.forEach(line => {
                line.style.transform = '';
                line.style.opacity = '';
            });
        }
    }

    /**
     * Handle smooth scrolling for navigation links
     */
    function handleSmoothScroll(event) {
        const href = event.target.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        }
    }

    // =======================================================================
    // Scroll Effects
    // =======================================================================
    
    /**
     * Handle header scroll effects
     */
    function handleHeaderScroll() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 50) {
            header.style.background = 'linear-gradient(180deg, rgba(10,10,10,0.98), rgba(10,10,10,0.95))';
            header.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'linear-gradient(180deg, rgba(10,10,10,0.7), rgba(10,10,10,0.9))';
            header.style.boxShadow = 'none';
        }
    }

    /**
     * Handle back to top button visibility
     */
    function handleBackToTopVisibility() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    /**
     * Scroll to top functionality
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // =======================================================================
    // Animations
    // =======================================================================
    
    /**
     * Animate counting numbers
     */
    function animateCounters() {
        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 16);
        });
    }

    /**
     * Intersection Observer for animations
     */
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Trigger counter animation for stats section
                    if (entry.target.querySelector('.stat-number')) {
                        animateCounters();
                    }
                }
            });
        }, observerOptions);

        // Observe sections for animation
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Observe service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            observer.observe(card);
        });
    }

    // =======================================================================
    // Form Handling
    // =======================================================================
    
    /**
     * Validate form fields
     */
    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const name = field.name;
        let isValid = true;
        let errorMessage = '';

        // Clear previous error
        const errorElement = document.querySelector(`#${name}-error`);
        if (errorElement) {
            errorElement.textContent = '';
            field.classList.remove('error');
        }

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        // Email validation
        else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        // Name validation
        else if (name === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
        }
        // Message validation
        else if (name === 'message' && value) {
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters';
            }
        }

        // Display error if any
        if (!isValid && errorElement) {
            errorElement.textContent = errorMessage;
            field.classList.add('error');
        }

        return isValid;
    }

    /**
     * Handle contact form submission
     */
    function handleContactFormSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const fields = contactForm.querySelectorAll('input[required], textarea[required]');
        let isFormValid = true;

        // Validate all required fields
        fields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showNotification("Thanks! We'll get back to you within 24 hours.", 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        } else {
            showNotification('Please fix the highlighted errors in the form', 'error');
        }
    }

    /**
     * Handle newsletter form submission
     */
    function handleNewsletterSubmit(event) {
        event.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            showNotification('Please enter your email', 'error');
            return;
        }

        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        const submitBtn = newsletterForm.querySelector('button');
        const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        // Simulate subscription (replace with actual API call)
        setTimeout(() => {
            showNotification('Thanks for subscribing! You will receive our updates.', 'success');
            emailInput.value = '';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }

    // =======================================================================
    // Notifications
    // =======================================================================
    
    /**
     * Show notification message
     */
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Close notification">&times;</button>
            </div>
        `;

        // Add styles
        const bg = type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#2f80ed';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            background: ${bg};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
            transform: translateX(400px);
            transition: transform 0.28s cubic-bezier(.2,.9,.2,1);
            max-width: 420px;
        `;

        // Append to body
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        const autoRemoveTimer = setTimeout(() => {
            removeNotification(notification);
        }, 5000);

        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoRemoveTimer);
            removeNotification(notification);
        });
    }

    /**
     * Remove notification with animation
     */
    function removeNotification(notification) {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // =======================================================================
    // Utility Functions
    // =======================================================================
    
    /**
     * Debounce function to limit function calls
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Throttle function to limit function calls
     */
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // =======================================================================
    // Event Listeners
    // =======================================================================
    
    function setupEventListeners() {
        // Navigation events
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }

        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Close mobile menu on outside click
        document.addEventListener('click', closeMobileMenuOnClickOutside);

        // Back to top button
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', scrollToTop);
        }

        // Scroll events (throttled)
        window.addEventListener('scroll', throttle(() => {
            handleHeaderScroll();
            handleBackToTopVisibility();
        }, 16));

        // Form events
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactFormSubmit);
            
            // Real-time validation
            const formFields = contactForm.querySelectorAll('input, textarea');
            formFields.forEach(field => {
                field.addEventListener('blur', () => validateField(field));
                field.addEventListener('input', debounce(() => {
                    if (field.classList.contains('error')) {
                        validateField(field);
                    }
                }, 300));
            });
        }

        if (newsletterForm) {
            newsletterForm.addEventListener('submit', handleNewsletterSubmit);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (event) => {
            // Close mobile menu on Escape
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });

        // Resize event
        window.addEventListener('resize', debounce(() => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }, 250));
    }

    // =======================================================================
    // Initialization
    // =======================================================================
    
    /**
     * Initialize all functionality
     */
    function init() {
        setupEventListeners();
        setupIntersectionObserver();
        
        // Initial scroll effects
        handleHeaderScroll();
        handleBackToTopVisibility();
        
        console.log('AI Agency Landing Page initialized successfully! 🚀');
    }

    // =======================================================================
    // Start when DOM is ready
    // =======================================================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();