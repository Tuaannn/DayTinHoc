let currentSlideReview = 0;
let StartXReview = 0;
let endXReview = 0;
let slideIntervalReviewReview;

function showSlideReview(index) {
    const slides = document.querySelectorAll(".feedback-item");

    if (index >= slides.length) {
        currentSlideReview = 0;
    } else if (index < 0) {
        currentSlideReview = slides.length - 1;
    } else {
        currentSlideReview = index;
    }

    const slideWidth = slides[currentSlideReview].clientWidth;
    document.querySelector(
        ".feedback-item--lists"
    ).style.transform = `translateX(-${slideWidth * currentSlideReview}px)`;
}

function changeReview(direction) {
    showSlideReview(currentSlideReview + direction);
}

function handleTouchStart(event) {
    StartXReview = event.touches[0].clientX;
    clearInterval(slideIntervalReview);
}

function handleTouchMove(event) {
    endXReview = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (StartXReview > endXReview + 50) {
        changeReview(1);
    } else if (StartXReview < endXReview - 50) {
        changeReview(-1);
    }
    startSlideShowReview();
}

function startSlideShowReview() {
    slideIntervalReview = setInterval(() => {
        changeReview(1);
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlideReview(currentSlideReview);
    window.addEventListener("resize", () =>
        showSlideReview(currentSlideReview)
    );
    startSlideShowReview();

    const slider = document.querySelector(".feedback-item--wrap");
    if (slider) {
        slider.addEventListener("touchstart", handleTouchStart);
        slider.addEventListener("touchmove", handleTouchMove);
        slider.addEventListener("touchend", handleTouchEnd);
    }
});
