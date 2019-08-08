(function () {
  var video = document.querySelector('.intro__video');
  var play = document.querySelector('.intro__play');
  
  play.addEventListener('click', function () {
    this.style.opacity = '0';
    video.style.opacity = '1';
    video.play();
    // video.classList.remove('intro__video--hide');
  });
})();