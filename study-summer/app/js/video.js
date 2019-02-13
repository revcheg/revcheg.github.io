(function () {
  var button = document.querySelector('.advantages__play');
  var video = document.createElement('iframe');
  var videoWrapper = document.createElement('div');
  var overlay = document.querySelector('.popup__overlay');
  
  videoWrapper.classList.add('advantages__media', 'advantages__media--hide');
  document.body.appendChild(videoWrapper);
  videoWrapper.appendChild(video);
  video.classList.add('advantages__video');
  
  button.addEventListener('click', function () {
    videoWrapper.classList.remove('advantages__media--hide');
    video.src = 'https://www.youtube.com/embed/akjTJCHz3pA?autoplay=1';
    overlay.classList.remove('popup__overlay--hide');
  });
  
  overlay.addEventListener('click', function () {
    videoWrapper.classList.add('advantages__media--hide');
    video.src = '';
    overlay.classList.add('popup__overlay--hide');
  });
})();