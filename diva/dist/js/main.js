(function () {
  var button = document.querySelector('.nav__menu');
  var nav = document.querySelector('.nav__list');
  var links = document.querySelectorAll('.nav__link');
  
  button.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--hide')) {
      nav.classList.remove('nav__list--hide');
      nav.classList.add('nav__list--show');
      button.classList.add('nav__menu--active');
    } else {
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--hide');
      button.classList.remove('nav__menu--active');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--hide');
      button.classList.remove('nav__menu--active');
    })
  }
})();