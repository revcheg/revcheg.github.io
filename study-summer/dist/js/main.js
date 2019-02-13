(function () {
  var photos = document.querySelectorAll('.gallery__img');
  var popup = document.querySelector('.popup');
  var prev = document.querySelector('.popup__control--prev');
  var next = document.querySelector('.popup__control--next');
  var overlay = document.querySelector('.popup__overlay');
  
  var currentPhoto = 0;

  var clearArrayPhotos = [];
  for (var i = 0; i < photos.length; i++){
    clearArrayPhotos.push(photos[i]);
    photos[i].addEventListener('click', function(evt){
      currentPhoto = clearArrayPhotos.indexOf(evt.target);
      showPopup(currentPhoto);
    });
    photos[i].addEventListener('keydown', function(evt){
      if (evt.keyCode == 13) {
        currentPhoto = clearArrayPhotos.indexOf(evt.target);
        showPopup(currentPhoto);
      }
    });
  }
  
  var showPopup = function () {
    popup.classList.remove('popup--hide');
    popup.querySelector('.popup__webp').srcset = photos[currentPhoto].srcset;
    popup.querySelector('.popup__jpg').src = photos[currentPhoto].src;
    overlay.classList.remove('popup__overlay--hide');
  };
  
  prev.addEventListener('click', function () {
    currentPhoto--;
    if (currentPhoto < 0) {
      currentPhoto = 5;
    }
    showPopup(currentPhoto);
  });
  
  next.addEventListener('click', function () {
    currentPhoto++;
    if (currentPhoto > 5) {
      currentPhoto = 0;
    }
    showPopup(currentPhoto);
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.add('popup--hide');
    overlay.classList.add('popup__overlay--hide');
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
var programsData = [
  {
    webp: 'img/program-1.webp',
    jpg: 'img/program-1.jpg',
    alt: 'Brunel University',
    name: 'Brunel University',
    location: 'Лондон',
    date: '23.06 - 14.07 (3 нед.)',
    cost: '$4550 (3 нед.)'
  },
  {
    webp: 'img/program-2.webp',
    jpg: 'img/program-2.jpg',
    alt: 'CATS College London Bloomsbury',
    name: 'CATS College London Bloomsbury',
    location: 'Лондон',
    date: '4.08 - 18.08 (2 нед.)<br>4.08 - 25.08 (3 нед.)',
    cost: '$3700 (2 нед.)<br>$4770 (3 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Royal Holloway, University of London',
    name: 'Royal Holloway, University of London',
    location: 'Лондон',
    date: '1.07 - 15.07 (2 нед.)<br>15.07 - 29.07 (2 нед.)<br>29.07 - 12.08 (2 нед.)',
    cost: '$3100 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Royal Holloway, University of London + Tottenham Hotspur Football',
    name: 'Royal Holloway, University of London + Tottenham Hotspur Football',
    location: 'Лондон',
    date: '1.07 - 15.07 (2 нед.)<br>15.07 - 29.07 (2 нед.)',
    cost: '$3900 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'South Bank University',
    name: 'South Bank University',
    location: 'Лондон',
    date: '23.06 - 07.07 (2 нед.)<br>07.07 - 21.07 (2 нед.)<br>21.07 - 11.08 (3 нед.)',
    cost: '$3500 (2 нед.)<br>$4500 (3 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Roedean School',
    name: 'Roedean School',
    location: 'Брайтон',
    date: '30.07 - 13.07 (2 нед.)<br>14.07 - 27.07 (2 нед.)',
    cost: '$3300 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Brighton College',
    name: 'Brighton College',
    location: 'Брайтон',
    date: '3.07 - 17.07 (2 нед.)<br>17.07 - 31.07 (2 нед.)',
    cost: '$3450 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Wellington College',
    name: 'Wellington College',
    location: 'Виндзор',
    date: '2.07 - 16.07 (2 нед.)<br>16.07 - 30.07 (2 нед.)<br>30.07 - 13.08 (2 нед.)',
    cost: '$3450 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Bradfield College',
    name: 'Bradfield College',
    location: 'Рединг',
    date: '2.07 - 16.07 (2 нед.)<br>30.07 - 13.08 (2 нед.)',
    cost: '$3200 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Christ Hospital School',
    name: 'Christ Hospital School',
    location: 'Хоршем',
    date: '17.07 - 31.07 (2 нед.)<br>31.07 - 14.08 (2 нед.)',
    cost: '$3000 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Queen Ethelburga’s College + Edinburgh trip',
    name: 'Queen Ethelburga’s College + Edinburgh trip',
    location: 'Йорк',
    date: '30.06 -14.07 (2 нед.)<br>14.07 - 28.07 (2 нед.)',
    cost: '$3600 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Oxford School of English',
    name: 'Oxford School of English',
    location: 'Оксфорд',
    date: '5.07 - 19.07 (2 нед.)<br>19.07 - 09.08 (3 нед.)',
    cost: '$3000 (2 нед.)<br>$3600 (3 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Kings Oxford academic summer',
    name: 'Kings Oxford academic summer',
    location: 'Оксфорд',
    date: '7.07 - 21.07 (2 нед.)',
    cost: '$4000 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Abbey DLD Academic summer',
    name: 'Abbey DLD Academic summer',
    location: 'Лондон',
    date: '6.07 - 20.07 (2 нед.)',
    cost: '$4700 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Abbey DLD Academic summer Medical School',
    name: 'Abbey DLD Academic summer Medical School',
    location: 'Лондон',
    date: '6.07 - 20.07 (2 нед.)',
    cost: '$5000 (2 нед.)'
  },
  {
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
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
  var popupTemplate = document.querySelector('.programs__template').content;

  var programsCounter = 3;
  renderPrograms();
  
  load.addEventListener('click', function () {
    programsCounter = programsCounter + 3;
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
      
      var content = popupTemplate.cloneNode(true);
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
      currentSlide = 1;
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
  
  button.addEventListener('click', function () {
    videoWrapper.classList.remove('advantages__media--hide');
    video.src = 'https://www.youtube.com/embed/akjTJCHz3pA?autoplay=1';
    overlay.classList.remove('popup__overlay--hide');
  });
  
  overlay.addEventListener('click', function () {
    videoWrapper.classList.add('advantages__media--hide');
    video.src = '';
    overlay.classList.add('popup__overlay--hide');
  });
})();