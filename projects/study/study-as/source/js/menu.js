(function () {
  var button = document.querySelector('.nav__menu');
  var menu = document.querySelector('.nav');
  var links = document.querySelectorAll('.nav__link');
  
  button.addEventListener('click', function () {
    button.classList.toggle('nav__menu--show');
    if (button.classList.contains('nav__menu--show')) {
      menu.classList.add('nav--show');
    } else {
      menu.classList.remove('nav--show');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      button.classList.remove('nav__menu--show');
      menu.classList.remove('nav--show');
    });
  }
})();