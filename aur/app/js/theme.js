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