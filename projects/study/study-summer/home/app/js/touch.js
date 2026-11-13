// (function () {
//   var pozYStart;
//   var pozYEnd;
// 
//   document.addEventListener('touchstart', function (evt) {
//     pozYStart = evt.changedTouches[0].pageY;
//   });
// 
//   document.addEventListener('touchend', function (evt) {    
//     var aside = document.querySelector('.aside');
// 
//     pozYEnd = evt.changedTouches[0].pageY;
//     if (pozYStart > pozYEnd + 70) {
//       scrollCounter++;
//       scrolling();
// 
//       aside.classList.remove('aside--hide');
// 
//     } else if (pozYStart < pozYEnd - 70) {
//       scrollCounter--;
//       scrolling();
// 
//       aside.classList.add('aside--hide');
//     }
//   });
// })();