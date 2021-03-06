(function () {
  var navToggle = document.querySelector('.nav__toggle');
  var nav = document.querySelector('.nav__list--mobile');
  
  var openNav = function () {
    nav.classList.add('nav__list--active');
    navToggle.classList.remove('nav__toggle--inactive');
    navToggle.classList.add('nav__toggle--active');
  };
  
  var closeNav = function () {
    nav.classList.remove('nav__list--active');
    navToggle.classList.remove('nav__toggle--active');
    navToggle.classList.add('nav__toggle--inactive');
  };
  
  navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('nav__toggle--inactive')) {
      openNav();
    } else {
      closeNav();
    }
  });
})();
(function () {
  var buttonsPopup = document.querySelectorAll('.button__popup');
  var buttonsMap = document.querySelectorAll('.nav__map');
  var buttonsClose = document.querySelectorAll('.popup__close');
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');
  var map = document.querySelector('.popup--map');
  
  var openPopup = function () {
    popup.classList.add('popup--active');
    overlay.classList.add('overlay--active');
  };
  
  var openMap = function () {
    map.classList.add('popup--active');
    overlay.classList.add('overlay--active');
  };
  
  var closePopups = function () {
    popup.classList.remove('popup--active');
    map.classList.remove('popup--active');
    overlay.classList.remove('overlay--active');
  };
  
  for (var i = 0; i < buttonsPopup.length; i++) {
    buttonsPopup[i].addEventListener('click', function () {
      openPopup();
    })
  };
  
  for (var j = 0; j < buttonsMap.length; j++) {
    buttonsMap[j].addEventListener('click', function (event) {
      event.preventDefault();
      openMap();
    })
  };
  
  for (var m = 0; m < buttonsClose.length; m++) {
    buttonsClose[m].addEventListener('click', function () {
      closePopups();
    });
  };
  
  overlay.addEventListener('click', function () {
    closePopups();
  });
  
  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      closePopups();
    }
  });
})();