(function () {
  var video = document.querySelector('.about__iframe');
  var button = document.querySelector('.about__play');
   
  button.addEventListener('click', function () {
    button.classList.add('about__play--hide');
    video.src = 'https://www.youtube.com/embed/eOnwaoM_Dlc?&autoplay=1';
  });
})();