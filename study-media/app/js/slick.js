$(document).ready(function(){
  $('.specialty__list').slick({
    // autoplay: true,
    autoplaySpeed: 2000,
    arrow: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // speed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
          dots: true
        }
      },
      
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // arrow: false,
          // dots: true
        }
      }
    ]
  });
  
  $('.advantages__list').slick({
    prevArrow: $('.advantages__controll--prev'),
    nextArrow: $('.advantages__controll--next'),
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // speed: 1000,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        arrow: false,
        dots: true,
        adaptiveHeight: true
       }
     }
   ]
  });
  
  $('.reviews__list').slick({
    prevArrow: $('.reviews__controll--prev'),
    nextArrow: $('.reviews__controll--next'),
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // speed: 100a0,
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
		