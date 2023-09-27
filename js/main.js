
const roles = ["Junior Software Developer", "Programmer", "Data Analyst", "Student."];
const typingText = document.querySelector('.typing-text');

function typeText(index, text) {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        setTimeout(() => typeText(index + 1, text), 100); // Adjust typing speed (in milliseconds) here
    }
}

let roleIndex = 0;
typeText(roleIndex, roles[roleIndex]);

setInterval(() => {
    typingText.textContent = '';
    roleIndex = (roleIndex + 1) % roles.length;
    typeText(0, roles[roleIndex]);
}, 3000); // Adjust the interval (in milliseconds) to change roles
