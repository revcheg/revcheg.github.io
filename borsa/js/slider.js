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
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 5,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }]
});