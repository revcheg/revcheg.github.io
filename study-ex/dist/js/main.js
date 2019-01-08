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
  var openButtons = document.querySelectorAll('.button--programs');
  var popups = document.querySelectorAll('.popup');
  var overlay = document.querySelector('.popup__overlay');
  var closeButtons = document.querySelectorAll('.popup__close');
  
  for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', function () {
      overlay.classList.remove('popup__overlay--hide');
      var openId = this.id;
      switch (openId) {
        default:
          popups[openId - 1].classList.remove('popup--hide');
          break;
      };
    });
  };
  
  for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener('click', function () {
      for (var n = 0; n < popups.length; n++) {
        popups[n].classList.add('popup--hide');
      };
      overlay.classList.add('popup__overlay--hide');
    });
  };
  
  overlay.addEventListener('click', function () {
    for (var m = 0; m < popups.length; m++) {
      popups[m].classList.add('popup--hide');
    };
    overlay.classList.add('popup__overlay--hide');
  });
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