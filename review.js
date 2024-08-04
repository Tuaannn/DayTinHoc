const pictureSlideShow = {
    pictures: [
        { image: "./assets/image/review1.jpg" },
        { image: "./assets/image/review2.jpg" },
        { image: "./assets/image/review3.jpg" },
        { image: "./assets/image/review4.jpg" },
    ],

    render: function () {
        let reviewList = document.querySelector(".review__list-img");

        let htmls = this.pictures
            .map((picture) => {
                return `
                <article class="review-item">
                    <img
                    src="${picture.image}"
                     alt=""
                    class="review-item__img"
                    />
                </article>
            
            `;
            })
            .join("");

        reviewList.innerHTML = htmls;
    },

    renderDots: function () {
        let listDots = document.querySelector(".review__dots");

        let htmls = this.pictures
            .map((item) => {
                return `
                         <div class="review__dot"></div>
                        `;
            })
            .join("");

        listDots.innerHTML = htmls;
    },

    start: function () {
        this.render();
        this.renderDots();
    },
};

function reviewSlideShow() {
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
        clearInterval(slideInterval);
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
        startSlideShow();
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

    let leftControl = document.querySelector(".review__leftControl");
    leftControl.onclick = function () {
        changeSlide(-1);
    };

    let rightControl = document.querySelector(".review__rightControl");
    rightControl.onclick = function () {
        changeSlide(1);
    };

    let reviewContents = document.querySelectorAll(".review__content-item");

    Array.from(reviewContents).forEach((item) => {
        item.onclick = function () {
            window.location.href = "https://www.youtube.com/";
        };
    });
}

pictureSlideShow.start();
reviewSlideShow();
