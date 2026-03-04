// Initialize all players for each video element
const players = Array.from(document.querySelectorAll('.testimonial-slide--video-section__testimonial_player')).map(video => Stream(video));

// Get all play buttons and thumbnails
const playButtons = document.querySelectorAll('.testimonial-slide--video-section__thumbnail-img');

// Function to hide play button and thumbnail, and play video
function playVideo(playerIndex) {
  playButtons[playerIndex].style.display = 'none';
  players[playerIndex].play();
}

// Add click event listener to each play button
playButtons.forEach((button, index) => {
  button.addEventListener('click', () => playVideo(index));
});

// Function to pause all videos
function pauseAllVideos() {
  players.forEach(player => {
    player.pause();
  });
}

// Function to reset play buttons and thumbnails when slide changes
function resetControls() {
  playButtons.forEach(button => {
    button.style.display = 'block';
  });
}

const videoTestimonialsSlider = document.querySelector('.glide-slider');
const sliderArrows = document.querySelector('.glide__arrows');
const sliderBullets = document.querySelector('.glide__bullets');
const slider = video_slider_settings.video_slider;

// Glide.js slider settings
const videoTestimonialsSliderOptions = {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  autoplay: 8000,
  animationDuration: 600,
  bound: true,
  animationTimingFunc: 'cubic-bezier(.71,0,.48,1.09)'
};

if (slider.length > 1) {
// Glide.js slider initialization and event listeners
  const glide = new Glide(videoTestimonialsSlider, videoTestimonialsSliderOptions);

// Pause all videos and reset controls after mount and when slide changes
  glide.on(['mount.after', 'run.after'], () => {
    pauseAllVideos();
    resetControls();
  });
  
  glide.mount();

// Disable autoplay if it is a mobile device (responsive mode or not)
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
  function toggleAutoplayOnInteraction() {
    const autoplayDelay = isTouchDevice() ? false : 8000;
    glide.update({ autoplay: autoplayDelay });
  }
  toggleAutoplayOnInteraction();

// Event listeners for Next and Previous buttons
  const nextButton = document.getElementById('next_btn');
  const prevButton = document.getElementById('prev_btn');
  
  nextButton.addEventListener('click', function (event) {
    event.preventDefault();
    pauseAllVideos();
    resetControls();
    glide.go('>');
  });
  
  prevButton.addEventListener('click', function (event) {
    event.preventDefault();
    pauseAllVideos();
    resetControls();
    glide.go('<');
  });
  
  function reportWindowSize() {
    if (window.innerWidth < 768) {
      const slideVideoElement = document.querySelectorAll('.glide-slider .glide__slide--active .testimonial-slide--video-section');
      if (slideVideoElement.length > 0) {
        let heightOutput = slideVideoElement[0].offsetHeight;
        sliderArrows.style.top = `${heightOutput}px`;
        sliderBullets.style.top = `${heightOutput + 20}px`;
      }
    }
  }
  
  window.onload = reportWindowSize;
  window.onresize = reportWindowSize;
}
