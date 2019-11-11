(function () {
  var items = document.querySelectorAll('.leader__item');
  var prev = document.querySelector('.leader__button--prev');
  var next = document.querySelector('.leader__button--next');
  var counter = 0;

  next.addEventListener('click', function () {
    items[counter].classList.remove('leader__item--active');
    counter++;
    if (counter > 1) {
      counter = 0;
    }
    items[counter].classList.add('leader__item--active');
  });

  prev.addEventListener('click', function () {
    items[counter].classList.remove('leader__item--active');
    counter--;
    if (counter < 0) {
      counter = 1;
    }
    items[counter].classList.add('leader__item--active');
  });
  
  var video = document.querySelector('.leader__video');
  var play = document.querySelector('.leader__play');
  
  play.addEventListener('click', function () {
    this.classList.add('leader__play--hide');
    video.src = 'https://www.youtube.com/embed/Npl8YrYihXw?&autoplay=1'
  });
})();