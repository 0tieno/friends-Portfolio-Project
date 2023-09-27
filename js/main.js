// An array containing different roles.
const roles = ["Junior Software Developer", "Programmer", "Data Analyst", "Student."];

// Get the element with the class 'typing-text' from the HTML.
const typingText = document.querySelector('.typing-text');

// Function to simulate typing text character by character.
function typeText(index, text) {
    if (index < text.length) {
        // Append the next character to the typingText element.
        typingText.textContent += text.charAt(index);
        setTimeout(() => typeText(index + 1, text), 100); // Adjust typing speed (in milliseconds) here
    }
}

// Function to start typing the roles one by one.
function startTypingRoles(roleIndex) {
    if (roleIndex >= roles.length) {
        roleIndex = 0; // Reset to the first role if we've reached the end of the array
    }
    
    // Clear any existing text in the typingText element.
    typingText.textContent = '';

    // Start typing the current role from the roles array.
    typeText(0, roles[roleIndex]);

    // Set a delay before moving to the next role.
    setTimeout(() => {
        startTypingRoles(roleIndex + 1); // Move to the next role after a delay
    }, roles[roleIndex].length * 100 + 2000); // Adjust delay (2 seconds) between roles
}

// Start typing the roles one by one from the beginning.
startTypingRoles(0);
