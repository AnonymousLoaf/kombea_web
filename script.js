window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const audioBoxes = document.querySelectorAll(".audio-item");

    audioBoxes.forEach((box) => {
        const audioId = box.getAttribute("data-audio");
        const audioElement = new Audio(audioId);

        box.addEventListener("click", function () {
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
                //audioElement.currentTime = 0;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all links inside the site navigation
    const navLinks = document.querySelectorAll(".site-header a");

    // Add a click event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Get the target element's ID based on the link's href
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});