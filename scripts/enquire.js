// Enquiry Form Handler

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiryForm");
    
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        // Captures all selected options from the multiple select
        const selectedCities = formData.getAll('city').join(", ");

        console.log("Captured Cities:", selectedCities);

        // Continue with your existing success/EmailJS logic
        form.style.display = "none";
        document.getElementById("formSuccess").style.display = "block";
    });
});