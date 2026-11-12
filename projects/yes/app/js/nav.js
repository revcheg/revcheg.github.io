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