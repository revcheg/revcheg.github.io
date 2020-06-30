// (function () {
//   var phone = document.querySelector('.request__input[type=tel]');
// 
//   phone.addEventListener('focus', function() {
//     if (phone.value == '') {
//       phone.value = '+380';
//     } 
//     var label = this.nextElementSibling;
//     label.classList.add('request__label--active');
//   });
// 
//   phone.addEventListener('input', function() {
//     var currentValue = phone.value;
//     var regExp = /[^\d+]/;
//     if (regExp.test(currentValue)) {
//       currentValue = currentValue.replace(regExp, '');
//       phone.value = currentValue;
//     }
//   });
// 
//   phone.addEventListener('blur', function () {
//     if (phone.value == '+380') {
//       phone.value = '';
//       var label = this.nextElementSibling;
//       label.classList.remove('request__label--active');
//     }
//   });
// 
//   var inputs = document.querySelectorAll('.request__input');
// 
//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('input', function() {
//       if (this.checkValidity()) {
//         this.classList.remove('request__input--invalid');
//         this.classList.add('request__input--valid');
//       } else {
//         this.classList.add('request__input--invalid');
//         this.classList.remove('request__input--valid');
//       }
// 
//       var label = this.nextElementSibling;
//       var inputValue = this.value;
//       if (inputValue == '') {
//         label.classList.remove('request__label--active');
//         this.classList.remove('request__input--invalid');
//       } else {
//         label.classList.add('request__label--active');
//       }
//     });
//   }
// 
//   var form = document.querySelector('.request__form');
//   var sorry = document.querySelector('.sorry');
//   var close = document.querySelector('.sorry__close');
//   var overlay = document.querySelector('.popup__overlay');
// 
//   form.addEventListener('submit', function (evt) {    
//     var email = form.querySelector('#email').value;
// 
//     if (email == localStorage.getItem('email')) {
//       evt.preventDefault();
//       sorry.classList.remove('sorry--hide');
//       overlay.classList.remove('popup__overlay--hide');
//     }
// 
//     localStorage.setItem('email', email);
//   });
// 
//   overlay.addEventListener('click', function () {
//     sorry.classList.add('sorry--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// 
//   close.addEventListener('click', function () {
//     sorry.classList.add('sorry--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// 
//   document.body.addEventListener('keydown', function (evt) {
//     if (evt.keyCode == 27) {
//       sorry.classList.add('sorry--hide');
//       overlay.classList.add('popup__overlay--hide');
//     }
//   });
// })();