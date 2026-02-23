// ===============================
// GLOBAL PAGE ASSEMBLER
// ===============================

const sectionsToLoad = [
    'home',
    'about',
    'collection',
    'reviews',
    'blog',
    'enquire',
    'contact'
];

const appContent = document.getElementById('app-content');
const loadedAssets = new Set();

// ===============================
// ASSEMBLE PAGE
// ===============================

async function assemblePage() {
    for (const section of sectionsToLoad) {
        try {
            const response = await fetch(`html/${section}.html`);
            if (!response.ok) throw new Error(`${section} not found`);
            const html = await response.text();

            const wrapper = document.createElement('div');
            wrapper.innerHTML = html.trim();

            while (wrapper.firstChild) {
                appContent.appendChild(wrapper.firstChild);
            }

            // Load CSS
            if (!loadedAssets.has(`${section}-css`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = `styles/${section}.css`;
                document.head.appendChild(link);
                loadedAssets.add(`${section}-css`);
            }

            // Load JS
            if (!loadedAssets.has(`${section}-js`)) {
                const script = document.createElement('script');
                script.src = `scripts/${section}.js`;

                script.onload = () => {
                    loadedAssets.add(`${section}-js`);

                    // 🔥 Initialize section-specific logic AFTER script loads
                    if (section === 'home' && typeof initHomeStats === "function") {
                        initHomeStats();
                    }

                    if (section === 'about' && typeof initAboutReveal === "function") {
                        initAboutReveal();
                    }
                };

                document.body.appendChild(script);
            }

        } catch (err) {
            console.error(`Failed to load ${section}:`, err);
        }
    }

    // Global behaviors
    setTimeout(() => {
        initSmoothScroll();
        initReveal();
    }, 200);
}

// ===============================
// SMOOTH SCROLL
// ===============================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const position = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===============================
// SCROLL REVEAL (GLOBAL)
// ===============================

function initReveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    reveals.forEach(el => observer.observe(el));
}

// ===============================
// MOBILE NAV TOGGLE
// ===============================

function toggleMenu() {
    document.getElementById('navLinks')?.classList.toggle('active');
}

// ===============================
// POPUPS
// ===============================

function closePopup() {
    document.getElementById('leadPopup')?.classList.remove('active');
}

function triggerDemoPopup() {
    document.getElementById('leadPopup')?.classList.add('active');
}

function closeBlogModal() {
    document.getElementById('blogModal')?.classList.remove('active');
}

// ===============================
// EMAIL FORM
// ===============================

function handleFormSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_abc', e.target)
        .then(() => {
            document.getElementById('formContainer').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            setTimeout(closePopup, 2500);
        })
        .catch(err => {
            alert('Submission failed. Please try again.');
            console.error(err);
        });
}

// ===============================
// PRELOADER
// ===============================

window.addEventListener('load', () => {
    const loaderBar = document.getElementById('loaderBar');
    const preloader = document.getElementById('preloader');

    if (loaderBar) loaderBar.style.width = '100%';

    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.remove(), 800);
        }
    }, 1000);
});

// ===============================
// BACK TO TOP BUTTON
// ===============================

window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (btn) {
        btn.style.display = window.scrollY > 500 ? 'flex' : 'none';
    }
});

// ===============================
// START EVERYTHING
// ===============================

document.addEventListener('DOMContentLoaded', assemblePage);