// Amazon Prime inspired JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.prime-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background opacity on scroll
    const header = document.querySelector('.prime-header');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const opacity = Math.min(scrolled / 100, 0.95);
        
        if (scrolled > 50) {
            header.style.background = `rgba(15, 20, 25, ${opacity})`;
        } else {
            header.style.background = 'rgba(15, 20, 25, 0.95)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navCenter = document.querySelector('.nav-center');
    
    if (hamburger && navCenter) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navCenter.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navCenter.classList.remove('active');
            });
        });
    }

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        
        titleLines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                line.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            }, index * 300);
        });
    }
    
    // Simple typing animation for subtitle
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        const texts = ['Software Development Engineer', 'Cloud Engineer', 'Java Developer', 'Backend Engineer'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeText, typeSpeed);
        }
        
        typeText();
    }



});