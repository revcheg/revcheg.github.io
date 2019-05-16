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