document.addEventListener("DOMContentLoaded", function () {
    // Lấy ID của bài viết bên trang chủ
    const urlParams = new URLSearchParams(window.location.search);
    const articleIdHome = urlParams.get("id");

    // lấy liên kết bên trang Blog
    const links = document.querySelectorAll(".blog__content-item");

    // lấy dánh sách bài viết bên Blog
    const articlesList = document.querySelectorAll(".blog-content__article");

    const blogHeading = document.querySelector(".blog-recent__heading");

    const blogImg = document.querySelector(".blog-recent__img");

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Ensures smooth scrolling
        });
    }

    links.forEach((link) => {
        link.onclick = function (e) {
            e.preventDefault();

            const articleId = this.getAttribute("data-article");
            const blogBigHeading = document.querySelector(
                ".blog-heading__title"
            );

            articlesList.forEach((article) => {
                article.classList.remove("actived");
            });

            scrollToTop();

            if (articleId === "article1") {
                blogHeading.innerText = "Khóa Học Cơ Bản";
                blogBigHeading.innerHTML = "KHÓA HỌC<br>TIN HỌC CHO BÉ";
            } else if (articleId === "article2") {
                blogHeading.innerText = "Khóa Học Nâng Cao";
                blogBigHeading.innerHTML = "KHÓA HỌC<br>TIN HỌC CHO BÉ";
            } else if (articleId === "article3") {
                blogHeading.innerText = "Kỹ năng sử dụng máy tính";

                blogBigHeading.innerHTML = "Kỹ năng sử dụng<br>máy tính";
            }

            if (articleId === "article1") {
                blogImg.src = "./assets/image/11.jpg";
            } else {
                blogImg.src = "./assets/image/5.jpg";
            }

            document.getElementById(articleId).classList.add("actived");

            links.forEach((item) => {
                item.classList.remove("active");
                this.classList.add("active");
            });
        };
    });

    if (articleIdHome) {
        articlesList.forEach((article) => {
            article.classList.remove("actived");
        });

        document.getElementById(articleIdHome).classList.add("actived");
        const blogBigHeading = document.querySelector(".blog-heading__title");

        links.forEach((item) => {
            item.classList.remove("active");
        });

        if (articleIdHome === "article1") {
            blogHeading.innerText = "Khóa Học Cơ Bản";
            blogBigHeading.innerHTML = "KHÓA HỌC<br>TIN HỌC CHO BÉ";

            document
                .querySelector(".blog__content-item1")
                .classList.add("active");
        } else if (articleIdHome === "article2") {
            blogHeading.innerText = "Khóa Học Nâng Cao";

            document
                .querySelector(".blog__content-item2")
                .classList.add("active");

            const container = document.querySelector(".blog-recent-list"); // Thay đổi selector phù hợp với container của bạn
            const targetElement = document.getElementById(articleIdHome);

            if (container && targetElement) {
                // Tính toán vị trí cần cuộn
                const containerRect = container.getBoundingClientRect();
                const targetRect = targetElement.getBoundingClientRect();

                // Khoảng cách từ đầu container đến phần tử mục tiêu
                const scrollTop =
                    targetRect.top - containerRect.top + container.scrollTop;

                // Thực hiện cuộn mượt mà
                container.scrollTo({
                    top: scrollTop,
                    behavior: "smooth",
                });

                blogBigHeading.innerHTML = "KHÓA HỌC<br>TIN HỌC CHO BÉ";
            }
        } else {
            blogHeading.innerText = "Kỹ năng sử dụng máy tính";

            document
                .querySelector(".blog__content-item3")
                .classList.add("active");

            const container = document.querySelector(".blog-recent-list"); // Thay đổi selector phù hợp với container của bạn
            const targetElement = document.getElementById(articleIdHome);

            blogBigHeading.innerHTML = "Kỹ năng sử dụng<br>máy tính";

            if (container && targetElement) {
                // Tính toán vị trí cần cuộn
                const containerRect = container.getBoundingClientRect();
                const targetRect = targetElement.getBoundingClientRect();

                // Khoảng cách từ đầu container đến phần tử mục tiêu
                const scrollTop =
                    targetRect.top - containerRect.top + container.scrollTop;

                // Thực hiện cuộn mượt mà
                container.scrollTo({
                    top: scrollTop,
                    behavior: "smooth",
                });
            }
        }

        if (articleIdHome === "article1") {
            blogImg.src = "./assets/image/11.jpg";
        } else {
            blogImg.src = "./assets/image/5.jpg";
        }
    }
});
