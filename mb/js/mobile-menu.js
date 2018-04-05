var navMain = document.querySelector('.nav__container');
var navLogin = document.querySelector('.nav__list');
var navToggle = document.querySelector('.nav__toggle');
var navToggleLog = document.querySelector('.nav__login');

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

navToggleLog.addEventListener('click', function() {
  if (navLogin.classList.contains('nav--closed')) {
    navLogin.classList.remove('nav--closed');
    navLogin.classList.add('nav--opened');
  } else {
    navLogin.classList.add('nav--closed');
    navLogin.classList.remove('nav--opened');
  }
});