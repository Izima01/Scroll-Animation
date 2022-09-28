let target = document.querySelectorAll('.card');
let titles = document.querySelectorAll(".title");

window.addEventListener('DOMContentLoaded', checkTop)
window.addEventListener('scroll', checkTop);

function checkTop () {
    target.forEach(card => {
        let threshold = window.innerHeight * 0.85;
        let cardTop = card.getBoundingClientRect().top;
        if (cardTop < threshold) {
            card.classList.add("show");
        } else if (cardTop >= threshold) {
            card.classList.remove("show");
        } if (cardTop < (-60)) {
            card.classList.remove("show");
        }
    });
};

function generateColor() {
    titles.forEach(title => {
        let hexcode = "#";
        let characters = "0123456789ABCDEF".split("");
        for (let i = 0; i < 6; i++) {
            let randomNum = Math.floor(Math.random()*16);
            hexcode += characters[randomNum];
            // console.log(hexcode, randomNum);
            // console.log(Math.random());
        }
        title.style.color = hexcode;
        title.parentElement.style.boxShadow = `2px 5px 2px 1px ${hexcode}`;
    })
}

generateColor();