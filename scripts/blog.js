// scripts/blog.js

const blogData = [
    {
        id: 'blog-1',
        title: "Investment Hotspots in Mumbai 2026",
        thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
        shortDesc: "Exploring the rise of ultra-luxury vertical estates in South Mumbai's evolving skyline and why timing is critical.",
        fullArticle: "Full detailed text for Mumbai 2026 goes here... (your 1000+ words of content)",
        gallery: [
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
            "https://images.unsplash.com/photo-1600585154340-be6199f7e009",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        ]
    },
    {
        id: 'blog-2',
        title: "The Art of Bespoke Interior Design",
        thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e",
        shortDesc: "How Indian heritage architecture is meeting modern minimalism in luxury villas across the subcontinent.",
        fullArticle: "Full detailed text for Interior Design goes here...",
        gallery: [
            "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            "https://images.unsplash.com/photo-1512915922611-e211c3f350c1",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        ]
    },
    {
        id: 'blog-3',
        title: "Sustainability in Luxury Housing",
        thumbnail: "https://images.unsplash.com/photo-1512915922611-e211c3f350c1",
        shortDesc: "Green certifications are becoming the new gold standard for discerning ultra-high-net-worth investors.",
        fullArticle: "Full detailed text for Sustainability goes here...",
        gallery: [
            "https://images.unsplash.com/photo-1512915922611-e211c3f350c1",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
        ]
    }
];

function renderBlog() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    blogData.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        // Making the whole card clickable
        card.onclick = () => openBlogModal(post.id);

        card.innerHTML = `
            <div class="blog-img" style="background-image: url('${post.thumbnail}')"></div>
            <div class="blog-content">
                <small>Market Insights</small>
                <h4>${post.title}</h4>
                <p>${post.shortDesc}</p>
                <button class="btn btn-outline" style="padding: 10px 20px; font-size: 0.7rem;">Read Full Article</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Updated Modal Interaction Logic
window.openBlogModal = function(id) {
    const post = blogData.find(p => p.id === id);
    if (!post) return;

    // Update Text Content
    document.getElementById('blogModalTitle').innerText = post.title;
    document.getElementById('blogModalContent').innerText = post.fullArticle;
    
    // Set Initial Main Image to first gallery image
    const mainImg = document.getElementById('blogMainImg');
    mainImg.style.backgroundImage = `url('${post.gallery[0]}')`;

    // Populate Gallery Thumbnails (up to 4 total images)
    const thumbGrid = document.getElementById('blogThumbGrid');
    thumbGrid.innerHTML = '';
    
    // Limit to first 4 images in gallery
    const displayImages = post.gallery.slice(0, 4);
    
    displayImages.forEach(imgUrl => {
        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        thumb.style.backgroundImage = `url('${imgUrl}')`;
        
        thumb.onclick = (e) => {
            e.stopPropagation();
            // Update main image to clicked thumbnail
            mainImg.style.backgroundImage = `url('${imgUrl}')`;
        };
        thumbGrid.appendChild(thumb);
    });

    // Show the Modal
    document.getElementById('blogModal').classList.add('active');
};

// Initialize
if (document.getElementById('blog-grid')) {
    renderBlog();
} else {
    // If global.js is still assembling, wait a moment
    setTimeout(renderBlog, 500); 
}