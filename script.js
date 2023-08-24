
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

//------------------------//


// Slider//

const sliderLine = document.querySelector('.slider-line');
const prevButton = document.querySelector('.left-arrow');
const nextButton = document.querySelector('.right-arrow');
const dots = document.querySelectorAll('.circle');

let position = 0;
let dotIndex = 0;
//functions for slider movement//

const nextSlide = () => {
  if (position < (dots.length - 1) * 475) {
    position += 475;
    dotIndex++
    nextButton.style.opacity = 1; // Show nextButton
  } else {
    position = (dots.length - 1) * 475;
    dotIndex = (dots.length - 1);
    nextButton.style.opacity = 0; // Hide nextButton
  }
  sliderLine.style.left = -position + 'px';
  thisSlide(dotIndex);

  if (position > 0) {
    prevButton.style.opacity = 1; // Show prevButton
  }
  thisSlide(dotIndex);

  // change opacity of nextButton
  if (position >= (dots.length - 1) * 475) {
    nextButton.style.opacity = 0;
  }
}

const prevSlide = () => {
  if (position > 0) {
    position -= 475;
    dotIndex--
    prevButton.style.opacity = 1; // Show prevButton
  } else {
    position = 0;
    dotIndex = 0
    prevButton.style.opacity = 0; // Hide prevButton
  }
  sliderLine.style.left = -position + 'px';
  thisSlide(dotIndex);

  if (position < (dots.length - 1) * 475) {
    nextButton.style.opacity = 1; // Show nextButton
  }
  thisSlide(dotIndex);
  // change opacity of prevButton
  if (position <= 0) {
    prevButton.style.opacity = 0;
  }
}
const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove('active')
  }
  dots[index].classList.add('active')
}

//event listeners
nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)

//dots slider

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    position = 475 * index
    sliderLine.style.left = -position + 'px'
    dotIndex = index
    thisSlide(dotIndex)
  })
})



// -------------------------//

//section about: tabs for radio buttons
const allBooksWrapper = document.querySelector('.favorites-items');
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach((item) => {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)


    tabsBtn.forEach((item) => {
      item.classList.remove('active');
    });

    tabsItems.forEach((item) => {
      item.classList.remove('active');
    });

    currentBtn.classList.add('active');
    currentTab.classList.add('active');

    //  Add the fade-out effect
    //     allBooksWrapper.classList.add('fade');
    //     setTimeout(() => {
    //       // Remove the fade class after 1 second
    //       allBooksWrapper.classList.remove('fade');
    //     }, 3000);
    //   });
    // });

    // Add the fade-out effect better effect

    // Check if the fade class is already present
    if (allBooksWrapper.classList.contains('fade')) {
      // Remove the fade class and add it back after a short delay
      allBooksWrapper.classList.remove('fade');
      setTimeout(() => {
        allBooksWrapper.classList.add('fade');
      }, 2000);
    } else {
      setTimeout(() => {
        allBooksWrapper.classList.add('fade');
      }, 10);
    }
  });
});

// Add the fade-in effect when the fade class is added back
allBooksWrapper.addEventListener('transitionend', () => {
  allBooksWrapper.classList.remove('fade');
  image.style.display = 'flex';
});






