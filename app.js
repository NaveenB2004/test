// JavaScript to dynamically show an image
document.addEventListener('DOMContentLoaded', () => {
    const img = document.createElement('img');
    img.src = 'https://naveenb2004.github.io/test/image.jpg'; // Replace with the URL of your image
    img.alt = 'A descriptive text for your image';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    // Append the image to the body
    document.body.appendChild(img);
});
