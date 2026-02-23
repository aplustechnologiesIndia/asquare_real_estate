// Enquiry Form Handler

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("enquiryForm");
    const success = document.getElementById("formSuccess");

    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // TEMPORARY DEMO LOGIC
        form.style.display = "none";
        success.style.display = "block";

        // Later integrate EmailJS here
    });

});