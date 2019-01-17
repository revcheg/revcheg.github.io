(function () {
  var openButtons = document.querySelectorAll('.button--programs');
  // var popups = document.querySelectorAll('.popup');
  var overlay = document.querySelector('.popup__overlay');
  // var closeButtons = document.querySelectorAll('.popup__close');
  // var prevButtons = document.querySelectorAll('.popup__button--prev');
  // var nextButtons = document.querySelectorAll('.popup__button--next');
  // var registerButtons = document.querySelectorAll('.button--register');
  var popupTemplate = document.querySelector('.popup__template').content.querySelector('.popup');
  
  for (var g = 0; g < 9; g++) {
    var popup = popupTemplate.cloneNode(true);
    popup.querySelector('.heading--popup').innerHTML = popupData[g].title;
    popup.querySelector('.popup__webp').srcset = popupData[g].imgWebp;
    popup.querySelector('.popup__img').src = popupData[g].img;
    popup.querySelector('.popup__counter').innerHTML = popupData[g].counter;
    popup.querySelector('.popup__text').innerHTML = popupData[g].text;
    popup.querySelector('.popup__list').innerHTML = popupData[g].list;
    popup.querySelector('.popup__attention').innerHTML = popupData[g].attention;
    document.body.appendChild(popup);
  };
  
  var popups = document.querySelectorAll('.popup');
  var closeButtons = document.querySelectorAll('.popup__close');
  var prevButtons = document.querySelectorAll('.popup__button--prev');
  var nextButtons = document.querySelectorAll('.popup__button--next');
  var registerButtons = document.querySelectorAll('.button--register');
  
  // var currentPopup;
  
  var currentPopup;
  var arrayOpenButtons = [];
  
  // for (var i = 0; i < openButtons.length; i++) {
  //   openButtons[i].addEventListener('click', function () {
  //     var buttonId = this.id;
  //     currentPopup = buttonId;
  //     showPopup(currentPopup);
  //   });
  // };
  
  // Рабочий вариант
  for (var i = 0; i < openButtons.length; i++){
    arrayOpenButtons.push(openButtons[i]);
    openButtons[i].addEventListener('click', function(e){
       currentPopup = arrayOpenButtons.indexOf(e.target);
       showPopup(currentPopup);
    });
  };
  
  var showPopup = function (currentPopup) {
    overlay.classList.remove('popup__overlay--hide');
    popups[currentPopup].classList.remove('popup--hide');
  };
  
  // Старый вариант
  // var showPopup = function (number) {
  //   overlay.classList.remove('popup__overlay--hide');
  //   if (currentPopup === 0) {
  //     currentPopup = 9;
  //     showPopup(currentPopup);
  //   };
  //   if (currentPopup === 10) {
  //     currentPopup = 1;
  //     showPopup(currentPopup);
  //   };
  //   popups[number - 1].classList.remove('popup--hide');
  // };
  
  // for (var p = 0; p < prevButtons.length; p++) {
  //   prevButtons[p].addEventListener('click', function () {
  //     popups[currentPopup - 1].classList.add('popup--hide');
  //     currentPopup--;
  //     showPopup(currentPopup);
  //     console.log(currentPopup);
  //   });
  // };
  
  // Рабочий вариант
  for (var p = 0; p < prevButtons.length; p++) {
    prevButtons[p].addEventListener('click', function () {
      popups[currentPopup].classList.add('popup--hide');
      currentPopup--;
      if (currentPopup < 0) {
        currentPopup = 8;
      };
      showPopup(currentPopup);
    });
  };
  
  // Старый вариант
  // for (var k = 0; k < nextButtons.length; k++) {
  //   nextButtons[k].addEventListener('click', function () {
  //     popups[currentPopup - 1].classList.add('popup--hide');
  //     currentPopup++;
  //     showPopup(currentPopup);
  //   });
  // };
  
  // Рабочий вариант
  for (var k = 0; k < nextButtons.length; k++) {
    nextButtons[k].addEventListener('click', function () {
      popups[currentPopup].classList.add('popup--hide');
      currentPopup++;
      if (currentPopup === 9) {
        currentPopup = 0;
      };
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
  
  // Отрисовка попапов
  // var popupTemplate = document.querySelector('.popup__template').content.querySelector('.popup');
  // 
  // for (var index = 0; index < popups.length; index++) {
  //   var popup = popupTemplate.cloneNode(true);
  //   popup.querySelector('.heading--popup').innerHTML = popupData[index].title;
  //   document.body.appendChild(popup);
  // };
  
  
})();