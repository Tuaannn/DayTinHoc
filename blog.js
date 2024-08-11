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

    links.forEach((link) => {
        link.onclick = function (e) {
            e.preventDefault();

            const articleId = this.getAttribute("data-article");

            articlesList.forEach((article) => {
                article.classList.remove("actived");
            });

            if (articleId === "article1") {
                blogHeading.innerText = "Khóa Học Cơ Bản";
            } else {
                blogHeading.innerText = "Khóa Học Nâng Cao";
            }

            if (articleId === "article1") {
                blogImg.src = "./assets/image/review1.jpg";
            } else {
                blogImg.src = "./assets/image/img7.jpg";
            }

            document.getElementById(articleId).classList.add("actived");

            links.forEach((item) => {
                item.classList.remove("active");
                this.classList.add("active");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Thêm hiệu ứng cuộn mượt
                });
            });
        };
    });

    if (articleIdHome) {
        articlesList.forEach((article) => {
            article.classList.remove("actived");
        });

        document.getElementById(articleIdHome).classList.add("actived");

        links.forEach((item) => {
            item.classList.remove("active");
        });

        if (articleIdHome === "article1") {
            blogHeading.innerText = "Khóa Học Cơ Bản";

            document
                .querySelector(".blog__content-item1")
                .classList.add("active");
        } else {
            blogHeading.innerText = "Khóa Học Nâng Cao";

            document
                .querySelector(".blog__content-item2")
                .classList.add("active");
        }

        if (articleIdHome === "article1") {
            blogImg.src = "./assets/image/review1.jpg";
        } else {
            blogImg.src = "./assets/image/img7.jpg";
        }
    }
});
