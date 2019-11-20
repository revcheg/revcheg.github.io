(function () {
  let iframe = document.querySelector('.info__iframe');
  let playButton = document.querySelector('.info__play');
  
  playButton.addEventListener('click', function () {
    // frame.src = '';
    this.classList.add('info__play--hide');
  });
})();
(function () {
  let slider = document.querySelector('.leader__list');
  let prev = document.querySelector('.leader__button--prev');
  let next = document.querySelector('.leader__button--next');
  let counter = 0;
  
  prev.addEventListener('click', prevSlide);
  function prevSlide() {
    counter--;
    if (counter < 0) {
      counter = 3;
    }
    moveSlider();
  };
  
  next.addEventListener('click', nextSlide);
  function nextSlide() {
    counter++;
    if (counter > 3) {
      counter = 0;
    }
    moveSlider();
  };
  
  function moveSlider() {
    slider.style.left = '-' + counter + '00%';
  };
})();
(function () {
  var phone = document.querySelector('.request__input[type=tel]');
  
  phone.addEventListener('focus', function() {
    if (phone.value == '') {
      phone.value = '+380';
    } 
    var label = this.nextElementSibling;
    label.classList.add('request__label--active');
  });
  
  phone.addEventListener('input', function() {
    var currentValue = phone.value;
    var regExp = /[^\d+]/;
    if (regExp.test(currentValue)) {
      currentValue = currentValue.replace(regExp, '');
      phone.value = currentValue;
    }
  });
  
  phone.addEventListener('blur', function () {
    if (phone.value == '+380') {
      phone.value = '';
      var label = this.nextElementSibling;
      label.classList.remove('request__label--active');
    }
  });
  
  var inputs = document.querySelectorAll('.request__input');
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('request__input--invalid');
        this.classList.add('request__input--valid');
      } else {
        this.classList.add('request__input--invalid');
        this.classList.remove('request__input--valid');
      }
      
      var label = this.nextElementSibling;
      var inputValue = this.value;
      if (inputValue == '') {
        label.classList.remove('request__label--active');
        this.classList.remove('request__input--invalid');
      } else {
        label.classList.add('request__label--active');
      }
    });
  }
  
  var form = document.querySelector('.request__form');
  var sorry = document.querySelector('.sorry');
  var close = document.querySelector('.sorry__close');
  var overlay = document.querySelector('.overlay');
  
  form.addEventListener('submit', function (evt) {    
    var email = form.querySelector('#email').value;
  
    if (email == localStorage.getItem('email')) {
      evt.preventDefault();
      sorry.classList.remove('sorry--hide');
      overlay.classList.remove('overlay--hide');
    }
  
    localStorage.setItem('email', email);
  });
  
  overlay.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('overlay--hide');
  });
  
  close.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('overlay--hide');
  });
  
  document.body.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
      sorry.classList.add('sorry--hide');
      overlay.classList.add('overlay--hide');
    }
  });
})();
(function () {
  let openButtons = document.querySelectorAll('.review__play');
  let popup = document.querySelector('.review__column');
  let iframe = document.querySelector('.review__iframe');
  let overlay = document.querySelector('.overlay');
  let close = document.querySelector('.overlay__close');
  
  var openButtonsArray = [];

  for (let i = 0; i < openButtons.length; i++){
    openButtonsArray.push(openButtons[i]);
    openButtons[i].addEventListener('click', setupPopup);
  }
  
  function setupPopup(evt) {
    let indexButton = openButtonsArray.indexOf(evt.target);
    
    switch (indexButton) {
      case 0:
        iframe.src = 'https://www.youtube.com/embed/AsEZlS0epI4?&autoplay=1'
        break;
      case 1:
        iframe.src = 'https://www.youtube.com/embed/snx6LOb2bno?&autoplay=1'
        break;
      case 2:
        iframe.src = 'https://www.youtube.com/embed/dVKHwTR9Tws?&autoplay=1'
        break;
    }

    popup.classList.remove('review__column--hide');
    overlay.classList.remove('overlay--hide');
  };
  
  close.addEventListener('click', closePopup);
  
  function closePopup() {
    popup.classList.add('review__column--hide');
    overlay.classList.add('overlay--hide');
    iframe.src = '';
  };
})();