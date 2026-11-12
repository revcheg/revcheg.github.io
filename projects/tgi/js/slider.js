$('.slider__content').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  vertical: true,
  arrows: false,
  dots: true,
  customPaging: function (slider, i) {
    return i + 1;
  },
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});