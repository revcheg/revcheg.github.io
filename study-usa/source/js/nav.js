(function () {
  var nav = document.querySelector('.nav__list');
  var button = document.querySelector('.nav__menu');
  var links = document.querySelectorAll('.nav__link');
  var box = document.querySelector('.intro__box');
  
  button.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--hide')) {
      nav.classList.remove('nav__list--hide');
      button.classList.add('nav__menu--close');
    } else {
      box.style.zIndex = '0';
      nav.classList.add('nav__list--hide');
      button.classList.remove('nav__menu--close');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.add('nav__list--hide');
      button.classList.remove('nav__menu--close');
    });
  }
})();