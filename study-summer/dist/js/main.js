(function () {
  var list = document.querySelector('.leaders__list');
  var prev = document.querySelector('.leaders__button--prev');
  var next = document.querySelector('.leaders__button--next');
  var dots = document.querySelectorAll('.leaders__dots');
  
  var currentSlide = 0;
  var currentPosition = '0%';
  
  var showSlide = function () {
    // if (currentSlide > 1 && document.body.clientWidth > 1210) {
    //   currentSlide = 0;
    // } else if (currentSlide < 0 && document.body.clientWidth > 1210) {
    //   currentSlide = 1;
    // } else if (currentSlide > 0 && document.body.clientWidth > 1210)
    
    switch (currentSlide) {
      case 0:
        currentPosition = '0%';
        break;
      case 1:
        currentPosition = '-100%';
        break;
      // case 2:
      //   currentPosition = '-200%';
      //   break;
      default:
        currentPosition = '0%';
        currentSlide = 0;
    }
    
    list.style.left = currentPosition;
  };
  
  prev.addEventListener('click', function () {
    currentSlide--;
    showSlide(currentSlide);
  });
  
  next.addEventListener('click', function () {
    currentSlide++;
    showSlide(currentSlide);
  });
})();
(function () {
  var button = document.querySelector('.nav__menu');
  var nav = document.querySelector('.nav__list');

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
})();
(function () {
  var photos = document.querySelectorAll('.photo__img');
  var photosSources = document.querySelectorAll('.photo__source');
  var item = document.querySelectorAll('.photo__item');
  var popup = document.querySelector('.popup');
  var prev = document.querySelector('.popup__control--prev');
  var next = document.querySelector('.popup__control--next');
  var overlay = document.querySelector('.popup__overlay');
  
  var currentPhoto = 0;

  var clearArrayPhotos = [];
  for (var i = 0; i < item.length; i++){
    clearArrayPhotos.push(item[i]);
    item[i].addEventListener('click', function(evt){
      currentPhoto = clearArrayPhotos.indexOf(evt.target);
      showPopup(currentPhoto);
    });
    
    item[i].addEventListener('keydown', function(evt){
      if (evt.keyCode == 13) {
        currentPhoto = clearArrayPhotos.indexOf(evt.target);
        showPopup(currentPhoto);
      } else if (evt.keyCode == 27) {
        popup.classList.add('popup--hide');
        overlay.classList.add('popup__overlay--hide');
      }
    });
  }
  
  var showPopup = function () {
    popup.classList.remove('popup--hide');
    popup.querySelector('.popup__webp').srcset = photosSources[currentPhoto].srcset;
    popup.querySelector('.popup__jpg').src = photos[currentPhoto].src;
    overlay.classList.remove('popup__overlay--hide');
  };
  
  prev.addEventListener('click', function () {
    currentPhoto--;
    if (currentPhoto < 0) {
      currentPhoto = 11;
    }
    showPopup(currentPhoto);
  });
  
  next.addEventListener('click', function () {
    currentPhoto++;
    if (currentPhoto > 11) {
      currentPhoto = 0;
    }
    showPopup(currentPhoto);
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.add('popup--hide');
    overlay.classList.add('popup__overlay--hide');
  });
  
  var previewList = document.querySelector('.photo__slider');
  var mobileButtonPrev = document.querySelector('.photo__button--prev');
  var mobileButtonNext = document.querySelector('.photo__button--next');
  
  var currentCounter = 0;
  var currentPosition;
  
  mobileButtonNext.addEventListener('click', function () {
    currentCounter++;
    
    switch (currentCounter) {
      case 0:
        currentPosition = '0%';
        break;
      case 1:
        currentPosition = '-100%';
        break;
      case 2:
        currentPosition = '-200%';
        break;
      case 3:
        currentPosition = '-300%';
        break;
      case 4:
        currentPosition = '-400%';
        break;
      case 5:
        currentPosition = '-500%';
        break;
      case 6:
        currentPosition = '-600%';
        break;
      case 7:
        currentPosition = '-700%';
        break;
      case 8:
        currentPosition = '-800%';
        break;
      case 9:
        currentPosition = '-900%';
        break;
      case 10:
        currentPosition = '-1000%';
        break;
      case 11:
        currentPosition = '-1100%';
        break;
      default:
        currentPosition = '0%';
        currentCounter = 0;
    }
    
    previewList.style.left = currentPosition;
  });
  
  mobileButtonPrev.addEventListener('click', function () {
    currentCounter--;
    
    switch (currentCounter) {
      case 0:
        currentPosition = '0%';
        break;
      case 1:
        currentPosition = '-100%';
        break;
      case 2:
        currentPosition = '-200%';
        break;
      case 3:
        currentPosition = '-300%';
        break;
      case 4:
        currentPosition = '-400%';
        break;
      case 5:
        currentPosition = '-500%';
        break;
      case 6:
        currentPosition = '-600%';
        break;
      case 7:
        currentPosition = '-700%';
        break;
      case 8:
        currentPosition = '-800%';
        break;
      case 9:
        currentPosition = '-900%';
        break;
      case 10:
        currentPosition = '-1000%';
        break;
      case 11:
        currentPosition = '-1100%';
        break;
      default:
        currentPosition = '-1100%';
        currentCounter = 11;
    }
    
    previewList.style.left = currentPosition;
  });
})();
var programsData = [
  {
    webp: 'img/program-1.webp',
    jpg: 'img/program-1.jpg',
    alt: 'Brunel University',
    name: 'Brunel University',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/29" target="_blank">23.06 - 14.07 (3 нед.)</a>',
    cost: '$4550 (3 нед.)'
  },
  {
    webp: 'img/program-2.webp',
    jpg: 'img/program-2.jpg',
    alt: 'CATS College London Bloomsbury',
    name: 'CATS College London Bloomsbury',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/58" target="_blank">4.08 - 18.08 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/58" target="_blank">4.08 - 25.08 (3 нед.)</a>',
    cost: '$3700 (2 нед.)<br>$4770 (3 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Royal Holloway, University of London',
    name: 'Royal Holloway, University of London',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/38" target="_blank">1.07 - 15.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/23" target="_blank">15.07 - 29.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/22" target="_blank">29.07 - 12.08 (2 нед.)</a>',
    cost: '$3100 (2 нед.)'
  },
  {
    webp: 'img/program-4.webp',
    jpg: 'img/program-4.jpg',
    alt: 'Royal Holloway, University of London + Tottenham Hotspur Football',
    name: 'Royal Holloway, University of London + Tottenham Hotspur Football',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/35" target="_blank">1.07 - 15.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1093" target="_blank">15.07 - 29.07 (2 нед.)</a>',
    cost: '$3900 (2 нед.)'
  },
  {
    webp: 'img/program-5.webp',
    jpg: 'img/program-5.jpg',
    alt: 'South Bank University',
    name: 'South Bank University',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/1083" target="_blank">23.06 - 07.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1088" target="_blank">07.07 - 21.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1089" target="_blank">21.07 - 11.08 (3 нед.)</a>',
    cost: '$3500 (2 нед.)<br>$4500 (3 нед.)'
  },
  {
    webp: 'img/program-6.webp',
    jpg: 'img/program-6.jpg',
    alt: 'Roedean School',
    name: 'Roedean School',
    location: 'Брайтон',
    date: '<a href="http://summer.study.ua/trip/look/1107" target="_blank">30.07 - 13.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1108" target="_blank">14.07 - 27.07 (2 нед.)</a>',
    cost: '$3300 (2 нед.)'
  },
  {
    webp: 'img/program-7.webp',
    jpg: 'img/program-7.jpg',
    alt: 'Brighton College',
    name: 'Brighton College',
    location: 'Брайтон',
    date: '<a href="http://summer.study.ua/trip/look/1104" target="_blank">3.07 - 17.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1105" target="_blank">17.07 - 31.07 (2 нед.)</a>',
    cost: '$3450 (2 нед.)'
  },
  {
    webp: 'img/program-8.webp',
    jpg: 'img/program-8.jpg',
    alt: 'Wellington College',
    name: 'Wellington College',
    location: 'Виндзор',
    date: '<a href="http://summer.study.ua/trip/look/1111" target="_blank">2.07 - 16.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1112" target="_blank">16.07 - 30.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1113" target="_blank">30.07 - 13.08 (2 нед.)</a>',
    cost: '$3450 (2 нед.)'
  },
  {
    webp: 'img/program-9.webp',
    jpg: 'img/program-9.jpg',
    alt: 'Bradfield College',
    name: 'Bradfield College',
    location: 'Рединг',
    date: '<a href="http://summer.study.ua/trip/look/1109" target="_blank">2.07 - 16.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1109" target="_blank">30.07 - 13.08 (2 нед.)</a>',
    cost: '$3200 (2 нед.)'
  },
  {
    webp: 'img/program-10.webp',
    jpg: 'img/program-10.jpg',
    alt: 'Christ Hospital School',
    name: 'Christ Hospital School',
    location: 'Хоршем',
    date: '17.07 - 31.07 (2 нед.)<br>31.07 - 14.08 (2 нед.)',
    cost: '$3000 (2 нед.)'
  },
  {
    webp: 'img/program-11.webp',
    jpg: 'img/program-11.jpg',
    alt: 'Queen Ethelburga’s College + Edinburgh trip',
    name: 'Queen Ethelburga’s College + Edinburgh trip',
    location: 'Йорк',
    date: '<a href="http://summer.study.ua/trip/look/1082" target="_blank">30.06 -14.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/34" target="_blank">14.07 - 28.07 (2 нед.)</a>',
    cost: '$3600 (2 нед.)'
  },
  {
    webp: 'img/program-12.webp',
    jpg: 'img/program-12.jpg',
    alt: 'Oxford School of English',
    name: 'Oxford School of English',
    location: 'Оксфорд',
    date: '<a href="http://summer.study.ua/trip/look/16" target="_blank">5.07 - 19.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/4" target="_blank">19.07 - 09.08 (3 нед.)</a>',
    cost: '$3000 (2 нед.)<br>$3600 (3 нед.)'
  },
  {
    webp: 'img/program-13.webp',
    jpg: 'img/program-13.jpg',
    alt: 'Kings Oxford academic summer',
    name: 'Kings Oxford academic summer',
    location: 'Оксфорд',
    date: '<a href="http://summer.study.ua/trip/look/1114" target="_blank">7.07 - 21.07 (2 нед.)</a>',
    cost: '$4000 (2 нед.)'
  },
  {
    webp: 'img/program-14.webp',
    jpg: 'img/program-14.jpg',
    alt: 'Abbey DLD Academic summer',
    name: 'Abbey DLD Academic summer',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/65" target="_blank">6.07 - 20.07 (2 нед.)</a>',
    cost: '$4700 (2 нед.)'
  },
  {
    webp: 'img/program-15.webp',
    jpg: 'img/program-15.jpg',
    alt: 'Abbey DLD Academic summer Medical School',
    name: 'Abbey DLD Academic summer Medical School',
    location: 'Лондон',
    date: '<a href="http://summer.study.ua/trip/look/1098" target="_blank">6.07 - 20.07 (2 нед.)</a>',
    cost: '$5000 (2 нед.)'
  },
  {
    webp: 'img/program-16.webp',
    jpg: 'img/program-16.jpg',
    alt: 'High School Immersion with British students',
    name: 'High School Immersion with British students',
    location: 'Брайтон',
    date: '<a href="http://summer.study.ua/trip/look/1130" target="_blank">23.06 - 07.07 (2 нед.)</a><br><a href="http://summer.study.ua/trip/look/1131" target="_blank">23.06 - 14.07 (3 нед.)</a>',
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

  var programsCounter = 3;
  var programsIncrement = 3;
  
  if (document.body.clientWidth < 1210) {
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

  var showSlide = function () {
    if (currentSlide > 4) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = 4;
    };
    slides[currentSlide].classList.add('slider__item--show');
    dots[currentSlide].classList.add('slider__dot--active');
  };
  
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
  
  for (var j = 0; j < slides.length; j++) {
    slides[j].addEventListener('touchstart', function (evt) {
      pozX = evt.changedTouches[0].pageX;
      var width = document.body.clientWidth;
      
      if (pozX > width/2) {
        slides[currentSlide].classList.remove('slider__item--show');
        dots[currentSlide].classList.remove('slider__dot--active');
        currentSlide++;
        showSlide(currentSlide);
      } else {
        slides[currentSlide].classList.remove('slider__item--show');
        dots[currentSlide].classList.remove('slider__dot--active');
        currentSlide--;
        showSlide(currentSlide);
      }
    })
  }
})();
(function () {
  var button = document.querySelector('.advantages__play');
  var video = document.createElement('iframe');
  var videoWrapper = document.createElement('div');
  var overlay = document.querySelector('.popup__overlay');
  
  videoWrapper.classList.add('advantages__media', 'advantages__media--hide');
  document.body.appendChild(videoWrapper);
  videoWrapper.appendChild(video);
  video.classList.add('advantages__video');
  video.setAttribute('allow', 'autoplay');
  video.setAttribute('allowfullscreen', '');
  
  button.addEventListener('click', function () {
    videoWrapper.classList.remove('advantages__media--hide');
    video.setAttribute('src', 'https://www.youtube.com/embed/akjTJCHz3pA?rel=0&showinfo=0&autoplay=1');
    overlay.classList.remove('popup__overlay--hide');
  });
  
  overlay.addEventListener('click', function () {
    videoWrapper.classList.add('advantages__media--hide');
    video.setAttribute('src', '');
    overlay.classList.add('popup__overlay--hide');
  });
})();