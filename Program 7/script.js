// Select form and input fields
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');

// Validation function
const validateForm = () => {
    let isValid = true;

    // Clear previous messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    successMessage.textContent = '';

    // Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your full name';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } else if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Password validation
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Please enter a password';
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    // Confirm password validation
    if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordError.textContent = 'Please confirm your password';
        isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    }

    return isValid;
};

// Handle form submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    if (validateForm()) {
        successMessage.textContent = 'Registration Successful!';
        form.reset(); // Clear the form
    }
});
