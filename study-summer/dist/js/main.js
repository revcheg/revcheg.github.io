// (function () {
//   var openButton = document.querySelector('.nav__open');
//   var nav = document.querySelector('.nav__list--mobile');
//   var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
// 
//   openButton.addEventListener('click', function () {
//     if (nav.classList.contains('nav__list--inactive')) {
//       nav.classList.remove('nav__list--inactive');
//       nav.classList.add('nav__list--show');
//       openButton.classList.add('nav__open--close');
//     } else {
//       openButton.classList.remove('nav__open--close');
//       nav.classList.remove('nav__list--show');
//       nav.classList.add('nav__list--inactive');
//     }
//   });
// 
//   for (var i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click', function () {
//       openButton.classList.remove('nav__open--close');
//       nav.classList.remove('nav__list--show');
//       nav.classList.add('nav__list--inactive');
//     });
//   };
// })();
// (function () {
//   var openButtons = document.querySelectorAll('.button--programs');
//   var overlay = document.querySelector('.popup__overlay');
//   var popupTemplate = document.querySelector('.popup__template').content.querySelector('.popup');
// 
//   for (var g = 0; g < 9; g++) {
//     var popup = popupTemplate.cloneNode(true);
//     popup.querySelector('.heading--popup').innerHTML = popupData[g].title;
//     popup.querySelector('.popup__webp').srcset = popupData[g].imgWebp;
//     popup.querySelector('.popup__img').src = popupData[g].img;
//     popup.querySelector('.popup__counter').innerHTML = popupData[g].counter;
//     popup.querySelector('.popup__text').innerHTML = popupData[g].text;
//     popup.querySelector('.popup__list').innerHTML = popupData[g].list;
//     popup.querySelector('.popup__attention').innerHTML = popupData[g].attention;
//     document.body.appendChild(popup);
//   };
// 
//   var popups = document.querySelectorAll('.popup');
//   var closeButtons = document.querySelectorAll('.popup__close');
//   var prevButtons = document.querySelectorAll('.popup__button--prev');
//   var nextButtons = document.querySelectorAll('.popup__button--next');
//   var registerButtons = document.querySelectorAll('.button--register');
// 
//   var currentPopup;
//   var arrayOpenButtons = [];
// 
//   for (var i = 0; i < openButtons.length; i++){
//     arrayOpenButtons.push(openButtons[i]);
//     openButtons[i].addEventListener('click', function(e){
//        currentPopup = arrayOpenButtons.indexOf(e.target);
//        showPopup(currentPopup);
//     });
//   };
// 
//   var showPopup = function (currentPopup) {
//     overlay.classList.remove('popup__overlay--hide');
//     popups[currentPopup].classList.remove('popup--hide');
//   };
// 
//   for (var p = 0; p < prevButtons.length; p++) {
//     prevButtons[p].addEventListener('click', function () {
//       popups[currentPopup].classList.add('popup--hide');
//       currentPopup--;
//       if (currentPopup < 0) {
//         currentPopup = 8;
//       };
//       showPopup(currentPopup);
//     });
//   };
// 
//   for (var k = 0; k < nextButtons.length; k++) {
//     nextButtons[k].addEventListener('click', function () {
//       popups[currentPopup].classList.add('popup--hide');
//       currentPopup++;
//       if (currentPopup === 9) {
//         currentPopup = 0;
//       };
//       showPopup(currentPopup);
//     });
//   };
// 
//   for (var j = 0; j < closeButtons.length; j++) {
//     closeButtons[j].addEventListener('click', function () {
//       for (var n = 0; n < popups.length; n++) {
//         popups[n].classList.add('popup--hide');
//       };
//       overlay.classList.add('popup__overlay--hide');
//     });
//   };
// 
//   overlay.addEventListener('click', function () {
//     for (var m = 0; m < popups.length; m++) {
//       popups[m].classList.add('popup--hide');
//     };
//     overlay.classList.add('popup__overlay--hide');
//   });
// 
//   for (var r = 0; r < registerButtons.length; r++) {
//     registerButtons[r].addEventListener('click', function () {
//       for (var t = 0; t < popups.length; t++) {
//         popups[t].classList.add('popup--hide');
//         overlay.classList.add('popup__overlay--hide');
//       };
//     });
//   };
// })();
(function () {
  var slides = document.querySelectorAll('.slider__item');
  var prev = document.querySelector('.slider__control--prev');
  var next = document.querySelector('.slider__control--next');
  var dots = document.querySelectorAll('.slider__dot');
  
  var currentSlide = 0;

  var showSlide = function () {
    slides[currentSlide].classList.add('slider__item--show');
    dots[currentSlide].classList.add('slider__dot--active');
  };
  
  next.addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--show');
    dots[currentSlide].classList.remove('slider__dot--active');
    currentSlide++;
    if (currentSlide > 1) {
      currentSlide = 0;
    };
    showSlide(currentSlide);
  });
  
  prev.addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--show');
    dots[currentSlide].classList.remove('slider__dot--active');
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = 1;
    };
    showSlide(currentSlide);
  });
  
  var dotsArray = [];
  for (var i = 0; i < dots.length; i++){
    dotsArray.push(dots[i]);
    dots[i].addEventListener('click', function(e){
       slides[currentSlide].classList.remove('slider__item--show');
       dots[currentSlide].classList.remove('slider__dot--active');
       currentSlide = dotsArray.indexOf(e.target);
       showSlide(currentSlide);
    });
  };
})();