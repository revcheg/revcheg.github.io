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