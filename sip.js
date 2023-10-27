// Add event listeners to update slider values in real-time
document.getElementById('principal').addEventListener('input', updateSliderValue);
document.getElementById('rate').addEventListener('input', updateSliderValue);
document.getElementById('time').addEventListener('input', updateSliderValue);

// Function to update slider values in the output
function updateSliderValue(event) {
    const slider = event.target;
    const output = slider.nextElementSibling;
    output.textContent = slider.value;

    // Manually trigger the SIP calculation when the sliders change
    calculateSIP();
}

document.getElementById('calculate-button').addEventListener('click', calculateSIP);

function calculateSIP() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseInt(document.getElementById('time').value);

    const monthlyRate = rate / 12 / 100;
    const months = time * 12;

    const sipAmount = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const totalInvestment = sipAmount * months;
    const totalReturns = totalInvestment - principal;

    const resultOutput = `Your SIP Amount: ₹${sipAmount.toFixed(2)}<br>
    Total Investment: ₹${totalInvestment.toFixed(2)}<br>
    Total Returns: ₹${totalReturns.toFixed(2)}`;

    document.getElementById('result-output').innerHTML =resultOutput;
}