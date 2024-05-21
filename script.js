import { HERO_DATA } from './constants/hero-page.js';
import { CAKES_DATA } from './constants/cakes-page.js';
import { BAKERY_DATA } from './constants/bakery-page.js';

let currentSlide = 0;

const slides = document.querySelector('.ad-slider');
const totalSlides = document.querySelectorAll('.ad-slide').length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5", "Slide 6", "Slide 7", "Slide 8", "Slide 9"];
let currentIndex = 0;
let currentIndexBakery = 0;


function renderSlides() {
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.innerHTML = '';
  const slidesContainerBakery = document.querySelector('.slides-bakery');
  slidesContainerBakery.innerHTML = '';

  for (let i = currentIndex; i < currentIndex + 5; i++) {
    const slideIndex = i % CAKES_DATA.length;
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `
        <img src="${CAKES_DATA[slideIndex].image}" class="slide-img" />
    `;
    if (i === currentIndex + 2) { // Add bold and wider class to the third slide
      slide.classList.add('bold', 'wider');
      slide.innerHTML = `
      <img src="${CAKES_DATA[slideIndex].image}" class="slide-img" />
      <h1 style="color:#2F7238" class="slide-title">${CAKES_DATA[slideIndex].title}</h1>
      <p style="color:#2F7238" class="slide-detail">${CAKES_DATA[slideIndex].detail}</p>
  `;
    }
    slidesContainer.appendChild(slide);
  }

  for (let i = currentIndexBakery; i < currentIndexBakery + 5; i++) {
    const slideIndex = i % BAKERY_DATA.length;
    const slide = document.createElement('div');
    slide.classList.add('slide-bakery');
    slide.innerHTML = `
        <img src="${BAKERY_DATA[slideIndex].image}" class="slide-img" />
    `;
    if (i === currentIndexBakery + 2) { // Add bold and wider class to the third slide
      slide.classList.add('bold', 'wider');
      slide.innerHTML = `
      <img src="${BAKERY_DATA[slideIndex].image}" class="slide-img" />
      <h1 style="color:#FFFFFF" class="slide-title">${BAKERY_DATA[slideIndex].title}</h1>
  `;
    }
    slidesContainerBakery.appendChild(slide);
  }
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = CAKES_DATA.length - 1;
  } else if (currentIndex >= CAKES_DATA.length) {
    currentIndex = 0;
  }
  renderSlides();
}

function changeSlideBakery(direction) {
  currentIndexBakery += direction;
  if (currentIndexBakery < 0) {
    currentIndexBakery = BAKERY_DATA.length - 1;
  } else if (currentIndexBakery >= BAKERY_DATA.length) {
    currentIndexBakery = 0;
  }
  renderSlides();
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
document.querySelector('.prev-bakery').addEventListener('click', () => changeSlideBakery(-1));
document.querySelector('.next-bakery').addEventListener('click', () => changeSlideBakery(1));

renderSlides();

});

