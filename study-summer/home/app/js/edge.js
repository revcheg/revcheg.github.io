(function () {
  var list = document.querySelector('.edge__list');
  var prev = document.querySelector('.edge__toggle--prev');
  var next = document.querySelector('.edge__toggle--next');
  
  var counter = 0;
  var possibleSwipe = 0;
  var clientWidth = document.body.clientWidth;
  
  if (clientWidth > 325) {
  
  }
  
  next.addEventListener('click', function () {
    counter++;
    swipe();
  });
  
  prev.addEventListener('click', function () {
    counter--;
    swipe();
  });
  
  function swipe () {
    var position = 0;
    
    switch (counter) {
      case -1:
        position = -775;
        counter = 2;
        break;
      case 1:
        position = -388;
        break;
      case 2:
        position = -775;
        break;
      default:
        position = 0;
        counter = 0;
    }
    
    list.style.left = position + 'px';
  };
})();