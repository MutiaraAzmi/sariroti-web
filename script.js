import { CAKES_DATA } from './constants/cakes-page.js';
import { ROTI_DATA } from './constants/cakes-page.js';

console.log(ROTI_DATA)

function showContent(contentId) {
    // Hide all content
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Show the selected content
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
    selectedContent.classList.add('active');
}

window.showContent = showContent

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

let currentIndex = 0;
let currentIndexRoti = 0;


function renderSlides() {
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.innerHTML = '';
  const slidesContainerBakery = document.querySelector('.slides-roti');
  slidesContainerBakery.innerHTML = '';

  for (let i = currentIndex; i < currentIndex + 1; i++) {
    const slideIndex = i % CAKES_DATA.length;
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `
        <img src="${CAKES_DATA[slideIndex].image}" class="slide-img" />
    `;
    if (i === currentIndex) { // Add bold and wider class to the third slide
      slide.classList.add('bold');
      slide.innerHTML = `
      <div class="slide-desc">
      <h1 class="slide-title">${CAKES_DATA[slideIndex].title}</h1>
      <p class="slide-detail">${CAKES_DATA[slideIndex].detail}</p>
      </div>
      <img src="${CAKES_DATA[slideIndex].image}" class="slide-img" />
  `;
    }
    slidesContainer.appendChild(slide);
  }

  for (let i = currentIndexRoti; i < currentIndexRoti + 1; i++) {
    const slideIndex = i % ROTI_DATA.length;
    const slide = document.createElement('div');
    slide.classList.add('slide-roti');
    slide.innerHTML = `
        <img src="${ROTI_DATA[slideIndex].image}" class="slide-img" />
    `;
    if (i === currentIndexRoti) {
      slide.classList.add('bold', 'wider');
      slide.innerHTML = `
      <div class="slide-desc">
      <h1 class="slide-title">${ROTI_DATA[slideIndex].title}</h1>
      <p class="slide-detail">${ROTI_DATA[slideIndex].detail}</p>
      </div>
      <img src="${ROTI_DATA[slideIndex].image}" class="slide-img" />
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
  currentIndexRoti += direction;
  if (currentIndexRoti < 0) {
    currentIndexRoti = ROTI_DATA.length - 1;
  } else if (currentIndexRoti >= ROTI_DATA.length) {
    currentIndexRoti = 0;
  }
  renderSlides();
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
document.querySelector('.prev-roti').addEventListener('click', () => changeSlideBakery(-1));
document.querySelector('.next-roti').addEventListener('click', () => changeSlideBakery(1));

renderSlides();

});

