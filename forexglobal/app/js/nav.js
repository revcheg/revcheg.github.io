(function () {
  var menuToggle = document.querySelector('.header__toggle');
  var menuUser = document.querySelector('.header__user');
  var menu = document.querySelector('.nav');
  
  menuToggle.addEventListener('click', function () {
    if (menuUser.classList.contains('header__user--closed')) {
      menuUser.classList.remove('header__user--closed');
      menuUser.classList.add('header__user--opened');
      menu.classList.remove('nav--closed');
      menu.classList.add('nav--opened');
    } else {
      menuUser.classList.remove('header__user--opened');
      menuUser.classList.add('header__user--closed');
      menu.classList.remove('nav--opened');
      menu.classList.add('nav--closed');
    }
  }); 
})();