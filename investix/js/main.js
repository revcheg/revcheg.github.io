// Nav
var nav = document.querySelector('.nav');
var navToggle = document.querySelector('.header__toggle');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('header__toggle--inactive')) {
    navToggle.classList.remove('header__toggle--inactive');
    navToggle.classList.add('header__toggle--active');
    nav.classList.add('nav--active');
  } else {
    navToggle.classList.remove('header__toggle--active');
    navToggle.classList.add('header__toggle--inactive');
    nav.classList.remove('nav--active');
  }
});