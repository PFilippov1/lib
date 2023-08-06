
// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const tabletNavMenu = document.querySelector('.tablet__nav__menu');

// hamburgerMenu.addEventListener('click', () => {
//   tabletNavMenu.classList.toggle('active');
//   hamburgerMenu.classList.toggle('active');
// });

// document.addEventListener('click', (event) => {
//   const isClickInside = tabletNavMenu.contains(event.target) || hamburgerMenu.contains(event.target);
  
//   if (!isClickInside) {
//     tabletNavMenu.classList.remove('active');
//     hamburgerMenu.classList.remove('active');
//   }
// });


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