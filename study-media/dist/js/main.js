(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
})();
(function () {
  var openButton = document.querySelector('.nav__open');
  var nav = document.querySelector('.nav__list--mobile');
  var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  
  openButton.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--inactive')) {
      nav.classList.remove('nav__list--inactive');
      nav.classList.add('nav__list--show');
      openButton.classList.add('nav__open--close');
    } else {
      openButton.classList.remove('nav__open--close');
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--inactive');
    }
  });
  
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      openButton.classList.remove('nav__open--close');
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--inactive');
    });
  };
})();
(function () {
  var openPopups = document.querySelectorAll('.button--popup');
  var popups = document.querySelectorAll('.popup');
  var closePopups = document.querySelectorAll('.popup__close');
  var overlay = document.querySelector('.popup__overlay');

  openPopups[0].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[0].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[0].addEventListener('click', function () {
      popups[0].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[1].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[1].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[1].addEventListener('click', function () {
      popups[1].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[2].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[2].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[2].addEventListener('click', function () {
      popups[2].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[3].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[3].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[3].addEventListener('click', function () {
      popups[3].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[4].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[4].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[4].addEventListener('click', function () {
      popups[4].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });
})();
$(document).ready(function(){
  $('.specialty__list').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // speed: 1000,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        dots: true
      }
    }]
  });
  
  $('.advantages__list').slick({
    prevArrow: $('.advantages__controll--prev'),
    nextArrow: $('.advantages__controll--next'),
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // speed: 1000,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        arrow: false,
        dots: true
       }
     }
   ]
  });
  
  $('.reviews__list').slick({
    prevArrow: $('.reviews__controll--prev'),
    nextArrow: $('.reviews__controll--next'),
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    // speed: 100a0,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        dots: true
       }
     }
   ]
  });
});
		