// scripts/home.js
// Optimized Stats Counter Animation (Fast + Premium)

function initHomeStats() {

    const statItems = document.querySelectorAll(".stat-item");
    if (!statItems.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                const item = entry.target;
                const numberEl = item.querySelector(".stat-number");

                if (!numberEl || item.classList.contains("animated")) return;

                item.classList.add("visible");
                item.classList.add("animated"); // Prevent re-trigger

                const target = parseInt(numberEl.dataset.target);
                const suffix = numberEl.dataset.suffix || "+";

                const duration = 700; // total animation time (ms)
                const startTime = performance.now();

                const animateCount = (currentTime) => {
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    const currentValue = Math.floor(progress * target);

                    numberEl.innerText = currentValue.toLocaleString() + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(animateCount);
                    } else {
                        numberEl.innerText = target.toLocaleString() + suffix;
                    }
                };

                // Slight stagger effect (premium feel)
                setTimeout(() => {
                    requestAnimationFrame(animateCount);
                }, index * 100);

                observer.unobserve(item);
            }
        });
    }, { threshold: 0.25 }); // Trigger slightly earlier

    statItems.forEach(item => observer.observe(item));
}