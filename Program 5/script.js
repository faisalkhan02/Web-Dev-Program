// Array of colors
const colors = ["Red", "LightBlue", "LightGreen", "LightPink", "Yellow", "Orange", "Olive", "Coral"];

// Select elements
const button = document.getElementById("colorBtn");
const currentColorText = document.getElementById("currentColor");

// Event listener for button click
button.addEventListener("click", function() {
    // Get a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change background color
    document.body.style.backgroundColor = randomColor;

    // Update displayed color
    currentColorText.textContent = "Current Color: " + randomColor;
});
