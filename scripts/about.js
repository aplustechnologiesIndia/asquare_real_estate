// scripts/about.js
// About section-specific JavaScript
// Currently no interactive elements — all static content
function initAboutReveal() {
    const section = document.querySelector(".about-content");
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                observer.unobserve(section);
            }
        });
    }, { threshold: 0.3 });

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
}