(function () {
  var button = document.querySelector('.intro__play');
  var column = document.querySelector('.intro__column');
  var ratio = document.querySelector('.intro__ratio');
  var video = document.querySelector('.intro__video');
  
  var videoName = video.className.replace('intro__video  intro__video--', '');
  
  switch (videoName) {
    case 'canada':
      videoSource = 'https://www.youtube.com/embed/eOnwaoM_Dlc';
      break;
    case 'usa':
      videoSource = 'https://www.youtube.com/embed/d4FKC4Bg2hc';
      break;
    case 'uk':
      videoSource = 'https://www.youtube.com/embed/LpO92XC8050';
      break;
  }
  
  ratio.style.backgroundImage = 'url(../img/intro-bg-' + videoName + '.jpg)';
  
  button.addEventListener('click', function () {
    this.style.display = 'none';
    column.style.width = '100%';
    video.src = videoSource + '?&autoplay=1';
  });
})();