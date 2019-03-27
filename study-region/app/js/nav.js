(function () {
  var button = document.querySelector('.nav__menu');
  var list = document.querySelector('.nav__list');
  var links = document.querySelectorAll('.nav__link');
  
  button.addEventListener('click', function () {
    if (button.classList.contains('nav__menu--active')) {
      button.classList.remove('nav__menu--active');
      list.classList.remove('nav__list--show');
    } else {
      button.classList.add('nav__menu--active');
      list.classList.add('nav__list--show');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      button.classList.remove('nav__menu--active');
      list.classList.remove('nav__list--show');
    });
  }
})();