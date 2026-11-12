(function () {
  var buttons = document.querySelectorAll('.stage__open');
  var blocks = document.querySelectorAll('.stage__article');
  var close = document.querySelector('.stage__close');
  var overlay = document.querySelector('.stage__overlay');
  var wrapper = document.querySelector('.stage__wrapper');
  var prev = document.querySelector('.stage__button--prev');
  var next = document.querySelector('.stage__button--next');
  var clearArray = [];
  var currentButton = 0;
  
  for (var i = 0; i < buttons.length; i++){
    clearArray.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArray.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    if (currentButton < 0) {
      currentButton = 0;
    } else if (currentButton > 4) {
      currentButton = 4;
    }
    
    overlay.classList.add('stage__overlay--show');
    wrapper.classList.add('stage__wrapper--show');
    
    for (var j = 0; j < blocks.length; j++) {
      blocks[j].classList.remove('stage__article--show');
    }
    
    blocks[currentButton].classList.add('stage__article--show');
  }
  
  prev.addEventListener('click', function () {
    currentButton--;
    showContent();  
  });
  
  next.addEventListener('click', function () {
    currentButton++;
    showContent();  
  });
  
  close.addEventListener('click', function () {
    overlay.classList.remove('stage__overlay--show');
    wrapper.classList.remove('stage__wrapper--show');
  });
  
  overlay.addEventListener('click', function () {
    overlay.classList.remove('stage__overlay--show');
    wrapper.classList.remove('stage__wrapper--show');
  });
})();