(function () {
  var button = document.querySelector('.nav__button');
  var menu = document.querySelector('.profile__list--mobile');
  
  button.addEventListener('click', function () {
    if (menu.classList.contains('profile__list--inactive')) {
      menu.classList.remove('profile__list--inactive');
      menu.classList.add('profile__list--active');
    } else {
      menu.classList.remove('profile__list--active');
      menu.classList.add('profile__list--inactive');
    };
  });
})();