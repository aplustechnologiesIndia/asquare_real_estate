// scripts/collection.js
// Property Data and Rendering Logic

const projectData = [
    {
        id: 'project-1',
        type: 'internal',
        title: "The Sky Atrium",
        location: "Worli, Mumbai",
        price: "₹45.00 Cr",
        mainImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        description: "Ultra-luxury 4BHK sky villa with a private lap pool and Arabian Sea views.",
        amenities: ["5500 sqft", "Sea View", "Concierge"],
        gallery: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            "https://images.unsplash.com/photo-1512915922611-e211c3f350c1"
        ],
        detailsText: "This residence features floor-to-ceiling windows and a temperature-controlled lap pool. Experience 360-degree views of the Mumbai skyline in a home designed for the elite."
    },
    {
        id: 'project-2',
        type: 'internal',
        title: "The Emerald Manor",
        location: "Golf Course Road, Gurgaon",
        price: "₹28.50 Cr",
        mainImg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Modernist sanctuary featuring automated smart-home systems and a private deck.",
        amenities: ["4200 sqft", "Home Automation", "Green View"],
        gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        ],
        detailsText: "A masterpiece of modern architecture on Golf Course Road. This property integrates seamless home automation with sustainable design."
    },
    {
        id: 'project-3',
        type: 'internal',
        title: "Casa Del Mar",
        location: "Assagao, Goa",
        price: "₹12.50 Cr",
        mainImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        description: "Mediterranean-style private villa with a sustainable garden and infinity pool.",
        amenities: ["3800 sqft", "Private Pool", "Fully Furnished"],
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            "https://images.unsplash.com/photo-1512915922611-e211c3f350c1"
        ],
        detailsText: "Handcrafted interiors meet coastal charm. This villa offers a secluded paradise with high-end finishes and an infinity pool overlooking the lush greenery."
    },
    {
        id: 'project-4',
        type: 'external',
        title: "View All Listings",
        location: "Verified Profile",
        price: "99acres",
        mainImg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        description: "Explore our complete portfolio of ultra-luxury properties on our official 99acres profile.",
        amenities: ["Verified", "Full Portfolio", "Direct Contact"],
        externalUrl: "https://www.99acres.com"
    }
];

// Render cards immediately when script loads
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    projectData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'listing-card';

        const btnAction = project.type === 'external'
        ? `onclick="window.open('${project.externalUrl}', '_blank')"`
        : `onclick="openPropertyModal('${project.id}')"`; // Added missing quote and parenthesis

        card.innerHTML = `
            <div class="listing-img" style="background-image: url('${project.mainImg}')">
                <div class="listing-overlay">${project.price}</div>
            </div>
            <div class="listing-details">
                <small>${project.location}</small>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <ul class="amenities">
                    ${project.amenities.map(a => `<li>${a}</li>`).join('')}
                </ul>
                <button class="btn btn-outline" ${btnAction}>
                    ${project.type === 'external' ? 'Visit Profile' : 'View Details'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Make functions globally accessible
window.openPropertyModal = function(id) {
    const project = projectData.find(p => p.id === id);
    if (!project || project.type !== 'internal') return;

    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalLocation').innerText = project.location;
    document.getElementById('modalDesc').innerText = project.detailsText;

    const mainImg = document.getElementById('mainGalleryImg');
    if (mainImg && project.gallery[0]) {
        mainImg.style.backgroundImage = `url('${project.gallery[0]}')`;
    }

    const thumbGrid = document.getElementById('thumbGrid');
    if (thumbGrid) {
        thumbGrid.innerHTML = '';
        project.gallery.slice(1, 4).forEach(imgUrl => {
            const thumb = document.createElement('div');
            thumb.className = 'thumb';
            thumb.style.backgroundImage = `url('${imgUrl}')`;
            thumb.onclick = () => {
                const currentMain = mainImg.style.backgroundImage;
                mainImg.style.backgroundImage = `url('${imgUrl}')`;
                thumb.style.backgroundImage = currentMain;
            };
            thumbGrid.appendChild(thumb);
        });
    }

    document.getElementById('propertyModal')?.classList.add('active');
};

window.closePropertyModal = function() {
    document.getElementById('propertyModal')?.classList.remove('active');
};

// ✅ CRITICAL: Call render immediately (no DOMContentLoaded!)
renderProjects();