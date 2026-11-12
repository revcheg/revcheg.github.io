(function () {
  var button = document.querySelector('.review__play');
  var video = document.querySelector('.review__iframe');
  
  button.addEventListener('click', function () {
    video.src = 'https://www.youtube.com/embed/4aZyLakyM-4?autoplay=1;';
    this.classList.add('review__play--hide');
  });
})();