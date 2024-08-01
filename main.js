let currentSlide = 0;
const dots = document.querySelectorAll(".review__dot");

function showSlide(index) {
    dots[currentSlide].classList.remove("review__dot--actived");
    const slides = document.querySelectorAll(".review-item");

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const slideWidth = slides[currentSlide].clientWidth;

    document.querySelector(
        ".review__list-img"
    ).style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    dots[currentSlide].classList.add("review__dot--actived");
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
    window.addEventListener("resize", () => showSlide(currentSlide));
    startSlideShow();
});
