(function () {
  let slider = document.querySelector('.leader__list');
  let prev = document.querySelector('.leader__button--prev');
  let next = document.querySelector('.leader__button--next');
  let counter = 0;
  
  prev.addEventListener('click', prevSlide);
  function prevSlide() {
    counter--;
    if (counter < 0) {
      counter = 3;
    }
    moveSlider();
  };
  
  next.addEventListener('click', nextSlide);
  function nextSlide() {
    counter++;
    if (counter > 3) {
      counter = 0;
    }
    moveSlider();
  };
  
  function moveSlider() {
    slider.style.left = '-' + counter + '00%';
  };
})();