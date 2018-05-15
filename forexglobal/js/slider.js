// Slick
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  // nextArrow: '<button class="slider__button  slider__button--right"></button>',
  // prevArrow: '<button class="slider__button  slider__button--left"></button>',
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