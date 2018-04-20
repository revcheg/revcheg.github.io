var navMain = document.querySelector('.nav__container');
var navLogin = document.querySelector('.nav__register');
var navToggle = document.querySelector('.nav__toggle');
var navToggleLog = document.querySelector('.nav__login');

var navLogBtn = document.querySelector('.button__login');

var login = document.querySelector('.nav__l')
var reg = document.querySelector('.nav__r')
var navLog = document.querySelector('.nav__log');
var navReg = document.querySelector('.nav__reg');

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
  if (navLogin.classList.contains('nav__register--closed')) {
    navLogin.classList.remove('nav__register--closed');
    navLogin.classList.add('nav__register--opened');
  } else {
    navLogin.classList.add('nav__register--closed');
    navLogin.classList.remove('nav__register--opened');
  }
});

navLogBtn.addEventListener('click', function() {
  if (navLogin.classList.contains('nav__register--closed')) {
    navLogin.classList.remove('nav__register--closed');
    navLogin.classList.add('nav__register--opened');
  } else {
    navLogin.classList.add('nav__register--closed');
    navLogin.classList.remove('nav__register--opened');
  }
});

login.addEventListener('click', function () {
  reg.classList.remove('nav__active');
  login.classList.add('nav__active');
  navReg.style.display = 'none';
  navLog.style.display = 'block';
});

reg.addEventListener('click', function () {
  login.classList.remove('nav__active');
  reg.classList.add('nav__active');
  navLog.style.display = 'none';
  navReg.style.display = 'block';
})