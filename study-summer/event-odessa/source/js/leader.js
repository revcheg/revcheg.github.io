(function () {
  let slider = document.querySelector('.leader__list');
  let prev = document.querySelector('.leader__button--prev');
  let next = document.querySelector('.leader__button--next');
  let counter = 0;
  let possibleSlide = 0;
  
  let clientWidth = document.body.clientWidth;
  if (clientWidth <= 767) {
    possibleSlide = 7;
  } else if (clientWidth >= 767 && clientWidth < 1210) {
    possibleSlide = 3;
  } else if (clientWidth >= 1210) {
    possibleSlide = 1;
  }
  
  prev.addEventListener('click', prevSlide);
  function prevSlide() {
    counter--;
    if (counter < 0) {
      counter = possibleSlide;
    }
    moveSlider();
  };
  
  next.addEventListener('click', nextSlide);
  function nextSlide() {
    counter++;
    if (counter > possibleSlide) {
      counter = 0;
    }
    moveSlider();
  };
  
  function moveSlider() {
    slider.style.left = '-' + counter + '00%';
  };
})();