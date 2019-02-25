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
  
  var showPopup = function () {
    popup.classList.remove('popup--hide');
    popup.querySelector('.popup__webp').srcset = 'img/photo-' + currentPhoto + '.webp';
    popup.querySelector('.popup__jpg').src = 'img/photo-' + currentPhoto + '.jpg';
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