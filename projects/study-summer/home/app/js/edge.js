(function () {
  var list = document.querySelector('.edge__list');
  var prev = document.querySelector('.edge__toggle--prev');
  var next = document.querySelector('.edge__toggle--next');
  
  var counter = 0;
  var clientWidth = document.body.clientWidth;
  
  next.addEventListener('click', function () {
    counter++;
    swipe();
  });
  
  prev.addEventListener('click', function () {
    counter--;
    swipe();
  });
  
  function swipe () {
    if (clientWidth < 600 && counter > 5) {
      counter = 0;
    } else if (clientWidth < 600 && counter < 0) {
      counter = 5;
    } 
    
    if (clientWidth > 600 && counter > 1) {
      counter = 0;
    } else if (clientWidth > 600 && counter < 0) {
      counter = 1;
    } 
    
    list.style.left = '-' + counter * 100 + '%';
  };
})();