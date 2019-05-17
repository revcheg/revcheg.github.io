(function () {
  var buttons = document.querySelectorAll('.video__play');
  var wrapper = document.querySelector('.video');
  var iframe = document.querySelector('.video__iframe');
  
  var indexButton = 0;
  var clearButtonsArray = [];
  for (var i = 0; i < buttons.length; i++){
    clearButtonsArray.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      indexButton = clearButtonsArray.indexOf(evt.currentTarget);
      showVideo();
    });
  }
  
  var url = 'https://www.youtube.com/embed/';
  var play = '?&autoplay=1';
  var source = '';
  function showVideo () {
    wrapper.classList.remove('video--hide');
    switch (indexButton) {
      case 0:
        source = 'eOnwaoM_Dlc';
        break;
      case 1:
        source = 'd4FKC4Bg2hc';
        break;
      case 2:
        source = 'eOnwaoM_Dlc';
        break;
      case 3:
        source = 'eOnwaoM_Dlc';
        break;
      case 4:
        source = '91JRNaliIQc';
        break;
      case 5:
        source = '91JRNaliIQc';
        break;
      default:
        source = '';
    }
    iframe.src = url + source + play;
  };
  
  wrapper.addEventListener('click', function () {
    wrapper.classList.add('video--hide');
    iframe.src = '';
  });
})();