(function () {
  var openButton = document.querySelector('.nav__open');
  var nav = document.querySelector('.nav__list--mobile');
  
  openButton.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--inactive')) {
      nav.classList.remove('nav__list--inactive');
      nav.classList.add('nav__list--show');
      openButton.classList.add('nav__open--close');
    } else {
      openButton.classList.remove('nav__open--close');
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--inactive');
    }
  });
})();
$(document).ready(function(){
  $('.specialty__list').slick({
    // autoplay: true,
    autoplaySpeed: 1500,
    arrow: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
       }
     }
   ]
  });
  
  $('.advantages__list').slick({
    prevArrow: $('.advantages__controll--prev'),
    nextArrow: $('.advantages__controll--next'),
    // autoplay: true,
    autoplaySpeed: 1500,
    arrow: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        arrow: false,
        dots: true
       }
     }
   ]
  });
  
  $('.reviews__list').slick({
    prevArrow: $('.reviews__controll--prev'),
    nextArrow: $('.reviews__controll--next'),
    // autoplay: true,
    autoplaySpeed: 1500,
    arrow: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1000,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        dots: true
       }
     }
   ]
  });
});
		