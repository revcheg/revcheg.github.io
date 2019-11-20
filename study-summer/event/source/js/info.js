(function () {
  let iframe = document.querySelector('.info__iframe');
  let playButton = document.querySelector('.info__play');
  
  playButton.addEventListener('click', function () {
    // frame.src = '';
    this.classList.add('info__play--hide');
  });
})();