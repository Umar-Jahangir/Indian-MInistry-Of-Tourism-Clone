let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const pauseButton = document.getElementById('pause');
const playButton = document.getElementById('play');

let interval;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to start the slideshow
function startSlideshow() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 2000); // Change slide every 2 seconds
}

// Function to stop the slideshow
function stopSlideshow() {
    clearInterval(interval);
}

// Event listeners for Pause and Play buttons
pauseButton.addEventListener('click', () => {
    stopSlideshow();
    pauseButton.style.display = 'none';
    playButton.style.display = 'inline-block';
});

playButton.addEventListener('click', () => {
    startSlideshow();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
});

// Start the slideshow initially
showSlide(currentIndex);
startSlideshow();

//marquee effect
const marqueeText = document.getElementById("marquee-text");
const marqueePauseButton = document.getElementById("marquee-pause");
const marqueePlayButton = document.getElementById("marquee-play");
let marqueeSpeed = 2;
let marqueeAnimationFrame;
let isMarqueePaused = false;

function startMarquee() {
    let marqueeWidth = marqueeText.offsetWidth;
    let parentWidth = marqueeText.parentElement.offsetWidth;
    let currentPosition = parentWidth;

    function animateMarquee() {
        if (!isMarqueePaused) {
            currentPosition -= marqueeSpeed;
            if (currentPosition < -marqueeWidth) {
                currentPosition = parentWidth;
            }
            marqueeText.style.transform = `translateX(${currentPosition}px)`;
        }
        marqueeAnimationFrame = requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
}

function pauseMarquee() {
    isMarqueePaused = true;
    marqueePauseButton.style.display = 'none';
    marqueePlayButton.style.display = 'inline-block';
}

function resumeMarquee() {
    isMarqueePaused = false;
    marqueePlayButton.style.display = 'none';
    marqueePauseButton.style.display = 'inline-block';
}

marqueePauseButton.addEventListener('click', pauseMarquee);
marqueePlayButton.addEventListener('click', resumeMarquee);

// Start the marquee when the page loads
startMarquee();






function addNewsItem() {
    const newsList = document.getElementById('whats-new-list');
    const newItem = document.createElement('li');
    newItem.textContent = 'New tourism initiative announced!';
    newsList.appendChild(newItem);
  }

  function addRelatedLink() {
    const linksList = document.getElementById('related-links-list');
    const newLink = document.createElement('li');
    newLink.textContent = 'New Tourism Resource';
    linksList.appendChild(newLink);
  }




  