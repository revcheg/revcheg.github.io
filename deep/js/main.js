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

(function () {
  var signIn = document.querySelector('.nav__signup');
  var login = document.querySelector('.modal--login');
  var overlay = document.querySelector('.modal__overlay');
  var close = document.querySelector('.modal__close');
  
  signIn.addEventListener('click', function () {
    login.classList.remove('modal--inactive');
    login.classList.add('modal--active');
    
    overlay.classList.remove('modal__overlay--inactive');
    overlay.classList.add('modal__overlay--active');
  });
  
  close.addEventListener('click', function () {
    login.classList.remove('modal--active');
    login.classList.add('modal--inactive');
    
    overlay.classList.remove('modal__overlay--active');
    overlay.classList.add('modal__overlay--inactive');
  });
})();