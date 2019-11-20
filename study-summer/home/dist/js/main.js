(function () {
  document.addEventListener('keyup', function (evt) {
    var code = evt.keyCode;
    
    if (code == 40) {
      scrollCounter++;
    } else if (code == 38) {
      scrollCounter--;
    }
    
    scrolling();
  });
})();
(function () {
  var list = document.querySelector('.edge__list');
  var prev = document.querySelector('.edge__toggle--prev');
  var next = document.querySelector('.edge__toggle--next');
  
  var counter = 0;
  var clientWidth = document.body.clientWidth;
  
  next.addEventListener('click', function () {
    counter++;
    swipe();
  });
  
  prev.addEventListener('click', function () {
    counter--;
    swipe();
  });
  
  function swipe () {
    if (clientWidth < 600 && counter > 5) {
      counter = 0;
    } else if (clientWidth < 600 && counter < 0) {
      counter = 5;
    } 
    
    if (clientWidth > 600 && counter > 1) {
      counter = 0;
    } else if (clientWidth > 600 && counter < 0) {
      counter = 1;
    } 
    
    list.style.left = '-' + counter * 100 + '%';
  };
})();
(function () {
  var phone = document.querySelector('.contacts__input[type=tel]');
  
  phone.addEventListener('focus', function() {
    if (phone.value == '') {
      phone.value = '+380';
    } 
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
  
  phone.addEventListener('blur', function () {
    if (phone.value == '+380') {
      phone.value = '';
      var label = this.nextElementSibling;
      label.classList.remove('contacts__label--active');
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
  
  var form = document.querySelector('.contacts__form');
  var sorry = document.querySelector('.sorry');
  var close = document.querySelector('.sorry__close');
  var overlay = document.querySelector('.sorry__overlay');
  
  form.addEventListener('submit', function (evt) {    
    var email = form.querySelector('#email').value;
    
    if (email == localStorage.getItem('email')) {
      evt.preventDefault();
      sorry.classList.remove('sorry--hide');
      overlay.classList.remove('sorry__overlay--hide');
    }
    
    localStorage.setItem('email', email);
  });
  
  overlay.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('sorry__overlay--hide');
  });
  
  close.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('sorry__overlay--hide');
  });
  
  document.body.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
      sorry.classList.add('sorry--hide');
      overlay.classList.add('sorry__overlay--hide');
    }
  });
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
(function () {
  var offer = document.querySelector('.offer');
  var close = document.querySelector('.offer__close');
  var link = document.querySelector('.offer__button');

  var flag = localStorage.getItem('close');
  if (flag == 'true') {
    offer.classList.add('offer--hide');
  } else {
    offer.classList.remove('offer--hide');
  }

  close.addEventListener('click', function () {
    offer.classList.add('offer--hide');
    localStorage.setItem('close', true);
  });

  link.addEventListener('click', function () {
    offer.classList.add('offer--hide');
    localStorage.setItem('close', true);
    
    scrollCounter = 9;
    scrolling();
  });
})();
(function () {
  var open = document.querySelector('.contacts__cta');
  var form = document.querySelector('.contacts__subcolumn--popup');
  var overlay = document.querySelector('.contacts__overlay--hide');
  var close = document.querySelector('.contacts__close');

  open.addEventListener('click', function () {
    form.classList.remove('contacts__subcolumn--hide');
    overlay.classList.remove('contacts__overlay--hide');
  });
  
  close.addEventListener('click', function () {
    form.classList.add('contacts__subcolumn--hide');
    overlay.classList.add('contacts__overlay--hide');
  });
  
  overlay.addEventListener('click', function () {
    form.classList.add('contacts__subcolumn--hide');
    overlay.classList.add('contacts__overlay--hide');
  });
  
  form.addEventListener('submit', function () {
    form.classList.add('contacts__subcolumn--hide');
    overlay.classList.add('contacts__overlay--hide');
  });
})();
var sections = document.querySelectorAll('.section');
var scrollCounter = 0;

(function () {
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
  
  var platform = navigator.userAgent;
  
  if (platform.indexOf('iPhone') > -1) {
    document.body.style.overflow = 'auto';
  }
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
(function () {
  var title = document.querySelector('.title');
  var progress = document.querySelector('.title__progress');
  var current = document.querySelector('.title__counter--current');
  var currentPhoto = 1;
  
  setInterval(function() {
    currentPhoto++;
    
    if (currentPhoto > 4) {
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
    var aside = document.querySelector('.aside');
    
    pozYEnd = evt.changedTouches[0].pageY;
    if (pozYStart > pozYEnd + 70) {
      scrollCounter++;
      scrolling();
      
      // aside.classList.remove('aside--hide');
      
    } else if (pozYStart < pozYEnd - 70) {
      scrollCounter--;
      scrolling();
      
      // aside.classList.add('aside--hide');
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