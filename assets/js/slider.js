let next = document.querySelector(".arrow_next");
let prew = document.querySelector(".arrow_prev");
let slides = document.querySelectorAll(".user_rewievs div");
let i = 0;

next.onclick = function () {
    slides[i].classList.toggle("user_active");
    i++;
    if (i >= slides.length) {
        i = 0;
    };
    slides[i].classList.toggle("user_active");
};

prew.onclick = function () {
    slides[i].classList.toggle("user_active");
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }
    slides[i].classList.toggle("user_active");
};