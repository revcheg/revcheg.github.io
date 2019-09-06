(function () {
  var item = document.querySelectorAll('.photo__item');
  var images = document.querySelectorAll('.photo__source');
  var webp = document.querySelectorAll('.photo__webp');
  var popup = document.querySelector('.popup');
  var prev = document.querySelector('.popup__control--prev');
  var next = document.querySelector('.popup__control--next');
  var overlay = document.querySelector('.popup__overlay');  
  var currentPhoto = 0;

  var index = [];
  for (var i = 0; i < item.length; i++){
    index.push(item[i]);
    item[i].addEventListener('click', function(evt){
      currentPhoto = index.indexOf(evt.currentTarget);
      showPopup(currentPhoto);
    });
    
    item[i].addEventListener('keydown', function(evt){
      if (evt.keyCode == 13 || evt.keyCode == 32) {
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
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  var showPopup = function () {
    if (currentPhoto < 0) {
      currentPhoto = 7;
    } else if (currentPhoto > 7) {
      currentPhoto = 0;
    }
    
    var webpSource = webp[currentPhoto].srcset;
    var jpgSource = images[currentPhoto].src;
    
    if (document.body.clientWidth > 768) {
      webpSource = webp[currentPhoto].srcset.replace('-mobile', '');
      jpgSource = images[currentPhoto].src.replace('-mobile', '');
    }
    
    popup.classList.remove('popup--hide');
    popup.querySelector('.popup__webp').srcset = webpSource;
    popup.querySelector('.popup__jpg').src = jpgSource;
    overlay.classList.remove('popup__overlay--hide');
    document.body.style.overflow = 'hidden';
  };

  prev.addEventListener('click', function () {
    currentPhoto--;
    showPopup(currentPhoto);
  });
  
  next.addEventListener('click', function () {
    currentPhoto++;
    showPopup(currentPhoto);
  }); 
  
  overlay.addEventListener('click', function () {
    popup.classList.add('popup--hide');
    overlay.classList.add('popup__overlay--hide');
    document.body.style.overflow = 'auto';
  });
})();