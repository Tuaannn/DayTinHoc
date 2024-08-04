let currentSlideReview = 0;
let StartXReview = 0;
let endXReview = 0;
let slideIntervalReviewReview;
let reviewDots;

function showSlideReview(index) {
    reviewDots[currentSlideReview].classList.remove("feedback__dot--actived");
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
    reviewDots[currentSlideReview].classList.add("feedback__dot--actived");
}

function changeReview(direction) {
    showSlideReview(currentSlideReview + direction);
}

function handleTouchStartReview(event) {
    StartXReview = event.touches[0].clientX;
    clearInterval(slideIntervalReview);
}

function handleTouchMoveReview(event) {
    endXReview = event.touches[0].clientX;
}

function handleTouchEndReview() {
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
    reviewDots = document.querySelectorAll(".feedback__dot");
    showSlideReview(currentSlideReview);
    window.addEventListener("resize", () =>
        showSlideReview(currentSlideReview)
    );
    startSlideShowReview();

    const slider = document.querySelector(".feedback-item--wrap");
    if (slider) {
        slider.addEventListener("touchstart", handleTouchStartReview);
        slider.addEventListener("touchmove", handleTouchMoveReview);
        slider.addEventListener("touchend", handleTouchEndReview);
    }
});
