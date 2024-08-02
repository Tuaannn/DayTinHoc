// let currentSlide = 0;
// let startX = 0;
// let endX = 0;

// const dots = document.querySelectorAll(".review__dot");

// function showSlide(index) {
//     dots[currentSlide].classList.remove("review__dot--actived");
//     const slides = document.querySelectorAll(".review-item");

//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }

//     const slideWidth = slides[currentSlide].clientWidth;

//     document.querySelector(
//         ".review__list-img"
//     ).style.transform = `translateX(-${slideWidth * currentSlide}px)`;

//     dots[currentSlide].classList.add("review__dot--actived");
// }

// function changeSlide(direction) {
//     showSlide(currentSlide + direction);
// }

// function handleTouchStart(event) {
//     startX = event.touches[0].clientX;
// }

// function handleTouchMove(event) {
//     endX = event.touches[0].clientX;
// }

// function handleTouchEnd() {
//     if (startX > endX + 50) {
//         changeSlide(1);
//     } else if (startX < endX - 50) {
//         changeSlide(-1);
//     }
// }

// function startSlideShow() {
//     slideInterval = setInterval(() => {
//         changeSlide(1);
//     }, 5000);
// }

// document.addEventListener("DOMContentLoaded", () => {
//     showSlide(currentSlide);
//     window.addEventListener("resize", () => showSlide(currentSlide));
//     startSlideShow();

//     const slider = document.querySelector(".review__img-wrap");
//     slider.addEventListener("touchstart", handleTouchStart);
//     slider.addEventListener("touchmove", handleTouchMove);
//     slider.addEventListener("touchend", handleTouchEnd);
// });

let currentSlide = 0;
let startX = 0;
let endX = 0;
let slideInterval;
let dots;

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

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    clearInterval(slideInterval); // Dừng slideshow khi người dùng bắt đầu vuốt
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX > endX + 50) {
        changeSlide(1);
    } else if (startX < endX - 50) {
        changeSlide(-1);
    }
    startSlideShow(); // Bắt đầu lại slideshow sau khi người dùng vuốt
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    dots = document.querySelectorAll(".review__dot");
    showSlide(currentSlide);
    window.addEventListener("resize", () => showSlide(currentSlide));
    startSlideShow();

    const slider = document.querySelector(".review__img-wrap");
    if (slider) {
        slider.addEventListener("touchstart", handleTouchStart);
        slider.addEventListener("touchmove", handleTouchMove);
        slider.addEventListener("touchend", handleTouchEnd);
    }
});
