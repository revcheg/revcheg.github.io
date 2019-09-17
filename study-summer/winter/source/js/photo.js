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
    previewSwap(currentPosition);
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.add('popup--hide');
    overlay.classList.add('popup__overlay--hide');
  });
})();