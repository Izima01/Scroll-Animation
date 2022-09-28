let target = document.querySelectorAll('.card');

window.addEventListener('DOMContentLoaded', checkTop)
window.addEventListener('scroll', checkTop);

function checkTop () {
    target.forEach(card => {
        let threshold = window.innerHeight * 0.76;
        let cardTop = card.getBoundingClientRect().top;
        if (cardTop < threshold) {
            card.classList.add("show");
        } else if (cardTop >= threshold) {
            card.classList.remove("show");
        } if (cardTop < (-10)) {
            card.classList.remove("show");
        }
    });
};