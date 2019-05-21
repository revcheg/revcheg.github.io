(function () {
  var pozYStart;
  var pozYEnd;
  
  document.addEventListener('touchstart', function (evt) {
    pozYStart = evt.changedTouches[0].pageY;
  });
  
  document.addEventListener('touchend', function (evt) {
    pozYEnd = evt.changedTouches[0].pageY;
    console.log(pozYStart)
    if (pozYStart > pozYEnd + 50) {
      scrollCounter++;
      scrolling();
    } else if (pozYStart < pozYEnd - 50) {
      scrollCounter--;
      scrolling();
    }
  });
})();