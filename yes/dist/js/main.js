(function () {
  var buttonsPopup = document.querySelectorAll('.button__popup');
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');
  var close = document.querySelector('.popup__close');
  
  for (var i = 0; i < buttonsPopup.length; i++) {
    buttonsPopup[i].addEventListener('click', function () {
      if (popup.classList.contains('popup--inactive')) {
        popup.classList.remove('popup--inactive');
        popup.classList.add('popup--active');
        
        overlay.classList.remove('overlay--inactive');
        overlay.classList.add('overlay--active');
      } else {
        popup.classList.remove('popup--active');
        popup.classList.add('popup--inactive');
        
        overlay.classList.remove('overlay--active');
        overlay.classList.add('overlay--inactive');
      }
    })
  };
  
  close.addEventListener('click', function () {
    popup.classList.remove('popup--active');
    popup.classList.add('popup--inactive');
    
    overlay.classList.remove('overlay--active');
    overlay.classList.add('overlay--inactive');
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.remove('popup--active');
    popup.classList.add('popup--inactive');
    
    overlay.classList.remove('overlay--active');
    overlay.classList.add('overlay--inactive');
  });
  
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      popup.classList.remove('popup--active');
      popup.classList.add('popup--inactive');
      
      overlay.classList.remove('overlay--active');
      overlay.classList.add('overlay--inactive');
    }
  });
})();