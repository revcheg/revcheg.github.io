// Nav
var navItem = document.querySelector('.nav__item');
var navSub = document.querySelector('.nav__sublist');

navItem.addEventListener('click', function () {
  if (navItem.classList.contains('nav__item--inactive')) {
    navItem.classList.remove('nav__item--inactive');
    navItem.classList.add('nav__item--active');
    navSub.classList.add('nav__sublist--active');
  } else {
    navItem.classList.remove('nav__item--active');
    navItem.classList.add('nav__item--inactive');
    navSub.classList.remove('nav__sublist--active');
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
      slidesToShow: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }
  }, {
    breakpoint: 300,
    settings: 'uncslick'
  }]
});

// $('.slider').slick({
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows: false,
//   dots: true,
//   responsive: [{
//     breakpoint: 768,
//     settings: {
//       autoplay: false
//     }
//   }]
// });