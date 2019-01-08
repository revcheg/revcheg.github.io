// (function () {
//   var openPopup = document.querySelector('.button--programs');
//   var popup = document.querySelector('.popup');
//   var overlay = document.querySelector('.popup__overlay');
//   var closePopup = document.querySelector('.popup__close');
// 
//   openPopup.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     popup.classList.remove('popup--hide');
//     overlay.classList.remove('popup__overlay--hide');
//   });
// 
//   closePopup.addEventListener('click', function () {
//     popup.classList.add('popup--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// 
//   overlay.addEventListener('click', function () {
//     popup.classList.add('popup--hide');
//     overlay.classList.add('popup__overlay--hide');
//   });
// })();

(function () {
  var openButtons = document.querySelectorAll('.button--programs');
  var popups = document.querySelectorAll('.popup');
  
  for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', function () {
      var buttonId = openButtons[i].getAttribute('id');
      console.log(buttonId);
    });
  };
})();