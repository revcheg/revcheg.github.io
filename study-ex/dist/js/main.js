(function () {
  document.querySelectorAll('a[href^="form_103850_1"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
})();
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