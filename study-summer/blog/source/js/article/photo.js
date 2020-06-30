// (function () {
//   var items = document.querySelectorAll('.photo__item');
//   var webp = document.querySelectorAll('.photo__webp');
//   var jpg = document.querySelectorAll('.photo__jpg');
//   var popup = document.querySelector('.popup');
//   var popupImage = document.querySelector('.popup__jpg');
//   var prev = document.querySelector('.popup__control--prev');
//   var next = document.querySelector('.popup__control--next');
//   var overlay = document.querySelector('.popup__overlay');  
//   var currentPhoto = 0;
// 
//   var index = [];
//   for (var i = 0; i < items.length; i++){
//     index.push(items[i]);
//     items[i].addEventListener('click', function(evt){
//       currentPhoto = index.indexOf(evt.currentTarget);
//       showPopup(currentPhoto);
//     });
//   }
// 
//   var showPopup = function () {
//     if (currentPhoto < 0) {
//       currentPhoto = 6;
//     } else if (currentPhoto > 6) {
//       currentPhoto = 0;
//     }
// 
//     var webpSource = webp[currentPhoto].srcset;
//     var jpgSource = jpg[currentPhoto].src;
// 
//     if (document.body.clientWidth > 768) {
//       webpSource = webp[currentPhoto].srcset.replace('-mobile', '');
//       jpgSource = jpg[currentPhoto].src.replace('-mobile', '');
//     }
// 
//     popup.querySelector('.popup__webp').srcset = webpSource;
//     popup.querySelector('.popup__jpg').src = jpgSource;
//     popup.classList.remove('popup--hide');
//     overlay.classList.remove('popup__overlay--hide');
//   };
// 
//   prev.addEventListener('click', function () {
//     currentPhoto--;
//     showPopup(currentPhoto);
//   });
// 
//   next.addEventListener('click', function () {
//     currentPhoto++;
//     showPopup(currentPhoto);
//   }); 
// 
//   document.body.addEventListener('keydown', function (evt) {
//     if (evt.keyCode == 27) {
//       popup.classList.add('popup--hide');
//       overlay.classList.add('popup__overlay--hide');
//     }
//   });
// 
//   // Тогглы для тач устройств
//   var clientWidth = document.body.clientWidth;
// 
//   popupImage.addEventListener('touchstart', function (evt) {
//     pozXStart = evt.changedTouches[0].pageX;
//   });
// 
//   popupImage.addEventListener('touchmove', function (evt) {
//     if (pozXStart > clientWidth / 2) {
//       popup.style.left = '40%';
//     } else {
//       popup.style.left = '60%';
//     }
//   });
// 
//   popupImage.addEventListener('touchend', function (evt) {
//     popup.style.left = '50%';
//     pozXEnd = evt.changedTouches[0].pageX;
// 
//     if (pozXStart > clientWidth / 2) {
//       currentPhoto++;
//     } else {
//       currentPhoto--;
//     }
//     showPopup(currentPhoto);
//     currentPosition = currentPhoto;
//   });
// 
//   overlay.addEventListener('click', function () {
//     popup.classList.add('popup--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// })();