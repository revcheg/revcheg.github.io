(function () {
  document.addEventListener('keyup', function (evt) {
    var code = evt.keyCode;
    
    if (code == 40) {
      scrollCounter++;
    } else if (code == 38) {
      scrollCounter--;
    }
    
    scrolling();
  });
})();