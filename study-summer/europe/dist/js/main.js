(function () {
  var phone = document.querySelector('.request__input[type=tel]');

  phone.addEventListener('focus', function () {
    phone.value = '+380';
    var label = this.nextElementSibling;
    label.classList.add('request__label--active');
  });
  
  phone.addEventListener('input', function () {    
    var currentValue = phone.value; 
    var regExp = /[^\d+]/; 
    if (regExp.test(currentValue)) { 
      currentValue = currentValue.replace(regExp, ''); 
      phone.value = currentValue; 
    } 
  });
  
  var inputs = document.querySelectorAll('.request__input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
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
  } else if (clientWidth >= 1210) {
    possibleSlide = 0;
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
    href: 'http://summer.study.ua/trip/look/1090',
    flagWebp: 'img/programs-spain.webp',
    flag: 'img/programs-spain.jpg',
    flagAlt: 'Испания',
    webp: 'img/program-1.webp',
    jpg: 'img/program-1.jpg',
    alt: 'Malaga Summer camp',
    name: 'Malaga Summer camp',
    location: 'Испания, Малага',
    date: '<a href="http://summer.study.ua/trip/look/1090" target="_blank">30.06 - 13.07 (2 нед.)</a>',
    cost: '€2700 (3 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1096',
    flagWebp: 'img/programs-spain.webp',
    flag: 'img/programs-spain.jpg',
    flagAlt: 'Испания',
    webp: 'img/program-2.webp',
    jpg: 'img/program-2.jpg',
    alt: 'Barcelona Summer camp',
    name: 'Barcelona Summer camp',
    location: 'Барселона',
    date: '<a href="http://summer.study.ua/trip/look/1097" target="_blank">14.07 - 27.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1096" target="_blank">28.07 - 10.08 (2 нед.)</a>',
    cost: '€2800 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1103',
    flagWebp: 'img/programs-spain.webp',
    flag: 'img/programs-spain.jpg',
    flagAlt: 'Испания',
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'EU International Business school',
    name: 'EU International Business school',
    location: 'Барселона',
    date: '<a>07.07 - 20.07 (2 нед.)</a><br><a>04.08 - 17.08 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1103" target="_blank">07.07 - 27.07 (3 нед.)</a><br><a href="http://summer.study.ua/trip/look/1101" target="_blank">04.08 - 24.08 (3 нед.)</a>',
    cost: '€3200 (2 нед.)<br>€4200 (3 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1094',
    flagWebp: 'img/programs-switzerland.webp',
    flag: 'img/programs-switzerland.jpg',
    flagAlt: 'Швейцария',
    webp: 'img/program-4.webp',
    jpg: 'img/program-4.jpg',
    alt: 'Alpadia Summer camp',
    name: 'Alpadia Summer camp',
    location: 'Энгельберг',
    date: '<a href="http://summer.study.ua/trip/look/57" target="_blank">30.06 - 13.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1094" target="_blank">14.07 - 27.07 (2 нед.)</a>',
    cost: '$3800 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1121',
    flagWebp: 'img/programs-malta.webp',
    flag: 'img/programs-malta.jpg',
    flagAlt: 'Мальта',
    webp: 'img/program-5.webp',
    jpg: 'img/program-5.jpg',
    alt: 'Malta IELS',
    name: 'Malta IELS',
    location: 'Слима',
    date: '<a href="http://summer.study.ua/trip/look/1120" target="_blank">22.06 – 06.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1121" target="_blank">10.08 - 24.08 (2 нед.)</a>',
    cost: '€2800 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1122',
    flagWebp: 'img/programs-germany.webp',
    flag: 'img/programs-germany.jpg',
    flagAlt: 'Германия',
    webp: 'img/program-6.webp',
    jpg: 'img/program-6.jpg',
    alt: 'GLS Munich Castle',
    name: 'GLS Munich Castle',
    location: 'Мюнхен',
    date: '<a href="http://summer.study.ua/trip/look/1122" target="_blank">14.07 - 28.07 (2 нед.)</a>',
    cost: '€3200 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1077',
    flagWebp: 'img/programs-france.webp',
    flag: 'img/programs-france.jpg',
    flagAlt: 'Франция',
    webp: 'img/program-7.webp',
    jpg: 'img/program-7.jpg',
    alt: 'French Riviera summer',
    name: 'French Riviera summer',
    location: 'Ницца',
    date: '<a href="http://summer.study.ua/trip/look/62" target="_blank">29.06 - 13.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/75" target="_blank">13.07 - 27.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1077" target="_blank">27.07 - 10.08 (2 нед.)</a>',
    cost: '€2700 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/61',
    flagWebp: 'img/programs-switzerland.webp',
    flag: 'img/programs-switzerland.jpg',
    flagAlt: 'Швейцария',
    webp: 'img/program-8.webp',
    jpg: 'img/program-8.jpg',
    alt: 'Business and Hotel Management School',
    name: 'Business and Hotel Management School',
    location: 'Люцерн',
    date: '<a href="http://summer.study.ua/trip/look/61" target="_blank">06.07 - 19.07 (2 нед.)</a>',
    cost: '$4500 (2 нед.)'
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
  var load = document.querySelector('.programs__load');
  var listButton = document.querySelector('.programs__button--list');
  var programsTemplate = document.querySelector('.programs__template').content;
  
  if (document.body.clientWidth > 1210) {
    programsCounter = 3;
    programsIncrement = 3;
  } else if (document.body.clientWidth < 1210) {
    programsCounter = 2;
    programsIncrement = 2;
  }
  
  renderPrograms();
  
  load.addEventListener('click', function () {
    programsCounter = programsCounter + programsIncrement;
    clearPrograms();
    renderPrograms();
  });
  
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
      content.querySelector('.programs__flag-webp').srcset = programsData[i].flagWebp;
      content.querySelector('.programs__flag').src = programsData[i].flag;
      content.querySelector('.programs__flag').alt = programsData[i].flagAlt;
      content.querySelector('.programs__img-webp').srcset = programsData[i].webp;
      content.querySelector('.programs__img').src = programsData[i].jpg;
      content.querySelector('.programs__img').alt = programsData[i].alt;
      content.querySelector('.programs__name').innerHTML = programsData[i].name;
      content.querySelector('.programs__location').innerHTML = programsData[i].location;
      content.querySelector('.programs__date').innerHTML = programsData[i].date;
      content.querySelector('.programs__cost').innerHTML = programsData[i].cost;
      item.appendChild(content);
      list.appendChild(item);
    }
    
    if (programsCounter >= programsData.length) {
      load.disabled = true;
    }
  };
})();
(function () {
  var slides = document.querySelectorAll('.slider__item');
  var prev = document.querySelector('.slider__control--prev');
  var next = document.querySelector('.slider__control--next');
  var dots = document.querySelectorAll('.slider__dot');
  
  var currentSlide = 0;
  
  // Отрисовка слайдов
  var showSlide = function () {
    if (currentSlide > 4) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = 4;
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