(function () {
  var buttons = document.querySelectorAll('.danit__button');
  var descs = document.querySelectorAll('.danit__desc');
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (evt) {  
      var currentButton = evt.target;
      var desc = currentButton.nextElementSibling;
      
      if (currentButton.classList.contains('danit__button--hide')) {
        for (var j = 0; j < buttons.length; j++) {
          buttons[j].classList.add('danit__button--hide');
          descs[j].classList.add('danit__desc--hide');
        }
        
        currentButton.classList.remove('danit__button--hide');
        desc.classList.remove('danit__desc--hide');
      } else {
        currentButton.classList.add('danit__button--hide');
        desc.classList.add('danit__desc--hide');
      }
    });
  }
})();