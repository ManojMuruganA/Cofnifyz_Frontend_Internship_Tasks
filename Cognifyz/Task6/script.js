document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Reset error messages
    resetErrors();

    let isValid = true;

    // Validate Full Name
    const name = document.getElementById("name").value;
    if (name === "") {
        showError("nameError", "Full name is required.");
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        showError("emailError", "Email is required.");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Enter a valid email address.");
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value;
    if (password === "") {
        showError("passwordError", "Password is required.");
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword === "") {
        showError("confirmPasswordError", "Confirm password is required.");
        isValid = false;
    } else if (confirmPassword !== password) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
});

function resetErrors() {
    document.querySelectorAll(".error-message").forEach(errorElement => {
        errorElement.textContent = "";
    });
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}
