(function () {
  var title = document.querySelector('.title');
  var progress = document.querySelector('.title__progress');
  var current = document.querySelector('.title__counter--current');
  var currentPhoto = 1;
  
  setInterval(function() {
    currentPhoto++;
    
    if (currentPhoto > 4) {
      currentPhoto = 1;
    }
    
    title.style.backgroundImage = 'url(img/title-' + currentPhoto + '-bg.jpg)';
    
    current.innerHTML = '0' + currentPhoto;
  }, 5000);
})();