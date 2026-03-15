function initLeadPopup() {
    const modal = document.getElementById('leadPopup');
    const form = document.getElementById('leadCaptureForm');
    const closeBtn = document.getElementById('closeLeadPopup');

    if (!modal) return;

    // Show after 3 seconds for EVERY user on EVERY refresh
    setTimeout(() => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }, 3000);

    // Close mechanism
    const closePopup = () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    if (closeBtn) closeBtn.onclick = closePopup;

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) closePopup();
    };

    // Form Submission
    if (form) {
        form.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            try {
                // Replace with your actual EmailJS IDs
                await emailjs.sendForm('default_service', 'YOUR_TEMPLATE_ID', form);
                alert("Thank you! Our expert will contact you shortly.");
                closePopup();
            } catch (err) {
                console.error("Submission failed:", err);
                alert("Submission error. Please try again.");
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        };
    }
}

// Ensure it can be initialized manually by the global assembler
window.initLeadPopup = initLeadPopup;