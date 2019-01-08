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
// (function () {
//   var openPopup = document.querySelector('.button--programs');
//   var popup = document.querySelector('.popup');
//   var overlay = document.querySelector('.popup__overlay');
//   var closePopup = document.querySelector('.popup__close');
// 
//   openPopup.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     popup.classList.remove('popup--hide');
//     overlay.classList.remove('popup__overlay--hide');
//   });
// 
//   closePopup.addEventListener('click', function () {
//     popup.classList.add('popup--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// 
//   overlay.addEventListener('click', function () {
//     popup.classList.add('popup--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// })();

(function () {
  var openButtons = document.querySelectorAll('.button--programs');
  var popups = document.querySelectorAll('.popup');
  
  for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', function () {
      var buttonId = openButtons[i].getAttribute('id');
      console.log(buttonId);
    });
  };
})();
(function () {
  var tableWrapper = document.querySelector('.table__wrapper');
  var buttonSaturday = document.querySelector('.table__button--saturday');
  var buttonWednesday = document.querySelector('.table__button--wednesday');
  
  var tableSaturday = document.querySelector('.table--saturday');
  var tableWednesday = document.querySelector('.table--wednesday');
  
  buttonSaturday.addEventListener('click', function () {
    buttonWednesday.classList.remove('table__button--active');
    buttonSaturday.classList.add('table__button--active');
    tableWrapper.style.height = '820px';
    tableWednesday.classList.add('table--hide');
    tableSaturday.classList.remove('table--hide');
  });
  
  buttonWednesday.addEventListener('click', function () {
    buttonSaturday.classList.remove('table__button--active');
    buttonWednesday.classList.add('table__button--active');
    tableWrapper.style.height = '807px';
    tableSaturday.classList.add('table--hide');
    tableWednesday.classList.remove('table--hide');
  });
})();