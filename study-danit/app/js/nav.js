(function () {
  var button = document.querySelector('.header__menu');
  var list = document.querySelector('.header__list:last-of-type');
  var links = document.querySelectorAll('.header__anchor');
  
  button.addEventListener('click', function () {
    if (this.classList.contains('header__menu--close')) {
      this.classList.remove('header__menu--close');
      list.classList.remove('header__list--hide');
    } else {
      this.classList.add('header__menu--close');
      list.classList.add('header__list--hide');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      this.classList.add('header__menu--close');
      list.classList.add('header__list--hide');
    });
  }
})();