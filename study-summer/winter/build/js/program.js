(function () {
  var phone = document.querySelector('.request__input[type=tel]');
  
  phone.addEventListener('focus', function() {
    phone.value = '+380';
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
  
  form.addEventListener('submit', function (evt) {
    var email = form.querySelector('#email').value;
    
    if (email == localStorage.getItem('email')) {
      evt.preventDefault();
    }
    
    localStorage.setItem('email', email);
  });
})();
// (function () {
//   var list = document.querySelector('.leader__list');
//   var numberOfSlide = list.querySelectorAll('li');
//   var prev = document.querySelector('.leader__button--prev');
//   var next = document.querySelector('.leader__button--next');
//   var counter = 0;
// 
//   next.addEventListener('click', function () {
//     if (counter >= numberOfSlide.length - 2) {
//       counter = numberOfSlide.length - 2;
//     }
//     counter++;
//     list.style.left = '-' + counter + '00%';
//   });
// 
//   prev.addEventListener('click', function () {
//     counter--;
//     if (counter <= 0) {
//       counter = 0;
//     }
//     list.style.left = '-' + counter + '00%';
//   });
// })();
(function () {
  var button = document.querySelector('.nav__menu');
  var nav = document.querySelector('.nav__list');
  var links = document.querySelectorAll('.nav__link');

  button.addEventListener('click', function () {
    if (button.classList.contains('nav__menu--open')) {
      nav.classList.add('nav__list--show');
      button.classList.remove('nav__menu--open');
      button.classList.add('nav__menu--close');
    } else {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
    });
  }
})();
(function () {
  var items = document.querySelectorAll('.photo__item');
  var webp = document.querySelectorAll('.photo__webp');
  var jpg = document.querySelectorAll('.photo__jpg');
  var popup = document.querySelector('.popup');
  var popupImage = document.querySelector('.popup__jpg');
  var prev = document.querySelector('.popup__control--prev');
  var next = document.querySelector('.popup__control--next');
  var overlay = document.querySelector('.popup__overlay');  
  var currentPhoto = 0;

  var index = [];
  for (var i = 0; i < items.length; i++){
    index.push(items[i]);
    items[i].addEventListener('click', function(evt){
      currentPhoto = index.indexOf(evt.currentTarget);
      showPopup(currentPhoto);
    });
  }
  
  var showPopup = function () {
    if (currentPhoto < 0) {
      currentPhoto = 6;
    } else if (currentPhoto > 6) {
      currentPhoto = 0;
    }
    
    var webpSource = webp[currentPhoto].srcset;
    var jpgSource = jpg[currentPhoto].src;
    
    if (document.body.clientWidth > 768) {
      webpSource = webp[currentPhoto].srcset.replace('-mobile', '');
      jpgSource = jpg[currentPhoto].src.replace('-mobile', '');
    }
    
    popup.querySelector('.popup__webp').srcset = webpSource;
    popup.querySelector('.popup__jpg').src = jpgSource;
    popup.classList.remove('popup--hide');
    overlay.classList.remove('popup__overlay--hide');
  };

  prev.addEventListener('click', function () {
    currentPhoto--;
    showPopup(currentPhoto);
  });
  
  next.addEventListener('click', function () {
    currentPhoto++;
    showPopup(currentPhoto);
  }); 
  
  document.body.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 13) {
      showPopup(currentPhoto);
    } else if (evt.keyCode == 37) {
      currentPhoto--;
      showPopup();
    } else if (evt.keyCode == 39) {
      currentPhoto++;
      showPopup();
    } else if (evt.keyCode == 27) {
      popup.classList.add('popup--hide');
      overlay.classList.add('popup__overlay--hide');
    }
  });
  
  // Тогглы для тач устройств
  var clientWidth = document.body.clientWidth;
  
  popupImage.addEventListener('touchstart', function (evt) {
    pozXStart = evt.changedTouches[0].pageX;
  });
  
  popupImage.addEventListener('touchmove', function (evt) {
    if (pozXStart > clientWidth / 2) {
      popup.style.left = '40%';
    } else {
      popup.style.left = '60%';
    }
  });
  
  popupImage.addEventListener('touchend', function (evt) {
    popup.style.left = '50%';
    pozXEnd = evt.changedTouches[0].pageX;
    
    if (pozXStart > clientWidth / 2) {
      currentPhoto++;
    } else {
      currentPhoto--;
    }
    showPopup(currentPhoto);
    currentPosition = currentPhoto;
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.add('popup--hide');
    overlay.classList.add('popup__overlay--hide');
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
    if (currentSlide > 3) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = 3;
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
(function () {
  var tabButtons = document.querySelectorAll('.info__button');
  var tabSections = document.querySelectorAll('.info__tab');
  var tempArray = [];
  var index = 0;
  
  activateTab(index);
  setGallery();
  
  for (var i = 0; i < tabButtons.length; i++){
    tempArray.push(tabButtons[i]);
    tabButtons[i].addEventListener('click', function(evt){
      index = tempArray.indexOf(evt.currentTarget);
      activateTab();
      setGallery();
      resetPhoto();
    });
  }
  
  function activateTab () {
    for (var j = 0; j < tabSections.length; j++) {
      tabSections[j].classList.remove('info__tab--active');
      tabButtons[j].classList.remove('info__button--active');
    }
    
    tabSections[index].classList.add('info__tab--active');
    tabButtons[index].classList.add('info__button--active');
  };
  
  function setGallery () {
    var galleryList = tabSections[index].querySelector('.info__gallery');
    var galleryPrev = tabSections[index].querySelector('.info__swipe--prev');
    var galleryNext = tabSections[index].querySelector('.info__swipe--next');
    var numberOfPhoto = tabSections[index].querySelectorAll('.info__gallery li');
    var counter = 0;
    
    galleryNext.addEventListener('click', function () {
      if (counter >= numberOfPhoto.length - 2) {
        counter = numberOfPhoto.length - 2;
      }
      counter++;
      galleryList.style.left = '-' + counter + '00%';
    });
    
    galleryPrev.addEventListener('click', function () {
      counter--;
      if (counter <= 0) {
        counter = 0;
      }
      galleryList.style.left = '-' + counter + '00%';
    });
  };
  
  function resetPhoto () {
    var galleryList = document.querySelectorAll('.info__gallery');
    for (var g = 0; g < galleryList.length; g++) {
      galleryList[g].style.left = '0%';
    }
  };
})();
(function () {
  var button = document.querySelector('.intro__play');
  var column = document.querySelector('.intro__column');
  var ratio = document.querySelector('.intro__ratio');
  var video = document.querySelector('.intro__video');
  
  var videoName = video.className.replace('intro__video  intro__video--', '');
  
  switch (videoName) {
    case 'canada':
      videoSource = 'https://www.youtube.com/embed/eOnwaoM_Dlc';
      break;
    case 'usa':
      videoSource = 'https://www.youtube.com/embed/d4FKC4Bg2hc';
      break;
    case 'uk':
      videoSource = 'https://www.youtube.com/embed/LpO92XC8050';
      break;
  }
  
  ratio.style.backgroundImage = 'url(../img/intro-bg-' + videoName + '.jpg)';
  
  button.addEventListener('click', function () {
    this.style.display = 'none';
    column.style.width = '100%';
    video.src = videoSource + '?&autoplay=1';
  });
})();