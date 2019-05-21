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
    console.log(counter);
    
    if (clientWidth < 375 && counter > 5) {
      counter = 0;
    } else if (clientWidth < 375 && counter < 0) {
      counter = 5;
    } 
    
    if (clientWidth > 375 && counter > 2) {
      counter = 0;
    } else if (clientWidth > 375 && counter < 0) {
      counter = 2;
    } 
    
    if (clientWidth > 910 && counter > 1) {
      counter = 0;
    } else if (clientWidth > 910 && counter < 0) {
      counter = 2;
    }
    
    list.style.left = '-' + counter * 100 + '%';
  };
})();