// Define an array of roles you want to display one by one
const roles = ["Junior Software Developer", "Programmer", "Data Analyst", "Student."];

// Get the HTML element with the class 'typing-text' to display the text
const typingText = document.querySelector('.typing-text');

// Function to simulate typing one character at a time
function typeText(index, text) {
    // Check if we haven't reached the end of the text
    if (index < text.length) {
        // Add the current character to the displayed text
        typingText.textContent += text.charAt(index);
        // Schedule the next character to be typed after a delay
        setTimeout(() => typeText(index + 1, text), 100); // Adjust typing speed (in milliseconds) here
    }
}

// Initialize the role index to start with the first role
let roleIndex = 0;

// Start typing the first role
typeText(roleIndex, roles[roleIndex]);

// Set up an interval to switch roles every 3 seconds
setInterval(() => {
    // Clear the displayed text
    typingText.textContent = '';
    // Move to the next role (loop back to the first role if at the end)
    roleIndex = (roleIndex + 1) % roles.length;
    // Start typing the next role from the beginning
    typeText(0, roles[roleIndex]);
}, 3000); // Adjust the interval (in milliseconds) to change roles
