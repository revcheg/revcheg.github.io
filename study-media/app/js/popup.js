(function () {
  var openPopups = document.querySelectorAll('.button--popup');
  var popups = document.querySelectorAll('.popup');
  var closePopups = document.querySelectorAll('.popup__close');
  var overlay = document.querySelector('.popup__overlay');
  var openForms = document.querySelectorAll('.popup__form');
  var nextPopups = document.querySelectorAll('.popup__next');
  var prevPopups = document.querySelectorAll('.popup__prev');
  
  for (var i = 0; i < openForms.length; i++) {
    openForms[i].addEventListener('click', function () {
      popups[0].classList.remove('popup--show');
      popups[1].classList.remove('popup--show');
      popups[2].classList.remove('popup--show');
      popups[3].classList.remove('popup--show');
      popups[4].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  };
  
  for (var j = 0; j < closePopups.length; j++) {
    closePopups[j].addEventListener('click', function () {
      popups[0].classList.remove('popup--show');
      popups[1].classList.remove('popup--show');
      popups[2].classList.remove('popup--show');
      popups[3].classList.remove('popup--show');
      popups[4].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  };
  
  openPopups[0].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[0].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    // closePopups[0].addEventListener('click', function () {
    //   popups[0].classList.remove('popup--show');
    //   overlay.classList.remove('popup__overlay--show');
    // });
  });

  openPopups[1].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[1].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    // closePopups[1].addEventListener('click', function () {
    //   popups[1].classList.remove('popup--show');
    //   overlay.classList.remove('popup__overlay--show');
    // });
  });

  openPopups[2].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[2].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    // closePopups[2].addEventListener('click', function () {
    //   popups[2].classList.remove('popup--show');
    //   overlay.classList.remove('popup__overlay--show');
    // });
  });

  openPopups[3].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[3].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    // closePopups[3].addEventListener('click', function () {
    //   popups[3].classList.remove('popup--show');
    //   overlay.classList.remove('popup__overlay--show');
    // });
  });

  openPopups[4].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[4].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    // closePopups[4].addEventListener('click', function () {
    //   popups[4].classList.remove('popup--show');
    //   overlay.classList.remove('popup__overlay--show');
    // });
  });
  
  nextPopups[0].addEventListener('click', function () {
    popups[0].classList.remove('popup--show');
    popups[1].classList.add('popup--show');
  });
  
  nextPopups[1].addEventListener('click', function () {
    popups[1].classList.remove('popup--show');
    popups[2].classList.add('popup--show');
  });
  
  nextPopups[2].addEventListener('click', function () {
    popups[2].classList.remove('popup--show');
    popups[3].classList.add('popup--show');
  });
  
  nextPopups[3].addEventListener('click', function () {
    popups[3].classList.remove('popup--show');
    popups[4].classList.add('popup--show');
  });
  
  prevPopups[1].addEventListener('click', function () {
    popups[1].classList.remove('popup--show');
    popups[0].classList.add('popup--show');
  });
  
  prevPopups[2].addEventListener('click', function () {
    popups[2].classList.remove('popup--show');
    popups[1].classList.add('popup--show');
  });
  
  prevPopups[3].addEventListener('click', function () {
    popups[3].classList.remove('popup--show');
    popups[2].classList.add('popup--show');
  });
  
  prevPopups[4].addEventListener('click', function () {
    popups[4].classList.remove('popup--show');
    popups[3].classList.add('popup--show');
  });
})();