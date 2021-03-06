(function() {
  var main = document.querySelector('.main');
  var closeBtn = document.querySelector('.popup__close');
  var newsLink = document.querySelector('.nav__item--news');
  var popup = document.querySelector('.popup');
  
  newsLink.addEventListener('click', function () {
    main.classList.add('main--blur');
    popup.classList.add('popup--show');
  });
  
  closeBtn.addEventListener('click', function () {
    main.classList.remove('main--blur');
    popup.classList.remove('popup--show');
  });
})();
(function () {
  var main = document.querySelector('.main');
  var light = document.querySelector('.header__theme-control--light');
  var dark = document.querySelector('.header__theme-control--dark');
  
  light.addEventListener('click', function () {
    dark.classList.remove('header__theme-control--active');
    light.classList.add('header__theme-control--active');
    main.classList.add('main--light');
  });
  
  dark.addEventListener('click', function () {
    light.classList.remove('header__theme-control--active');
    dark.classList.add('header__theme-control--active');
    main.classList.remove('main--light');
  });
})();