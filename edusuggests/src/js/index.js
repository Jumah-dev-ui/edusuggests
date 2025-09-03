// This file handles the functionality for the index.html page.
// It captures user input from the text area and sends it to the admin page.

document.addEventListener('DOMContentLoaded', () => {
    const suggestionForm = document.getElementById('suggestionForm');
    const suggestionInput = document.getElementById('suggestionInput');
    const feedbackMessage = document.getElementById('feedbackMessage');

    suggestionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const suggestion = suggestionInput.value.trim();

        if (suggestion) {
            // Store the suggestion in localStorage (or send it to a server)
            let suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
            suggestions.push(suggestion);
            localStorage.setItem('suggestions', JSON.stringify(suggestions));

            // Clear the input field
            suggestionInput.value = '';

            // Provide user feedback
            feedbackMessage.textContent = 'Thank you for your suggestion!';
            feedbackMessage.style.color = 'green';
        } else {
            feedbackMessage.textContent = 'Please enter a suggestion before submitting.';
            feedbackMessage.style.color = 'red';
        }
    });

    // Listen for Enter key in the textarea to submit the form
    suggestionInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            suggestionForm.dispatchEvent(new Event('submit'));
        }
    });
});