var indMain = document.querySelector('.breadcrumbs__list');
var indOpen = document.querySelector('.breadcrumbs__filter');
// var navToggle = document.querySelector('.nav__toggle');
// var navToggleLog = document.querySelector('.nav__login');

// navMain.classList.remove('main-nav--nojs');

indOpen.addEventListener('click', function() {
  if (indMain.classList.contains('breadcrumbs__list--closed')) {
    indMain.classList.remove('breadcrumbs__list--closed');
    indMain.classList.add('breadcrumbs__list--opened');
  } else {
    indMain.classList.add('breadcrumbs__list--closed');
    indMain.classList.remove('breadcrumbs__list--opened');
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