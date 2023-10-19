// Function to fetch and display images
function loadImages() {
    const imageContainer = document.getElementById('content');

    // Replace 'images/' with the path to your images folder
    const imagesFolder = 'images/';

    // Array of image filenames
    const imageFiles = [
        'Slide1.jpg',
        'Slide2.jpg',
        'Slide3.jpg',
        'Slide4.jpg',
        'Slide5.jpg',
        'Slide6.jpg',
        'Slide7.jpg',
        'Slide8.jpg',
        'Slide9.jpg',
        'Slide10.jpg',
        'Slide11.jpg',
        'Slide12.jpg',
        'Slide13.jpg',
        'Slide14.jpg',
        'Slide15.jpg',
        'Slide16.jpg',
        'Slide17.jpg',
        'Slide18.jpg',
        'Slide19.jpg',
        'Slide20.jpg',
        'Slide21.jpg',
    ];

    imageFiles.forEach((filename) => {
        const img = document.createElement('img');
        img.src = imagesFolder + filename;
        img.alt = filename;
        
        const flexItem = document.createElement('div');
        flexItem.classList.add('flex-item');
        flexItem.appendChild(img);

        imageContainer.appendChild(flexItem);
    });
}

// Call the loadImages function when the page loads
window.addEventListener('load', loadImages);
