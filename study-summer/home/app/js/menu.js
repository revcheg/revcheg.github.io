(function () {
  var button = document.querySelector('.header__menu');
  var links = document.querySelectorAll('.header__link');
  var menu = document.querySelector('.header__list');

  button.addEventListener('click', function () {
    button.classList.toggle('header__menu--close');

    if (button.classList.contains('header__menu--close')) {
      menu.classList.remove('header__list--hide');
    } else {
      menu.classList.add('header__list--hide');
    }
  });
})();