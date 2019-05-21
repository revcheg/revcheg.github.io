(function () {
  var pozYStart;
  
  document.addEventListener('touchstart', function (evt) {
    pozYStart = evt.changedTouches[0].pageY;
  });
  
  document.addEventListener('touchend', function (evt) {
    pozYEnd = evt.changedTouches[0].pageY;
    
    if (pozYStart > pozYEnd) {
      scrollCounter++;
      scrolling();
    } else if (pozYStart < pozYEnd) {
      scrollCounter--;
      scrolling();
    }
  });
})();