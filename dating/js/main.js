// (function () {
  var buttons = document.querySelectorAll('.nav__button');
  var menus = document.querySelectorAll('.profile__list--mobile');
  
  buttons[0].addEventListener('click', function () {
    if (menus[0].classList.contains('profile__list--inactive')) {
      menus[0].classList.remove('profile__list--inactive');
      menus[0].classList.add('profile__list--active');
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[0].classList.add('nav__button--active');
      buttons[1].classList.remove('nav__button--active');
      buttons[2].classList.remove('nav__button--active');
      buttons[3].classList.remove('nav__button--active');
      
    } else {
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      
      buttons[0].classList.remove('nav__button--active');
    }
  });

  buttons[1].addEventListener('click', function () {
    if (menus[1].classList.contains('profile__list--inactive')) {
      menus[1].classList.remove('profile__list--inactive');
      menus[1].classList.add('profile__list--active');
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[1].classList.add('nav__button--active');
      buttons[0].classList.remove('nav__button--active');
      buttons[2].classList.remove('nav__button--active');
      buttons[3].classList.remove('nav__button--active');
      
    } else {
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      
      buttons[1].classList.remove('nav__button--active');
    }
  });
  
  buttons[2].addEventListener('click', function () {
    if (menus[2].classList.contains('profile__list--inactive')) {
      menus[2].classList.remove('profile__list--inactive');
      menus[2].classList.add('profile__list--active');
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[2].classList.add('nav__button--active');
      buttons[0].classList.remove('nav__button--active');
      buttons[1].classList.remove('nav__button--active');
      buttons[3].classList.remove('nav__button--active');
      
    } else {
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      
      buttons[2].classList.remove('nav__button--active');
    }
  });
  
  buttons[3].addEventListener('click', function () {
    if (menus[3].classList.contains('profile__list--inactive')) {
      menus[3].classList.remove('profile__list--inactive');
      menus[3].classList.add('profile__list--active');
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      
      buttons[3].classList.add('nav__button--active');
      buttons[0].classList.remove('nav__button--active');
      buttons[1].classList.remove('nav__button--active');
      buttons[2].classList.remove('nav__button--active');
      
    } else {
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[3].classList.remove('nav__button--active');
    }
  });
// })();