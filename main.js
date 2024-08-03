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

let reviewContents = document.querySelectorAll(".review__content-item");

Array.from(reviewContents).forEach((item) => {
    item.onclick = function () {
        window.location.href = "https://www.youtube.com/";
    };
});

document.addEventListener("DOMContentLoaded", function () {
    function createMailtoLink(email, subject, body) {
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
        return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    }

    function createZaloLink(phoneNumber) {
        return `https://zalo.me/${phoneNumber}`;
    }

    const zaloLink = createZaloLink("0987183446");
    const emailLink = createMailtoLink(
        "vantuan.97.pt@gmail.com",
        "Đăng ký khóa học tin học cho bé",
        "Cho tôi thêm thông tin về khóa học"
    );
    const mapLink = `https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+THPT+T%C3%A2n+T%C3%BAc/@10.6903719,106.5730225,17z/data=!3m1!4b1!4m6!3m5!1s0x3175328b80a6b185:0x48552a18175f6639!8m2!3d10.6903666!4d106.5755974!16s%2Fg%2F11btrrkr2h?hl=vi-VN&entry=ttu`;

    const footerLinkEmail = document.querySelector(".footer__link--email");
    const footerLinkMap = document.querySelector(".footer__link--map");
    const footerLinkZalo = document.querySelector(".footer__icon-wrap--zalo");

    if (footerLinkEmail) {
        footerLinkEmail.href = emailLink;
    }

    if (footerLinkMap) {
        footerLinkMap.href = mapLink;
    }

    if (footerLinkZalo) {
        footerLinkZalo.href = zaloLink;
    }
});
