$(document).ready(function() {
    const $imageContainer = $('.image-container');
    const $images = $imageContainer.children();
    const imagesPerView = 5;
    const totalImages = $images.length;
    let currentIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
        const offset = -currentIndex * ($images.first().outerWidth(true));
        $imageContainer.css('transform', `translateX(${offset}px)`);
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex > totalImages - imagesPerView) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - imagesPerView;
        }
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event handlers
    $('.next').on('click', function() {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    $('.prev').on('click', function() {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Hover handlers
    $imageContainer.on({
        mouseenter: stopAutoSlide,
        mouseleave: startAutoSlide
    });

    // Window resize handler
    $(window).on('resize', updateCarousel);

    // Initial setup
    updateCarousel();
    startAutoSlide();
});