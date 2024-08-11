function createMailtoLink(email, subject, body) {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

let registers = document.querySelectorAll(".pricing-item__btn");

Array.from(registers).forEach((item) => {
    item.onclick = function () {
        const emailLink = createMailtoLink(
            "vantuan.97.pt@gmail.com",
            "Đăng ký khóa học tin học cho bé",
            "Tôi muốn đăng ký khóa ............"
        );

        item.href = emailLink;
    };
});
