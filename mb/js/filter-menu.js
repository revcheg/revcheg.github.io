var indMain = document.querySelector('.indicators__menu');
var indOpen = document.querySelector('.indicators__button');
// var navToggle = document.querySelector('.nav__toggle');
// var navToggleLog = document.querySelector('.nav__login');

// navMain.classList.remove('main-nav--nojs');

indOpen.addEventListener('click', function() {
  if (indMain.classList.contains('indicators--closed')) {
    indMain.classList.remove('indicators--closed');
    indMain.classList.add('indicators--opened');
  } else {
    indMain.classList.add('indicators--closed');
    indMain.classList.remove('indicators--opened');
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