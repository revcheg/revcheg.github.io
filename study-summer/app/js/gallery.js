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
    overlay.style.backgroundImage = 'url('+ photos[currentPhoto].src +')';
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