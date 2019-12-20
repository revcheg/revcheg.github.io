(function () {
  var video = document.querySelector('.about__iframe');
  var button = document.querySelector('.about__open');
  
  button.addEventListener('click', function () {
    button.style.display = 'none';
    video.src = 'https://www.youtube.com/embed/91JRNaliIQc?&autoplay=1';
  });
})();