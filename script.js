// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form validation
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // BUG (Issue 3): We want to show error if name is empty OR email does not contain @.
    // The current code incorrectly uses && instead of ||
if (name === '' || !email.includes('@')) { 
            message.style.color = 'red';
        message.textContent = 'Error: Name is required and email must contain @';
    } else {
        message.style.color = 'green';
        message.textContent = 'Message sent successfully!';
        form.reset();
    }
});
