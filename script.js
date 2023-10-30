const navLinks = document.querySelectorAll('.site-nav a');

document.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');

    navLinks.forEach((link) => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
            link.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            link.classList.remove('scrolled');
        }
    });
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

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".site-nav a");

    // Add a click event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });

                // Remove the "active" class from all links
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });

                // Add the "active" class to the clicked link
                link.classList.add("active");
            }
        });
    });

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionBottom = sectionTop + targetSection.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    // Remove the "active" class from all links
                    navLinks.forEach((navLink) => {
                        navLink.classList.remove("active");
                    });

                    // Add the "active" class to the current section's link
                    link.classList.add("active");
                }
            }
        });
    });
});
