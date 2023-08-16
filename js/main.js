//const banner = document.querySelector('.banner');
const slides = document.querySelector('.banner-slides');

let slideIndex = 0;
let direction = 1; // 1 para adelante, -1 para atrás
const totalSlides = slides.children.length;

function nextSlide() {
    slideIndex += direction;

    if (slideIndex >= totalSlides) {
        slideIndex = totalSlides - 2;
        direction = -1;
    } else if (slideIndex < 0) {
        slideIndex = 1;
        direction = 1;
    }

    const translateValue = -slideIndex * 100;
    slides.style.transform = `translateX(${translateValue}%)`;
}

//setInterval(nextSlide, 3000);