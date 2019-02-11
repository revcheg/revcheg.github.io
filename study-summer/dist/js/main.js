(function () {
  var photos = document.querySelectorAll('.gallery__img');
  // var buttons = document.querySelectorAll('.gallery__button');
  var popup = document.querySelector('.popup');
  var prev = document.querySelector('.popup__control--prev');
  var next = document.querySelector('.popup__control--next');
  var overlay = document.querySelector('.popup__overlay');
  
  var currentPhoto = 0;

  var clearArrayPhotos = [];
  for (var i = 0; i < photos.length; i++){
    clearArrayPhotos.push(photos[i]);
    photos[i].addEventListener('click', function(e){
      currentPhoto = clearArrayPhotos.indexOf(e.target);
      showPopup(currentPhoto);
    });
  }
  
  // for (var i = 0; i < buttons.length; i++){
  //   clearArrayPhotos.push(buttons[i]);
  //   buttons[i].addEventListener('click', function(evt){
  //     currentPhoto = buttons.indexOf(evt.target);
  //     console.log(currentPhoto);
  //     showPopup(currentPhoto);
  //   });
  // }
  
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
  })
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
    webp: 'img/brunel-university.webp',
    jpg: 'img/brunel-university.jpg',
    alt: 'Brunel University',
    name: 'Brunel University'
  },
  {
    webp: 'img/cats.webp',
    jpg: 'img/cats.jpg',
    alt: 'CATS College London Bloomsbury',
    name: 'CATS College London<br>Bloomsbury'
  },
  {
    webp: 'img/royal-holloway.webp',
    jpg: 'img/royal-holloway.jpg',
    alt: 'Royal Holloway, University of London',
    name: 'Royal Holloway, University of<br>London'
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
  var popupTemplate = document.querySelector('.programs__template').content;

  for (var i = 0; i < programsData.length; i++) {
    var item = document.createElement('li');
    item.classList.add('programs__item');
    var content = popupTemplate.cloneNode(true);
    content.querySelector('.programs__name').innerHTML = programsData[i].name;
    content.querySelector('source').srcset = programsData[i].webp;
    content.querySelector('img').src = programsData[i].jpg;
    content.querySelector('img').alt = programsData[i].alt;
    item.appendChild(content);
    list.appendChild(item);
  };
})();
(function () {
  var slides = document.querySelectorAll('.slider__item');
  var prev = document.querySelector('.slider__control--prev');
  var next = document.querySelector('.slider__control--next');
  var dots = document.querySelectorAll('.slider__dot');
  
  var currentSlide = 0;

  var showSlide = function () {
    if (currentSlide > 1) {
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
  
  button.addEventListener('click', function () {
    videoWrapper.classList.add('advantages__media');
    video.classList.add('advantages__video');
    video.src = 'https://www.youtube.com/embed/akjTJCHz3pA?rel=0&showinfo=0&autoplay=1';
    overlay.classList.remove('popup__overlay--hide');
    document.body.appendChild(videoWrapper);
    videoWrapper.appendChild(video);
  });
  
  overlay.addEventListener('click', function () {
    overlay.classList.add('popup__overlay--hide');
    document.body.removeChild(videoWrapper);
  });
})();