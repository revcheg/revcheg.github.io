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
  var items = document.querySelectorAll('.leader__item');
  var prev = document.querySelector('.leader__button--prev');
  var next = document.querySelector('.leader__button--next');
  var counter = 0;

  next.addEventListener('click', function () {
    items[counter].classList.remove('leader__item--active');
    counter++;
    if (counter > 1) {
      counter = 0;
    }
    items[counter].classList.add('leader__item--active');
  });

  prev.addEventListener('click', function () {
    items[counter].classList.remove('leader__item--active');
    counter--;
    if (counter < 0) {
      counter = 1;
    }
    items[counter].classList.add('leader__item--active');
  });
  
  var video = document.querySelector('.leader__video');
  var play = document.querySelector('.leader__play');
  
  play.addEventListener('click', function () {
    this.classList.add('leader__play--hide');
    video.src = 'https://www.youtube.com/embed/Npl8YrYihXw?&autoplay=1'
  });
  
  var videoSource;
  var videoName = video.className.replace('leader__video  leader__video--', '');
  console.log(videoName);
  
  switch (videoName) {
    case 'canadian-high-school':
      videoSource = 'https://www.youtube.com/embed/tcumUKuXnRk';
      break;
    case 'explore-toronto':
      videoSource = 'https://www.youtube.com/embed/tb8t1yVA96k';
      break;
    case 'toronto-winter-holidays':
      videoSource = 'https://www.youtube.com/embed/lChKRs1wzps';
      break;
    case 'default':
      videoSource = 'https://www.youtube.com/embed/Npl8YrYihXw';
      break;
  }
    
  play.addEventListener('click', function () {
    this.classList.add('leader__play--hide');
    video.src = videoSource + '?&autoplay=1';
  });
})();
// (function () {
//   var iframe = document.querySelector('.short__map');
// 
//   iframe.addEventListener('mouseover', function () {
//     this.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1088.4094561287006!2d-79.90590150505048!3d43.25761206235831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b5ad285329d%3A0x6433b0053afef018!2z0JrQvtC70LvQtdC00LYg0JrQvtC70YPQvNCx0LjRjyDQmNC90YLQtdGA0L3QtdGI0L3QtdC7!5e0!3m2!1sru!2sua!4v1567765101160!5m2!1sru!2sua';
//   }, {once: true});
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
  var offer = document.querySelector('.offer');
  var close = document.querySelector('.offer__close');

  var flag = localStorage.getItem('event-popup');
  if (flag == 'true') {
    offer.classList.add('offer--hide');
  } else {
    offer.classList.remove('offer--hide');
  }

  close.addEventListener('click', function () {
    offer.classList.add('offer--hide');
    localStorage.setItem('event-popup', 'true');
  });
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
    if (evt.keyCode == 27) {
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
        video.src = 'https://www.youtube.com/embed/AsEZlS0epI4?&autoplay=1';
      } else if (indexButton == 1) {
        video.src = 'https://www.youtube.com/embed/snx6LOb2bno?&autoplay=1';
      } else {
        video.src = 'https://www.youtube.com/embed/dVKHwTR9Tws?&autoplay=1';
      }
    });
  }
  
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      videoWrapper.classList.add('reviews__container--hide');
      video.src = '';
      overlay.classList.add('popup__overlay--hide');
    }
  });
  
  overlay.addEventListener('click', function () {
    videoWrapper.classList.add('reviews__container--hide');
    video.src = '';
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
    case 'default':
      videoSource = 'https://www.youtube.com/embed/Npl8YrYihXw';
      break;
  }
  
  ratio.style.backgroundImage = 'url(../img/intro-bg-' + videoName + '.jpg)';
  
  button.addEventListener('click', function () {
    this.style.display = 'none';
    column.style.width = '100%';
    video.src = videoSource + '?&autoplay=1';
  });
})();