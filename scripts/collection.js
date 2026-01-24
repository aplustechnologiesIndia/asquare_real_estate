// scripts/collection.js
// Property Data for Modals
const propertyData = {
    'sky-atrium': {
        title: "The Sky Atrium",
        desc: "A sprawling 5500 sqft residence featuring floor-to-ceiling windows, a temperature-controlled lap pool, and 360-degree views of the Mumbai skyline.",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    'emerald-manor': {
        title: "The Emerald Manor",
        desc: "A modernist sanctuary on Golf Course Road, Gurgaon, featuring full home automation, panoramic green views, and minimalist luxury finishes.",
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    'casa-del-mar': {
        title: "Casa Del Mar",
        desc: "A Mediterranean-inspired villa in Assagao, Goa, with an infinity pool, sustainable garden, and handcrafted interiors blending coastal charm with contemporary elegance.",
        img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
    },
    'imperial-estate': {
        title: "The Imperial Estate",
        desc: "A heritage colonial bungalow in Lutyens’ Delhi, set on over 7200 sqft with manicured lawns, a private library, and 24/7 high-security infrastructure.",
        img: "https://images.unsplash.com/photo-1512915922611-e211c3f350c1"
    }
};

// Open Property Detail Modal
function openPropertyModal(id) {
    const data = propertyData[id];
    if (data) {
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalDesc').innerText = data.desc;
        document.getElementById('modalGallery').style.backgroundImage = `url('${data.img}')`;
        document.getElementById('propertyModal').classList.add('active');
    }
}

// Close Property Detail Modal (global function, but safe to define here too)
function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Ensure modal close button works
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('#propertyModal .close-popup');
    if (closeBtn && !closeBtn.hasListener) {
        closeBtn.addEventListener('click', closePropertyModal);
        closeBtn.hasListener = true;
    }
});