document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.project-carousel');

    carousels.forEach(carousel => {
        const mainImg = carousel.querySelector('.carousel-main img');
        const thumbs = carousel.querySelectorAll('.carousel-thumb');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        if (!mainImg || thumbs.length === 0) return;

        let currentIndex = 0;
        let slideInterval;
        const intervalTime = 4000; // 4 seconds

        // Extract raw URL from srcset to get the best quality if possible, otherwise use src
        function getHighResUrl(thumb) {
            let src = thumb.getAttribute('data-fullsrc'); // Try data attribute first (if injected by our converter)
            if (!src) {
                src = thumb.src;
            }
            return src;
        }

        function updateCarousel(index) {
            // Remove active class from all thumbs
            thumbs.forEach(t => t.classList.remove('active'));

            // Add active class to current thumb
            thumbs[index].classList.add('active');

            // Fade out main image
            mainImg.classList.remove('fade-in');

            setTimeout(() => {
                // Change source and fade back in
                mainImg.src = getHighResUrl(thumbs[index]);
                mainImg.classList.add('fade-in');
            }, 250); // Matches CSS transition time

            // Center active thumbnail in overflow strip
            const thumb = thumbs[index];
            const thumbRect = thumb.getBoundingClientRect();
            const container = carousel.querySelector('.carousel-thumbnails');
            const containerRect = container.getBoundingClientRect();

            if (thumbRect.left < containerRect.left || thumbRect.right > containerRect.right) {
                thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % thumbs.length;
            updateCarousel(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
            updateCarousel(currentIndex);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        // Event Listeners
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel(currentIndex);
                resetInterval();
            });
        });

        // Initialize first slide and start auto-play
        mainImg.src = getHighResUrl(thumbs[0]);
        mainImg.classList.add('fade-in');
        thumbs[0].classList.add('active'); // ensure first active state
        slideInterval = setInterval(nextSlide, intervalTime);

        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
        carousel.addEventListener('mouseleave', resetInterval);
    });
});
