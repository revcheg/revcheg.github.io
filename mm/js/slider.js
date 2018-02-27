$('.slider__content').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});