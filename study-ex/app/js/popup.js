(function () {
  var openButtons = document.querySelectorAll('.button--programs');
  var popups = document.querySelectorAll('.popup');
  var overlay = document.querySelector('.popup__overlay');
  var closeButtons = document.querySelectorAll('.popup__close');
  var prevButtons = document.querySelectorAll('.popup__button--prev');
  var nextButtons = document.querySelectorAll('.popup__button--next');
  var registerButtons = document.querySelectorAll('.button--register');
  
  // for (var i = 0; i < openButtons.length; i++) {
  //   openButtons[i].addEventListener('click', function () {
  //     overlay.classList.remove('popup__overlay--hide');
  //     var openId = this.id;
  //     switch (openId) {
  //       default:
  //         popups[openId - 1].classList.remove('popup--hide');
  //         break;
  //     };
  //   });
  // };
  
  var currentPopup;
  
  for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', function () {
      var buttonId = this.id;
      currentPopup = buttonId;
      showPopup(currentPopup);
    });
  };
  
  var showPopup = function (number) {
    overlay.classList.remove('popup__overlay--hide');
    if (currentPopup === 0) {
      currentPopup = 9;
      showPopup(currentPopup);
    };
    if (currentPopup === 10) {
      currentPopup = 1;
      showPopup(currentPopup);
    };
    popups[number - 1].classList.remove('popup--hide');
  };
  
  for (var p = 0; p < prevButtons.length; p++) {
    prevButtons[p].addEventListener('click', function () {
      popups[currentPopup - 1].classList.add('popup--hide');
      currentPopup--;
      showPopup(currentPopup);
      console.log(currentPopup);
    });
  };
  
  for (var k = 0; k < nextButtons.length; k++) {
    nextButtons[k].addEventListener('click', function () {
      popups[currentPopup - 1].classList.add('popup--hide');
      currentPopup++;
      showPopup(currentPopup);
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
  
  for (var r = 0; r < registerButtons.length; r++) {
    registerButtons[r].addEventListener('click', function () {
      for (var t = 0; t < popups.length; t++) {
        popups[t].classList.add('popup--hide');
        overlay.classList.add('popup__overlay--hide');
      };
    });
  };
})();