(function () {
  var buttons = document.querySelectorAll('.about__switch');
  var contents = document.querySelectorAll('.about__content');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
      console.log(currentButton);
    });
  }
  
  function showContent() {
    if (currentButton == 1) {
      contents[1].classList.remove('about__content--show');
      contents[0].classList.add('about__content--show');
    } else {
      contents[0].classList.remove('about__content--show');
      contents[1].classList.add('about__content--show');
    }
  }
})();
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
  var buttons = document.querySelectorAll('.edge__button');
  var contents = document.querySelectorAll('.edge__content');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    for (var j = 0; j < contents.length; j++) {
      buttons[j].classList.remove('edge__button--active');
      contents[j].classList.remove('edge__content--show');
    }
    
    buttons[currentButton].classList.add('edge__button--active');
    contents[currentButton].classList.add('edge__content--show');
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

(function () {
  var video = document.querySelector('.intro__video');
  var play = document.querySelector('.intro__play');
  
  play.addEventListener('click', function () {
    this.style.opacity = '0';
    video.style.opacity = '1';
    video.play();
    // video.classList.remove('intro__video--hide');
  });
})();