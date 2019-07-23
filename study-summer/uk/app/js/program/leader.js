(function () {
  var list = document.querySelector('.leader__list');
  var numberOfSlide = list.querySelectorAll('li');
  var prev = document.querySelector('.leader__button--prev');
  var next = document.querySelector('.leader__button--next');
  var counter = 0;
  
  next.addEventListener('click', function () {
    if (counter >= numberOfSlide.length - 2) {
      counter = numberOfSlide.length - 2;
    }
    counter++;
    list.style.left = '-' + counter + '00%';
  });
  
  prev.addEventListener('click', function () {
    counter--;
    if (counter <= 0) {
      counter = 0;
    }
    list.style.left = '-' + counter + '00%';
  });
})();