// Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const contactForm = document.getElementById('contactForm');

    // Mobile navigation
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Page navigation
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Close mobile menu
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Add click event listeners to buttons with data-page attribute
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-page') || e.target.closest('[data-page]')) {
            e.preventDefault();
            const button = e.target.hasAttribute('data-page') ? e.target : e.target.closest('[data-page]');
            const pageId = button.getAttribute('data-page');
            showPage(pageId);
        }
    });

    // Contact form submission
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
            
    //         const submitBtn = document.getElementById('submitBtn');
    //         const submitText = submitBtn.querySelector('.submit-text');
    //         const submitIcon = submitBtn.querySelector('.submit-icon');
    //         const loadingSpinner = submitBtn.querySelector('.loading-spinner');
            
    //         // Show loading state
    //         submitBtn.disabled = true;
    //         submitText.textContent = 'Sending...';
    //         submitIcon.style.display = 'none';
    //         loadingSpinner.style.display = 'block';
            
    //         // Simulate form submission
    //         setTimeout(() => {
    //             // Reset form
    //             contactForm.reset();
                
    //             // Reset button state
    //             submitBtn.disabled = false;
    //             submitText.textContent = 'Send Message';
    //             submitIcon.style.display = 'block';
    //             loadingSpinner.style.display = 'none';
                
    //             // Show success message
    //             alert('Thank you for your message! I\'ll get back to you soon.');
    //         }, 2000);
    //     });
    // }

    // Animate skill bars when they come into view
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress, .progress-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }

    // Initialize skill bar animations
    animateSkillBars();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add hover effects to cards
    function addCardHoverEffects() {
        const cards = document.querySelectorAll('.featured-card, .trait-card, .skill-category, .project-card, .capability-card, .language-card, .certificate-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Initialize card hover effects
    addCardHoverEffects();

    // Navbar background on scroll
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Initialize navbar scroll effect
    handleNavbarScroll();

    // Add loading animation to buttons
    function addButtonLoadingStates() {
        const buttons = document.querySelectorAll('.btn, .project-link, .verify-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (!this.disabled && !this.classList.contains('no-loading')) {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                }
            });
        });
    }

    // Initialize button loading states
    addButtonLoadingStates();

    // Parallax effect for hero section
    // function addParallaxEffect() {
    //     const heroSection = document.querySelector('.hero-section');
        
    //     if (heroSection) {
    //         window.addEventListener('scroll', function() {
    //             const scrolled = window.pageYOffset;
    //             const rate = scrolled * -0.5;
    //             heroSection.style.transform = `translateY(${rate}px)`;
    //         });
    //     }
    // }

    // Initialize parallax effect
    // addParallaxEffect();

    // Typewriter effect for hero title
    function typewriterEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const text = heroTitle.innerHTML;
            heroTitle.innerHTML = '';
            let i = 0;
            
            function typeWriter() {
                if (i < text.length) {
                    heroTitle.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            }
            
            // Start typewriter effect after a short delay
            setTimeout(typeWriter, 500);
        }
    }

    // Initialize typewriter effect
    typewriterEffect();

    // Add fade-in animation for page content
    function addFadeInAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        const animatedElements = document.querySelectorAll('.page-header, .featured-card, .trait-card, .skill-category, .project-card, .capability-card, .language-card, .certificate-card');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Initialize fade-in animations
    addFadeInAnimations();

    // Add floating animation to hero
    function addFloatingAnimation() {
        const heroAvatar = document.querySelector('.hero-avatar');
        if (heroAvatar) {
            heroAvatar.style.animation = 'float 3s ease-in-out infinite';
        }
    }

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
    `;
    document.head.appendChild(style);

    // Initialize floating animation
    addFloatingAnimation();

    // Add stagger animation to grid items
    function addStaggerAnimation() {
        const grids = document.querySelectorAll('.featured-grid, .traits-grid, .skills-grid, .projects-grid, .capabilities-grid, .language-grid, .certificates-grid');
        
        grids.forEach(grid => {
            const items = grid.children;
            Array.from(items).forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.classList.add('fade-in-up');
            });
        });
    }

    // Initialize stagger animation
    addStaggerAnimation();

    // Add ripple effect to buttons
    function addRippleEffect() {
        const buttons = document.querySelectorAll('.btn, .form-submit');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Add CSS for ripple effect
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .btn, .form-submit {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Initialize ripple effect
    addRippleEffect();

    // Add smooth page transitions
    function addPageTransitions() {
        const originalShowPage = showPage;
        
        window.showPage = function(pageId) {
            const currentPage = document.querySelector('.page.active');
            
            if (currentPage) {
                currentPage.style.opacity = '0';
                currentPage.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    originalShowPage(pageId);
                    const newPage = document.getElementById(pageId);
                    if (newPage) {
                        newPage.style.opacity = '0';
                        newPage.style.transform = 'translateX(20px)';
                        
                        setTimeout(() => {
                            newPage.style.opacity = '1';
                            newPage.style.transform = 'translateX(0)';
                        }, 50);
                    }
                }, 200);
            } else {
                originalShowPage(pageId);
            }
        };
    }

    // Initialize page transitions
    addPageTransitions();

    // Add CSS for page transitions
    const transitionStyle = document.createElement('style');
    transitionStyle.textContent = `
        .page {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(transitionStyle);
});

