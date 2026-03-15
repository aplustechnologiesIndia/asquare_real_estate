// scripts/enquire.js

// ===============================
// CITY DROPDOWN TOGGLE (Global)
// ===============================

// 1. Move this function OUTSIDE any blocks so it's globally accessible
// This allows the 'onclick' attribute in your HTML to find it immediately.
window.toggleCityDropdown = function() {
    const container = document.querySelector('.collapsible-dropdown');
    if (container) {
        container.classList.toggle('active');
    }
};

// ===============================
// ENQUIRY FORM INITIALIZATION
// ===============================

// 2. Updated initialization function with WhatsApp redirection
function initEnquireForm() {
    const form = document.getElementById("enquiryForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            preferred_cities: formData.getAll('city').join(", "),
            requirement: formData.get('message')
        };

        // Trigger WhatsApp Redirect
        window.sendToWhatsApp(data, "Enquiry Section");

        // Optional: Show success UI on the page
        form.style.display = "none";
        const thankYou = document.createElement('div');
        thankYou.className = "form-success";
        thankYou.style.display = "block";
        thankYou.innerHTML = `<h3>Thank You!</h3><p>Redirecting you to WhatsApp...</p>`;
        form.parentNode.appendChild(thankYou);
    });
}

// ===============================
// FALLBACK INIT (Standard Load)
// ===============================

// 3. Keep this for standard loads, but global.js handles the main trigger
document.addEventListener("DOMContentLoaded", initEnquireForm);