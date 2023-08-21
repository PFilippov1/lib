
'use strict';
const hamburgerMenu = document.querySelector('.hamburger-menu');
const tabletNavMenu = document.querySelector('.tablet__nav__menu');
const navItemTablet = document.querySelectorAll('.nav__item__tablet');

hamburgerMenu.addEventListener('click', () => {
  tabletNavMenu.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  const isClickInside = tabletNavMenu.contains(event.target) || hamburgerMenu.contains(event.target);

  if (!isClickInside) {
    tabletNavMenu.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  }
});

navItemTablet.forEach((item) => {
  item.addEventListener('click', () => {
    tabletNavMenu.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  });
});




/* этот код помечает картинки, для удобства разработки */
let i = 1;
for (let iw of document.querySelectorAll('.image-wrapper')) {
  iw.style.position = 'relative';
  iw.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 450; // ширина картинки
let count = 3; // видимое количество изображений

let list = document.querySelector('.slider-line');
let listElems = document.querySelectorAll('.image-wrapper');

let position = 0; // положение ленты прокрутки


document.querySelector('.left-arrow').onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';

};

document.querySelector('.right-arrow').onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};


