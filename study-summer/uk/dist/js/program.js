(function () {
  var button = document.querySelector('.intro__play');
  var column = document.querySelector('.intro__column');
  var video = document.querySelector('.intro__video');
  
  button.addEventListener('click', function () {
    this.style.display = 'none';
    column.style.width = '100%';
    video.src = 'https://www.youtube.com/embed/LpO92XC8050?&autoplay=1';
  });
})();