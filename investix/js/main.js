// Nav
(function () {
  var nav = document.querySelector('.nav');
  var navToggle = document.querySelector('.header__toggle');

  navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('header__toggle--inactive')) {
      navToggle.classList.remove('header__toggle--inactive');
      navToggle.classList.add('header__toggle--active');
      nav.classList.add('nav--active');
    } else {
      navToggle.classList.remove('header__toggle--active');
      navToggle.classList.add('header__toggle--inactive');
      nav.classList.remove('nav--active');
    }
  });
})();

// Language
(function () {
var select = document.querySelector('.nav__select');

  // select.addEventListener('change', function () {
  //   var selectValue = select.value;
  // 
  //   switch (selectValue) {
  //     case 'en':
  //       window.location = 'https://investix.com/index.html';
  //       break;
  //     case 'ru':
  //       window.location = 'https://investix.com/ru/index.html';
  //       break;
  //     default:
  //       window.location = 'https://investix.com/index.html';
  //   }
  // });
  
  // Pathname
  select.addEventListener('change', function () {
    var selectValue = select.value;
    var location = window.location.pathname;
    
    switch (selectValue) {
      case 'en':
        window.location = 'https://investix.com/en' + location;
        break;
      case 'ru':
        window.location = 'https://investix.com/ru' + location;
        break;
      default:
        window.location = 'https://investix.com/en' + location;
    }
  });
})();