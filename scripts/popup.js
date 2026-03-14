function initLeadPopup() {
    const modal = document.getElementById('leadPopup');
    const form = document.getElementById('leadCaptureForm');
    const closeBtn = document.getElementById('closeLeadPopup');

    if (!modal) return;

    // Show after 3 seconds
    setTimeout(() => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }, 3000);

    // Close mechanism
    const closePopup = () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    closeBtn.onclick = closePopup;

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) closePopup();
    };

    // Form Submission
    form.onsubmit = async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        try {
            // Replace with your ServiceID and TemplateID
            await emailjs.sendForm('default_service', 'YOUR_TEMPLATE_ID', form);
            alert("Thank you! Our expert will contact you shortly.");
            closePopup();
        } catch (err) {
            console.error("Submission failed:", err);
            alert("Submission error. Please try again.");
            submitBtn.innerText = "Request Instant Callback";
            submitBtn.disabled = false;
        }
    };
}

// Global initialization
window.addEventListener('load', initLeadPopup);