function footerFunc() {
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
            "Tôi muốn đăng ký khóa cơ bản theo khóa"
        );
        const mapLink = `https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+THPT+T%C3%A2n+T%C3%BAc/@10.6903719,106.5730225,17z/data=!3m1!4b1!4m6!3m5!1s0x3175328b80a6b185:0x48552a18175f6639!8m2!3d10.6903666!4d106.5755974!16s%2Fg%2F11btrrkr2h?hl=vi-VN&entry=ttu`;

        const footerLinkEmail = document.querySelector(".footer__link--email");
        const footerLinkMap = document.querySelector(".footer__link--map");
        const footerLinkZalo = document.querySelector(
            ".footer__icon-wrap--zalo"
        );

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
}

function prevent(e) {
    e.preventDefault();
}
footerFunc();
