(function () {
  var buttons = document.querySelectorAll('.study__button');
  var slider = document.querySelector('.study__subslider');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('study__button--active');
    }
    buttons[currentButton].classList.add('study__button--active');
    
    slider.style.left = '-' + currentButton + '00%';
  }
})();
