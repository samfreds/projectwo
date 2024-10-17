document.getElementById('submit').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value.trim();
    
    // Array of correct answers
    const correctAnswers = ['james', 'James', 'James Hurley', 'james hurley']; // Example correct texts

    // Check if the inputText is in the correctAnswers array
    if (correctAnswers.includes(inputText)) {
        // Redirect to the new webpage
        window.location.href = 'stillunsure.html'; // Change to your target URL
    } else {
        alert('Incorrect.');
    }
});

// Generated with ChatGPT