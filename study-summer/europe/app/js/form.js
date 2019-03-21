// (function () {
//   var phone = document.querySelector('.request__input--phone');
//   var currentValue = phone.value;
// 
//   phone.addEventListener('focus', function () {
//     phone.value = '+38 (';
//   });
// 
//   phone.addEventListener('input', function () {    
//     var testValue = phone.value; 
//     var regExp = /[a-zA-Zа-яА-Я]/; 
//     if (regExp.test(testValue)) { 
//       testValue = testValue.replace(regExp, ''); 
//       phone.value = testValue; 
//     } 
// 
//     if (phone.value.length >= 8 && phone.value.length < 9) {
//       currentValue = phone.value;
//       phone.value = currentValue + ') ';
//     } else if (phone.value.length >= 13 && phone.value.length < 14) {
//       currentValue = phone.value;
//       phone.value = currentValue + '-';
//     } 
//   });
// 
//   var inputs = document.querySelectorAll('.request__input');
// 
//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('focus', function () {
//       var label = this.nextElementSibling;
//       label.classList.add('request__label--active');
//     });
//   }
// })();    