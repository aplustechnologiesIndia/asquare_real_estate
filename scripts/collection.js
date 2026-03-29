const projectData = [
    {
        title: "Godrej Riverine",
        location: "Sector 44, Noida",
        image: "assets/P1.webp",
        link: "https://godj-newlaunchsector44-noida.projectinfos.com/?d=OTMxNTM2MjU4Nw=="
    },
    {
        title: "L&T Green Reserve",
        location: "Noida Expressway, Sector-128",
        image: "assets/P2.webp",
        link: "https://greenreservenoida.projectinfos.com/?d=OTMxNTM2MjU4Nw=="
    },
    {
        title: "Godrej Sector 12",
        location: "Noida Extension",
        image: "assets/P3.webp",
        link: "https://godjsector12noida.projectinfos.com/?d=OTMxNTM2MjU4Nw=="
    },
    {
        title: "Godrej Prima",
        location: "Okhla Delhi",
        image: "assets/P4.webp",
        link: "https://godrejs-prima.projectinfos.com/?d=OTMxNTM2MjU4Nw=="
    },
    {
        title: "Sobha Aurum",
        location: "Sector 36, Greater Noida",
        image: "assets/P5.webp",
        link: "https://sobhanewprojectsector36noida.projectinfos.com/?d=OTMxNTM2MjU4Nw=="
    },
    {
        title: "Eldeco Fairway Reserve",
        location: "Sector 80, Gurgaon",
        image: "assets/P6.webp",
        link: "https://eldecofairwayreserve.projectinfos.com/?d=OTMxNTM2MjU4Nw=="
    }
];

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    // Clear grid before rendering
    grid.innerHTML = "";

    projectData.forEach(project => {
        const card = document.createElement("div");
        card.className = "listing-card reveal";

        // We use your exact CSS classes here, just centering the text and changing the button to an <a> tag
        card.innerHTML = `
            <div class="listing-img" style="background-image:url('${project.image}')"></div>

            <div class="listing-details" style="text-align: center; padding: 30px 25px;">
                <h3 style="margin-bottom: 5px;">${project.title}</h3>
                <span class="location" style="margin-bottom: 25px; display: block;">${project.location}</span>

                <a href="${project.link}" target="_blank" class="enquire-btn" style="display: block; text-decoration: none; box-sizing: border-box;">
                    Enquire Now
                </a>
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