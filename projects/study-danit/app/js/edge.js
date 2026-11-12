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
  
  
  window.addEventListener('scroll', function() {
    var block = document.querySelector('.edge');
    var blockOffset = block.offsetTop;
    var topOffset = window.pageYOffset;
    
    if (topOffset > blockOffset - 300) {
      showButtons();
    }
  });
  
  function showButtons() {
    var counter = 0;
    
    var timer = setInterval(function () {
      buttons[counter].classList.remove('edge__button--hide');
      counter++;
    }, 100);
    
    setTimeout(function () {
      clearInterval(timer);
    }, 600);
    
    for (var j = 0; j < contents.length; j++) {
      contents[j].classList.remove('edge__content--hide');
    }
  }
})();