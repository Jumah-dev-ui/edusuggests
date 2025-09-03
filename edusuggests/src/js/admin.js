// This file manages the functionality for the admin.html page. 
// It includes logic to verify the password, retrieve submitted suggestions, 
// and display them in a user-friendly format.

document.addEventListener('DOMContentLoaded', function() {
    const password = "1234";
    const inputPassword = prompt("Enter the admin password:");

    if (inputPassword !== password) {
        alert("Incorrect password. Access denied.");
        window.location.href = "index.html"; // Redirect to index page if password is incorrect
    } else {
        displaySuggestions();
    }

    function displaySuggestions() {
        const suggestionsContainer = document.getElementById('suggestions');
        const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];

        if (suggestions.length === 0) {
            suggestionsContainer.innerHTML = "<p>No suggestions submitted yet.</p>";
        } else {
            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion');
                suggestionElement.textContent = suggestion;
                suggestionsContainer.appendChild(suggestionElement);
            });
        }
    }
});