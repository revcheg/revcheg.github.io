var navMain = document.querySelector('.page-header__main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__main-nav--closed')) {
    navMain.classList.remove('page-header__main-nav--closed');
    navMain.classList.add('page-header__main-nav--opened');
  } else {
    navMain.classList.add('page-header__main-nav--closed');
    navMain.classList.remove('page-header__main-nav--opened');
  }
});