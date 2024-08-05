document.addEventListener("DOMContentLoaded", function () {
    // Lấy ID của bài viết bên trang chủ
    const urlParams = new URLSearchParams(window.location.search);
    const articleIdHome = urlParams.get("id");

    // lấy liên kết bên trang Blog
    const links = document.querySelectorAll(".blog__content-item");

    // lấy dánh sách bài viết bên Blog
    const articlesList = document.querySelectorAll(".blog-content__article");

    links.forEach((link) => {
        link.onclick = function (e) {
            e.preventDefault();
            const articleId = this.getAttribute("data-article");

            articlesList.forEach((article) => {
                article.classList.remove("actived");
            });

            document.getElementById(articleId).classList.add("actived");
        };
    });

    if (articleIdHome) {
        articlesList.forEach((article) => {
            article.classList.remove("actived");
        });
        document.getElementById(articleIdHome).classList.add("actived");
    }
});
