// Header
window.onscroll = function () {
 var html = document.documentElement;
 var body = document.body;
 var header = document.querySelector('.header');
 
 if (html.scrollTop > 1 || body.scrollTop > 1) {
   header.classList.add('header--scroll');
 } else {
   header.classList.remove('header--scroll');
 }
};

// Menu
var menu = document.querySelector('.nav');
var menuButton = document.querySelector('.header__toggle');

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('header__toggle--inactive')) {
    menuButton.classList.remove('header__toggle--inactive');
    menuButton.classList.add('header__toggle--active');
    menu.classList.add('nav--active');
  } else {
    menuButton.classList.remove('header__toggle--active');
    menuButton.classList.add('header__toggle--inactive');
    menu.classList.remove('nav--active');
  }
});

// Slick
$('.slider').slick({
  dots: true,
  arrows: false,
  customPaging: function (slider, i) {
    return i + 1;
  },
  responsive: [{
    breakpoint: 1024,
    settings: {
      // slidesToShow: 3,
    }
  }, {
    breakpoint: 600,
    settings: {
      // slidesToShow: 2,
    }
  }, {
    breakpoint: 300,
    settings: 'uncslick'
  }]
});