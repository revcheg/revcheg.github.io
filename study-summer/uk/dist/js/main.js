// (function () {
//   var phone = document.querySelector('.request__input--phone');
//   var currentValue = phone.value;
// 
//   // Custom mask
//   phone.addEventListener('focus', function () {
//     phone.value = '+38 (';
//   });
// 
//   phone.addEventListener('input', function () {    
//     var testValue = phone.value; 
//     var regExp = /[a-zA-Zа-яА-Я]/; 
//     if (regExp.test(testValue)) { 
//       testValue = testValue.replace(regExp, ''); 
//       phone.value = testValue; 
//     } 
// 
//     if (phone.value.length >= 8 && phone.value.length < 9) {
//       currentValue = phone.value;
//       phone.value = currentValue + ') ';
//     } else if (phone.value.length >= 13 && phone.value.length < 14) {
//       currentValue = phone.value;
//       phone.value = currentValue + '-';
//     } 
//   });
// 
//   // Decorate
//   var inputs = document.querySelectorAll('.request__input');
//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('focus', function () {
//       var label = this.nextElementSibling;
//       label.classList.add('request__label--active');
//     });
//   }
// })();    
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
    possibleSlide = 16;
  } else if (clientWidth > 768 && clientWidth < 1210) {
    possibleSlide = 8;
  } else if (clientWidth >= 1210) {
    possibleSlide = 4;
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
    full: true,
    href: '',
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Royal Holloway, University of London',
    name: 'Royal Holloway, University of London',
    location: 'Лондон',
    date: '29.07 - 12.08 (2 нед.)',
    cost: '$3300 (2 нед.)'
  },
  {
    full: true,
    href: '',
    webp: 'img/program-1.webp',
    jpg: 'img/program-1.jpg',
    alt: 'Brunel University',
    name: 'Brunel University',
    location: 'Лондон',
    date: '23.06 - 14.07 (3 нед.)',
    cost: '$4550 (3 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/58',
    webp: 'img/program-2.webp',
    jpg: 'img/program-2.jpg',
    alt: 'CATS College London Bloomsbury',
    name: 'CATS College London Bloomsbury',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/58" target="_blank">04.08 - 18.08 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/58" target="_blank">04.08 - 25.08 (3 нед.)</a>',
    cost: '$3700 (2 нед.)<br>$4770 (3 нед.)'
  },
  {
    full: true,
    href: 'http://summer.study.ua/trip/look/35',
    webp: 'img/program-4.webp',
    jpg: 'img/program-4.jpg',
    alt: 'Royal Holloway, University of London + Tottenham Hotspur Football',
    name: 'Royal Holloway, University of London + Tottenham Hotspur Football',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/35" target="_blank">01.07 - 15.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1093" target="_blank">15.07 - 29.07 (2 нед.)</a>',
    cost: '$3900 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1088',
    webp: 'img/program-5.webp',
    jpg: 'img/program-5.jpg',
    alt: 'South Bank University',
    name: 'South Bank University',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/1088" target="_blank">07.07 - 21.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1089" target="_blank">21.07 - 11.08 (3 нед.)</a>',
    cost: '$3500 (2 нед.)<br>$4500 (3 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1108',
    webp: 'img/program-6.webp',
    jpg: 'img/program-6.jpg',
    alt: 'Roedean School',
    name: 'Roedean School',
    location: 'Брайтон',
    date: '<a href="http://summer.study.ua/trip/look/1108" target="_blank">14.07 - 27.07 (2 нед.)</a>',
    cost: '$3300 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1105',
    webp: 'img/program-7.webp',
    jpg: 'img/program-7.jpg',
    alt: 'Brighton College',
    name: 'Brighton College',
    location: 'Брайтон',
    date: '<a href="http://summer.study.ua/trip/look/1104" target="_blank">03.07 - 17.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1105" target="_blank">17.07 - 31.07 (2 нед.)</a>',
    cost: '$3450 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1111',
    webp: 'img/program-8.webp',
    jpg: 'img/program-8.jpg',
    alt: 'Wellington College',
    name: 'Wellington College',
    location: 'Виндзор',
    date: '<a href="http://summer.study.ua/trip/look/1111" target="_blank">02.07 - 16.07 (2 нед.)</a>',
    cost: '$3450 (2 нед.)'
  },
  {
    full: false,
    href: 'http://summer.study.ua/trip/look/1109',
    webp: 'img/program-9.webp',
    jpg: 'img/program-9.jpg',
    alt: 'Bradfield College',
    name: 'Bradfield College',
    location: 'Рединг',
    date: '<a href="http://summer.study.ua/trip/look/1109" target="_blank">02.07 - 16.07 (2 нед.)</a>',
    cost: '$3200 (2 нед.)'
  },
  {
    full: true,
    href: '',
    webp: 'img/program-11.webp',
    jpg: 'img/program-11.jpg',
    alt: 'Queen Ethelburga’s College + Edinburgh trip',
    name: 'Queen Ethelburga’s College + Edinburgh trip',
    location: 'Йорк',
    date: '30.06 -14.07 (2 нед.)<br>14.07 - 28.07 (2 нед.)',
    cost: '$3600 (2 нед.)'
  },
  {
    full: true,
    href: '',
    webp: 'img/program-12.webp',
    jpg: 'img/program-12.jpg',
    alt: 'Oxford School of English',
    name: 'Oxford School of English',
    location: 'Оксфорд',
    date: '05.07 - 19.07 (2 нед.)<br>28.06 - 19.07 (3 нед.)',
    cost: '$3000 (2 нед.)<br>$3600 (3 нед.)'
  },
  {
    full: true,
    href: '',
    webp: 'img/program-13.webp',
    jpg: 'img/program-13.jpg',
    alt: 'Kings Oxford academic summer',
    name: 'Kings Oxford academic summer',
    location: 'Оксфорд',
    date: '07.07 - 21.07 (2 нед.)',
    cost: '$4000 (2 нед.)'
  },
  {
    full: true,
    href: '',
    webp: 'img/program-14.webp',
    jpg: 'img/program-14.jpg',
    alt: 'Abbey DLD Academic summer',
    name: 'Abbey DLD Academic summer',
    location: 'Лондон',
    date: '06.07 - 20.07 (2 нед.)',
    cost: '$4700 (2 нед.)'
  },
  {
    full: true,
    href: '',
    webp: 'img/program-15.webp',
    jpg: 'img/program-15.jpg',
    alt: 'Abbey DLD Academic summer Medical School',
    name: 'Abbey DLD Academic summer Medical School',
    location: 'Лондон',
    date: '06.07 - 20.07 (2 нед.)',
    cost: '$5000 (2 нед.)'
  },
  {
    full: true,
    href: '',
    webp: 'img/program-16.webp',
    jpg: 'img/program-16.jpg',
    alt: 'High School Immersion with British students',
    name: 'High School Immersion with British students',
    location: 'Брайтон',
    date: '23.06 - 07.07 (2 нед.)<br>23.06 - 14.07 (3 нед.)',
    cost: '$3700 (2 нед.)<br>$4400 (2 нед.)'
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
// (function () {
//   var button = document.querySelector('.advantages__play');
//   var video = document.createElement('iframe');
//   var videoWrapper = document.createElement('div');
//   var overlay = document.querySelector('.popup__overlay');
// 
//   videoWrapper.classList.add('advantages__media', 'advantages__media--hide');
//   document.body.appendChild(videoWrapper);
//   videoWrapper.appendChild(video);
//   video.classList.add('advantages__video');
//   video.setAttribute('allow', 'autoplay');
//   video.setAttribute('allowfullscreen', '');
// 
//   button.addEventListener('click', function () {
//     videoWrapper.classList.remove('advantages__media--hide');
//     video.setAttribute('src', 'https://www.youtube.com/embed/akjTJCHz3pA?rel=0&showinfo=0&autoplay=1');
//     overlay.classList.remove('popup__overlay--hide');
//     document.body.style.overflow = 'hidden';
//   });
// 
//   overlay.addEventListener('click', function () {
//     videoWrapper.classList.add('advantages__media--hide');
//     video.setAttribute('src', '');
//     overlay.classList.add('popup__overlay--hide');
//     document.body.style.overflow = 'auto';
//   });
// })();

(function () {
  var button = document.querySelector('.advantages__play');
  var video = document.querySelector('.advantages__video');
  var overlay = document.querySelector('.popup__overlay');
  
  video.volume = 0.1;
  
  video.onended = function () {
    video.classList.add('advantages__video--hide');
    video.load();
    overlay.classList.add('popup__overlay--hide');
    document.body.style.overflow = 'auto';
  };
  
  button.addEventListener('click', function () {
    video.classList.remove('advantages__video--hide');
    video.play();
    overlay.classList.remove('popup__overlay--hide');
    document.body.style.overflow = 'hidden';
  });
  
  overlay.addEventListener('click', function () {
    video.classList.add('advantages__video--hide');
    video.load();
    overlay.classList.add('popup__overlay--hide');
    document.body.style.overflow = 'auto';
  });
})();