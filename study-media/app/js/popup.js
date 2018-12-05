(function () {
  var openPopups = document.querySelectorAll('.button--popup');
  var popups = document.querySelectorAll('.popup');
  var closePopups = document.querySelectorAll('.popup__close');
  var overlay = document.querySelector('.popup__overlay');

  openPopups[0].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[0].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[0].addEventListener('click', function () {
      popups[0].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[1].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[1].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[1].addEventListener('click', function () {
      popups[1].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[2].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[2].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[2].addEventListener('click', function () {
      popups[2].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[3].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[3].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[3].addEventListener('click', function () {
      popups[3].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });

  openPopups[4].addEventListener('click', function (evt) {
    evt.preventDefault();
    popups[4].classList.add('popup--show');
    overlay.classList.add('popup__overlay--show');
    closePopups[4].addEventListener('click', function () {
      popups[4].classList.remove('popup--show');
      overlay.classList.remove('popup__overlay--show');
    });
  });
})();