(function () {
  var list = document.querySelector('.edge__list');
  var prev = document.querySelector('.edge__toggle--prev');
  var next = document.querySelector('.edge__toggle--next');
  
  var counter = 0;
  var clientWidth = document.body.clientWidth;
  
  next.addEventListener('click', function () {
    counter++;
    swipe();
    // clone();
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
  
  // var zero = 0;
  // var www = 2250;
  // function clone () {
  //   // var prevElement = list.firstElementChild;\
  //   var prevElement = list.children[zero];
  //   console.log(prevElement);
  //   var cloneElement = prevElement.cloneNode(true);
  //   list.appendChild(cloneElement);
  //   zero++;
  //   testwww = www + 375;
  //   list.style.width = testwww + 'px';
  //   www = testwww;
  // };
})();