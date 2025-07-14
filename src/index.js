import './style.css';

const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  dropdown.classList.toggle('visually-hidden');
});
