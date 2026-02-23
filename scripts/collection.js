const projectData = [
    {
        title: "AIG Park Avenue",
        location: "Noida Extension",
        image: "./assets/AIG.webp",
        bhk: "2BHK + Study",
        baths: "2 Baths",
        size: "1195 sqft",
        balcony: "4 Balcony"
    },
    {
        title: "Himalaya Pride",
        location: "Noida Extension",
        image: "/assets/HP.webp",
        bhk: "2BHK + Study",
        baths: "2 Baths",
        size: "1188 sqft",
        balcony: "3 Balcony"
    },
    {
        title: "Galaxy North Avenue 2",
        location: "Noida Extension",
        image: "/assets/GNA2.webp",
        bhk: "2BHK",
        baths: "2 Baths",
        size: "905 sqft",
        balcony: "2 Balcony"
    },
    {
        title: "Amrapali Platinum",
        location: "Central Noida",
        image: "/assets/AP.webp",
        bhk: "3BHK",
        baths: "3 Baths",
        size: "1495 sqft",
        balcony: "4 Balcony"
    },
    {
        title: "JM Orchid",
        location: "Central Noida",
        image: "/assets/JMO.webp",
        bhk: "3BHK + Study",
        baths: "4 Baths",
        size: "1670 sqft",
        balcony: "3 Balcony"
    }
];

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    projectData.forEach(project => {
        const card = document.createElement("div");
        card.className = "listing-card reveal";

        card.innerHTML = `
            <div class="listing-img" style="background-image:url('${project.image}')"></div>

            <div class="listing-details">
                <h3>${project.title}</h3>
                <span class="location">${project.location}</span>

                <div class="property-info">
                    <span><i class="fa-solid fa-bed"></i>${project.bhk}</span>
                    <span><i class="fa-solid fa-bath"></i>${project.baths}</span>
                    <span><i class="fa-solid fa-ruler-combined"></i>${project.size}</span>
                    <span><i class="fa-solid fa-building"></i>${project.balcony}</span>
                </div>

                <button class="enquire-btn"
                    onclick="document.querySelector('#enquire').scrollIntoView({behavior:'smooth'})">
                    Enquire
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    initReveal();
}

/* Scroll Reveal Animation */
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

    reveals.forEach(r => observer.observe(r));
}

renderProjects();