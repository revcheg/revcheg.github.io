// Slick
$('.slider').slick({
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      // slidesToShow: 3,
    }
  }, {
    breakpoint: 600,
    settings: {
      // slidesToShow: 2,
    }
  }, {
    breakpoint: 300,
    settings: 'uncslick'
  }]
});