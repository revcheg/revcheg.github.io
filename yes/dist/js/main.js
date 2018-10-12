(function () {
  var buttonsPopup = document.querySelectorAll('.button__popup');
  var buttonsMap = document.querySelectorAll('.nav__map');
  var buttonsClose = document.querySelectorAll('.popup__close');
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');
  var map = document.querySelector('.popup--map');
  
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
  
  for (var j = 0; j < buttonsMap.length; j++) {
    buttonsMap[j].addEventListener('click', function (event) {
      event.preventDefault();
      if (map.classList.contains('popup--inactive')) {
        map.classList.remove('popup--inactive');
        map.classList.add('popup--active');
        
        overlay.classList.remove('overlay--inactive');
        overlay.classList.add('overlay--active');
      } else {
        map.classList.remove('popup--active');
        map.classList.add('popup--inactive');
        
        overlay.classList.remove('overlay--active');
        overlay.classList.add('overlay--inactive');
      }
    })
  };
  
  for (var m = 0; m < buttonsClose.length; m++) {
    buttonsClose[m].addEventListener('click', function () {
      popup.classList.remove('popup--active');
      popup.classList.add('popup--inactive');
      
      map.classList.remove('popup--active');
      map.classList.add('popup--inactive');
      
      overlay.classList.remove('overlay--active');
      overlay.classList.add('overlay--inactive');
    });
  };
  
  overlay.addEventListener('click', function () {
    popup.classList.remove('popup--active');
    popup.classList.add('popup--inactive');
    
    map.classList.remove('popup--active');
    map.classList.add('popup--inactive');
    
    overlay.classList.remove('overlay--active');
    overlay.classList.add('overlay--inactive');
  });
  
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      popup.classList.remove('popup--active');
      popup.classList.add('popup--inactive');
      
      map.classList.remove('popup--active');
      map.classList.add('popup--inactive');
      
      overlay.classList.remove('overlay--active');
      overlay.classList.add('overlay--inactive');
    }
  });
})();