const carousel = document.querySelector('.cases-carousel-line');

let touchStartX = 0;
let touchEndX = 0;
let index = 0;


carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
});

carousel.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        // Тут въебать действия для свайпа вправо
        index++;
    }
    if (touchEndX > touchStartX) {
        // Тут въебать действия для свайпа влево
        index--;
    }
    // А slidedCase() нахуй убрать
    slideCase();
}

function slideCase() {
    carousel.style.transform = `translateX(${-index * caseWidth}px)`;
    carousel.style.transition = 'transform 0.5s';
}
