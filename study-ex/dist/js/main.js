(function () {
  var openButton = document.querySelector('.nav__open');
  var nav = document.querySelector('.nav__list--mobile');
  var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  
  openButton.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--inactive')) {
      nav.classList.remove('nav__list--inactive');
      nav.classList.add('nav__list--show');
      openButton.classList.add('nav__open--close');
    } else {
      openButton.classList.remove('nav__open--close');
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--inactive');
    }
  });
  
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      openButton.classList.remove('nav__open--close');
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--inactive');
    });
  };
})();
(function () {
  var openButtons = document.querySelectorAll('.button--programs');
  var popups = document.querySelectorAll('.popup');
  var overlay = document.querySelector('.popup__overlay');
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
  
  
  // Попытка получить данные
  
  // function getRemoteData() {
  //   var xhr = new XMLHttpRequest();
  //   var url = 'https://img0.study.com.ua/datapopup/dataPopup';
  // 
  //   xhr.open('GET', url);
  //   xhr.send(null);
  // 
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       var data = JSON.parse(xhr.responseText);
  //       var pins = getPins(data);
  // 
  //       document.querySelector('.map__pins')
  //         .appendChild(pins);
  // 
  //       removeClass('.map', 'map--faded');
  // 
  //       housesData = data;
  // 
  //       searchPins();
  //     }
  // 
  //     return false;
  //   };
  // }
  
  // Временный массив с данными
  // var popupData = [
  //   {
  //     'title': 'Групові поїздки за кордон влітку 2019 року.<br>10 країн, 30 міст і 100 поїздок для школярів і студентів.',
  //     'img': 'img/programs-1.jpg',
  //     'counter': '1/9',
  //     'text': '<b>Групова поїздка за кордон</b> — літо з користю для майбутнього! Вперше влітку 2019: 10 країн, 30 міст і 100 поїздок для школярів і студентів у супроводі керівника групи від компанії STUDY.UA. Приходьте на виставку і обирайте ідеальний варіант літніх канікул за кордоном!',
  //   },
  //   {
  //     'title': 'Літні канікули для школярів в Україні.'
  //   }
  // ]
  
  // Отрисовка попапов
  // var popupTemplate = document.querySelector('.popup__template').content.querySelector('.popup');
  // 
  // for (var index = 0; index < popups.length; index++) {
  //   var popup = popupTemplate.cloneNode(true);
  //   popup.querySelector('.heading--popup').innerHTML = popupData[index].title;
  //   document.body.appendChild(popup);
  // };
})();
(function () {
  var buttonSaturday = document.querySelector('.table__button--saturday');
  var buttonWednesday = document.querySelector('.table__button--wednesday');
  
  var tableSaturday = document.querySelector('.table--saturday');
  var tableWednesday = document.querySelector('.table--wednesday');
  
  buttonSaturday.addEventListener('click', function () {
    buttonWednesday.classList.remove('table__button--active');
    buttonSaturday.classList.add('table__button--active');
    tableWednesday.classList.add('table--hide');
    tableSaturday.classList.remove('table--hide');
  });
  
  buttonWednesday.addEventListener('click', function () {
    buttonSaturday.classList.remove('table__button--active');
    buttonWednesday.classList.add('table__button--active');
    tableSaturday.classList.add('table--hide');
    tableWednesday.classList.remove('table--hide');
  });
})();