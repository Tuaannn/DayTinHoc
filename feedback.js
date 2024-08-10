const listFeedback = {
    reviews: [
        {
            rate: `Thầy dạy rất tỉ mỉ, chi tiết, con mình đã học được rất nhiều ở khóa cơ bản, tiếp tục sẽ cho con mình học khóa nâng cao`,
            image: "./assets/image/feedback-author.jpg",
            other: "Người dùng",
            author: "Kim Thanh",
            star: "./assets/image/feedback-star.svg",
        },

        {
            rate: `Khóa học rất chi tiết, còn mình từ trang giấy trắng nay đã có thể dùng được máy tính thành thạo`,
            image: "./assets/image/feedback-author4.jpg",
            other: "Người dùng",
            author: "Nguyen Duy",
            star: "./assets/image/feedback-star.svg",
        },

        {
            rate: `Khóa học rất chi tiết, con mình đã học được rất nhiều từ khóa học này. Biết sử dụng máy tính và các phần mềm Office`,
            image: "./assets/image/feedback-author3.jpg",
            other: "Người dùng",
            author: "Xóm Cổ Tài",
            star: "./assets/image/feedback-star.svg",
        },

        {
            rate: `Phụ huynh nào có con chưa biết nhiều về máy tính nên cho theo học, con mình bắt đầu có đam mê với máy tính từ đây`,
            image: "./assets/image/feedback-author2.jpg",
            other: "Người dùng",
            author: "Hiền Trương",
            star: "./assets/image/feedback-star.svg",
        },
    ],

    render: function () {
        let feedbackList = document.querySelector(".feedback-item--lists");

        let htmls = this.reviews
            .map((review) => {
                return `
                        <div class="feedback-item">
                            <q class="feedback__rate">
                                        ${review.rate}                     
                            </q>
                            <div class="feedback-author">
                                <img
                                    src="${review.image}"
                                    alt=""
                                    class="feedback-author__image"
                                />
                                <div class="feedback-author__info">
                                    <p
                                    class="feedback-author__name"
                                    >
                                    ${review.author}
                                    </p>
                                    <p
                                    class="feedback-author__design"
                                    >
                                    ${review.other}
                                    </p>
                                    <img
                                    src="${review.star}"
                                    alt=""
                                    class="feedback-author__star"
                                    />
                                </div>
                            </div>
                         </div>
                             `;
            })
            .join("");

        feedbackList.innerHTML = htmls;
    },

    renderDots: function () {
        let listDots = document.querySelector(".feedback__dots");

        let htmls = this.reviews
            .map((item) => {
                return `
            <div class="feedback__dot"></div>
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

feedbackSlideShow();
function feedbackSlideShow() {
    let currentSlideReview = 0;
    let StartXReview = 0;
    let endXReview = 0;
    let slideIntervalReview;
    let reviewDots;

    function showSlideReview(index) {
        reviewDots[currentSlideReview].classList.remove(
            "feedback__dot--actived"
        );
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

    let feedbackLeftControl = document.querySelector(".feedback__leftControl");
    feedbackLeftControl.onclick = function () {
        changeReview(-1);
    };

    let feedbackRightControl = document.querySelector(
        ".feedback__rightControl"
    );
    feedbackRightControl.onclick = function () {
        changeReview(1);
    };
}

listFeedback.start();
feedbackSlideShow();
