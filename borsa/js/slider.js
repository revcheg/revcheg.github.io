$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});

$('.comment__slider').slick({
  // autoplay: false,
  // autoplaySpeed: 2000,
  // arrows: true,
  // dots: false,
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 2,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});