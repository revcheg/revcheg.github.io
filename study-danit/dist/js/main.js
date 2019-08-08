(function () {
  var buttons = document.querySelectorAll('.danit__button');
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (evt) {
      var currentButton = evt.target;
      currentButton.classList.toggle('danit__button--hide');
      var desc = currentButton.nextElementSibling;
      desc.classList.toggle('danit__desc--hide');
    });
  }
})();
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
(function () {
  var buttons = document.querySelectorAll('.study__button');
  var slider = document.querySelector('.study__subslider');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('study__button--active');
    }
    buttons[currentButton].classList.add('study__button--active');
    
    slider.style.left = '-' + currentButton + '00%';
  }
})();
