var legalMain = document.querySelector('.legal__list');
var legalOpen = document.querySelector('.legal__choice');
// var navToggle = document.querySelector('.nav__toggle');
// var navToggleLog = document.querySelector('.nav__login');

// navMain.classList.remove('main-nav--nojs');

legalOpen.addEventListener('click', function() {
  if (legalMain.classList.contains('legal__list--closed')) {
    legalMain.classList.remove('legal__list--closed');
    legalMain.classList.add('legal__list--opened');
  } else {
    legalMain.classList.add('legal__list--closed');
    legalMain.classList.remove('legal__list--opened');
  }
});

// navToggleLog.addEventListener('click', function() {
//   if (navLogin.classList.contains('nav--closed')) {
//     navLogin.classList.remove('nav--closed');
//     navLogin.classList.add('nav--opened');
//   } else {
//     navLogin.classList.add('nav--closed');
//     navLogin.classList.remove('nav--opened');
//   }
// });