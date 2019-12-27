// (function () {
//   var items = document.querySelectorAll('.leader__item');
//   var prev = document.querySelector('.leader__button--prev');
//   var next = document.querySelector('.leader__button--next');
//   var counter = 0;
// 
//   next.addEventListener('click', function () {
//     items[counter].classList.remove('leader__item--active');
//     counter++;
//     if (counter > 1) {
//       counter = 0;
//     }
//     items[counter].classList.add('leader__item--active');
//   });
// 
//   prev.addEventListener('click', function () {
//     items[counter].classList.remove('leader__item--active');
//     counter--;
//     if (counter < 0) {
//       counter = 1;
//     }
//     items[counter].classList.add('leader__item--active');
//   });
// 
//   var video = document.querySelector('.leader__video');
//   var play = document.querySelector('.leader__play');
// 
//   play.addEventListener('click', function () {
//     this.classList.add('leader__play--hide');
//     video.src = 'https://www.youtube.com/embed/Npl8YrYihXw?&autoplay=1'
//   });
// 
//   var videoSource;
//   var videoName = video.className.replace('leader__video  leader__video--', '');
// 
//   switch (videoName) {
//     case 'canadian-high-school':
//       videoSource = 'https://www.youtube.com/embed/tcumUKuXnRk';
//       break;
//     case 'explore-toronto':
//       videoSource = 'https://www.youtube.com/embed/tb8t1yVA96k';
//       break;
//     case 'toronto-winter-holidays':
//       videoSource = 'https://www.youtube.com/embed/lChKRs1wzps';
//       break;
//     case 'default':
//       videoSource = 'https://www.youtube.com/embed/Npl8YrYihXw';
//       break;
//   }
// 
//   play.addEventListener('click', function () {
//     this.classList.add('leader__play--hide');
//     video.src = videoSource + '?&autoplay=1';
//   });
// })();