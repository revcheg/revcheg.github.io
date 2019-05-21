(function () {
  var anchors = document.querySelectorAll('.header__link');
  var home = document.querySelector('.header__home');
  var button = document.querySelector('.header__menu');
  var menu = document.querySelector('.header__list');
  
  var indexButton = 0;
  var anchorsArray = [];
  for (var i = 0; i < anchors.length; i++){
    anchorsArray.push(anchors[i]);
    anchors[i].addEventListener('click', function(evt){
      evt.preventDefault();
      menu.classList.add('header__list--hide');
      button.classList.remove('header__menu--close');
      indexButton = anchorsArray.indexOf(evt.currentTarget);
      generateIndex();
    });
  }
  
  function generateIndex () {
    switch (indexButton) {
      case 0:
        scrollCounter = 1;
        break;
      case 1:
        scrollCounter = 6;
        break;
      case 2:
        scrollCounter = 7;
        break;
      case 3:
        scrollCounter = 9;
        break;
      default:
        scrollCounter = 0;
    }
    scrolling();
  };
  
  home.addEventListener('click', function () {
    menu.classList.add('header__list--hide');
    button.classList.remove('header__menu--close');
    scrollCounter = 0;
    scrolling();
  });
})();