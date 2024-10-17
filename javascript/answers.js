const images = [
    'a1.png',
    'a2.png',
    'a3.png',
    'a4.png',
    'a5.png'
];

// Function to select a random image
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    document.getElementById('randomImage').src = selectedImage;
}

// Call the function when the page loads
window.onload = displayRandomImage;
