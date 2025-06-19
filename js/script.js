document.addEventListener('DOMContentLoaded', () => {
            const loadingScreen = document.getElementById('loading-screen');
            window.addEventListener('load', () => {
                loadingScreen.classList.add('fade-out');
            });

            // Typed.js: typed text animation
            const typed = new Typed('#typed-text', {
                strings: ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer'],
                typeSpeed: 70,
                backSpeed: 50,
                loop: true,
                smartBackspace: true,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true,
            });

            // Sidebar toggle for mobile & tablets
            const sidebar = document.getElementById('sidebar');
            const hamburgerBtn = document.getElementById('hamburger-btn');
            hamburgerBtn.addEventListener('click', () => {
                const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
                hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
                sidebar.classList.toggle('open');
            });

            // Navbar active state on scroll (sidebar links)
            const navLinks = sidebar.querySelectorAll('nav a');
            const sections = document.querySelectorAll('main section[id]');
            window.addEventListener('scroll', () => {
                let currentSection = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - (64 + 10);
                    if (window.pageYOffset >= sectionTop) {
                        currentSection = section.id;
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === currentSection) {
                        link.classList.add('active');
                    }
                });
            });

            // Focus management: skip to main content on section link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    sidebar.classList.remove('open');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                    document.getElementById('maincontent').focus();
                });
            });

            // Form Validation and submission feedback (basic front-end simulation)
            const contactForm = document.querySelector('#contact form');
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Simple validation example
                const name = contactForm.name.value.trim();
                const email = contactForm.email.value.trim();
                const message = contactForm.message.value.trim();
                if (!name || !email || !message) {
                    alert('Please fill in all fields before submitting.');
                    return;
                }
                if (!email.includes('@')) {
                    alert('Please enter a valid email.');
                    return;
                }
                alert('Thank you for your message! I will get back to you shortly.');
                contactForm.reset();
            });

        });