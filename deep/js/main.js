// Nav
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

// Form
(function () {
  var signIn = document.querySelector('.nav__signup');
  var register = document.querySelector('.modal--register');
  var overlay = document.querySelector('.modal__overlay');
  var login = document.querySelector('.modal__input[type=text]');
  var close = document.querySelector('.modal__close');
  
  signIn.addEventListener('click', function () {
    register.classList.remove('modal--inactive');
    register.classList.add('modal--active');
    
    overlay.classList.remove('modal__overlay--inactive');
    overlay.classList.add('modal__overlay--active');
    
    login.focus();
  });
  
  close.addEventListener('click', function () {
    register.classList.remove('modal--active');
    register.classList.add('modal--inactive');
    
    overlay.classList.remove('modal__overlay--active');
    overlay.classList.add('modal__overlay--inactive');
  });
  
  overlay.addEventListener('click', function () {
    register.classList.remove('modal--active');
    register.classList.add('modal--inactive');
    
    overlay.classList.remove('modal__overlay--active');
    overlay.classList.add('modal__overlay--inactive');
  });
  
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      register.classList.remove('modal--active');
      register.classList.add('modal--inactive');
      
      overlay.classList.remove('modal__overlay--active');
      overlay.classList.add('modal__overlay--inactive');
    }
  });
  
  // Password
  var passShow = document.querySelector('.modal__show');
  var passInput = document.querySelector('.modal__input[type=password]');
    
  passShow.addEventListener('click', function () {
    var passInputType = passInput.type;
    
    if (passInputType === 'password') {
      passInput.setAttribute('type', 'text');
    } else {
      passInput.setAttribute('type', 'password');
    }
  });
})();