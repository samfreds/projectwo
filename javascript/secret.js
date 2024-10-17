let hasSubmitted = false;

document.getElementById('submit').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value.trim();

    if (!hasSubmitted) {

        alert('Are you being honest?');
        hasSubmitted = true;
    } else {
        window.location.href = 'acceptance.html'; // Change to your target URL
    }
});