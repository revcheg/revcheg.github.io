// (function () {
//   var photos = document.querySelectorAll('.gallery__img');
//   var item = document.querySelectorAll('.gallery__item');
//   var popup = document.querySelector('.popup');
//   var prev = document.querySelector('.popup__control--prev');
//   var next = document.querySelector('.popup__control--next');
//   var overlay = document.querySelector('.popup__overlay');
// 
//   var currentPhoto = 0;
// 
//   var clearArrayPhotos = [];
//   for (var i = 0; i < item.length; i++){
//     clearArrayPhotos.push(item[i]);
//     item[i].addEventListener('click', function(evt){
//       currentPhoto = clearArrayPhotos.indexOf(evt.target);
//       showPopup(currentPhoto);
//     });
// 
//     item[i].addEventListener('keydown', function(evt){
//       if (evt.keyCode == 13) {
//         currentPhoto = clearArrayPhotos.indexOf(evt.target);
//         showPopup(currentPhoto);
//       } else if (evt.keyCode == 27) {
//         popup.classList.add('popup--hide');
//         overlay.classList.add('popup__overlay--hide');
//       }
//     });
//   }
// 
//   var showPopup = function () {
//     popup.classList.remove('popup--hide');
//     popup.querySelector('.popup__webp').srcset = photos[currentPhoto].srcset;
//     popup.querySelector('.popup__jpg').src = photos[currentPhoto].src;
//     overlay.classList.remove('popup__overlay--hide');
//   };
// 
//   prev.addEventListener('click', function () {
//     currentPhoto--;
//     if (currentPhoto < 0) {
//       currentPhoto = 5;
//     }
//     showPopup(currentPhoto);
//   });
// 
//   next.addEventListener('click', function () {
//     currentPhoto++;
//     if (currentPhoto > 5) {
//       currentPhoto = 0;
//     }
//     showPopup(currentPhoto);
//   });
// 
//   overlay.addEventListener('click', function () {
//     popup.classList.add('popup--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// })();