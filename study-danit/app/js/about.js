(function () {
  var buttons = document.querySelectorAll('.about__switch');
  var contents = document.querySelectorAll('.about__content');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
      console.log(currentButton);
    });
  }
  
  function showContent() {
    if (currentButton == 1) {
      contents[1].classList.remove('about__content--show');
      contents[0].classList.add('about__content--show');
    } else {
      contents[0].classList.remove('about__content--show');
      contents[1].classList.add('about__content--show');
    }
  }
})();