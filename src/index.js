import './style.css';

const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.dropdownBtn');

button.addEventListener('click', () => {
  dropdown.classList.toggle('visually-hidden');
});

const itemContainer = document.querySelector('.itemContainer');
const items = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pagination = document.querySelectorAll('.pagination span');

let currentIndex = 0;

function updateCarousel() {
  const width = items[0].clientWidth;
  itemContainer.style.transform = `translateX(-${width * currentIndex}px)`;

  pagination.forEach((span, index) => {
    span.classList.toggle('active', index === currentIndex);
  });
}

prev.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  updateCarousel();
  stopCarousel();
  startCarousel();
});

next.addEventListener('click', () => {
  currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
  stopCarousel();
  startCarousel();
});

pagination.forEach((span, index) => {
  span.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
    stopCarousel();
    startCarousel();
  });
});

let intervalID;
function startCarousel() {
  intervalID ??= setInterval(() => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  }, 1000);
}

function stopCarousel() {
  clearInterval(intervalID);
  intervalID = null;
}

startCarousel();

itemContainer.addEventListener('mouseenter', stopCarousel);
itemContainer.addEventListener('mouseleave', startCarousel);
