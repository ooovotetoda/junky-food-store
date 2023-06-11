const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const item = document.querySelector('.item')
let itemWidth = item.getBoundingClientRect().width;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// replace by let
let direction;

prev.addEventListener("click", () => {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    direction = 1;
    // carousel.style.justifyContent = "flex-end";
    slider.style.transform = `translate(${itemWidth}px)`;
})

next.addEventListener("click", () => {
    direction = -1;
    // carousel.style.justifyContent = "flex-start";
    slider.style.transform = `translate(${-itemWidth}px)`;
})

slider.addEventListener("transitionend", () => {
    if (direction === -1) {
        // Можно поменять на append
        slider.append(slider.firstElementChild);
    } else if (direction === 1) {
        // Можно поменять на append
        slider.prepend(slider.lastElementChild);
    }


    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(function () {
        slider.style.transition = "all 0.5s ease";
    })

})