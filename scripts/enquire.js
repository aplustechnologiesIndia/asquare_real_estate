// scripts/enquire.js

// 1. Move this function OUTSIDE any blocks so it's globally accessible
// This allows the 'onclick' attribute in your HTML to find it immediately.
window.toggleCityDropdown = function() {
    const container = document.querySelector('.collapsible-dropdown');
    if (container) {
        container.classList.toggle('active');
    }
};

// 2. Create an initialization function that global.js can call
function initEnquireForm() {
    const form = document.getElementById("enquiryForm");
    
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const selectedCities = formData.getAll('city').join(", ") || "No city selected";

        console.log("Submission for:", name);
        console.log("Captured Cities:", selectedCities);

        // Success logic: Hide form and show success message
        form.style.display = "none";
        
        // Ensure this ID exists in your HTML or fallback to alert
        const successMsg = document.getElementById("formSuccess");
        if (successMsg) {
            successMsg.style.display = "block";
        } else {
            // Create a temporary success message if ID is missing
            const thankYou = document.createElement('div');
            thankYou.className = "form-success";
            thankYou.style.display = "block";
            thankYou.innerHTML = `<h3>Thank You!</h3><p>We will contact you shortly.</p>`;
            form.parentNode.appendChild(thankYou);
        }
    });
}

// 3. Keep this for standard loads, but global.js handles the main trigger
document.addEventListener("DOMContentLoaded", initEnquireForm);