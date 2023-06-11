document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.cases-carousel-line');
    const cases = Array.from(carousel.children);
    let caseWidth = cases[0].getBoundingClientRect().width + parseFloat(window.getComputedStyle(cases[0], null).marginRight);
    console.log(caseWidth)
    let touchStartX = 0;
    let touchEndX = 0;
    let index = 0;


    function slideCase() {
        carousel.style.transform = `translateX(${-index * caseWidth}px)`;
        carousel.style.transition = 'transform 0.5s';
    }

    carousel.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].clientX;
    });

    carousel.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            index++;
        }
        if (touchEndX > touchStartX) {
            index--;
        }
        slideCase();
    }



});