(function () {
  var videoOpen = document.querySelector('.video__open');
  var videoContent = document.querySelector('.video__content');
  var videoSource = document.querySelector('.video__source');
  var videoClose = document.querySelector('.video__close');
  var overlay = document.querySelector('.popup__overlay');
  
  videoSource.volume = 0.2;
  
  videoOpen.addEventListener('click', function () {
    videoContent.classList.add('video__content--show');
    overlay.classList.add('popup__overlay--show');
  });
  
  videoClose.addEventListener('click', function () {
    videoSource.pause();
    // videoSource.currentTime = 0;
    videoContent.classList.remove('video__content--show');
    overlay.classList.remove('popup__overlay--show');
  });
  
  videoSource.onended = function () {
    videoSource.currentTime = 0;
    videoContent.classList.remove('video__content--show');
    overlay.classList.remove('popup__overlay--show');
  };
})();