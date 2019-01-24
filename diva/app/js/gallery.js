(function () {
  var imageArray = document.querySelectorAll('.gallery__photo');
  var overlay = document.querySelector('.popup__overlay');
  var popupTemplate = document.querySelector('.popup__template').content.querySelector('.popup');
  
  var popupData = [
    {
      jpg: 'img/gallery-1.jpg',
      webp: 'img/gallery-1.webp'
    },
    {
      jpg: 'img/gallery-2.jpg',
      webp: 'img/gallery-2.webp'
    },
    {
      jpg: 'img/gallery-3.jpg',
      webp: 'img/gallery-3.webp'
    },
    {
      jpg: 'img/gallery-4.jpg',
      webp: 'img/gallery-4.webp'
    },
    {
      jpg: 'img/gallery-5.jpg',
      webp: 'img/gallery-5.webp'
    },
    {
      jpg: 'img/gallery-6.jpg',
      webp: 'img/gallery-6.webp'
    },
    {
      jpg: 'img/gallery-7.jpg',
      webp: 'img/gallery-7.webp'
    }
  ]
  
  for (var i = 0; i < 7; i++) {
    var popup = popupTemplate.cloneNode(true);
    popup.querySelector('img').src = popupData[i].jpg;
    popup.querySelector('source').srcset = popupData[i].webp;
    document.body.appendChild(popup);
  };
  
  var popups = document.querySelectorAll('.popup');
  var close = document.querySelectorAll('.popup__close');
  var prevButtons = document.querySelectorAll('.popup__controll--prev');
  var nextButtons = document.querySelectorAll('.popup__controll--next');
  
  var currentPopup;
  var imageClearArray = [];
  
  for (var j = 0; j < imageArray.length; j++){
    imageClearArray.push(imageArray[j]);
    imageArray[j].addEventListener('click', function(e) {
      currentPopup = imageClearArray.indexOf(e.target);
      showPopup(currentPopup);
    });
  };
  
  var showPopup = function (currentImage) {
    overlay.classList.remove('popup__overlay--hide');
    popups[currentPopup].classList.remove('popup--hide');
  };
  
  for (var p = 0; p < prevButtons.length; p++) {
    prevButtons[p].addEventListener('click', function () {
      popups[currentPopup].classList.add('popup--hide');
      currentPopup--;
      if (currentPopup < 0) {
        currentPopup = 6;
      };
      showPopup(currentPopup);
    });
  };
  
  for (var k = 0; k < nextButtons.length; k++) {
    nextButtons[k].addEventListener('click', function () {
      popups[currentPopup].classList.add('popup--hide');
      currentPopup++;
      if (currentPopup === 7) {
        currentPopup = 0;
      };
      showPopup(currentPopup);
    });
  };
  
  for (var c = 0; c < close.length; c++) {
    close[c].addEventListener('click', function () {
      overlay.classList.add('popup__overlay--hide');
      popups[currentPopup].classList.add('popup--hide');
    });
  };
  
  overlay.addEventListener('click', function () {
    overlay.classList.add('popup__overlay--hide');
    popups[currentPopup].classList.add('popup--hide');
  });
})();