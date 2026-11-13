(function () {
  var phone1 = document.querySelector('.phone1');
  var phone2 = document.querySelector('.phone2');
  
  phone1.addEventListener('focus', function() {
    if (phone1.value == '') {
      phone1.value = '+380';
    } 
    var label = this.nextElementSibling;
    label.classList.add('request__label--active');
  });
  
  phone1.addEventListener('input', function() {
    var currentValue = phone1.value;
    var regExp = /[^\d+]/;
    if (regExp.test(currentValue)) {
      currentValue = currentValue.replace(regExp, '');
      phone1.value = currentValue;
    }
  });
  
  phone1.addEventListener('blur', function () {
    if (phone1.value == '+380') {
      phone1.value = '';
      var label = this.nextElementSibling;
      label.classList.remove('request__label--active');
    }
  });
  
  phone2.addEventListener('focus', function() {
    if (phone2.value == '') {
      phone2.value = '+380';
    } 
    var label = this.nextElementSibling;
    label.classList.add('request__label--active');
  });
  
  phone2.addEventListener('input', function() {
    var currentValue = phone2.value;
    var regExp = /[^\d+]/;
    if (regExp.test(currentValue)) {
      currentValue = currentValue.replace(regExp, '');
      phone2.value = currentValue;
    }
  });
  
  phone2.addEventListener('blur', function () {
    if (phone.value == '+380') {
      phone2.value = '';
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
  var overlay = document.querySelector('.overlay');
  var close = document.querySelector('.overlay__close');
  
  form.addEventListener('submit', function (evt) {    
    var email = form.querySelector('#email').value;
  
    if (email == localStorage.getItem('event')) {
      evt.preventDefault();
      sorry.classList.remove('sorry--hide');
      overlay.classList.remove('overlay--hide');
    }
  
    localStorage.setItem('event', email);
  });
  
  close.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
  });
})();