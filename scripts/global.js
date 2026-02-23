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

            // Load CSS once
            if (!loadedAssets.has(`${section}-css`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = `styles/${section}.css`;
                document.head.appendChild(link);
                loadedAssets.add(`${section}-css`);
            }

            // Load JS once
            if (!loadedAssets.has(`${section}-js`)) {
                await loadScript(`scripts/${section}.js`);
                loadedAssets.add(`${section}-js`);
            }

            // 🔥 Initialize section AFTER HTML + JS loaded
            initSection(section);

        } catch (err) {
            console.error(`Failed to load ${section}:`, err);
        }
    }

    // Global behaviors
    initSmoothScroll();
    initReveal();
}

// ===============================
// SCRIPT LOADER (awaitable)
// ===============================

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

// ===============================
// SECTION INITIALIZER
// ===============================

function initSection(section) {

    if (section === 'home' && typeof initHomeStats === "function") {
        initHomeStats();
    }

    if (section === 'about' && typeof initAboutReveal === "function") {
        initAboutReveal();
    }

    // 🔥 IMPORTANT FIX FOR JOURNAL
    if (section === 'blog' && typeof renderJournal === "function") {
        renderJournal();
    }

    if (section === 'enquire' && typeof initEnquireForm === "function") {
        initEnquireForm();
    }
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
                const offset = 80;
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
// SCROLL REVEAL
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
// MOBILE NAV
// ===============================

function toggleMenu() {
    document.getElementById('navLinks')?.classList.toggle('active');
}

// ===============================
// MODALS
// ===============================

function closeBlogModal() {
    document.getElementById('journalModal')?.classList.remove('active');
}

// ===============================
// EMAIL FORM
// ===============================

function handleFormSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_abc', e.target)
        .then(() => {
            alert("Thank you. We will contact you shortly.");
            e.target.reset();
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
// BACK TO TOP
// ===============================

window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (btn) {
        btn.style.display = window.scrollY > 500 ? 'flex' : 'none';
    }
});

// ===============================
// START
// ===============================

document.addEventListener('DOMContentLoaded', assemblePage);