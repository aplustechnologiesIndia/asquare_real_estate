// scripts/global.js
// Assemble scrollable page from fragments

// Ensure this remains in scripts/global.js
const sectionsToLoad = [
    'home',
    'about', // This will now fetch your redesigned about.html
    'collection',
    'concierge',
    'calculator',
    'blog',
    'contact'
];

const appContent = document.getElementById('app-content');
const loadedAssets = new Set();

// Load all sections on page load
async function assemblePage() {
    for (const section of sectionsToLoad) {
        try {
            // Fetch HTML
            const response = await fetch(`html/${section}.html`);
            if (!response.ok) throw new Error(`${section} not found`);
            const html = await response.text();

            // // Create container and inject
            // const sectionDiv = document.createElement('div');
            // sectionDiv.innerHTML = html.trim();
            // appContent.appendChild(sectionDiv.firstElementChild || sectionDiv);



            // Corrected logic in scripts/global.js
const sectionDiv = document.createElement('div');
sectionDiv.innerHTML = html.trim();

// Use a loop or spread to append all child elements
while (sectionDiv.firstChild) {
    appContent.appendChild(sectionDiv.firstChild);
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
                const script = document.createElement('script');
                script.src = `scripts/${section}.js`;
                script.onload = () => loadedAssets.add(`${section}-js`);
                document.body.appendChild(script);
            }

        } catch (err) {
            console.error(`Failed to load ${section}:`, err);
        }
    }

    // Initialize smooth scroll for anchor links
    initSmoothScroll();
}

// Smooth scroll helper
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const pos = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });
}

// Mobile menu toggle (global)
function toggleMenu() {
    document.getElementById('navLinks')?.classList.toggle('active');
}

// Popup functions (global)
function closePopup() { document.getElementById('leadPopup')?.classList.remove('active'); }
function triggerDemoPopup() { document.getElementById('leadPopup')?.classList.add('active'); }
function closePropertyModal() { document.getElementById('propertyModal')?.classList.remove('active'); }

// EmailJS form handler
function handleFormSubmit(e) {
    e.preventDefault();
    emailjs.sendForm('default_service', 'template_abc', e.target)
        .then(() => {
            document.getElementById('formContainer').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            setTimeout(closePopup, 2500);
        }, (err) => {
            alert('Submission failed. Please try again.');
            console.error(err);
        });
}

// Preloader
window.addEventListener('load', () => {
    document.getElementById('loaderBar').style.width = '100%';
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => document.getElementById('preloader')?.remove(), 800);
    }, 1000);
});

// Back-to-top visibility
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (btn) btn.style.display = window.scrollY > 500 ? 'flex' : 'none';
});

// 🚀 ASSEMBLE THE PAGE!
document.addEventListener('DOMContentLoaded', assemblePage);