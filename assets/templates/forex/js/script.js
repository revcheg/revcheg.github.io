$('.slider__box').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});

$('.online__slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});

var navMain = document.querySelector('.page-header__main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__main-nav--closed')) {
    navMain.classList.remove('page-header__main-nav--closed');
    navMain.classList.add('page-header__main-nav--opened');
  } else {
    navMain.classList.add('page-header__main-nav--closed');
    navMain.classList.remove('page-header__main-nav--opened');
  }
});