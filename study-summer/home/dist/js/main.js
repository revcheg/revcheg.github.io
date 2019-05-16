(function() {
  var phone = document.querySelector('.contacts__input[type=tel]');
  
  phone.addEventListener('focus', function() {
    phone.value = '+380';
    var label = this.nextElementSibling;
    label.classList.add('contacts__label--active');
  });
  
  phone.addEventListener('input', function() {
    var currentValue = phone.value;
    var regExp = /[^\d+]/;
    if (regExp.test(currentValue)) {
      currentValue = currentValue.replace(regExp, '');
      phone.value = currentValue;
    }
  });
  
  var inputs = document.querySelectorAll('.contacts__input');
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('contacts__input--invalid');
        this.classList.add('contacts__input--valid');
      } else {
        this.classList.add('contacts__input--invalid');
        this.classList.remove('contacts__input--valid');
      }
      
      var label = this.nextElementSibling;
      var inputValue = this.value;
      if (inputValue == '') {
        label.classList.remove('contacts__label--active');
        this.classList.remove('contacts__input--invalid');
      } else {
        label.classList.add('contacts__label--active');
      }
    });
  }
})();
(function() {
  var sections = document.querySelectorAll('.section');
  var scrollCounter = 0;
  var marker = true;
  var delta;
  var interval = 150;
  var firstCounter = 0;
  var secondCounter;
  
  window.addEventListener('wheel', function(evt) {
    firstCounter += 1;
    delta = evt.deltaY;
    if (marker) wheelStart();
    return false;
  });

  function wheelStart() {
    marker = false;
    wheelAct();
  };

  function wheelAct() {
    secondCounter = firstCounter;
    setTimeout(function() {
      if (secondCounter == firstCounter) {
        wheelEnd();
      } else {
        wheelAct();
      }
    }, interval);
  };

  function wheelEnd() {
    marker = true;
    firstCounter = 0;
    secondCounter = 0;
    
    if (delta > 0) {
      scrollCounter++;
    } else {
      scrollCounter--;
    }
    
    if (scrollCounter > 8) {
      scrollCounter = 8;
    } else if (scrollCounter < 0) {
      scrollCounter = 0;
    }
    
    scrolling();
  };
  
  var offsetTopBlock;
  function scrolling() {
    offsetTopBlock = sections[scrollCounter].offsetTop;
    
    window.scrollTo({
      top: offsetTopBlock,
      behavior: "smooth"
    });
  };
})();
(function() {
  var title = document.querySelector('.title');
  var progress = document.querySelector('.title__progress');
  var current = document.querySelector('.title__counter--current');
  var currentPhoto = 1;
  
  setInterval(function() {
    currentPhoto++;
    
    if (currentPhoto > 2) {
      currentPhoto = 1;
    }
    
    title.style.backgroundImage = 'url(img/title-' + currentPhoto + '-bg.jpg)';
    
    current.innerHTML = '0' + currentPhoto;
  }, 5000);
})();