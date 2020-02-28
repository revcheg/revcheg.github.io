(function () {
  var video = document.querySelector('.about__iframe');
  var button = document.querySelector('.about__open');
  
  button.addEventListener('click', function () {
    button.style.display = 'none';
    video.src = 'https://www.youtube.com/embed/d4FKC4Bg2hc?&autoplay=1';
  });
})();