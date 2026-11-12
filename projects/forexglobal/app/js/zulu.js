// // Video
// var zulutradeVideo = document.querySelector('.zulu__video');
// var zulutradePlay = document.querySelector('.zulu__play');
// var zulutradePause = document.querySelector('.zulu__pause');
// var zulutradeFull = document.querySelector('.zulu__full');
// var zulutradeMuted = document.querySelector('.zulu__muted');
// 
// //zulutradeVideo.volume = 0.02;
// 
// zulutradePlay.addEventListener('click', function () {
//   zulutradeVideo.play();
//   zulutradePlay.style.opacity = '0';
//   zulutradePause.classList.remove('zulu__pause--active');
//   zulutradePause.classList.add('zulu__pause--inactive');
// });
// 
// zulutradePause.addEventListener('click', function () {
//   if (zulutradePause.classList.contains('zulu__pause--inactive')) {
//     zulutradeVideo.pause();
//     zulutradePlay.style.opacity = '1';
//     zulutradePause.classList.remove('zulu__pause--inactive');
//     zulutradePause.classList.add('zulu__pause--active');
//   } else {
//     zulutradeVideo.play();
//     zulutradePlay.style.opacity = '0';
//     zulutradePause.classList.remove('zulu__pause--active');
//     zulutradePause.classList.add('zulu__pause--inactive');
//   }
// });
// 
// zulutradeFull.addEventListener('click', function () {
//   zulutradePlay.style.opacity = '0';
// 
//   if (zulutradeVideo.requestFullscreen) {
//     zulutradeVideo.requestFullscreen();
//     zulutradeVideo.play();
//   } else if (zulutradeVideo.mozRequestFullScreen) {
//     zulutradeVideo.mozRequestFullScreen();
//     zulutradeVideo.play();
//   } else if (zulutradeVideo.webkitRequestFullscreen) {
//     zulutradeVideo.webkitRequestFullscreen();
//     zulutradeVideo.play();
//   };
// });
// 
// zulutradeMuted.addEventListener('click', function () {
// 
//   if (zulutradeMuted.classList.contains('zulu__muted--inactive')) {
//     zulutradeVideo.muted = true;
//     zulutradeMuted.classList.remove('zulu__muted--inactive');
//     zulutradeMuted.classList.add('zulu__muted--active');
//   } else {
//     zulutradeVideo.muted = false;
//     zulutradeMuted.classList.remove('zulu__muted--active');
//     zulutradeMuted.classList.add('zulu__muted--inactive');
//   }
// });