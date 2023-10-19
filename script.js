const video = document.getElementById("elon_video");
const videoContainer = document.querySelector(".elon_overlay");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // Trigger when 60% of the video container is visible
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, options);

videoObserver.observe(videoContainer);