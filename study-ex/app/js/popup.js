(function () {
  var openButtons = document.querySelectorAll('.button--programs');
  var popups = document.querySelectorAll('.popup');
  var overlay = document.querySelector('.popup__overlay');
  var closeButtons = document.querySelectorAll('.popup__close');
  
  for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', function () {
      overlay.classList.remove('popup__overlay--hide');
      var openId = this.id;
      switch (openId) {
        default:
          popups[openId - 1].classList.remove('popup--hide');
          break;
      };
    });
  };
  
  for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener('click', function () {
      for (var n = 0; n < popups.length; n++) {
        popups[n].classList.add('popup--hide');
      };
      overlay.classList.add('popup__overlay--hide');
    });
  };
  
  overlay.addEventListener('click', function () {
    for (var m = 0; m < popups.length; m++) {
      popups[m].classList.add('popup--hide');
    };
    overlay.classList.add('popup__overlay--hide');
  });
})();