(function () {
  var list = document.querySelector('.leaders__list');
  var item = document.querySelectorAll('.leaders__item');
  var prev = document.querySelector('.leaders__button--prev');
  var next = document.querySelector('.leaders__button--next');
  var dots = document.querySelectorAll('.leaders__dots');
  
  var currentSlide = 0;
  var currentPosition = '0%';
  var clientWidth = document.body.clientWidth;
  
  var showSlide = function () {
    if (clientWidth > 1210) {
      switch (currentSlide) {
        case 0:
          currentPosition = '0%';
          break;
        case 1:
          currentPosition = '-100%';
          break;
        case 2:
          currentPosition = '-200%';
          break;
        default:
          if (currentSlide > 2) {
            currentPosition = '0%';
            currentSlide = 0;
          } else if (currentSlide < 0) {
            currentPosition = '-200%';
            currentSlide = 2;
          }
      }
    } else if (clientWidth > 768) {
      switch (currentSlide) {
        case 0:
          currentPosition = '0%';
          break;
        case 1:
          currentPosition = '-100%';
          break;
        case 2:
          currentPosition = '-200%';
          break;
        case 3:
          currentPosition = '-300%';
          break;
        case 4:
          currentPosition = '-400%';
          break;
        case 5:
          currentPosition = '-500%';
          break;
        default:
          if (currentSlide > 5) {
            currentPosition = '0%';
            currentSlide = 0;
          } else if (currentSlide < 0) {
            currentPosition = '-500%';
            currentSlide = 5;
          }
      }
    } else if (clientWidth < 768) {
      switch (currentSlide) {
        case 0:
          currentPosition = '0%';
          break;
        case 1:
          currentPosition = '-100%';
          break;
        case 2:
          currentPosition = '-200%';
          break;
        case 3:
          currentPosition = '-300%';
          break;
        case 4:
          currentPosition = '-400%';
          break;
        case 5:
          currentPosition = '-500%';
          break;
        case 6:
          currentPosition = '-600%';
          break;
        case 7:
          currentPosition = '-700%';
          break;
        case 8:
          currentPosition = '-800%';
          break;
        case 9:
          currentPosition = '-900%';
          break;
        case 10:
          currentPosition = '-1000%';
          break;
        case 11:
          currentPosition = '-1100%';
          break;
        default:
          if (currentSlide > 11) {
            currentPosition = '0%';
            currentSlide = 0;
          } else if (currentSlide < 0) {
            currentPosition = '-1100%';
            currentSlide = 11;
          }
      }
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
  
  // var dotsCounter;
  // if (clientWidth > 1210) {
  //    dotsCounter = item / 4;
  //    renderDots();
  // }
  // 
  // var renderDots = function () {
  //   var dotsClone = dots.cloneNode(true);
  //   for (var i = 0; i < dotsCounter; i++) {
  // 
  //   }
  // };
  // 
  // var dotsArray = [];
  // for (var i = 0; i < dots.length; i++){
  //   dotsArray.push(dots[i]);
  //   dots[i].addEventListener('click', function(e){
  //      // dots[currentSlide].classList.remove('slider__dot--active');
  //      currentSlide = dotsArray.indexOf(e.target);
  //      showSlide(currentSlide);
  //   });
  // };
  
  for (var j = 0; j < item.length; j++) {
    item[j].addEventListener('touchstart', function (evt) {
      pozX = evt.changedTouches[0].pageX;
      
      if (pozX > clientWidth/2) {
        currentSlide++;
        showSlide(currentSlide);
      } else {
        currentSlide--;
        showSlide(currentSlide);
      }
    })
  }
})();