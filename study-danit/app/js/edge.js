(function () {
  var buttons = document.querySelectorAll('.edge__button');
  var contents = document.querySelectorAll('.edge__content');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    for (var j = 0; j < contents.length; j++) {
      buttons[j].classList.remove('edge__button--active');
      contents[j].classList.remove('edge__content--show');
    }
    
    buttons[currentButton].classList.add('edge__button--active');
    contents[currentButton].classList.add('edge__content--show');
  }
})();