//Напиши скрипт, який змінює кольори фону елемента <body> 
//через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.




const color = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', event => {
  color.style.backgroundColor = getRandomHexColor();
  span.textContent = color.style.backgroundColor;

});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


