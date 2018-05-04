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

// Table
var table = document.querySelector('.table');
var hoverMini = document.querySelectorAll('.table__mini');
var hoverClassic = document.querySelectorAll('.table__classic');
var hoverPremium = document.querySelectorAll('.table__premium');

for (var i = 0; i < hoverMini.length; i++) {
  hoverMini[i].addEventListener('mouseover', function() {
    table.classList.add('table__mini');
  });
  
  hoverMini[i].addEventListener('mouseout', function() {
    table.classList.remove('table__mini');
  });
};

for (var i = 0; i < hoverClassic.length; i++) {
  hoverClassic[i].addEventListener('mouseover', function() {
    table.classList.add('table__classic');
  });
  
  hoverClassic[i].addEventListener('mouseout', function() {
    table.classList.remove('table__classic');
  });
};

for (var i = 0; i < hoverPremium.length; i++) {
  hoverPremium[i].addEventListener('mouseover', function() {
    table.classList.add('table__premium');
  });
  
  hoverPremium[i].addEventListener('mouseout', function() {
    table.classList.remove('table__premium');
  });
};

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