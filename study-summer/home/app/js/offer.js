// (function () {
//   var offer = document.querySelector('.offer');
//   var close = document.querySelector('.offer__close');
//   var link = document.querySelector('.offer__button');
// 
//   var flag = localStorage.getItem('close');
//   if (flag == 'true') {
//     offer.classList.add('offer--hide');
//   } else {
//     offer.classList.remove('offer--hide');
//   }
// 
//   close.addEventListener('click', function () {
//     offer.classList.add('offer--hide');
//     localStorage.setItem('close', true);
//   });
// 
//   link.addEventListener('click', function () {
//     offer.classList.add('offer--hide');
//     localStorage.setItem('close', true);
// 
//     scrollCounter = 9;
//     scrolling();
//   });
// })();