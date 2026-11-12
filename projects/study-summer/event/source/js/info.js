(function () {
  let iframe = document.querySelector('.info__iframe');
  let playButton = document.querySelector('.info__play');
  
  playButton.addEventListener('click', function () {
    iframe.src = 'https://www.youtube.com/embed/CWJEGNaUFic?&autoplay=1';
    this.classList.add('info__play--hide');
  });
})();