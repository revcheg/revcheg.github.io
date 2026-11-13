// Main navigation
(function () {
  let navMain = document.querySelector('.nav');
  let navList = document.querySelector('.nav__list');
  let navBurger = document.querySelector('.nav__burger');

  navMain.classList.remove('nav--nojs');

  navBurger.addEventListener('click', function() {
    navBurger.classList.toggle('nav__burger--closed');
    navList.classList.toggle('nav__list--closed');
  });
})();

// Slider with cats
(function () {
  let range = document.querySelector('.live__range');
  if (range) {
    let beforeImage = document.querySelector('.live__image--before');
    let afterImage = document.querySelector('.live__image--after');
    let clientWidth = document.documentElement.clientWidth;
    let beforeButton = document.querySelector('.live__button--before');
    let afterButton = document.querySelector('.live__button--after');
    let currentValue;

    if (clientWidth >= 768) {
      range.value = 50;
    }

    range.addEventListener('input', function () {
      currentValue = range.value;
      setRange(currentValue);
    });

    beforeButton.addEventListener('click', function () {
      range.value = 100;
      setRange(100);
    });

    afterButton.addEventListener('click', function () {
      range.value = 0;
      setRange(0);
    });

    function setRange(currentValue) {
      beforeImage.style.clipPath = 'polygon(0 0, +' + currentValue + '% 0,' + currentValue + '% 100%, 0 100%)';
      afterImage.style.clipPath = 'polygon(' + currentValue + '% 0, 100% 0, 100% 100%,' + currentValue + '% 100%)';
    }
  }
})();
