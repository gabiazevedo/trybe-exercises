const clickCount = document.querySelector('.btn');
const counter = document.querySelector('.badge');

clickCount.addEventListener('click', () => {
 let number = parseInt(counter.textContent) + 1;
 counter.textContent = number;
});