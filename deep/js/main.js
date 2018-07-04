(function () {
  var nav = document.querySelector('.nav__list');
  var navToggle = document.querySelector('.nav__toggle');

  navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('nav__toggle--inactive')) {
      navToggle.classList.remove('nav__toggle--inactive');
      navToggle.classList.add('nav__toggle--active');
      nav.classList.add('nav__list--active');
    } else {
      navToggle.classList.remove('nav__toggle--active');
      navToggle.classList.add('nav__toggle--inactive');
      nav.classList.remove('nav__list--active');
    }
  });
})();