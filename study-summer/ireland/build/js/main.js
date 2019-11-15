(function () {
  var phone = document.querySelector('.request__input[type=tel]');
  
  phone.addEventListener('focus', function() {
    if (phone.value == '') {
      phone.value = '+380';
    } 
    var label = this.nextElementSibling;
    label.classList.add('request__label--active');
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
      label.classList.remove('request__label--active');
    }
  });
  
  var inputs = document.querySelectorAll('.request__input');
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('request__input--invalid');
        this.classList.add('request__input--valid');
      } else {
        this.classList.add('request__input--invalid');
        this.classList.remove('request__input--valid');
      }
      
      var label = this.nextElementSibling;
      var inputValue = this.value;
      if (inputValue == '') {
        label.classList.remove('request__label--active');
        this.classList.remove('request__input--invalid');
      } else {
        label.classList.add('request__label--active');
      }
    });
  }
  
  var form = document.querySelector('.request__form');
  var sorry = document.querySelector('.sorry');
  var close = document.querySelector('.sorry__close');
  var overlay = document.querySelector('.popup__overlay');
  
  form.addEventListener('submit', function (evt) {    
    var email = form.querySelector('#email').value;
    
    if (email == localStorage.getItem('email')) {
      evt.preventDefault();
      sorry.classList.remove('sorry--hide');
      overlay.classList.remove('popup__overlay--hide');
    }
    
    localStorage.setItem('email', email);
  });
  
  overlay.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('popup__overlay--hide');
  });
  
  close.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('popup__overlay--hide');
  });
  
  document.body.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
      sorry.classList.add('sorry--hide');
      overlay.classList.add('popup__overlay--hide');
    }
  });
})();
(function () {
  var list = document.querySelector('.leaders__list');
  var item = document.querySelectorAll('.leaders__item');
  var prev = document.querySelector('.leaders__button--prev');
  var next = document.querySelector('.leaders__button--next');
  var dots = document.querySelectorAll('.leaders__dots');
  
  var currentPosition = 0;
  var possibleSlide = 0;
  var clientWidth = document.body.clientWidth;
  
  if (clientWidth <= 768) {
    possibleSlide = 3;
  } else if (clientWidth > 768 && clientWidth < 1210) {
    possibleSlide = 1;
  } 
  
  var showSlide = function () {
    if (currentPosition > possibleSlide) {
      currentPosition = 0;
    } else if (currentPosition < 0) {
      currentPosition = possibleSlide;
    }
    list.style.left = '-' + currentPosition * 100 + '%';
  };
  
  prev.addEventListener('click', function () {
    currentPosition--;
    showSlide(currentPosition);
  });
  
  next.addEventListener('click', function () {
    currentPosition++;
    showSlide(currentPosition);
  });
  
  // var dotsCounter;
  // if (clientWidth > 1210) {
  //    dotsCounter = item / 4;
  //    renderDots();
  // }
  // 
  // var renderDots = function () {
  //   var dotsClone = dots.cloneNode(true);
  //   for (var i = 0; i < dotsCounter; i++) {
  // 
  //   }
  // };
  // 
  // var dotsArray = [];
  // for (var i = 0; i < dots.length; i++){
  //   dotsArray.push(dots[i]);
  //   dots[i].addEventListener('click', function(e){
  //      // dots[currentSlide].classList.remove('slider__dot--active');
  //      currentSlide = dotsArray.indexOf(e.target);
  //      showSlide(currentSlide);
  //   });
  // };
  
  for (var j = 0; j < item.length; j++) {
    item[j].addEventListener('touchstart', function (evt) {
      pozXStart = evt.changedTouches[0].pageX;
    });
    
    item[j].addEventListener('touchmove', function (evt) {
      if (pozXStart > clientWidth / 2) {
        list.style.left = '-' + currentPosition * 100 - 30 + '%';
      } else {
        list.style.left = '-' + currentPosition * 100 - '-30' + '%';
      }
    });
    
    item[j].addEventListener('touchend', function (evt) {
      pozXEnd = evt.changedTouches[0].pageX;
      
      if (pozXStart > clientWidth / 2) {
        currentPosition++;
      } else {
        currentPosition--;
      }
      showSlide(currentPosition);
    });
  }
})();
(function () {
  var button = document.querySelector('.nav__menu');
  var nav = document.querySelector('.nav__list');
  var links = document.querySelectorAll('.nav__link');

  button.addEventListener('click', function () {
    if (button.classList.contains('nav__menu--open')) {
      nav.classList.add('nav__list--show');
      button.classList.remove('nav__menu--open');
      button.classList.add('nav__menu--close');
      document.body.style.overflow = 'hidden';
    } else {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
      document.body.style.overflow = 'auto';
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
      document.body.style.overflow = 'auto';
    });
  }
})();
(function () {
  var photos = document.querySelectorAll('.photo__img');
  var photosSources = document.querySelectorAll('.photo__source');
  var item = document.querySelectorAll('.photo__item');
  var popup = document.querySelector('.popup');
  var popupImg = document.querySelector('.popup__jpg');
  var prev = document.querySelector('.popup__control--prev');
  var next = document.querySelector('.popup__control--next');
  var overlay = document.querySelector('.popup__overlay');
  
  var currentPhoto = 0;
  
  // Перебираем все айтемы с картинками и запоминаем их индекс
  var clearArrayPhotos = [];
  for (var i = 0; i < item.length; i++){
    clearArrayPhotos.push(item[i]);
    item[i].addEventListener('click', function(evt){
      currentPhoto = clearArrayPhotos.indexOf(evt.currentTarget);
      showPopup(currentPhoto);
    });
    
    item[i].addEventListener('keydown', function(evt){
      if (evt.keyCode == 13) {
        currentPhoto = clearArrayPhotos.indexOf(evt.currentTarget);
        showPopup(currentPhoto);
      } else if (evt.keyCode == 27) {
        popup.classList.add('popup--hide');
        overlay.classList.add('popup__overlay--hide');
      }
    });
  }
  
  // Отрисовываем попап с картинкой
  var showPopup = function () {
    if (currentPhoto < 0) {
      currentPhoto = 11;
    } else if (currentPhoto > 11) {
      currentPhoto = 0;
    }
    popup.classList.remove('popup--hide');
    popup.querySelector('.popup__webp').srcset = 'img/photo-' + currentPhoto + '.webp';
    popup.querySelector('.popup__jpg').src = 'img/photo-' + currentPhoto + '.jpg';
    overlay.classList.remove('popup__overlay--hide');
    document.body.style.overflow = 'hidden';
  };
  
  // Тогглы назад/вперед
  prev.addEventListener('click', function () {
    currentPhoto--;
    showPopup(currentPhoto);
    currentPosition = currentPhoto;
    previewSwap(currentPosition);
  });
  
  next.addEventListener('click', function () {
    currentPhoto++;
    showPopup(currentPhoto);
    currentPosition = currentPhoto;
    previewSwap(currentPosition);
  });
  
  // Свап превьюх в мобильной версии
  var previewList = document.querySelector('.photo__slider');
  var mobilePrev = document.querySelector('.photo__button--prev');
  var mobileNext = document.querySelector('.photo__button--next');
  
  var currentPosition = 0;
  
  var previewSwap = function () {
    if (currentPosition > 11) {
      currentPosition = 0;
    } else if (currentPosition < 0) {
      currentPosition = 11;
    }
    
    previewList.style.left = '-' + currentPosition * 100 + '%';
  };
  
  mobileNext.addEventListener('click', function () {
    currentPosition++;
    previewSwap(currentPosition);
  });
  
  mobilePrev.addEventListener('click', function () {
    currentPosition--;
    previewSwap(currentPosition);
  });
  
  // Тогглы для тач устройств
  var clientWidth = document.body.clientWidth;
  
  popupImg.addEventListener('touchstart', function (evt) {
    pozXStart = evt.changedTouches[0].pageX;
  });
  
  popupImg.addEventListener('touchmove', function (evt) {
    if (pozXStart > clientWidth / 2) {
      popup.style.left = '40%';
    } else {
      popup.style.left = '60%';
    }
  });
  
  popupImg.addEventListener('touchend', function (evt) {
    popup.style.left = '50%';
    pozXEnd = evt.changedTouches[0].pageX;
    
    if (pozXStart > clientWidth / 2) {
      currentPhoto++;
    } else {
      currentPhoto--;
    }
    showPopup(currentPhoto);
    currentPosition = currentPhoto;
    previewSwap(currentPosition);
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.add('popup--hide');
    overlay.classList.add('popup__overlay--hide');
    document.body.style.overflow = 'auto';
  });
})();
var programsData = [
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/5',
    webp: 'img/program-1.webp',
    jpg: 'img/program-1.jpg',
    alt: 'St. Raphaela’s School',
    name: 'St. Raphaela’s School',
    location: 'Дублин',
    date: '<a href="http://summer.study.ua/trip/look/5" target="_blank">28.06 - 19.07 (3 нед.)</a>',
    cost: '€3600 (3 нед.)'
  },
  {
    full: false,
    href: 'program/maynooth-university.html',
    webp: 'img/program-2.webp',
    jpg: 'img/program-2.jpg',
    alt: 'Maynooth University',
    name: 'Maynooth University',
    location: 'Мейнут/Дублин',
    date: '<a href="program/maynooth-university.html" target="_blank">05.07 - 19.07 (2 нед.)</a> <br> <a href="program/maynooth-university.html" target="_blank">05.07 - 26.07 (3 нед.)</a>',
    cost: '€3150 (3 нед.) <br> €3900 (3 нед.)'
  }
];
(function () {
  var listButton = document.querySelector('.programs__button--list');
  var tileButton = document.querySelector('.programs__button--tile');
  var list = document.querySelector('.programs__list');
  
  listButton.addEventListener('click', function () {
    list.classList.add('programs__list--column');
    var item = document.querySelectorAll('.programs__item');
    listButton.classList.add('programs__button--active');
    tileButton.classList.remove('programs__button--active');
    
    for (var i = 0; i < item.length; i++) {
      item[i].classList.add('programs__item--column');
    }
  });
  
  tileButton.addEventListener('click', function () {
    list.classList.remove('programs__list--column');
    var item = document.querySelectorAll('.programs__item');
    tileButton.classList.add('programs__button--active');
    listButton.classList.remove('programs__button--active');
    
    for (var i = 0; i < item.length; i++) {
      item[i].classList.remove('programs__item--column');
    }
  });
})();
(function () {
  var list = document.querySelector('.programs__list');
  var listButton = document.querySelector('.programs__button--list');
  var programsTemplate = document.querySelector('.programs__template').content;
  
  programsCounter = 2;
  programsIncrement = 2;
  
  renderPrograms();
  
  function clearPrograms() {
    var item = document.querySelectorAll('.programs__item');
    for (var j = 0; j < item.length; j++) {
      item[j].remove();
    }
  };
  
  function renderPrograms() {
    var programsLength = programsData.slice(0, programsCounter).length;
    
    for (var i = 0; i < programsLength; i++) {
      var item = document.createElement('li');
      item.classList.add('programs__item');
      
      if (listButton.classList.contains('programs__button--active')) {
        item.classList.add('programs__item--column');
      } 
      
      var content = programsTemplate.cloneNode(true);
      if (programsData[i].full) {
        content.querySelector('.programs__full').style.display = 'block';
      }
      content.querySelector('.programs__link').href = programsData[i].href;
      content.querySelector('source').srcset = programsData[i].webp;
      content.querySelector('img').src = programsData[i].jpg;
      content.querySelector('img').alt = programsData[i].alt;
      content.querySelector('.programs__name').innerHTML = programsData[i].name;
      content.querySelector('.programs__location').innerHTML = programsData[i].location;
      content.querySelector('.programs__date').innerHTML = programsData[i].date;
      content.querySelector('.programs__cost').innerHTML = programsData[i].cost;
      item.appendChild(content);
      list.appendChild(item);
    }
  };
})();
(function () {
  var openButtons = document.querySelectorAll('.reviews__open');
  var videoWrapper = document.querySelector('.reviews__container');
  var video = document.querySelector('.reviews__iframe');
  var overlay = document.querySelector('.popup__overlay');
  
  var openButtonsArray = [];

  for (var i = 0; i < openButtons.length; i++){
    openButtonsArray.push(openButtons[i]);
    openButtons[i].addEventListener('click', function(evt){
      var indexButton = openButtonsArray.indexOf(evt.target);
      videoWrapper.classList.remove('reviews__container--hide');
      overlay.classList.remove('popup__overlay--hide');
      if (indexButton == 0) {
        video.src = 'https://www.youtube.com/embed/nx0v3hMM4iw?&autoplay=1';
      } else if (indexButton == 1) {
        video.src = 'https://www.youtube.com/embed/snx6LOb2bno?&autoplay=1';
      } else {
        video.src = 'https://www.youtube.com/embed/dVKHwTR9Tws?&autoplay=1';
      }
      document.body.style.overflow = 'hidden';
    });
  }
  
  overlay.addEventListener('click', function () {
    videoWrapper.classList.add('reviews__container--hide');
    video.src = '';
    overlay.classList.add('popup__overlay--hide');
    document.body.style.overflow = 'auto';
  });
})();
(function () {
  var slides = document.querySelectorAll('.slider__item');
  var prev = document.querySelector('.slider__control--prev');
  var next = document.querySelector('.slider__control--next');
  var dots = document.querySelectorAll('.slider__dot');
  
  var currentSlide = 0;
  
  // Отрисовка слайдов
  var showSlide = function () {
    if (currentSlide > 0) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = 0;
    };
    slides[currentSlide].classList.add('slider__item--show');
    dots[currentSlide].classList.add('slider__dot--active');
  };
  
  // Тогглы назад/вперед
  next.addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--show');
    dots[currentSlide].classList.remove('slider__dot--active');
    currentSlide++;
    showSlide(currentSlide);
  });
  
  prev.addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--show');
    dots[currentSlide].classList.remove('slider__dot--active');
    currentSlide--;
    showSlide(currentSlide);
  });
  
  // Тогглы, точки
  var dotsArray = [];
  for (var i = 0; i < dots.length; i++){
    dotsArray.push(dots[i]);
    dots[i].addEventListener('click', function(e){
       slides[currentSlide].classList.remove('slider__item--show');
       dots[currentSlide].classList.remove('slider__dot--active');
       currentSlide = dotsArray.indexOf(e.target);
       showSlide(currentSlide);
    });
  };
  
  // Тач для телефонов
  var clientWidth = document.body.clientWidth;
  
  for (var j = 0; j < slides.length; j++) {
    slides[j].addEventListener('touchstart', function (evt) {
      pozXStart = evt.changedTouches[0].pageX;
    });
        
    slides[j].addEventListener('touchend', function (evt) {
      pozXEnd = evt.changedTouches[0].pageX;
      
      if (pozXStart > clientWidth / 2) {
        slides[currentSlide].classList.remove('slider__item--show');
        dots[currentSlide].classList.remove('slider__dot--active');
        currentSlide++;
      } else {
        slides[currentSlide].classList.remove('slider__item--show');
        dots[currentSlide].classList.remove('slider__dot--active');
        currentSlide--;
      }
      
      showSlide(currentSlide);
    });
  }
})();