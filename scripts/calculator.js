// scripts/calculator.js
// Investment Calculator Logic

function calculateInvestment() {
    const amountInput = document.getElementById('propAmount');
    const downInput = document.getElementById('downPayment');
    const resultDiv = document.getElementById('calcResult');
    const loanAmtSpan = document.getElementById('loanAmt');
    
    // Get values
    const amount = parseFloat(amountInput.value);
    const downPercent = parseFloat(downInput.value);

    // Validation
    if (isNaN(amount) || isNaN(downPercent) || amount <= 0 || downPercent < 0 || downPercent > 100) {
        alert("Please enter valid Property Value (>0) and Down Payment (0–100%).");
        return;
    }

    // Calculate loan
    const loan = amount * (1 - (downPercent / 100));
    
    // Update UI
    loanAmtSpan.textContent = loan.toFixed(2);
    resultDiv.style.display = 'block';
}

// Optional: Allow Enter key to trigger calculation
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#propAmount, #downPayment');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateInvestment();
            }
        });
    });
});