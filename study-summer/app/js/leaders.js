(function () {
  var list = document.querySelector('.leaders__list');
  var prev = document.querySelector('.leaders__button--prev');
  var next = document.querySelector('.leaders__button--next');
  var dots = document.querySelectorAll('.leaders__dots');
  
  var currentSlide = 0;
  var currentPosition = '0%';
  
  var showSlide = function () {
    // if (currentSlide > 1 && document.body.clientWidth > 1210) {
    //   currentSlide = 0;
    // } else if (currentSlide < 0 && document.body.clientWidth > 1210) {
    //   currentSlide = 1;
    // } else if (currentSlide > 0 && document.body.clientWidth > 1210)
    
    switch (currentSlide) {
      case 0:
        currentPosition = '0%';
        break;
      case 1:
        currentPosition = '-100%';
        break;
      // case 2:
      //   currentPosition = '-200%';
      //   break;
      default:
        currentPosition = '0%';
        currentSlide = 0;
    }
    
    list.style.left = currentPosition;
  };
  
  prev.addEventListener('click', function () {
    currentSlide--;
    showSlide(currentSlide);
  });
  
  next.addEventListener('click', function () {
    currentSlide++;
    showSlide(currentSlide);
  });
})();