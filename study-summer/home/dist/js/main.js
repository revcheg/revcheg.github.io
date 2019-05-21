(function () {
  var list = document.querySelector('.edge__list');
  var prev = document.querySelector('.edge__toggle--prev');
  var next = document.querySelector('.edge__toggle--next');
  
  var counter = 0;
  var possibleSwipe = 0;
  var clientWidth = document.body.clientWidth;
  
  if (clientWidth > 325) {
  
  }
  
  next.addEventListener('click', function () {
    counter++;
    swipe();
  });
  
  prev.addEventListener('click', function () {
    counter--;
    swipe();
  });
  
  function swipe () {
    var position = 0;
    
    switch (counter) {
      case -1:
        position = -775;
        counter = 2;
        break;
      case 1:
        position = -388;
        break;
      case 2:
        position = -775;
        break;
      default:
        position = 0;
        counter = 0;
    }
    
    list.style.left = position + 'px';
  };
})();
(function() {
  var phone = document.querySelector('.contacts__input[type=tel]');
  
  phone.addEventListener('focus', function() {
    phone.value = '+380';
    var label = this.nextElementSibling;
    label.classList.add('contacts__label--active');
  });
  
  phone.addEventListener('input', function() {
    var currentValue = phone.value;
    var regExp = /[^\d+]/;
    if (regExp.test(currentValue)) {
      currentValue = currentValue.replace(regExp, '');
      phone.value = currentValue;
    }
  });
  
  var inputs = document.querySelectorAll('.contacts__input');
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('contacts__input--invalid');
        this.classList.add('contacts__input--valid');
      } else {
        this.classList.add('contacts__input--invalid');
        this.classList.remove('contacts__input--valid');
      }
      
      var label = this.nextElementSibling;
      var inputValue = this.value;
      if (inputValue == '') {
        label.classList.remove('contacts__label--active');
        this.classList.remove('contacts__input--invalid');
      } else {
        label.classList.add('contacts__label--active');
      }
    });
  }
})();
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
(function () {
  var button = document.querySelector('.header__menu');
  var links = document.querySelectorAll('.header__link');
  var menu = document.querySelector('.header__list');

  button.addEventListener('click', function () {
    button.classList.toggle('header__menu--close');

    if (button.classList.contains('header__menu--close')) {
      menu.classList.remove('header__list--hide');
    } else {
      menu.classList.add('header__list--hide');
    }
  });

  // for (var i = 0; i < link.length; i++) {
  //   link[i].addEventListener('click', function () {
  //     menu.classList.add('header__list--hide');
  //     button.classList.remove('header__menu--close');
  //   });
  // }
})();
(function () {
  var anchors = document.querySelectorAll('.nav__anchor');
  
  var indexButton = 0;
  var anchorsArray = [];
  for (var i = 0; i < anchors.length; i++){
    anchorsArray.push(anchors[i]);
    anchors[i].addEventListener('click', function(evt){
      indexButton = anchorsArray.indexOf(evt.currentTarget);
      scrollCounter = indexButton + 1;
      scrolling();
    });
  }
})();
// (function () {
//   var preloader = document.querySelector('.preloader');
//   var logo = document.querySelector('.preloader__logo');
// 
//   window.onload = function () {
//     preloader.classList.add('preloader--hide');
//     logo.classList.add('preloader__logo--hide');
//   };
// })();
var sections = document.querySelectorAll('.section');
var scrollCounter = 0;

(function() {
  var marker = true;
  var delta;
  var interval = 150;
  var firstCounter = 0;
  var secondCounter;
  
  window.addEventListener('wheel', function(evt) {
    firstCounter++;
    delta = evt.deltaY;
    if (marker) wheelStart();
    return false;
  });

  function wheelStart() {
    marker = false;
    wheelAct();
  };

  function wheelAct() {
    secondCounter = firstCounter;
    setTimeout(function() {
      if (secondCounter == firstCounter) {
        wheelEnd();
      } else {
        wheelAct();
      }
    }, interval);
  };

  function wheelEnd() {
    marker = true;
    firstCounter = 0;
    secondCounter = 0;
    
    if (delta > 0) {
      scrollCounter++;
    } else {
      scrollCounter--;
    }
    
    scrolling();
  };
})();

function scrolling() {
  if (scrollCounter > 9) {
    scrollCounter = 9;
  } else if (scrollCounter < 0) {
    scrollCounter = 0;
  }
  
  var offsetTopBlock = sections[scrollCounter].offsetTop;
  
  window.scrollTo({
    top: offsetTopBlock,
    behavior: "smooth"
  });
};
(function() {
  var title = document.querySelector('.title');
  var progress = document.querySelector('.title__progress');
  var current = document.querySelector('.title__counter--current');
  var currentPhoto = 1;
  
  setInterval(function() {
    currentPhoto++;
    
    if (currentPhoto > 2) {
      currentPhoto = 1;
    }
    
    title.style.backgroundImage = 'url(img/title-' + currentPhoto + '-bg.jpg)';
    
    current.innerHTML = '0' + currentPhoto;
  }, 5000);
})();
(function () {
  var pozYStart;
  var pozYEnd;
  
  document.addEventListener('touchstart', function (evt) {
    pozYStart = evt.changedTouches[0].pageY;
  });
  
  document.addEventListener('touchend', function (evt) {
    pozYEnd = evt.changedTouches[0].pageY;
    console.log(pozYStart)
    if (pozYStart > pozYEnd + 50) {
      scrollCounter++;
      scrolling();
    } else if (pozYStart < pozYEnd - 50) {
      scrollCounter--;
      scrolling();
    }
  });
})();
(function () {
  var buttons = document.querySelectorAll('.video__play');
  var wrapper = document.querySelector('.video');
  var iframe = document.querySelector('.video__iframe');
  
  var indexButton = 0;
  var buttonsArray = [];
  for (var i = 0; i < buttons.length; i++){
    buttonsArray.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      indexButton = buttonsArray.indexOf(evt.currentTarget);
      showVideo();
    });
  }
  
  var url = 'https://www.youtube.com/embed/';
  var play = '?&autoplay=1';
  var source = '';
  function showVideo () {
    wrapper.classList.remove('video--hide');
    switch (indexButton) {
      case 0:
        source = 'eOnwaoM_Dlc';
        break;
      case 1:
        source = 'd4FKC4Bg2hc';
        break;
      case 2:
        source = 'LpO92XC8050';
        break;
      case 3:
        source = 'wNHeDbpEvHM';
        break;
      case 4:
        source = 'wNHeDbpEvHM';
        break;
      case 5:
        source = '91JRNaliIQc';
        break;
      default:
        source = '';
    }
    iframe.src = url + source + play;
  };
  
  wrapper.addEventListener('click', function () {
    wrapper.classList.add('video--hide');
    iframe.src = '';
  });
})();