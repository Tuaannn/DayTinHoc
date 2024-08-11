document.querySelector(".logo").onclick = function () {
    window.location.href = "./index.html";
};

document.querySelector(".mobile-header-logo").onclick = function () {
    window.location.href = "./index.html";
};

document.querySelector(".footer__logo").onclick = function () {
    window.location.href = "#";
};

let navbarLinks = document.querySelectorAll(".navbar__link");
let navbarMobileLinks = document.querySelectorAll(".menu-item__mobile");

const currentPath = window.location.pathname;

Array.from(navbarLinks).forEach((item) => {
    if (item.getAttribute("href") === `.${currentPath}`) {
        item.classList.add("active");
    }
});

Array.from(navbarMobileLinks).forEach((item) => {
    if (item.getAttribute("href") === `.${currentPath}`) {
        item.classList.add("active");
    }
});

let contacts = document.querySelector(".menu-item__show-mobile");
let check = document.querySelector("#menu-checkbox");

contacts.onclick = function () {
    check.checked = false;
};
