(function () {
  var button = document.querySelector('.advantages__play');
  var video = document.createElement('iframe');
  var videoWrapper = document.createElement('div');
  var overlay = document.querySelector('.popup__overlay');
  
  videoWrapper.classList.add('advantages__media', 'advantages__media--hide');
  document.body.appendChild(videoWrapper);
  videoWrapper.appendChild(video);
  video.classList.add('advantages__video');
  video.setAttribute('allow', 'autoplay');
  video.setAttribute('allowfullscreen', '');
  
  button.addEventListener('click', function () {
    videoWrapper.classList.remove('advantages__media--hide');
    video.setAttribute('src', 'https://www.youtube.com/embed/akjTJCHz3pA?rel=0&showinfo=0&autoplay=1');
    overlay.classList.remove('popup__overlay--hide');
    document.body.style.overflow = 'hidden';
  });
  
  overlay.addEventListener('click', function () {
    videoWrapper.classList.add('advantages__media--hide');
    video.setAttribute('src', '');
    overlay.classList.add('popup__overlay--hide');
    document.body.style.overflow = 'auto';
  });
})();