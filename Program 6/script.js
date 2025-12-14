// ================== Functions ==================

// Function to calculate simple interest
const calculateInterest = (principal, rate, time) => (principal * rate * time) / 100;

// Function to display result
const displayResult = (interest) => {
    const resultPara = document.getElementById('result');
    resultPara.textContent = `The calculated simple interest is ₹${interest.toFixed(2)}`;
};

// ================== Event Listener ==================

const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const interest = calculateInterest(principal, rate, time);
    displayResult(interest);
});
