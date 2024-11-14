// Swiper 
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 755500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        781: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
// Show Video
const playButton = document.querySelector('.play-movie');
const videoContainer = document.querySelector('.video-container');
const closeButton = document.querySelector('.close-video');
const video = document.querySelector('#myvideo');

// Show the video when play button is clicked
playButton.onclick = () => {
    videoContainer.classList.add("show-video");
    video.play(); // Automatically play the video
};

// Hide the video when close button is clicked
closeButton.onclick = () => {
    videoContainer.classList.remove("show-video");
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the beginning
};
