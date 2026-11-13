(function () {
  var item = document.querySelectorAll('.edge__item');
  
  var widthDevice = document.body.clientWidth;
  var mobile;
  
  if (widthDevice <= 768) {
    mobile = 0;
  } else if (widthDevice >= 769) {
    mobile = 1;
  }
  
  window.addEventListener('scroll', function() {
    var block = document.querySelector('.edge');
    var blockOffset = block.offsetTop;
    var topOffset = window.pageYOffset;
    
    switch (mobile) {
      case 0:
        if (topOffset > blockOffset - 350) {
          showItem();
        }
        break;
      case 1:
        if (topOffset > blockOffset - 300) {
          showItem();
        }
        break;
      default:
        showItem();
    }
  });
  
  function showItem() {
    var counter = 0;
    
    var timer = setInterval(function () {
      item[counter].classList.remove('edge__item--hide');
      counter++;
    }, 150);
    
    setTimeout(function () {
      clearInterval(timer);
    }, 900);
  }
})();