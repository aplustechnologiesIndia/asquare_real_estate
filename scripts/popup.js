// scripts/popup.js

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

    // ===============================
    // FORM SUBMISSION WITH WHATSAPP + EMAILJS
    // ===============================
    
    if (form) {
        form.onsubmit = async (e) => {
            e.preventDefault();
            
            // 1. Collect form data for WhatsApp message
            const formData = new FormData(form);
            const data = {
                name: formData.get('user_name'),
                phone: formData.get('user_mobile'),
                interest: formData.get('property_type'),
                status: formData.get('construction_status'),
                location: formData.get('location'),
                budget: formData.get('budget')
            };

            // 2. Update button state
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Redirecting...";
            submitBtn.disabled = true;

            try {
                // 3. Send Email for records (Optional Backup)
                // ⚠️ Replace 'YOUR_TEMPLATE_ID' with your actual EmailJS template ID
                await emailjs.sendForm('default_service', 'YOUR_TEMPLATE_ID', form);
                
                // 4. Trigger WhatsApp Redirect (Primary Action)
                window.sendToWhatsApp(data, "Instant Callback Popup");
                
                // 5. Close popup after successful flow
                closePopup();
                
            } catch (err) {
                console.error("Submission failed:", err);
                
                // Fallback: Redirect to WhatsApp EVEN if email fails
                // This ensures you never lose a lead
                window.sendToWhatsApp(data, "Instant Callback Popup");
                closePopup();
            } finally {
                // Optional: Reset button if popup doesn't close immediately
                // submitBtn.innerText = originalText;
                // submitBtn.disabled = false;
            }
        };
    }
}

// Ensure it can be initialized manually by the global assembler
window.initLeadPopup = initLeadPopup;