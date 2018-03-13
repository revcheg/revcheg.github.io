$('.slider__content').slick({
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});