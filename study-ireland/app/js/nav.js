(function () {
  var nav = document.querySelector('.nav__list');
  var button = document.querySelector('.nav__button');
  var main = document.querySelector('main');
  
  button.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--hide')) {
      nav.classList.remove('nav__list--hide');
      button.classList.add('nav__button--close');
    } else {
      nav.classList.add('nav__list--hide');
      button.classList.remove('nav__button--close');
    }
  });
})();